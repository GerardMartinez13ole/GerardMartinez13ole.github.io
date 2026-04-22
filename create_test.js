const fs = require('fs');

const content = fs.readFileSync('c:/GitHub/GerardMartinez13ole.github.io/grid.html', 'utf-8');
const scriptMatch = content.match(/<script>(.*?)<\/script>/s);

if (scriptMatch) {
    let jsCode = scriptMatch[1];
    jsCode = `
        const document = { getElementById: () => ({ addEventListener: () => {}, classList: { add: ()=>{}, remove: ()=>{} } }), addEventListener: () => {} };
        const window = {};
        const originalBoot = boot;
        boot = () => {};
        ${jsCode}
        buildIndex();
        
        const originalGenerateBoard = generateBoard;
        let ccc = 0;
        
        generateBoard = function(seed, blocked, config) {
            const random = mulberry32(seed);
            const maxTries = 2200;
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
                }
                
                if (attempt === 0 && ccc < 5) {
                    console.log("Cols length:", cols.length);
                    ccc++;
                }
            }
        };
        
        generateBoard(Date.now(), [], {teams:0, countries:3, positions:0});
    `;
    
    fs.writeFileSync('test_trace.js', jsCode);
}
