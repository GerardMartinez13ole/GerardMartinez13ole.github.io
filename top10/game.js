(function() {
  let currentCategoryIndex = 0;
  let solvedCount = 0;
  let currentItems = [];
  let surrendered = false;

  const listEl = document.getElementById("topList");
  const titleEl = document.getElementById("categoryTitle");
  const inputEl = document.getElementById("guessInput");
  const guessBtn = document.getElementById("guessBtn");
  const statusEl = document.getElementById("status");
  const nextBtn = document.getElementById("nextBtn");
  const giveUpBtn = document.getElementById("giveUpBtn");
  const autocompleteListEl = document.getElementById("autocompleteList");
  const resultFooterEl = document.getElementById("resultFooter");
  const resultTextEl = document.getElementById("resultText");

  function init() {
    loadCategory(0);
    
    guessBtn.addEventListener("click", submitGuess);
    inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") submitGuess();
    });
    
    nextBtn.addEventListener("click", () => {
      currentCategoryIndex = (currentCategoryIndex + 1) % TOP10_CATEGORIES.length;
      loadCategory(currentCategoryIndex);
    });
    
    giveUpBtn.addEventListener("click", () => {
      if (surrendered) return;
      if (confirm("Segur que et vols rendir? Es mostraran tots els jugadors.")) {
        revealAll();
      }
    });

    setupAutocomplete();
  }

  function loadCategory(index) {
    const category = TOP10_CATEGORIES[index];
    titleEl.textContent = category.title;
    currentItems = category.items.map(item => ({ ...item, solved: false }));
    solvedCount = 0;
    surrendered = false;
    
    renderList();
    writeStatus("", "");
    inputEl.value = "";
    inputEl.disabled = false;
    guessBtn.disabled = false;
    resultFooterEl.classList.add("hidden");
  }

  function renderList() {
    listEl.innerHTML = "";
    currentItems.forEach((item, i) => {
      const div = document.createElement("div");
      div.className = "list-item " + (item.solved ? "solved" : (surrendered ? "unsolved" : "skeleton"));
      
      const rank = document.createElement("div");
      rank.className = "rank";
      rank.textContent = (i + 1) + ".";
      
      const flagCont = document.createElement("div");
      flagCont.className = "flag-container";
      if (item.country) {
        const img = document.createElement("img");
        img.className = "flag-icon";
        img.src = `https://flagcdn.com/w40/${item.country.toLowerCase()}.png`;
        img.alt = item.country;
        flagCont.appendChild(img);
      }
      
      const name = document.createElement("div");
      name.className = "player-name";
      name.textContent = (item.solved || surrendered) ? item.name : "???";
      
      div.appendChild(rank);
      div.appendChild(flagCont);
      div.appendChild(name);
      listEl.appendChild(div);
    });
  }

  function normalizeName(str) {
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");
  }

  function submitGuess() {
    if (surrendered) return;
    
    const guess = inputEl.value.trim();
    if (!guess) return;
    
    const normGuess = normalizeName(guess);
    let found = false;
    
    // Check if guess matches any player in our global PLAYERS list first to find official name
    // This allows aliases to work
    const playerMatch = resolvePlayer(guess);
    const targetName = playerMatch ? normalizeName(playerMatch.name) : normGuess;

    currentItems.forEach(item => {
      if (!item.solved && (normalizeName(item.name) === targetName || normalizeName(item.name) === normGuess)) {
        item.solved = true;
        found = true;
        solvedCount++;
      }
    });

    if (found) {
      writeStatus("Correcte!", "ok");
      renderList();
      inputEl.value = "";
      if (solvedCount === currentItems.length) {
        writeStatus("Felicitats!", "ok");
        showResults("Has guanyat! 🏆");
        inputEl.disabled = true;
        guessBtn.disabled = true;
      }
    } else {
      writeStatus("Jugador incorrecte o no és a la llista.", "bad");
    }
    
    autocompleteListEl.classList.add("hidden");
  }

  function resolvePlayer(inputValue) {
    const key = normalizeName(inputValue);
    if (!key) return null;
    
    // Simple search in global PLAYERS (from players.js)
    for (const p of PLAYERS) {
      if (normalizeName(p.name) === key) return p;
      if (p.aliases && p.aliases.some(a => normalizeName(a) === key)) return p;
    }
    return null;
  }

  function revealAll() {
    surrendered = true;
    renderList();
    inputEl.disabled = true;
    guessBtn.disabled = true;
    writeStatus("T'has rendit.", "bad");
    showResults("T'has rendit 😅");
  }

  function showResults(message) {
    const score = solvedCount * 10;
    resultTextEl.innerHTML = `${message} La teva puntuació avui ha estat de <span class="score-highlight">${score} pts</span>.`;
    resultFooterEl.classList.remove("hidden");
  }

  function writeStatus(msg, type) {
    statusEl.textContent = msg;
    statusEl.className = "status-msg " + type;
  }

  function setupAutocomplete() {
    inputEl.addEventListener("input", () => {
      const val = inputEl.value.trim();
      if (val.length < 2) {
        autocompleteListEl.classList.add("hidden");
        return;
      }
      
      const normVal = normalizeName(val);
      const matches = PLAYERS.filter(p => 
        normalizeName(p.name).includes(normVal) || 
        (p.aliases && p.aliases.some(a => normalizeName(a).includes(normVal)))
      ).slice(0, 10);
      
      if (matches.length > 0) {
        autocompleteListEl.innerHTML = "";
        matches.forEach(p => {
          const li = document.createElement("li");
          li.className = "autocomplete-item";
          li.textContent = p.name;
          li.addEventListener("click", () => {
            inputEl.value = p.name;
            autocompleteListEl.classList.add("hidden");
            submitGuess();
          });
          autocompleteListEl.appendChild(li);
        });
        autocompleteListEl.classList.remove("hidden");
      } else {
        autocompleteListEl.classList.add("hidden");
      }
    });

    document.addEventListener("click", (e) => {
      if (!inputEl.contains(e.target) && !autocompleteListEl.contains(e.target)) {
        autocompleteListEl.classList.add("hidden");
      }
    });
  }

  init();
})();
