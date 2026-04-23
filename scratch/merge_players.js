const fs = require('fs');
const playersPath = 'players.js';
const newPlayersPath = 'scratch/new_players.js';

let playersContent = fs.readFileSync(playersPath, 'utf8');
let newContent = fs.readFileSync(newPlayersPath, 'utf8');

const newPlayersMatch = newContent.match(/const NEW_PLAYERS = (\[[\s\S]*?\]);/);
const newProfilesMatch = newContent.match(/const NEW_PROFILES = (\{[\s\S]*?\});/);

if (!newPlayersMatch || !newProfilesMatch) {
    console.error("Failed to parse new_players.js");
    process.exit(1);
}

const newPlayers = eval(newPlayersMatch[1]);
const newProfiles = eval('(' + newProfilesMatch[1] + ')');

// 1. Merge PLAYERS
// Find the end of the PLAYERS array (before const PLAYER_PROFILE)
const playersEndIndex = playersContent.indexOf('];\r\n\r\nconst PLAYER_PROFILE');
// If not found, try with \n
const fallbackIndex = playersContent.indexOf('];\n\nconst PLAYER_PROFILE');
const actualIndex = playersEndIndex !== -1 ? playersEndIndex : fallbackIndex;

if (actualIndex !== -1) {
    const playersStr = newPlayers.map(p => '  ' + JSON.stringify(p)).join(',\n');
    playersContent = playersContent.slice(0, actualIndex) + ',\n' + playersStr + playersContent.slice(actualIndex);
} else {
    console.error("Could not find insertion point for PLAYERS");
    process.exit(1);
}

// 2. Merge PLAYER_PROFILE
// Find the last closing brace
const lastBraceIndex = playersContent.lastIndexOf('};');
if (lastBraceIndex !== -1) {
    const profilesStr = Object.keys(newProfiles).map(k => '  "' + k + '": ' + JSON.stringify(newProfiles[k])).join(',\n');
    playersContent = playersContent.slice(0, lastBraceIndex) + ',\n' + profilesStr + '\n' + playersContent.slice(lastBraceIndex);
} else {
    console.error("Could not find insertion point for PLAYER_PROFILE");
    process.exit(1);
}

fs.writeFileSync(playersPath, playersContent);
console.log("Successfully merged players.");
