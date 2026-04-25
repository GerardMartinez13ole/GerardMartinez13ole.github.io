let currentLineupIndex = 0;
let guessedPlayers = new Set();
let isGivenUp = false;

// DOM Elements
const field = document.getElementById('field');
const competitionEl = document.getElementById('competition');
const homeTeamEl = document.getElementById('home-team');
const awayTeamEl = document.getElementById('away-team');
const scoreEl = document.getElementById('score');
const dateEl = document.getElementById('date');
const progressEl = document.getElementById('progress');
const randomBtn = document.getElementById('random-btn');
const giveupBtn = document.getElementById('giveup-btn');

function init() {
    renderLineup(LINEUPS[currentLineupIndex]);
}

function renderLineup(lineup) {
    // Clear field players
    const existingPlayers = field.querySelectorAll('.player-slot');
    existingPlayers.forEach(p => p.remove());

    // Set match info
    competitionEl.textContent = lineup.competition;
    homeTeamEl.textContent = lineup.home;
    awayTeamEl.textContent = lineup.away;
    scoreEl.textContent = lineup.score;
    dateEl.textContent = lineup.date;

    // Set classes for team names
    homeTeamEl.className = `team-name ${lineup.target === 'home' ? 'target' : ''}`;
    awayTeamEl.className = `team-name ${lineup.target === 'away' ? 'target' : ''}`;

    guessedPlayers = new Set();
    isGivenUp = false;
    giveupBtn.style.display = 'flex';
    progressEl.style.color = '#38bdf8';
    updateProgress();

    lineup.players.forEach((p, index) => {
        const slot = document.createElement('div');
        slot.className = 'player-slot';
        slot.style.top = `${p.top}%`;
        slot.style.left = `${p.left}%`;

        const isGk = p.pos === 'GK';
        const jerseyColor = isGk ? '#fbbf24' : (lineup.jerseyColor || '#38bdf8');
        const numberColor = isGk ? '#000' : (lineup.numberColor || '#fff');
        
        slot.innerHTML = `
            <div class="jersey" style="background-color: ${jerseyColor}; color: ${numberColor}">${p.number}</div>
            <div class="player-input-container">
                <input type="text" class="player-input" id="player-${index}" placeholder="..." autocomplete="off">
                <div class="autocomplete-list" id="list-${index}"></div>
            </div>
        `;

        const input = slot.querySelector('input');
        const list = slot.querySelector('.autocomplete-list');

        input.addEventListener('input', (e) => {
            if (isGivenUp || guessedPlayers.has(index)) return;
            showSuggestions(e.target.value, list, index);
        });

        document.addEventListener('click', (e) => {
            if (!slot.contains(e.target)) {
                list.style.display = 'none';
            }
        });

        field.appendChild(slot);
    });
}

function showSuggestions(query, list, index) {
    if (!query || query.length < 2) {
        list.style.display = 'none';
        return;
    }

    const normalizedQuery = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    const matches = PLAYERS.filter(p => {
        const normalizedName = p.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const matchName = normalizedName.includes(normalizedQuery);
        const matchAlias = p.aliases?.some(a => a.toLowerCase().includes(normalizedQuery));
        return matchName || matchAlias;
    }).slice(0, 5);

    if (matches.length === 0) {
        list.style.display = 'none';
        return;
    }

    list.innerHTML = matches.map(p => `
        <div class="autocomplete-item" onclick="checkPlayer('${p.name}', ${index})">
            ${p.name}
        </div>
    `).join('');
    list.style.display = 'block';
}

window.checkPlayer = (playerName, index) => {
    const lineup = LINEUPS[currentLineupIndex];
    const targetPlayer = lineup.players[index];
    
    const input = document.getElementById(`player-${index}`);
    const list = document.getElementById(`list-${index}`);
    const jersey = input.parentElement.parentElement.querySelector('.jersey');

    if (playerName.toLowerCase() === targetPlayer.name.toLowerCase()) {
        input.value = targetPlayer.name;
        input.disabled = true;
        input.classList.add('correct');
        jersey.classList.add('correct');
        guessedPlayers.add(index);
        updateProgress();
        list.style.display = 'none';

        if (guessedPlayers.size === 11) {
            celebrate();
        }
    } else {
        input.value = '';
        list.style.display = 'none';
    }
};

function updateProgress() {
    progressEl.textContent = `${guessedPlayers.size} / 11`;
}

randomBtn.addEventListener('click', () => {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * LINEUPS.length);
    } while (newIndex === currentLineupIndex && LINEUPS.length > 1);
    
    currentLineupIndex = newIndex;
    renderLineup(LINEUPS[currentLineupIndex]);
});

giveupBtn.addEventListener('click', () => {
    isGivenUp = true;
    const lineup = LINEUPS[currentLineupIndex];
    lineup.players.forEach((p, index) => {
        const input = document.getElementById(`player-${index}`);
        if (!guessedPlayers.has(index)) {
            input.value = p.name;
            input.style.color = '#ef4444';
            input.disabled = true;
        }
    });
    giveupBtn.style.display = 'none';
});

function celebrate() {
    giveupBtn.style.display = 'none';
    progressEl.style.color = '#22c55e';
}

init();
