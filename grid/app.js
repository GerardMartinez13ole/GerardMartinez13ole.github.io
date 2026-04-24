const STORAGE_KEY = "futbol-grid-v3";

const boardEl = document.getElementById("gridBoard");
const guessInputEl = document.getElementById("guessInput");
const autocompleteListEl = document.getElementById("autocompleteList");
const guessBtn = document.getElementById("guessBtn");
const scoreEl = document.getElementById("score");
const statusEl = document.getElementById("status");
const metaEl = document.getElementById("meta");
const surrenderBtn = document.getElementById("surrenderBtn");
const choicePanelEl = document.getElementById("choicePanel");
const choiceTitleEl = document.getElementById("choiceTitle");
const choiceListEl = document.getElementById("choiceList");
const choiceCancelBtn = document.getElementById("choiceCancel");
const customGridModalEl = document.getElementById("customGridModal");
const selTeamsEl = document.getElementById("selTeams");
const selCountriesEl = document.getElementById("selCountries");
const selPositionsEl = document.getElementById("selPositions");
const repeatCustomBtn = document.getElementById("repeatCustomBtn");

const state = {
  attempts: 0,
  rows: [],
  cols: [],
  teamConstraints: [],
  constraints: [],
  boardKey: "",
  boardLabel: "",
  surrendered: false,
  entries: new Array(9).fill(null),
  pending: null,
  byKey: new Map(),
  lookup: new Map(),
  pairMap: new Map(),
  lastCustomConfig: null
};

function normalizeName(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function pairKey(a, b) {
  return [a, b].sort().join("|");
}

function indexToRowCol(index) {
  return { row: Math.floor(index / 3), col: index % 3 };
}

function rowColToIndex(row, col) {
  return row * 3 + col;
}

function teamInitials(team) {
  return team
    .split(" ")
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();
}

function getPlayerProfile(playerKey) {
  return PLAYER_PROFILE[playerKey] || { countryCode: "", position: "N/D" };
}

function getFlagUrl(countryCode, size) {
  if (!countryCode) {
    return "";
  }
  const safeSize = size || "24x18";
  return "https://flagcdn.com/" + safeSize + "/" + countryCode.toLowerCase() + ".png";
}

function getFlagUrls(countryCode) {
  const code = (countryCode || "").toLowerCase();
  if (!code) return [];
  return [
    "../flags/" + code + ".png",                                                                          // 1r: fitxer local
    "https://flagcdn.com/48x36/" + code + ".png",                                                     // 2n: flagcdn CDN
    "https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/flags/4x3/" + code + ".svg",                  // 3r: jsDelivr CDN
    "https://flagpedia.net/data/flags/w80/" + code + ".webp"                                           // 4t: flagpedia CDN
  ];
}

function constraintKey(type, value) {
  return type + ":" + value;
}

function parseConstraint(key) {
  const separator = key.indexOf(":");
  if (separator === -1) {
    return { type: "team", value: key };
  }
  return {
    type: key.slice(0, separator),
    value: key.slice(separator + 1)
  };
}

function isTeamConstraint(key) {
  return parseConstraint(key).type === "team";
}

function getCountryName(countryCode) {
  const code = (countryCode || "").toLowerCase();
  if (!code) {
    return "País";
  }
  return (COUNTRY_META[code] && COUNTRY_META[code].name) || code.toUpperCase();
}

function getConstraintLabel(key) {
  const parsed = parseConstraint(key);
  if (parsed.type === "team") {
    return parsed.value;
  }
  if (parsed.type === "country") {
    return getCountryName(parsed.value);
  }
  if (parsed.type === "position") {
    return parsed.value.toUpperCase();
  }
  return parsed.value;
}

function getCountryConstraints(constraints) {
  if (!Array.isArray(constraints)) {
    return [];
  }
  return constraints.filter((constraint) => parseConstraint(constraint).type === "country");
}

function playerMatchesConstraint(player, constraint) {
  const parsed = parseConstraint(constraint);
  if (parsed.type === "team") {
    return player.teams.includes(parsed.value);
  }
  if (parsed.type === "country") {
    return (player.countryCode || "").toLowerCase() === parsed.value.toLowerCase();
  }
  if (parsed.type === "position") {
    return (player.position || "").toUpperCase() === parsed.value.toUpperCase();
  }
  return false;
}

function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t += 0x6D2B79F5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function addLookupEntry(alias, playerKey) {
  const normalized = normalizeName(alias);
  if (!normalized) {
    return;
  }

  if (!state.lookup.has(normalized)) {
    state.lookup.set(normalized, playerKey);
    return;
  }

  if (state.lookup.get(normalized) !== playerKey) {
    state.lookup.set(normalized, null);
  }
}

function getTeamLogo(team) {
  const logo = (TEAM_META[team] && TEAM_META[team].logo) || "";
  if (logo && logo.startsWith("logos/")) {
    return "../" + logo;
  }
  return logo;
}

function getTeamBackupLogo(team) {
  return TEAM_BACKUP_LOGO[team] || "";
}

function buildIndex() {
  state.byKey.clear();
  state.lookup.clear();
  state.pairMap.clear();
  state.teamConstraints = [];
  state.constraints = [];

  const usageCount = new Map();

  for (const player of PLAYERS) {
    const key = normalizeName(player.name);
    const profile = getPlayerProfile(key);
    const entry = {
      key,
      name: player.name,
      teams: [...player.teams],
      countryCode: (profile.countryCode || "").toLowerCase(),
      position: (profile.position || "N/D").toUpperCase()
    };

    state.byKey.set(key, entry);
    addLookupEntry(player.name, key);

    if (Array.isArray(player.aliases)) {
      for (const alias of player.aliases) {
        addLookupEntry(alias, key);
      }
    }

    const playerConstraints = entry.teams.map((team) => constraintKey("team", team));
    if (entry.countryCode) {
      playerConstraints.push(constraintKey("country", entry.countryCode));
    }
    if (entry.position && entry.position !== "N/D") {
      playerConstraints.push(constraintKey("position", entry.position));
    }

    const uniqueConstraints = [...new Set(playerConstraints)];
    uniqueConstraints.forEach((constraint) => {
      usageCount.set(constraint, (usageCount.get(constraint) || 0) + 1);
    });

    for (let i = 0; i < uniqueConstraints.length; i += 1) {
      for (let j = i + 1; j < uniqueConstraints.length; j += 1) {
        const keyPair = pairKey(uniqueConstraints[i], uniqueConstraints[j]);
        if (!state.pairMap.has(keyPair)) {
          state.pairMap.set(keyPair, []);
        }
        state.pairMap.get(keyPair).push(entry.key);
      }
    }
  }

  const connectivity = new Map();
  for (const [keyPair, players] of state.pairMap.entries()) {
    if (!players.length) {
      continue;
    }
    const constraints = keyPair.split("|");
    if (isTeamConstraint(constraints[0])) {
      connectivity.set(constraints[0], (connectivity.get(constraints[0]) || 0) + 1);
    }
    if (isTeamConstraint(constraints[1])) {
      connectivity.set(constraints[1], (connectivity.get(constraints[1]) || 0) + 1);
    }
  }

  state.teamConstraints = [...connectivity.entries()]
    .filter((entry) => entry[1] >= 4 && (usageCount.get(entry[0]) || 0) >= 2)
    .map((entry) => entry[0])
    .sort((a, b) => getConstraintLabel(a).localeCompare(getConstraintLabel(b)));

  const extraConstraints = [...usageCount.keys()]
    .filter((constraint) => !isTeamConstraint(constraint))
    .filter((constraint) => (usageCount.get(constraint) || 0) >= 2)
    .filter((constraint) => {
      let teamLinks = 0;
      for (const teamConstraint of state.teamConstraints) {
        if (new Set(optionsForPair(teamConstraint, constraint)).size > 0) {
          teamLinks += 1;
        }
      }
      return teamLinks >= 2;
    })
    .sort((a, b) => {
      const first = parseConstraint(a);
      const second = parseConstraint(b);
      if (first.type !== second.type) {
        return first.type.localeCompare(second.type);
      }
      return getConstraintLabel(a).localeCompare(getConstraintLabel(b));
    });

  state.constraints = [...state.teamConstraints, ...extraConstraints];
}

function optionsForPair(a, b) {
  return state.pairMap.get(pairKey(a, b)) || [];
}

function pickUnique(list, amount, random) {
  const pool = [...list];
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, amount);
}

function canSolveWithoutRepeats(rows, cols) {
  const cells = [];

  for (const row of rows) {
    for (const col of cols) {
      const options = [...new Set(optionsForPair(row, col))];
      if (!options.length) {
        return false;
      }
      cells.push(options);
    }
  }

  cells.sort((a, b) => a.length - b.length);
  const used = new Set();

  function backtrack(index) {
    if (index >= cells.length) {
      return true;
    }

    const options = cells[index];
    for (const playerKey of options) {
      if (used.has(playerKey)) {
        continue;
      }

      used.add(playerKey);

      let impossible = false;
      for (let i = index + 1; i < cells.length; i += 1) {
        const hasAvailable = cells[i].some((key) => !used.has(key));
        if (!hasAvailable) {
          impossible = true;
          break;
        }
      }

      if (!impossible && backtrack(index + 1)) {
        return true;
      }

      used.delete(playerKey);
    }

    return false;
  }

  return backtrack(0);
}

function generateBoard(seed, blockedCountryCodes, config) {
  const random = mulberry32(seed);
  const maxTries = 2200;
  let best = null;
  const blockedCountries = new Set(
    (blockedCountryCodes || []).map((code) => String(code).toLowerCase())
  );

  if (state.teamConstraints.length < 3) {
    throw new Error("No hi ha suficients equips per generar el tauler.");
  }

  if (state.constraints.length < 6) {
    throw new Error("No hi ha suficients condicions per generar el tauler.");
  }

  for (let attempt = 0; attempt < maxTries; attempt += 1) {
    const rows = pickUnique(state.teamConstraints, 3, random);
    let colPool = state.constraints.filter((constraint) => !rows.includes(constraint));

    colPool = colPool.filter(col => {
      return optionsForPair(rows[0], col).length > 0 &&
        optionsForPair(rows[1], col).length > 0 &&
        optionsForPair(rows[2], col).length > 0;
    });

    let cols = [];
    if (config) {
      let teamsToPick = config.teams === 'any' ? 0 : config.teams;
      let countriesToPick = config.countries === 'any' ? 0 : config.countries;
      let positionsToPick = config.positions === 'any' ? 0 : config.positions;

      const teamPool = colPool.filter(c => parseConstraint(c).type === "team");
      const countryPool = colPool.filter(c => parseConstraint(c).type === "country");
      const posPool = colPool.filter(c => parseConstraint(c).type === "position");

      if (teamPool.length < teamsToPick || countryPool.length < countriesToPick || posPool.length < positionsToPick) {
        continue;
      }

      let pickedTeams = pickUnique(teamPool, teamsToPick, random);
      let pickedCountries = pickUnique(countryPool, countriesToPick, random);
      let pickedPositions = pickUnique(posPool, positionsToPick, random);

      cols = [...pickedTeams, ...pickedCountries, ...pickedPositions];

      let anySlots = 3 - cols.length;
      if (anySlots > 0) {
        let remainingPool = [];
        if (config.teams === 'any') remainingPool.push(...teamPool.filter(c => !pickedTeams.includes(c)));
        if (config.countries === 'any') remainingPool.push(...countryPool.filter(c => !pickedCountries.includes(c)));
        if (config.positions === 'any') remainingPool.push(...posPool.filter(c => !pickedPositions.includes(c)));

        if (remainingPool.length < anySlots) continue;

        cols.push(...pickUnique(remainingPool, anySlots, random));
      }
    } else {
      const countryPool = colPool.filter(c => parseConstraint(c).type === "country");
      const posPool = colPool.filter(c => parseConstraint(c).type === "position");
      if (countryPool.length < 1 || posPool.length < 1) continue;

      const pickedCountry = pickUnique(countryPool, 1, random);
      const pickedPos = pickUnique(posPool, 1, random);

      const remainingPool = colPool.filter(c => c !== pickedCountry[0] && c !== pickedPos[0]);
      if (remainingPool.length < 1) continue;

      const pickedOther = pickUnique(remainingPool, 1, random);
      cols = [...pickedCountry, ...pickedPos, ...pickedOther];
    }

    const hasCountry = cols.some((constraint) => parseConstraint(constraint).type === "country");
    const hasPosition = cols.some((constraint) => parseConstraint(constraint).type === "position");

    const countryCodesInCols = getCountryConstraints(cols)
      .map((constraint) => parseConstraint(constraint).value.toLowerCase());
    if (countryCodesInCols.some((code) => blockedCountries.has(code))) {
      continue;
    }

    let valid = true;
    let richness = 0;
    let minOptions = Infinity;

    for (const row of rows) {
      for (const col of cols) {
        const count = new Set(optionsForPair(row, col)).size;
        if (!count) {
          valid = false;
          break;
        }
        minOptions = Math.min(minOptions, count);
        richness += Math.min(count, 8);
      }
      if (!valid) {
        break;
      }
    }

    if (!valid || minOptions < 1) {
      continue;
    }

    if (!canSolveWithoutRepeats(rows, cols)) {
      continue;
    }

    const nonTeamCols = cols.filter((constraint) => !isTeamConstraint(constraint)).length;
    const diversityScore = (hasCountry ? 4 : 0) + (hasPosition ? 4 : 0);
    const score = richness * 0.45 + minOptions * 2.5 + nonTeamCols * 2 + diversityScore + random() * 8;
    if (!best || score > best.score) {
      best = { rows, cols, score };
    }
  }

  if (!best) {
    throw new Error("No s\'ha pogut generar un tauler vàlid.");
  }

  return best;
}

function writeStatus(message, kind) {
  statusEl.textContent = message;
  statusEl.classList.remove("ok", "bad");
  if (kind) {
    statusEl.classList.add(kind);
  }
}

function updateMeta() {
  const label = state.boardLabel ? " | " + state.boardLabel : "";
  metaEl.textContent = "Jugades: " + state.attempts + label;
}

function refreshScore() {
  const solved = state.entries.filter(Boolean).length;
  scoreEl.textContent = solved === 9 ? "Completadas: 9/9. Grid completado." : "Completades: " + solved + "/9";
}

function saveProgress() {
  if (!state.boardKey) {
    return;
  }

  const payload = {
    boardKey: state.boardKey,
    rows: [...state.rows],
    cols: [...state.cols],
    attempts: state.attempts,
    surrendered: state.surrendered,
    entries: [...state.entries]
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (_) {
    // Si localStorage falla, el juego sigue siendo funcional.
  }
}

function loadProgress(boardKey) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }

    const data = JSON.parse(raw);
    if (!data || data.boardKey !== boardKey) {
      return null;
    }

    const sameRows = Array.isArray(data.rows) && data.rows.join("|") === state.rows.join("|");
    const sameCols = Array.isArray(data.cols) && data.cols.join("|") === state.cols.join("|");
    if (!sameRows || !sameCols) {
      return null;
    }

    return data;
  } catch (_) {
    return null;
  }
}

function resolvePlayer(inputValue) {
  const key = normalizeName(inputValue || "");
  if (!key) {
    return { type: "empty" };
  }

  if (!state.lookup.has(key)) {
    return { type: "unknown" };
  }

  const playerKey = state.lookup.get(key);
  if (playerKey === null) {
    return { type: "ambiguous" };
  }

  return { type: "ok", player: state.byKey.get(playerKey) };
}

function findCandidateCells(playerKey) {
  const player = state.byKey.get(playerKey);
  const candidates = [];

  for (let row = 0; row < 3; row += 1) {
    for (let col = 0; col < 3; col += 1) {
      const index = rowColToIndex(row, col);
      if (state.entries[index]) {
        continue;
      }

      const rowConstraint = state.rows[row];
      const colConstraint = state.cols[col];
      if (playerMatchesConstraint(player, rowConstraint) && playerMatchesConstraint(player, colConstraint)) {
        candidates.push(index);
      }
    }
  }

  return candidates;
}

function hideChoicePanel() {
  state.pending = null;
  choicePanelEl.classList.add("hidden");
  choiceTitleEl.textContent = "Tria una casella:";
  choiceListEl.innerHTML = "";
}

function showChoicePanel(playerKey, candidates) {
  state.pending = { playerKey, candidates: [...candidates] };
  const player = state.byKey.get(playerKey);
  choiceTitleEl.textContent = player.name + " encaixa en diverses caselles\. Tria una:";
  choiceListEl.innerHTML = "";

  candidates.forEach((index) => {
    const pos = indexToRowCol(index);
    const rowLabel = getConstraintLabel(state.rows[pos.row]);
    const colLabel = getConstraintLabel(state.cols[pos.col]);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-btn";
    button.textContent = rowLabel + " x " + colLabel;
    button.addEventListener("click", () => {
      placePlayer(index, playerKey, true);
    });
    choiceListEl.appendChild(button);
  });

  choicePanelEl.classList.remove("hidden");
  renderBoard();
}

function placePlayer(index, playerKey, fromChoice) {
  if (state.entries[index]) {
    writeStatus("Aquesta casella ja està ocupada.", "bad");
    return;
  }

  state.entries[index] = playerKey;
  state.surrendered = false;
  hideChoicePanel();
  renderBoard();
  refreshScore();

  const pos = indexToRowCol(index);
  writeStatus(
    state.byKey.get(playerKey).name
    + " col·locat a "
    + getConstraintLabel(state.rows[pos.row])
    + " x "
    + getConstraintLabel(state.cols[pos.col])
    + ".",
    "ok"
  );

  guessInputEl.value = "";
  if (!fromChoice) {
    guessInputEl.focus();
  }
  saveProgress();
}

function submitGuess() {
  autocompleteListEl.classList.add("hidden");
  state.attempts += 1;
  updateMeta();

  const resolved = resolvePlayer(guessInputEl.value);
  if (resolved.type === "empty") {
    writeStatus("Escriu un jugador.", "bad");
    return;
  }

  if (resolved.type === "unknown") {
    writeStatus("Jugador no reconegut a la base actual.", "bad");
    return;
  }

  if (resolved.type === "ambiguous") {
    writeStatus("Nom ambigu\. Escriu nom i cognom.", "bad");
    return;
  }

  const used = new Set(state.entries.filter(Boolean));
  if (used.has(resolved.player.key)) {
    writeStatus("Aquest jugador ja està col·locat.", "bad");
    return;
  }

  const candidates = findCandidateCells(resolved.player.key);
  if (!candidates.length) {
    writeStatus("No hi ha cap casella lliure on encaixi aquest jugador.", "bad");
    return;
  }

  if (candidates.length === 1) {
    placePlayer(candidates[0], resolved.player.key, false);
    return;
  }

  writeStatus("El jugador encaixa en diverses caselles\. Tria una.", "ok");
  showChoicePanel(resolved.player.key, candidates);
  saveProgress();
}

function solveBoardAssignment(fixedEntries) {
  const normalized = Array.isArray(fixedEntries) ? [...fixedEntries] : new Array(9).fill(null);
  const assignment = new Array(9).fill(null);
  const used = new Set();
  const slots = [];

  for (let row = 0; row < 3; row += 1) {
    for (let col = 0; col < 3; col += 1) {
      const index = rowColToIndex(row, col);
      const options = [...new Set(optionsForPair(state.rows[row], state.cols[col]))];
      if (!options.length) {
        return null;
      }

      const fixed = normalized[index];
      if (fixed) {
        if (!options.includes(fixed) || used.has(fixed)) {
          return null;
        }
        assignment[index] = fixed;
        used.add(fixed);
      } else {
        slots.push({ index, options });
      }
    }
  }

  slots.sort((a, b) => a.options.length - b.options.length);

  function backtrack(pointer) {
    if (pointer >= slots.length) {
      return true;
    }

    const slot = slots[pointer];
    for (const playerKey of slot.options) {
      if (used.has(playerKey)) {
        continue;
      }

      assignment[slot.index] = playerKey;
      used.add(playerKey);

      if (backtrack(pointer + 1)) {
        return true;
      }

      assignment[slot.index] = null;
      used.delete(playerKey);
    }

    return false;
  }

  return backtrack(0) ? assignment : null;
}

function revealSolution(fromRestore) {
  let solution = solveBoardAssignment(state.entries);
  if (!solution) {
    solution = solveBoardAssignment(new Array(9).fill(null));
  }

  if (!solution) {
    writeStatus("No s\'ha pogut calcular una solució vàlida.", "bad");
    return;
  }

  state.entries = [...solution];
  state.surrendered = true;
  hideChoicePanel();
  renderBoard();
  refreshScore();
  writeStatus(fromRestore ? "Solució recuperada." : "T\'has rendit\. Solució mostrada.", "ok");
  saveProgress();
}

function requestSurrender() {
  console.log("requestSurrender triggered");
  if (state.surrendered) {
    writeStatus("La solució ja està mostrada.", "ok");
    return;
  }

  const hasProgress = state.entries.some(Boolean);
  const message = hasProgress
    ? "Si et rendeixes, es mostrarà la solució completa\. Vols continuar?"
    : "Vols rendir-te i mostrar la solució?";

  if (!window.confirm(message)) {
    return;
  }

  revealSolution(false);
}

function clearBoard() {
  state.entries = new Array(9).fill(null);
  state.pending = null;
  state.surrendered = false;
  state.attempts = 0;
  hideChoicePanel();
  renderBoard();
  refreshScore();
  updateMeta();
  guessInputEl.value = "";
  writeStatus("Tauler netejat.", "ok");
  saveProgress();
}

function createConstraintTile(constraintKeyValue) {
  const parsed = parseConstraint(constraintKeyValue);
  const tile = document.createElement("div");
  tile.className = "tile team";

  const crestWrap = document.createElement("div");
  crestWrap.className = "crest-wrap";

  if (parsed.type === "country") {
    const countryCode = parsed.value.toLowerCase();
    const flagUrls = getFlagUrls(countryCode);
    let urlIndex = 0;

    const flag = document.createElement("img");
    flag.src = flagUrls[urlIndex];
    flag.alt = getCountryName(countryCode);
    flag.loading = "lazy";
    flag.style.maxWidth = "72%";
    flag.style.maxHeight = "56%";
    flag.style.border = "1px solid rgba(255, 255, 255, 0.35)";
    flag.style.borderRadius = "3px";
    flag.addEventListener("error", () => {
      urlIndex += 1;
      if (urlIndex < flagUrls.length) {
        flag.src = flagUrls[urlIndex];
      }
      // Si tots els CDNs fallen, no es mostra res (casella buida, sense text)
    });
    crestWrap.appendChild(flag);

    tile.appendChild(crestWrap);
    return tile;
  }

  if (parsed.type === "position") {
    const positionBadge = document.createElement("div");
    positionBadge.className = "pos-badge";
    positionBadge.style.fontSize = "clamp(18px, 2.3vw, 28px)";
    positionBadge.style.padding = "8px 14px";
    positionBadge.style.borderRadius = "10px";
    positionBadge.style.background = "rgba(2, 41, 62, 0.75)";
    positionBadge.style.border = "1px solid rgba(110, 165, 205, 0.45)";
    positionBadge.textContent = parsed.value.toUpperCase();
    tile.appendChild(positionBadge);
    return tile;
  }

  const logo = getTeamLogo(parsed.value);
  const backupLogo = getTeamBackupLogo(parsed.value);

  function renderTeamFallback() {
    crestWrap.innerHTML = "";
    const fallback = document.createElement("div");
    fallback.className = "crest-fallback";
    fallback.textContent = teamInitials(parsed.value);
    crestWrap.appendChild(fallback);
  }

  if (logo || backupLogo) {
    const img = document.createElement("img");
    img.src = logo || backupLogo;
    img.alt = parsed.value;
    img.loading = "lazy";
    img.addEventListener("error", () => {
      if (backupLogo && img.dataset.backupTried !== "1" && img.src !== backupLogo) {
        img.dataset.backupTried = "1";
        img.src = backupLogo;
        return;
      }
      renderTeamFallback();
    });
    crestWrap.appendChild(img);
  } else {
    renderTeamFallback();
  }

  tile.appendChild(crestWrap);
  return tile;
}

function createCornerTile() {
  const tile = document.createElement("div");
  tile.className = "tile corner";
  const brand = document.createElement("div");
  brand.className = "brand";
  brand.innerHTML = "<span class=\"a\">FUTBOL</span><span class=\"b\">11</span><br><span class=\"b\">GRID</span>";
  tile.appendChild(brand);
  return tile;
}

function createPlayTile(row, col) {
  const index = rowColToIndex(row, col);
  const key = state.entries[index];
  const tile = document.createElement("div");
  tile.className = "tile play " + (key ? "filled" : "empty");

  if (state.pending && state.pending.candidates.includes(index)) {
    tile.classList.add("candidate");
    tile.addEventListener("click", () => {
      placePlayer(index, state.pending.playerKey, true);
    });
  }

  if (key) {
    const player = state.byKey.get(key);
    const profile = getPlayerProfile(key);
    const cardEl = document.createElement("div");
    cardEl.className = "player-card";

    const nameEl = document.createElement("div");
    nameEl.className = "player-name";
    nameEl.textContent = player.name;

    cardEl.appendChild(nameEl);
    tile.appendChild(cardEl);
  } else {
    const emptyMark = document.createElement("div");
    emptyMark.className = "empty-mark";
    emptyMark.textContent = "-";
    tile.appendChild(emptyMark);
  }

  return tile;
}

function renderBoard() {
  boardEl.innerHTML = "";

  for (let row = -1; row < 3; row += 1) {
    for (let col = -1; col < 3; col += 1) {
      if (row === -1 && col === -1) {
        boardEl.appendChild(createCornerTile());
        continue;
      }

      if (row === -1) {
        boardEl.appendChild(createConstraintTile(state.cols[col]));
        continue;
      }

      if (col === -1) {
        boardEl.appendChild(createConstraintTile(state.rows[row]));
        continue;
      }

      boardEl.appendChild(createPlayTile(row, col));
    }
  }

  refreshScore();
  updateMeta();
}

function openBoard(boardData, boardKey, boardLabel, restoreProgress) {
  state.rows = [...boardData.rows];
  state.cols = [...boardData.cols];
  state.boardKey = boardKey;
  state.boardLabel = boardLabel;
  state.attempts = 0;
  state.surrendered = false;
  state.pending = null;
  state.entries = new Array(9).fill(null);

  const progress = restoreProgress ? loadProgress(boardKey) : null;
  if (progress) {
    state.attempts = Number(progress.attempts) || 0;
    state.surrendered = Boolean(progress.surrendered);
    if (Array.isArray(progress.entries) && progress.entries.length === 9) {
      state.entries = progress.entries.map((key) => (state.byKey.has(key) ? key : null));
    }
  }

  hideChoicePanel();
  renderBoard();
  guessInputEl.value = "";

  if (progress) {
    if (state.surrendered) {
      revealSolution(true);
    } else {
      writeStatus("Progrés recuperat.", "ok");
    }
  } else {
    writeStatus("", "");
  }

  saveProgress();
}

function loadRandom(config) {
  const blockedCountries = getCountryConstraints(state.cols)
    .map((constraint) => parseConstraint(constraint).value.toLowerCase());

  let board = null;
  let chosenSeed = 0;
  const maxAttempts = 30;

  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    const seed = (Date.now() + attempt * 2654435761) >>> 0;
    try {
      board = generateBoard(seed, blockedCountries, config);
      chosenSeed = seed;
      break;
    } catch (_) {
      // Reintentamos con otra semilla.
    }
  }

  if (!board) {
    writeStatus("No s'ha pogut generar un grid amb les condicions triades.", "bad");
    return;
  }

  const label = config ? "Grid a mida" : "Grid aleatori";
  openBoard(board, "random-" + chosenSeed, label, false);
  writeStatus("Nou grid llest.", "ok");
}

let autocompleteFocusIndex = -1;

function getAutocompleteOptions(inputValue) {
  if (inputValue.length < 3) return [];
  const normalizedInput = normalizeName(inputValue);
  if (!normalizedInput) return [];

  const matches = [];
  const MAX_RESULTS = 10;
  const seenNames = new Set();

  for (const player of PLAYERS) {
    if (matches.length >= MAX_RESULTS) break;
    if (seenNames.has(player.name)) continue;

    // Check name
    if (normalizeName(player.name).includes(normalizedInput)) {
      matches.push(player);
      seenNames.add(player.name);
      continue;
    }
    // Check aliases
    if (player.aliases) {
      for (const alias of player.aliases) {
        if (normalizeName(alias).includes(normalizedInput)) {
          matches.push(player);
          seenNames.add(player.name);
          break;
        }
      }
    }
  }
  return matches;
}

function renderAutocomplete(options, inputValue) {
  autocompleteListEl.innerHTML = "";
  autocompleteFocusIndex = -1;

  if (!options || options.length === 0) {
    autocompleteListEl.classList.add("hidden");
    return;
  }

  autocompleteListEl.classList.remove("hidden");
  const normalizedInput = normalizeName(inputValue);

  options.forEach((player) => {
    const item = document.createElement("li");
    item.className = "autocomplete-item";

    // Find matching part in normalized name to highlight
    const normName = normalizeName(player.name);
    const matchIndex = normName.indexOf(normalizedInput);

    if (matchIndex !== -1) {
      // Reconstruct original string with highlight based on char indices
      const plainLower = player.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const exactMatchIndex = plainLower.indexOf(normalizedInput);
      if (exactMatchIndex !== -1) {
        const before = player.name.substring(0, exactMatchIndex);
        const matchText = player.name.substring(exactMatchIndex, exactMatchIndex + normalizedInput.length);
        const after = player.name.substring(exactMatchIndex + normalizedInput.length);
        item.innerHTML = `${before}<span class="autocomplete-match">${matchText}</span>${after}`;
      } else {
        item.textContent = player.name;
      }
    } else {
      item.textContent = player.name;
    }

    item.addEventListener("click", () => {
      guessInputEl.value = player.name;
      autocompleteListEl.classList.add("hidden");
      submitGuess();
    });

    autocompleteListEl.appendChild(item);
  });
}

function updateAutocompleteFocus(items) {
  items.forEach((item, index) => {
    if (index === autocompleteFocusIndex) {
      item.classList.add("active");
      item.scrollIntoView({ block: "nearest" });
    } else {
      item.classList.remove("active");
    }
  });
}

function boot() {
  console.log("Iniciant boot...");
  try {
    buildIndex();
    console.log("Index construit.");
  } catch (e) {
    console.error("Error en buildIndex:", e);
  }

  const buttonListeners = [
    { id: "randomBtn", fn: () => loadRandom() },
    { id: "clearBtn", fn: clearBoard },
    { id: "surrenderBtn", fn: requestSurrender },
    { id: "guessBtn", fn: submitGuess },
    { id: "customBtn", fn: () => { customGridModalEl.classList.remove("hidden"); } },
    { id: "btnCancelCustom", fn: () => { customGridModalEl.classList.add("hidden"); } },
    {
      id: "repeatCustomBtn", fn: () => {
        if (state.lastCustomConfig) loadRandom(state.lastCustomConfig);
      }
    },
    {
      id: "btnGenerateCustom", fn: () => {
        const teamsVal = selTeamsEl.value;
        const countriesVal = selCountriesEl.value;
        const positionsVal = selPositionsEl.value;

        const teams = teamsVal === 'any' ? 'any' : parseInt(teamsVal, 10);
        const countries = countriesVal === 'any' ? 'any' : parseInt(countriesVal, 10);
        const positions = positionsVal === 'any' ? 'any' : parseInt(positionsVal, 10);

        let exactSum = 0;
        if (teams !== 'any') exactSum += teams;
        if (countries !== 'any') exactSum += countries;
        if (positions !== 'any') exactSum += positions;

        if (exactSum > 3) {
          alert("La suma de les quantitats exactes no pot superar 3 (hi ha 3 columnes).");
          return;
        }
        if (teams === 0 && countries === 0 && positions === 0) {
          alert("Has de permetre almenys 3 elements en total.");
          return;
        }

        customGridModalEl.classList.add("hidden");
        state.lastCustomConfig = { teams, countries, positions };
        repeatCustomBtn.style.display = "inline-block";
        loadRandom(state.lastCustomConfig);
      }
    }
  ];

  buttonListeners.forEach(item => {
    const el = document.getElementById(item.id);
    if (el) {
      el.addEventListener("click", item.fn);
      console.log(`Listener afegit a ${item.id}`);
    } else {
      console.error(`No s'ha trobat l'element amb id: ${item.id}`);
    }
  });

  guessInputEl.addEventListener("keydown", (event) => {
    const items = autocompleteListEl.querySelectorAll(".autocomplete-item");

    if (event.key === "ArrowDown") {
      if (!autocompleteListEl.classList.contains("hidden") && items.length > 0) {
        event.preventDefault();
        autocompleteFocusIndex = (autocompleteFocusIndex + 1) % items.length;
        updateAutocompleteFocus(items);
      }
    } else if (event.key === "ArrowUp") {
      if (!autocompleteListEl.classList.contains("hidden") && items.length > 0) {
        event.preventDefault();
        autocompleteFocusIndex = autocompleteFocusIndex <= 0 ? items.length - 1 : autocompleteFocusIndex - 1;
        updateAutocompleteFocus(items);
      }
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (!autocompleteListEl.classList.contains("hidden") && autocompleteFocusIndex > -1 && items.length > 0) {
        items[autocompleteFocusIndex].click();
      } else {
        autocompleteListEl.classList.add("hidden");
        submitGuess();
      }
    } else if (event.key === "Escape") {
      autocompleteListEl.classList.add("hidden");
    }
  });

  guessInputEl.addEventListener("input", (event) => {
    const val = event.target.value;
    const options = getAutocompleteOptions(val);
    renderAutocomplete(options, val);
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".autocomplete-wrapper")) {
      autocompleteListEl.classList.add("hidden");
    }
  });

  choiceCancelBtn.addEventListener("click", () => {
    hideChoicePanel();
    renderBoard();
    writeStatus("Selecció cancel·lada.", "ok");
  });

  try {
    loadRandom();
    console.log("Grid inicial carregat.");
  } catch (e) {
    console.error("Error en loadRandom inicial:", e);
  }
}

boot();
