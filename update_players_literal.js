const fs = require('fs');

const filePath = 'grid.html';

const playersToAdd = [
    // BARCELONA
    {name: 'Pedri', teams: ['Barcelona'], countryCode: 'es', position: 'MC'},
    {name: 'Gavi', teams: ['Barcelona'], countryCode: 'es', position: 'MC'},
    {name: 'Lamine Yamal', teams: ['Barcelona'], countryCode: 'es', position: 'ED'},
    {name: 'Ronald Araujo', teams: ['Barcelona'], countryCode: 'uy', position: 'DFC'},
    {name: 'Marc-Andre ter Stegen', teams: ['Barcelona'], aliases: ['ter stegen'], countryCode: 'de', position: 'POR'},
    {name: 'Alejandro Balde', teams: ['Barcelona'], aliases: ['balde'], countryCode: 'es', position: 'LI'},
    {name: 'Frenkie de Jong', teams: ['Barcelona'], aliases: ['de jong'], countryCode: 'nl', position: 'MC'},
    {name: 'Raphinha', teams: ['Barcelona'], countryCode: 'br', position: 'EI'},
    {name: 'Robert Lewandowski', teams: ['Barcelona'], aliases: ['lewandowski'], countryCode: 'pl', position: 'DC'},
    {name: 'Pau Cubarsi', teams: ['Barcelona'], aliases: ['cubarsi'], countryCode: 'es', position: 'DFC'},
    {name: 'Fermin Lopez', teams: ['Barcelona'], aliases: ['fermin'], countryCode: 'es', position: 'MC'},
    {name: 'Dani Olmo', teams: ['Barcelona'], aliases: ['olmo'], countryCode: 'es', position: 'MCO'},

    // REAL MADRID
    {name: 'Vinicius Junior', teams: ['Real Madrid'], aliases: ['vinicius', 'vini jr'], countryCode: 'br', position: 'EI'},
    {name: 'Jude Bellingham', teams: ['Real Madrid'], aliases: ['bellingham'], countryCode: 'en', position: 'MCO'},
    {name: 'Kylian Mbappe', teams: ['Real Madrid'], aliases: ['mbappe'], countryCode: 'fr', position: 'DC'},
    {name: 'Rodrygo', teams: ['Real Madrid'], aliases: ['rodrygo goes'], countryCode: 'br', position: 'ED'},
    {name: 'Federico Valverde', teams: ['Real Madrid'], aliases: ['valverde', 'fede valverde'], countryCode: 'uy', position: 'MC'},
    {name: 'Aurelien Tchouameni', teams: ['Real Madrid'], aliases: ['tchouameni'], countryCode: 'fr', position: 'MCD'},
    {name: 'Eduardo Camavinga', teams: ['Real Madrid'], aliases: ['camavinga'], countryCode: 'fr', position: 'MC'},
    {name: 'Eder Militao', teams: ['Real Madrid'], aliases: ['militao'], countryCode: 'br', position: 'DFC'},
    {name: 'Thibaut Courtois', teams: ['Real Madrid'], aliases: ['courtois'], countryCode: 'be', position: 'POR'},
    {name: 'Antonio Rudiger', teams: ['Real Madrid'], aliases: ['rudiger'], countryCode: 'de', position: 'DFC'},

    // ATLETICO MADRID
    {name: 'Jan Oblak', teams: ['Atletico Madrid'], aliases: ['oblak'], countryCode: 'si', position: 'POR'},
    {name: 'Koke', teams: ['Atletico Madrid'], aliases: ['koke resurreccion'], countryCode: 'es', position: 'MC'},
    {name: 'Rodrigo De Paul', teams: ['Atletico Madrid'], aliases: ['de paul'], countryCode: 'ar', position: 'MC'},
    {name: 'Jose Maria Gimenez', teams: ['Atletico Madrid'], aliases: ['gimenez'], countryCode: 'uy', position: 'DFC'},
    {name: 'Samuel Lino', teams: ['Atletico Madrid'], aliases: ['lino'], countryCode: 'br', position: 'EI'},
    {name: 'Nahuel Molina', teams: ['Atletico Madrid'], aliases: ['molina'], countryCode: 'ar', position: 'LD'},
    {name: 'Conor Gallagher', teams: ['Atletico Madrid', 'Chelsea'], aliases: ['gallagher'], countryCode: 'en', position: 'MC'},
    {name: 'Julian Alvarez', teams: ['Atletico Madrid', 'Manchester City'], aliases: ['julian', 'alvarez'], countryCode: 'ar', position: 'DC'},

    // ATHLETIC BILBAO
    {name: 'Inaki Williams', teams: ['Athletic Bilbao'], aliases: ['inaki'], countryCode: 'gh', position: 'ED'},
    {name: 'Nico Williams', teams: ['Athletic Bilbao'], aliases: ['nico'], countryCode: 'es', position: 'EI'},
    {name: 'Unai Simon', teams: ['Athletic Bilbao'], aliases: ['simon'], countryCode: 'es', position: 'POR'},
    {name: 'Oihan Sancet', teams: ['Athletic Bilbao'], aliases: ['sancet'], countryCode: 'es', position: 'MCO'},
    {name: 'Dani Vivian', teams: ['Athletic Bilbao'], aliases: ['vivian'], countryCode: 'es', position: 'DFC'},

    // REAL SOCIEDAD
    {name: 'Mikel Oyarzabal', teams: ['Real Sociedad'], aliases: ['oyarzabal'], countryCode: 'es', position: 'EI'},
    {name: 'Martin Zubimendi', teams: ['Real Sociedad'], aliases: ['zubimendi'], countryCode: 'es', position: 'MCD'},
    {name: 'Alex Remiro', teams: ['Real Sociedad'], aliases: ['remiro'], countryCode: 'es', position: 'POR'},
    {name: 'Igor Zubeldia', teams: ['Real Sociedad'], aliases: ['zubeldia'], countryCode: 'es', position: 'DFC'},

    // GIRONA
    {name: 'Viktor Tsygankov', teams: ['Girona'], aliases: ['tsygankov'], countryCode: 'ua', position: 'ED'},
    {name: 'Ivan Martin', teams: ['Girona'], aliases: ['ivan martin'], countryCode: 'es', position: 'MCO'},
    {name: 'Cristhian Stuani', teams: ['Girona', 'Espanyol'], aliases: ['stuani'], countryCode: 'uy', position: 'DC'},
    {name: 'Bryan Gil', teams: ['Girona', 'Sevilla'], aliases: ['bryan'], countryCode: 'es', position: 'EI'},

    // VILLARREAL
    {name: 'Alex Baena', teams: ['Villarreal'], aliases: ['baena'], countryCode: 'es', position: 'EI'},
    {name: 'Dani Parejo', teams: ['Villarreal', 'Valencia'], aliases: ['parejo'], countryCode: 'es', position: 'MC'},

    // REAL BETIS
    {name: 'Nabil Fekir', teams: ['Real Betis'], aliases: ['fekir'], countryCode: 'fr', position: 'MCO'},
    {name: 'Pablo Fornals', teams: ['Real Betis', 'Villarreal', 'Malaga'], aliases: ['fornals'], countryCode: 'es', position: 'MCO'},
    {name: 'Isco', teams: ['Real Betis', 'Real Madrid', 'Sevilla', 'Malaga'], aliases: ['isco alarcon'], countryCode: 'es', position: 'MCO'},
    
    // VALENCIA
    {name: 'Jose Gaya', teams: ['Valencia', 'Barcelona'], aliases: ['gaya'], countryCode: 'es', position: 'LI'},
    {name: 'Hugo Duro', teams: ['Valencia', 'Getafe'], aliases: ['duro'], countryCode: 'es', position: 'DC'},
    {name: 'Pepelu', teams: ['Valencia', 'Getafe'], countryCode: 'es', position: 'DC'},
    
    // SEVILLA
    {name: 'Jesus Navas', teams: ['Sevilla'], aliases: ['navas'], countryCode: 'es', position: 'LD'},
    {name: 'Lucas Ocampos', teams: ['Sevilla', 'Villarreal'], aliases: ['ocampos'], countryCode: 'ar', position: 'EI'},

    // CELTA VIGO
    {name: 'Fran Beltran', teams: ['Celta Vigo', 'Rayo Vallecano'], aliases: ['beltran'], countryCode: 'es', position: 'MC'},
    
    // OSASUNA
    {name: 'David Garcia', teams: ['Osasuna'], aliases: ['david garcia'], countryCode: 'es', position: 'DFC'},
    {name: 'Ante Budimir', teams: ['Osasuna', 'Mallorca'], aliases: ['budimir'], countryCode: 'hr', position: 'DC'},

    // ALAVES
    {name: 'Luis Rioja', teams: ['Alaves'], aliases: ['rioja'], countryCode: 'es', position: 'EI'}
];

const newCountries = {
    'de': {name: 'Alemania'},
    'pl': {name: 'Polonia'},
    'en': {name: 'Inglaterra'},
    'si': {name: 'Eslovenia'},
    'gh': {name: 'Ghana'},
    'ua': {name: 'Ucrania'}
};

let content = fs.readFileSync(filePath, 'utf-8');

let playersStr = '';
let profilesStr = '';

for (const p of playersToAdd) {
    const aliases = p.aliases ? `, aliases: ${JSON.stringify(p.aliases)}` : '';
    playersStr += `      { name: "${p.name}", teams: ${JSON.stringify(p.teams)}${aliases} },\n`;
    const profileKey = p.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    profilesStr += `      "${profileKey}": { countryCode: "${p.countryCode}", position: "${p.position}" },\n`;
}

let countriesStr = '';
for (const [code, data] of Object.entries(newCountries)) {
    countriesStr += `      ${code}: { name: "${data.name}" },\n`;
}

content = content.replace(/const PLAYERS = \[\n/, `const PLAYERS = [\n${playersStr}`);
content = content.replace(/const PLAYER_PROFILE = \{\n/, `const PLAYER_PROFILE = {\n${profilesStr}`);
content = content.replace(/const COUNTRY_META = \{\n/, `const COUNTRY_META = {\n${countriesStr}`);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Update complete node!');
