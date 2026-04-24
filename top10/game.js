(function() {
  // Debug alert
  console.log("Iniciant game.js...");

  var currentCategoryIndex = 0;
  var solvedCount = 0;
  var currentItems = [];
  var surrendered = false;

  var listEl = document.getElementById("topList");
  var titleEl = document.getElementById("categoryTitle");
  var inputEl = document.getElementById("guessInput");
  var guessBtn = document.getElementById("guessBtn");
  var statusEl = document.getElementById("status");
  var nextBtn = document.getElementById("nextBtn");
  var giveUpBtn = document.getElementById("giveUpBtn");
  var autocompleteListEl = document.getElementById("autocompleteList");
  var resultFooterEl = document.getElementById("resultFooter");
  var resultTextEl = document.getElementById("resultText");

  function init() {
    if (!listEl || !inputEl || !guessBtn) {
      console.error("Elements del DOM no trobats");
      return;
    }

    if (typeof TOP10_CATEGORIES === 'undefined' || TOP10_CATEGORIES.length === 0) {
      writeStatus("Error: No s'han trobat les dades del joc.", "bad");
      return;
    }

    loadCategory(0);
    
    guessBtn.onclick = submitGuess;
    
    nextBtn.onclick = function() {
      currentCategoryIndex = (currentCategoryIndex + 1) % TOP10_CATEGORIES.length;
      loadCategory(currentCategoryIndex);
    };
    
    giveUpBtn.onclick = function() {
      if (surrendered) return;
      revealAll();
    };

    setupAutocomplete();
  }

  function loadCategory(index) {
    var category = TOP10_CATEGORIES[index];
    titleEl.textContent = category.title;
    
    currentItems = [];
    for (var i = 0; i < category.items.length; i++) {
      var item = category.items[i];
      currentItems.push({
        name: item.name,
        country: item.country,
        solved: false
      });
    }
    
    solvedCount = 0;
    surrendered = false;
    
    renderList();
    writeStatus("", "");
    inputEl.value = "";
    inputEl.disabled = false;
    guessBtn.disabled = false;
    if (resultFooterEl) resultFooterEl.classList.add("hidden");
  }

  function renderList() {
    if (!listEl) return;
    listEl.innerHTML = "";
    for (var i = 0; i < currentItems.length; i++) {
      var item = currentItems[i];
      var div = document.createElement("div");
      div.className = "list-item " + (item.solved ? "solved" : (surrendered ? "unsolved" : "skeleton"));
      
      var rank = document.createElement("div");
      rank.className = "rank";
      rank.textContent = (i + 1) + ".";
      
      var flagCont = document.createElement("div");
      flagCont.className = "flag-container";
      if (item.country) {
        var img = document.createElement("img");
        img.className = "flag-icon";
        img.src = "https://flagcdn.com/w40/" + item.country.toLowerCase() + ".png";
        flagCont.appendChild(img);
      }
      
      var nameDiv = document.createElement("div");
      nameDiv.className = "player-name";
      nameDiv.textContent = (item.solved || surrendered) ? item.name : "???";
      
      div.appendChild(rank);
      div.appendChild(flagCont);
      div.appendChild(nameDiv);
      listEl.appendChild(div);
    }
  }

  function normalizeName(str) {
    if (!str) return "";
    return str.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, "");
  }

  function submitGuess() {
    if (surrendered) return;
    
    var guess = inputEl.value.trim();
    if (!guess) return;
    
    var normGuess = normalizeName(guess);
    var found = false;
    
    // Buscar en PLAYERS global
    var officialName = "";
    if (typeof PLAYERS !== 'undefined') {
      for (var i = 0; i < PLAYERS.length; i++) {
        var p = PLAYERS[i];
        if (normalizeName(p.name) === normGuess) {
          officialName = normalizeName(p.name);
          break;
        }
        if (p.aliases) {
          for (var j = 0; j < p.aliases.length; j++) {
            if (normalizeName(p.aliases[j]) === normGuess) {
              officialName = normalizeName(p.name);
              break;
            }
          }
        }
        if (officialName) break;
      }
    }

    var targetToMatch = officialName || normGuess;

    for (var k = 0; k < currentItems.length; k++) {
      var item = currentItems[k];
      if (!item.solved && (normalizeName(item.name) === targetToMatch || normalizeName(item.name) === normGuess)) {
        item.solved = true;
        found = true;
        solvedCount++;
      }
    }

    if (found) {
      writeStatus("Correcte!", "ok");
      renderList();
      inputEl.value = "";
      if (solvedCount === currentItems.length) {
        writeStatus("Completat!", "ok");
        showResults("Has guanyat! 🏆");
        inputEl.disabled = true;
        guessBtn.disabled = true;
      }
    } else {
      writeStatus("No és a la llista.", "bad");
    }
    
    if (autocompleteListEl) autocompleteListEl.classList.add("hidden");
  }

  function revealAll() {
    surrendered = true;
    renderList();
    inputEl.disabled = true;
    guessBtn.disabled = true;
    writeStatus("Llista revelada.", "bad");
    showResults("T'has rendit 😅");
  }

  function showResults(message) {
    if (!resultFooterEl) return;
    var score = solvedCount * 10;
    resultTextEl.innerHTML = message + " Puntuació: <span class='score-highlight'>" + score + " pts</span>";
    resultFooterEl.classList.remove("hidden");
  }

  function writeStatus(msg, type) {
    if (!statusEl) return;
    statusEl.textContent = msg;
    statusEl.className = "status-msg " + type;
  }

  function setupAutocomplete() {
    if (!inputEl || !autocompleteListEl) return;
    var selectedIndex = -1;

    inputEl.oninput = function() {
      var val = inputEl.value.trim();
      selectedIndex = -1; // Reset selection on new input

      if (val.length < 2) {
        autocompleteListEl.classList.add("hidden");
        return;
      }
      
      if (typeof PLAYERS === 'undefined') return;

      var normVal = normalizeName(val);
      var matches = [];
      for (var i = 0; i < PLAYERS.length && matches.length < 8; i++) {
        var p = PLAYERS[i];
        if (normalizeName(p.name).indexOf(normVal) !== -1) {
          matches.push(p);
          continue;
        }
        if (p.aliases) {
          for (var j = 0; j < p.aliases.length; j++) {
            if (normalizeName(p.aliases[j]).indexOf(normVal) !== -1) {
              matches.push(p);
              break;
            }
          }
        }
      }
      
      if (matches.length > 0) {
        autocompleteListEl.innerHTML = "";
        for (var k = 0; k < matches.length; k++) {
          (function(player) {
            var li = document.createElement("li");
            li.className = "autocomplete-item";
            
            var name = player.name;
            var idx = normalizeName(name).indexOf(normVal);
            if (idx !== -1) {
              var matchText = name.substr(idx, val.length);
              li.innerHTML = name.substr(0, idx) + 
                             '<span class="autocomplete-match">' + matchText + '</span>' + 
                             name.substr(idx + val.length);
            } else {
              li.textContent = name;
            }

            li.onclick = function() {
              inputEl.value = player.name;
              autocompleteListEl.classList.add("hidden");
              submitGuess();
              selectedIndex = -1;
            };
            autocompleteListEl.appendChild(li);
          })(matches[k]);
        }
        autocompleteListEl.classList.remove("hidden");
      } else {
        autocompleteListEl.classList.add("hidden");
      }
    };

    inputEl.onkeydown = function(e) {
      var isHidden = autocompleteListEl.classList.contains("hidden");
      var items = autocompleteListEl.getElementsByTagName("li");

      if (e.key === "ArrowDown") {
        if (isHidden) return;
        e.preventDefault();
        selectedIndex++;
        if (selectedIndex >= items.length) selectedIndex = 0;
        updateActiveItem(items);
      } else if (e.key === "ArrowUp") {
        if (isHidden) return;
        e.preventDefault();
        selectedIndex--;
        if (selectedIndex < 0) selectedIndex = items.length - 1;
        updateActiveItem(items);
      } else if (e.key === "Enter") {
        if (!isHidden && selectedIndex >= 0 && items[selectedIndex]) {
          e.preventDefault();
          items[selectedIndex].onclick();
        } else {
          submitGuess();
        }
      } else if (e.key === "Escape") {
        autocompleteListEl.classList.add("hidden");
        selectedIndex = -1;
      }
    };

    function updateActiveItem(items) {
      for (var i = 0; i < items.length; i++) {
        items[i].classList.remove("active");
      }
      if (selectedIndex >= 0 && items[selectedIndex]) {
        items[selectedIndex].classList.add("active");
        items[selectedIndex].scrollIntoView({ block: 'nearest' });
      }
    }

    document.onclick = function(e) {
      if (e.target !== inputEl && e.target !== autocompleteListEl) {
        autocompleteListEl.classList.add("hidden");
        selectedIndex = -1;
      }
    };
  }

  init();
})();
