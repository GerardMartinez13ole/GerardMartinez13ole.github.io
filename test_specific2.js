
        const document = { getElementById: () => ({ addEventListener: () => {}, classList: { add: ()=>{}, remove: ()=>{} } }), addEventListener: () => {} };
        const window = {};
        const originalBoot = boot;
        boot = () => {};
        
    const TEAM_META = {
      "Alaves": { logo: "logos/alaves.png" },
      "Athletic Bilbao": { logo: "logos/athletic_bilbao.png" },
      "Barcelona": { logo: "logos/barcelona.png" },
      "Real Madrid": { logo: "logos/real_madrid.png" },
      "Sevilla": { logo: "logos/sevilla.png" },
      "Atletico Madrid": { logo: "logos/atletico_madrid.png" },
      "Valencia": { logo: "logos/valencia.png" },
      "Villarreal": { logo: "logos/villarreal.png" },
      "Real Sociedad": { logo: "logos/real_sociedad.png" },
      "Espanyol": { logo: "logos/espanyol.png" },
      "Celta Vigo": { logo: "logos/celta_vigo.png" },
      "Malaga": { logo: "logos/malaga.png" },
      "Mallorca": { logo: "logos/mallorca.png" },
      "Real Betis": { logo: "logos/real_betis.png" },
      "Elche": { logo: "logos/elche.png" },
      "Getafe": { logo: "logos/getafe.png" },
      "Girona": { logo: "logos/girona.png" },
      "Las Palmas": { logo: "logos/las_palmas.png" },
      "Levante": { logo: "logos/levante.png" },
      "Leganes": { logo: "logos/leganes.png" },
      "Osasuna": { logo: "logos/osasuna.png" },
      "Oviedo": { logo: "logos/oviedo.png" },
      "Rayo Vallecano": { logo: "logos/rayo_vallecano.png" },
      "Deportivo La Coruña": { logo: "logos/deportivo.png" },
      "Zaragoza": { logo: "logos/zaragoza.png" },
      "Sporting de Gijón": { logo: "logos/sporting.png" },
      "Cadiz": { logo: "logos/cadiz.png" },
      "Granada": { logo: "logos/granada.png" },
      "Racing Santander": { logo: "logos/racing.png" },
      "Hércules": { logo: "logos/hercules.png" },
      "Tenerife": { logo: "logos/tenerife.png" },
      "Recreativo": { logo: "logos/recreativo.png" },
      "Numancia": { logo: "logos/numancia.png" },
      "Albacete": { logo: "logos/albacete.png" },
      "Murcia": { logo: "logos/murcia.png" }
    };

    const TEAM_BACKUP_LOGO = {
      "Alaves": "https://a.espncdn.com/i/teamlogos/soccer/500/96.png",
      "Athletic Bilbao": "https://a.espncdn.com/i/teamlogos/soccer/500/93.png",
      "Barcelona": "https://a.espncdn.com/i/teamlogos/soccer/500/83.png",
      "Real Madrid": "https://a.espncdn.com/i/teamlogos/soccer/500/86.png",
      "Sevilla": "https://a.espncdn.com/i/teamlogos/soccer/500/243.png",
      "Atletico Madrid": "https://a.espncdn.com/i/teamlogos/soccer/500/1068.png",
      "Valencia": "https://a.espncdn.com/i/teamlogos/soccer/500/94.png",
      "Villarreal": "https://a.espncdn.com/i/teamlogos/soccer/500/102.png",
      "Real Sociedad": "https://a.espncdn.com/i/teamlogos/soccer/500/89.png",
      "Espanyol": "https://a.espncdn.com/i/teamlogos/soccer/500/88.png",
      "Celta Vigo": "https://a.espncdn.com/i/teamlogos/soccer/500/85.png",
      "Malaga": "https://a.espncdn.com/i/teamlogos/soccer/500/99.png",
      "Mallorca": "https://a.espncdn.com/i/teamlogos/soccer/500/84.png",
      "Real Betis": "https://a.espncdn.com/i/teamlogos/soccer/500/244.png",
      "Elche": "https://a.espncdn.com/i/teamlogos/soccer/500/3751.png",
      "Getafe": "https://a.espncdn.com/i/teamlogos/soccer/500/2922.png",
      "Girona": "https://a.espncdn.com/i/teamlogos/soccer/500/9812.png",
      "Las Palmas": "https://a.espncdn.com/i/teamlogos/soccer/500/98.png",
      "Levante": "https://a.espncdn.com/i/teamlogos/soccer/500/1538.png",
      "Leganes": "https://a.espncdn.com/i/teamlogos/soccer/500/17534.png",
      "Osasuna": "https://a.espncdn.com/i/teamlogos/soccer/500/97.png",
      "Oviedo": "https://a.espncdn.com/i/teamlogos/soccer/500/92.png",
      "Rayo Vallecano": "https://a.espncdn.com/i/teamlogos/soccer/500/101.png",
      "Deportivo La Coruña": "https://a.espncdn.com/i/teamlogos/soccer/500/90.png",
      "Zaragoza": "https://a.espncdn.com/i/teamlogos/soccer/500/95.png",
      "Sporting de Gijón": "https://a.espncdn.com/i/teamlogos/soccer/500/91.png",
      "Cadiz": "https://a.espncdn.com/i/teamlogos/soccer/500/3843.png",
      "Granada": "https://a.espncdn.com/i/teamlogos/soccer/500/3377.png",
      "Racing Santander": "https://a.espncdn.com/i/teamlogos/soccer/500/87.png",
      "Hércules": "https://a.espncdn.com/i/teamlogos/soccer/500/3375.png",
      "Tenerife": "https://a.espncdn.com/i/teamlogos/soccer/500/174.png",
      "Recreativo": "https://a.espncdn.com/i/teamlogos/soccer/500/3842.png",
      "Numancia": "https://a.espncdn.com/i/teamlogos/soccer/500/4223.png",
      "Albacete": "https://a.espncdn.com/i/teamlogos/soccer/500/3748.png",
      "Murcia": "https://a.espncdn.com/i/teamlogos/soccer/500/2923.png"
    };

    const PLAYERS = [
      { name: "Pedri", teams: ["Barcelona", "Las Palmas"], aliases: ["pedri gonzalez"] },
      { name: "Gavi", teams: ["Barcelona"] },
      { name: "Lamine Yamal", teams: ["Barcelona"] },
      { name: "Ronald Araujo", teams: ["Barcelona"] },
      { name: "Marc-Andre ter Stegen", teams: ["Barcelona", "Girona"], aliases: ["ter stegen", "marc andre ter stegen"] },
      { name: "Wojciech Szczesny", teams: ["Barcelona"], aliases: ["szczesny"] },
      { name: "Inaki Pena", teams: ["Barcelona", "Elche"], aliases: ["pena", "inaki pena"] },
      { name: "Joan Garcia", teams: ["Barcelona", "Espanyol"], aliases: ["joan garcia"] },
      { name: "Alejandro Balde", teams: ["Barcelona"], aliases: ["balde"] },
      { name: "Andreas Christensen", teams: ["Barcelona"], aliases: ["christensen"] },
      { name: "Inigo Martinez", teams: ["Barcelona", "Athletic Bilbao", "Real Sociedad"], aliases: ["inigo", "inigo martinez"] },
      { name: "Eric Garcia", teams: ["Barcelona", "Girona"], aliases: ["eric", "eric garcia"] },
      { name: "Joao Cancelo", teams: ["Barcelona", "Valencia"], aliases: ["cancelo"] },
      { name: "Hector Fort", teams: ["Barcelona", "Elche"], aliases: ["fort"] },
      { name: "Gerard Martin", teams: ["Barcelona"], aliases: ["gerard martin"] },
      { name: "Frenkie de Jong", teams: ["Barcelona"], aliases: ["de jong"] },
      { name: "Dani Olmo", teams: ["Barcelona"], aliases: ["olmo"] },
      { name: "Fermin Lopez", teams: ["Barcelona"], aliases: ["fermin"] },
      { name: "Marc Casado", teams: ["Barcelona"], aliases: ["casado"] },
      { name: "Marc Bernal", teams: ["Barcelona"], aliases: ["bernal"] },
      { name: "Pablo Torre", teams: ["Barcelona", "Girona", "Mallorca"], aliases: ["pablo torre"] },
      { name: "Roony Bardghji", teams: ["Barcelona"], aliases: ["bardghji"] },
      { name: "Raphinha", teams: ["Barcelona"] },
      { name: "Robert Lewandowski", teams: ["Barcelona"], aliases: ["lewandowski"] },
      { name: "Ferran Torres", teams: ["Barcelona", "Valencia"], aliases: ["ferran"] },
      { name: "Marcus Rashford", teams: ["Barcelona"], aliases: ["rashford"] },
      { name: "Ansu Fati", teams: ["Barcelona"], aliases: ["ansu"] },
      { name: "Pau Cubarsi", teams: ["Barcelona"], aliases: ["cubarsi"] },
      { name: "Pau Victor", teams: ["Barcelona", "Girona"], aliases: ["pau victor"] },
      { name: "Vinicius Junior", teams: ["Real Madrid"], aliases: ["vinicius", "vini jr"] },
      { name: "Jude Bellingham", teams: ["Real Madrid"], aliases: ["bellingham"] },
      { name: "Kylian Mbappe", teams: ["Real Madrid"], aliases: ["mbappe"] },
      { name: "Rodrygo", teams: ["Real Madrid"], aliases: ["rodrygo goes", "goes"] },
      { name: "Federico Valverde", teams: ["Real Madrid", "Deportivo La Coruña"], aliases: ["valverde", "fede valverde"] },
      { name: "Aurelien Tchouameni", teams: ["Real Madrid"], aliases: ["tchouameni"] },
      { name: "Eduardo Camavinga", teams: ["Real Madrid"], aliases: ["camavinga"] },
      { name: "Eder Militao", teams: ["Real Madrid"], aliases: ["militao"] },
      { name: "Thibaut Courtois", teams: ["Real Madrid", "Atletico Madrid"], aliases: ["courtois", "thibaut"] },
      { name: "Andriy Lunin", teams: ["Real Madrid", "Oviedo", "Leganes", "Real Valladolid"], aliases: ["lunin"] },
      { name: "Fran Gonzalez", teams: ["Real Madrid"], aliases: ["fran gonzalez"] },
      { name: "Dani Carvajal", teams: ["Real Madrid"], aliases: ["carvajal"] },
      { name: "Antonio Rudiger", teams: ["Real Madrid"], aliases: ["rudiger"] },
      { name: "David Alaba", teams: ["Real Madrid"], aliases: ["alaba"] },
      { name: "Ferland Mendy", teams: ["Real Madrid"], aliases: ["mendy"] },
      { name: "Fran Garcia", teams: ["Real Madrid", "Rayo Vallecano"], aliases: ["fran garcia"] },
      { name: "Trent Alexander-Arnold", teams: ["Real Madrid"], aliases: ["trent", "alexander arnold"] },
      { name: "Alvaro Carreras", teams: ["Real Madrid"], aliases: ["carreras"] },
      { name: "Dean Huijsen", teams: ["Real Madrid"], aliases: ["huijsen"] },
      { name: "Raul Asencio", teams: ["Real Madrid"], aliases: ["asencio"] },
      { name: "Luka Modric", teams: ["Real Madrid"], aliases: ["modric"] },
      { name: "Brahim Diaz", teams: ["Real Madrid"], aliases: ["brahim"] },
      { name: "Endrick", teams: ["Real Madrid"], aliases: ["endrick felipe"] },
      { name: "Arda Guler", teams: ["Real Madrid"], aliases: ["guler"] },
      { name: "Dani Ceballos", teams: ["Real Madrid", "Real Betis"], aliases: ["ceballos"] },
      { name: "Franco Mastantuono", teams: ["Real Madrid"], aliases: ["mastantuono"] },
      { name: "Gonzalo Garcia", teams: ["Real Madrid"], aliases: ["gonzalo", "gonzalo garcia"] },
      { name: "Jan Oblak", teams: ["Atletico Madrid"], aliases: ["oblak"] },
      { name: "Juan Musso", teams: ["Atletico Madrid"], aliases: ["musso"] },
      { name: "Koke", teams: ["Atletico Madrid"], aliases: ["koke resurreccion"] },
      { name: "Rodrigo De Paul", teams: ["Atletico Madrid"], aliases: ["de paul"] },
      { name: "Jose Maria Gimenez", teams: ["Atletico Madrid"], aliases: ["gimenez"] },
      { name: "Samuel Lino", teams: ["Atletico Madrid"], aliases: ["lino"] },
      { name: "Nahuel Molina", teams: ["Atletico Madrid"], aliases: ["molina"] },
      { name: "Marc Pubill", teams: ["Atletico Madrid", "Levante"], aliases: ["pubill"] },
      { name: "Matteo Ruggeri", teams: ["Atletico Madrid"], aliases: ["ruggeri"] },
      { name: "David Hancko", teams: ["Atletico Madrid"], aliases: ["hancko"] },
      { name: "Conor Gallagher", teams: ["Atletico Madrid"], aliases: ["gallagher"] },
      { name: "Pablo Barrios", teams: ["Atletico Madrid"], aliases: ["barrios"] },
      { name: "Johnny Cardoso", teams: ["Atletico Madrid", "Real Betis"], aliases: ["johnny"] },
      { name: "Thiago Almada", teams: ["Atletico Madrid"], aliases: ["almada"] },
      { name: "Rodrigo Mendoza", teams: ["Atletico Madrid", "Elche"], aliases: ["mendoza"] },
      { name: "Obed Vargas", teams: ["Atletico Madrid"], aliases: ["obed"] },
      { name: "Julian Alvarez", teams: ["Atletico Madrid"], aliases: ["julian", "alvarez"] },
      { name: "Alexander Sorloth", teams: ["Atletico Madrid", "Real Sociedad", "Villarreal"], aliases: ["sorloth"] },
      { name: "Nico Gonzalez", teams: ["Atletico Madrid"], aliases: ["nico gonzalez"] },
      { name: "Ademola Lookman", teams: ["Atletico Madrid"], aliases: ["lookman"] },
      { name: "Giuliano Simeone", teams: ["Atletico Madrid", "Alaves"], aliases: ["giuliano"] },
      { name: "Inaki Williams", teams: ["Athletic Bilbao"], aliases: ["inaki"] },
      { name: "Nico Williams", teams: ["Athletic Bilbao"], aliases: ["nico"] },
      { name: "Unai Simon", teams: ["Athletic Bilbao"], aliases: ["simon"] },
      { name: "Oihan Sancet", teams: ["Athletic Bilbao"], aliases: ["sancet"] },
      { name: "Dani Vivian", teams: ["Athletic Bilbao"], aliases: ["vivian"] },
      { name: "Mikel Oyarzabal", teams: ["Real Sociedad"], aliases: ["oyarzabal"] },
      { name: "Martin Zubimendi", teams: ["Real Sociedad"], aliases: ["zubimendi"] },
      { name: "Alex Remiro", teams: ["Real Sociedad", "Athletic Bilbao"], aliases: ["remiro"] },
      { name: "Unai Marrero", teams: ["Real Sociedad"], aliases: ["marrero"] },
      { name: "Nayef Aguerd", teams: ["Real Sociedad"], aliases: ["aguerd"] },
      { name: "Igor Zubeldia", teams: ["Real Sociedad"], aliases: ["zubeldia"] },
      { name: "Jon Pacheco", teams: ["Real Sociedad", "Alaves"], aliases: ["pacheco"] },
      { name: "Aritz Elustondo", teams: ["Real Sociedad"], aliases: ["elustondo"] },
      { name: "Hamari Traore", teams: ["Real Sociedad"], aliases: ["traore"] },
      { name: "Aihen Munoz", teams: ["Real Sociedad"], aliases: ["aihen"] },
      { name: "Javi Lopez", teams: ["Real Sociedad", "Alaves"], aliases: ["javi lopez"] },
      { name: "Takefusa Kubo", teams: ["Real Sociedad", "Real Madrid", "Mallorca", "Getafe", "Villarreal"], aliases: ["kubo"] },
      { name: "Luka Sucic", teams: ["Real Sociedad"], aliases: ["sucic"] },
      { name: "Benat Turrientes", teams: ["Real Sociedad"], aliases: ["turrientes"] },
      { name: "Carlos Soler", teams: ["Real Sociedad", "Valencia"], aliases: ["soler"] },
      { name: "Arsen Zakharyan", teams: ["Real Sociedad"], aliases: ["zakharyan"] },
      { name: "Urko Gonzalez de Zarate", teams: ["Real Sociedad"], aliases: ["urko"] },
      { name: "Sheraldo Becker", teams: ["Real Sociedad"], aliases: ["becker"] },
      { name: "Orri Oskarsson", teams: ["Real Sociedad"], aliases: ["oskarsson"] },
      { name: "Ander Barrenetxea", teams: ["Real Sociedad"], aliases: ["barrenetxea"] },
      { name: "Umar Sadiq", teams: ["Real Sociedad", "Valencia", "Almeria"], aliases: ["sadiq"] },
      { name: "Bryan Zaragoza", teams: ["Real Sociedad", "Osasuna"], aliases: ["zaragoza"] },
      { name: "Viktor Tsygankov", teams: ["Girona"], aliases: ["tsygankov"] },
      { name: "Ivan Martin", teams: ["Girona"], aliases: ["ivan martin"] },
      { name: "Cristhian Stuani", teams: ["Girona", "Espanyol"], aliases: ["stuani"] },
      { name: "Bryan Gil", teams: ["Girona", "Sevilla", "Eibar", "Valencia"], aliases: ["bryan gil"] },
      { name: "Luiz Junior", teams: ["Villarreal"], aliases: ["luiz"] },
      { name: "Diego Conde", teams: ["Villarreal", "Getafe", "Leganes"], aliases: ["conde"] },
      { name: "Arnau Tenas", teams: ["Villarreal", "Barcelona"], aliases: ["tenas"] },
      { name: "Juan Foyth", teams: ["Villarreal"], aliases: ["foyth"] },
      { name: "Rafa Marin", teams: ["Villarreal", "Alaves", "Real Madrid"], aliases: ["marin"] },
      { name: "Santiago Mourino", teams: ["Villarreal", "Alaves", "Atletico Madrid"], aliases: ["mourino"] },
      { name: "Logan Costa", teams: ["Villarreal"], aliases: ["logan"] },
      { name: "Willy Kambwala", teams: ["Villarreal"], aliases: ["kambwala"] },
      { name: "Renato Veiga", teams: ["Villarreal"], aliases: ["veiga"] },
      { name: "Sergi Cardona", teams: ["Villarreal", "Las Palmas"], aliases: ["cardona"] },
      { name: "Alfonso Pedraza", teams: ["Villarreal", "Alaves", "Real Betis"], aliases: ["pedraza"] },
      { name: "Alex Baena", teams: ["Villarreal", "Girona", "Atletico Madrid"], aliases: ["baena"] },
      { name: "Dani Parejo", teams: ["Villarreal", "Valencia", "Real Madrid", "Getafe"], aliases: ["parejo"] },
      { name: "Alvaro Negredo", teams: ["Almeria", "Sevilla", "Valencia", "Cadiz", "Real Madrid"], aliases: ["negredo"] },
      { name: "Thomas Partey", teams: ["Villarreal", "Atletico Madrid", "Mallorca"], aliases: ["partey"] },
      { name: "Santi Comesana", teams: ["Villarreal", "Rayo Vallecano"], aliases: ["comesana"] },
      { name: "Pape Gueye", teams: ["Villarreal", "Sevilla"], aliases: ["gueye"] },
      { name: "Alberto Moleiro", teams: ["Villarreal", "Las Palmas"], aliases: ["moleiro"] },
      { name: "Tajon Buchanan", teams: ["Villarreal"], aliases: ["buchanan"] },
      { name: "Gerard Moreno", teams: ["Villarreal", "Espanyol"], aliases: ["gerard"] },
      { name: "Georges Mikautadze", teams: ["Villarreal"], aliases: ["mikautadze"] },
      { name: "Nicolas Pepe", teams: ["Villarreal"], aliases: ["pepe"] },
      { name: "Ilias Akhomach", teams: ["Villarreal", "Barcelona", "Rayo Vallecano"], aliases: ["akhomach"] },
      { name: "Alfon Gonzalez", teams: ["Celta Vigo"], aliases: ["alfon"] },
      { name: "Tani Oluwaseyi", teams: ["Villarreal"], aliases: ["oluwaseyi"] },
      { name: "Alvaro Valles", teams: ["Real Betis", "Las Palmas"], aliases: ["valles"] },
      { name: "Pau Lopez", teams: ["Real Betis", "Espanyol"], aliases: ["pau lopez"] },
      { name: "Adrian San Miguel", teams: ["Real Betis"], aliases: ["adrian"] },
      { name: "Diego Llorente", teams: ["Real Betis", "Real Madrid", "Real Sociedad", "Rayo Vallecano"], aliases: ["diego llorente"] },
      { name: "Junior Firpo", teams: ["Real Betis", "Barcelona"], aliases: ["firpo"] },
      { name: "Natan", teams: ["Real Betis"], aliases: ["natan bernardo"] },
      { name: "Ricardo Rodriguez", teams: ["Real Betis"], aliases: ["ricardo rodriguez"] },
      { name: "Valentin Gomez", teams: ["Real Betis"], aliases: ["valentin gomez"] },
      { name: "Nabil Fekir", teams: ["Real Betis"], aliases: ["fekir"] },
      { name: "Pablo Fornals", teams: ["Real Betis", "Villarreal", "Malaga"], aliases: ["fornals"] },
      { name: "Isco", teams: ["Real Betis", "Real Madrid", "Sevilla", "Malaga", "Valencia"], aliases: ["isco alarcon"] },
      { name: "Vitor Roque", teams: ["Real Betis"], aliases: ["roque"] },
      { name: "Marc Roca", teams: ["Real Betis", "Espanyol"], aliases: ["roca"] },
      { name: "Rodrigo Riquelme", teams: ["Real Betis", "Atletico Madrid", "Girona", "Mallorca"], aliases: ["riquelme"] },
      { name: "Sofyan Amrabat", teams: ["Real Betis"], aliases: ["amrabat"] },
      { name: "Sergi Altimira", teams: ["Real Betis", "Getafe"], aliases: ["altimira"] },
      { name: "Alvaro Fidalgo", teams: ["Real Betis"], aliases: ["fidalgo"] },
      { name: "Abde Ezzalzouli", teams: ["Real Betis", "Barcelona", "Osasuna"], aliases: ["abde", "ezzalzouli"] },
      { name: "Chimy Avila", teams: ["Real Betis", "Osasuna"], aliases: ["chimy"] },
      { name: "Cucho Hernandez", teams: ["Real Betis", "Mallorca", "Getafe"], aliases: ["cucho"] },
      { name: "Antony", teams: ["Real Betis"], aliases: ["antony matheus"] },
      { name: "Cedric Bakambu", teams: ["Real Betis", "Villarreal"], aliases: ["bakambu"] },
      { name: "Aitor Ruibal", teams: ["Real Betis", "Leganes"], aliases: ["ruibal"] },
      { name: "Assane Diao", teams: ["Real Betis"], aliases: ["diao"] },
      { name: "Jose Gaya", teams: ["Valencia", "Barcelona"], aliases: ["gaya"] },
      { name: "Hugo Duro", teams: ["Valencia", "Getafe"], aliases: ["duro"] },
      { name: "Pepelu", teams: ["Valencia", "Getafe", "Levante"] },
      { name: "Javi Guerra", teams: ["Valencia"], aliases: ["juerra"] },
      { name: "Jesus Navas", teams: ["Sevilla"], aliases: ["navas"] },
      { name: "Isaac Romero", teams: ["Sevilla", "Elche"], aliases: ["isaac"] },
      { name: "Vicente Guaita", teams: ["Celta Vigo", "Valencia", "Getafe"], aliases: ["guaita"] },
      { name: "Ivan Villar", teams: ["Celta Vigo", "Leganes"], aliases: ["villar"] },
      { name: "Marc Vidal", teams: ["Celta Vigo"], aliases: ["marc vidal"] },
      { name: "Carl Starfelt", teams: ["Celta Vigo"], aliases: ["starfelt"] },
      { name: "Marcos Alonso", teams: ["Celta Vigo", "Real Madrid", "Barcelona"], aliases: ["alonso"] },
      { name: "Mihailo Ristic", teams: ["Celta Vigo", "Malaga"], aliases: ["ristic"] },
      { name: "Sergio Carreira", teams: ["Celta Vigo", "Villarreal"], aliases: ["carreira"] },
      { name: "Javi Rodriguez", teams: ["Celta Vigo"], aliases: ["javi rodriguez"] },
      { name: "Ilaix Moriba", teams: ["Celta Vigo", "Barcelona", "Valencia", "Getafe"], aliases: ["moriba"] },
      { name: "Fran Beltran", teams: ["Celta Vigo", "Rayo Vallecano", "Girona"], aliases: ["beltran", "fran beltran"] },
      { name: "Sergi Darder", teams: ["Celta Vigo", "Malaga", "Espanyol", "Mallorca"], aliases: ["darder"] },
      { name: "Williot Swedberg", teams: ["Celta Vigo"], aliases: ["swedberg"] },
      { name: "Hugo Sotelo", teams: ["Celta Vigo"], aliases: ["sotelo"] },
      { name: "Luca de la Torre", teams: ["Celta Vigo"], aliases: ["de la torre"] },
      { name: "Damian Rodriguez", teams: ["Celta Vigo"], aliases: ["damian rodriguez"] },
      { name: "Iago Aspas", teams: ["Celta Vigo", "Sevilla"], aliases: ["aspas"] },
      { name: "Jonathan Bamba", teams: ["Celta Vigo"], aliases: ["bamba"] },
      { name: "Tasos Douvikas", teams: ["Celta Vigo"], aliases: ["douvikas"] },
      { name: "Hugo Alvarez", teams: ["Celta Vigo"], aliases: ["hugo alvarez"] },
      { name: "Pablo Duran", teams: ["Celta Vigo"], aliases: ["pablo duran"] },
      { name: "Aimar Oroz", teams: ["Osasuna"], aliases: ["aimar"] },
      { name: "Ante Budimir", teams: ["Osasuna", "Mallorca", "Eibar"], aliases: ["budimir"] },
      { name: "Carlos Vicente", teams: ["Alaves"], aliases: ["vicente"] },
      { name: "Arda Turan", teams: ["Atletico Madrid", "Barcelona"], aliases: ["arda"] },
      { name: "Diego Costa", teams: ["Atletico Madrid", "Celta Vigo"], aliases: ["costa"] },
      { name: "Diego Godin", teams: ["Atletico Madrid", "Villarreal"], aliases: ["godin"] },
      { name: "Javier Manquillo", teams: ["Atletico Madrid", "Celta Vigo"], aliases: ["manquillo"] },
      { name: "Joao Felix", teams: ["Atletico Madrid", "Barcelona"], aliases: ["felix"] },
      { name: "Juanfran", teams: ["Atletico Madrid", "Espanyol"] },
      { name: "Mario Suarez", teams: ["Atletico Madrid", "Real Valladolid", "Mallorca", "Valencia", "Rayo Vallecano"], aliases: ["mario suarez"] },
      { name: "Giovani dos Santos", teams: ["Barcelona", "Racing Santander", "Mallorca", "Villarreal"], aliases: ["giovani"] },
      { name: "Cristian Tello", teams: ["Barcelona", "Real Betis"], aliases: ["tello"] },
      { name: "Memphis Depay", teams: ["Atletico Madrid", "Barcelona"], aliases: ["depay"] },
      { name: "Rodri", teams: ["Atletico Madrid", "Villarreal"] },
      { name: "Aleix Vidal", teams: ["Barcelona", "Sevilla", "Espanyol"], aliases: ["aleix vidal"] },
      { name: "Carles Perez", teams: ["Barcelona", "Celta Vigo"], aliases: ["carles perez"] },
      { name: "Claudio Bravo", teams: ["Barcelona", "Real Betis"], aliases: ["bravo"] },
      { name: "Denis Suarez", teams: ["Barcelona", "Villarreal", "Celta Vigo", "Alaves"], aliases: ["denis"] },
      { name: "Hector Bellerin", teams: ["Barcelona", "Real Betis"], aliases: ["bellerin"] },
      { name: "Jasper Cillessen", teams: ["Barcelona", "Valencia"], aliases: ["cillessen"] },
      { name: "Juan Miranda", teams: ["Barcelona", "Real Betis"], aliases: ["miranda"] },
      { name: "Luis Figo", teams: ["Barcelona", "Real Madrid"], aliases: ["figo"] },
      { name: "Luis Suarez", teams: ["Barcelona", "Atletico Madrid"], aliases: ["suarez"] },
      { name: "Marc Bartra", teams: ["Barcelona", "Real Betis"], aliases: ["bartra"] },
      { name: "Martin Braithwaite", teams: ["Barcelona", "Espanyol"], aliases: ["braithwaite"] },
      { name: "Michael Laudrup", teams: ["Barcelona", "Real Madrid"], aliases: ["laudrup"] },
      { name: "Munir El Haddadi", teams: ["Celta Vigo", "Barcelona", "Valencia", "Alaves", "Sevilla", "Getafe", "Las Palmas"], aliases: ["munir", "munir el haddadi"] },
      { name: "Nolito", teams: ["Barcelona", "Celta Vigo"] },
      { name: "Oscar Mingueza", teams: ["Barcelona", "Celta Vigo"], aliases: ["mingueza"] },
      { name: "Rafinha Alcantara", teams: ["Barcelona", "Celta Vigo"], aliases: ["rafinha"] },
      { name: "Ronaldo Nazario", teams: ["Barcelona", "Real Madrid"], aliases: ["ronaldo"] },
      { name: "Augusto Fernandez", teams: ["Celta Vigo", "Atletico Madrid"], aliases: ["augusto"] },
      { name: "Brais Mendez", teams: ["Celta Vigo", "Real Sociedad"], aliases: ["brais"] },
      { name: "Borja Iglesias", teams: ["Celta Vigo", "Espanyol", "Real Betis", "Villarreal", "Eibar"], aliases: ["borja iglesias"] },
      { name: "Joan Capdevila", teams: ["Espanyol", "Atletico Madrid", "Villarreal"], aliases: ["capdevila"] },
      { name: "Mario Hermoso", teams: ["Espanyol", "Atletico Madrid"], aliases: ["hermoso"] },
      { name: "Roque Santa Cruz", teams: ["Malaga", "Real Betis"], aliases: ["roque"] },
      { name: "Samu Castillejo", teams: ["Malaga", "Villarreal"], aliases: ["castillejo"] },
      { name: "Marco Asensio", teams: ["Mallorca", "Real Madrid", "Espanyol"], aliases: ["asensio"] },
      { name: "Samuel Eto'o", teams: ["Mallorca", "Real Madrid", "Barcelona", "Espanyol"], aliases: ["etoo"] },
      { name: "Giovani Lo Celso", teams: ["Real Betis", "Villarreal"], aliases: ["lo celso"] },
      { name: "Joaquin Sanchez", teams: ["Real Betis", "Valencia", "Malaga"], aliases: ["joaquin"] },
      { name: "Alvaro Morata", teams: ["Real Madrid", "Atletico Madrid"], aliases: ["morata"] },
      { name: "Denis Cheryshev", teams: ["Real Madrid", "Valencia", "Villarreal"], aliases: ["cheryshev"] },
      { name: "Diego Lopez", teams: ["Real Madrid", "Villarreal", "Espanyol", "Sevilla", "Rayo Vallecano"], aliases: ["diego lopez"] },
      { name: "Ezequiel Garay", teams: ["Real Madrid", "Valencia"], aliases: ["garay"] },
      { name: "Fernando Hierro", teams: ["Real Madrid", "Malaga", "Real Valladolid"], aliases: ["hierro"] },
      { name: "Fernando Morientes", teams: ["Real Madrid", "Valencia", "Zaragoza", "Albacete"], aliases: ["morientes"] },
      { name: "Jose Callejon", teams: ["Real Madrid", "Espanyol"], aliases: ["callejon"] },
      { name: "Julio Baptista", teams: ["Real Madrid", "Sevilla", "Malaga"], aliases: ["baptista"] },
      { name: "Lucas Vazquez", teams: ["Real Madrid", "Espanyol"], aliases: ["lucas vazquez"] },
      { name: "Marcos Llorente", teams: ["Real Madrid", "Atletico Madrid", "Alaves"], aliases: ["llorente"] },
      { name: "Pablo Sarabia", teams: ["Real Madrid", "Espanyol", "Sevilla"], aliases: ["sarabia"] },
      { name: "Raul de Tomas", teams: ["Real Madrid", "Espanyol"], aliases: ["rdt", "de tomas"] },
      { name: "Roberto Soldado", teams: ["Real Madrid", "Valencia", "Villarreal", "Osasuna", "Getafe", "Granada", "Levante"], aliases: ["soldado"] },
      { name: "Ruud van Nistelrooy", teams: ["Real Madrid", "Malaga"], aliases: ["van nistelrooy"] },
      { name: "Theo Hernandez", teams: ["Real Madrid", "Atletico Madrid", "Real Sociedad"], aliases: ["theo"] },
      { name: "Adnan Januzaj", teams: ["Real Sociedad", "Sevilla"], aliases: ["januzaj"] },
      { name: "Alvaro Odriozola", teams: ["Real Sociedad", "Real Madrid"], aliases: ["odriozola"] },
      { name: "Antoine Griezmann", teams: ["Real Sociedad", "Atletico Madrid", "Barcelona"], aliases: ["griezmann"] },
      { name: "Asier Illarramendi", teams: ["Real Sociedad", "Real Madrid"], aliases: ["illarramendi"] },
      { name: "Esteban Granero", teams: ["Real Sociedad", "Real Madrid", "Espanyol"], aliases: ["granero"] },
      { name: "Joseba Llorente", teams: ["Real Sociedad", "Villarreal"], aliases: ["joseba llorente"] },
      { name: "Martin Odegaard", teams: ["Real Sociedad", "Real Madrid"], aliases: ["odegaard"] },
      { name: "Robin Le Normand", teams: ["Real Sociedad", "Atletico Madrid"], aliases: ["le normand"] },
      { name: "Xabi Alonso", teams: ["Real Sociedad", "Real Madrid", "Eibar"], aliases: ["xabi alonso"] },
      { name: "Carlos Bacca", teams: ["Sevilla", "Villarreal"], aliases: ["bacca"] },
      { name: "Clement Lenglet", teams: ["Sevilla", "Barcelona", "Atletico Madrid"], aliases: ["lenglet"] },
      { name: "Dani Alves", teams: ["Sevilla", "Barcelona"] },
      { name: "Ivan Rakitic", teams: ["Sevilla", "Barcelona"], aliases: ["rakitic"] },
      { name: "Javi Varas", teams: ["Sevilla", "Celta Vigo"], aliases: ["varas"] },
      { name: "Jules Kounde", teams: ["Sevilla", "Barcelona"], aliases: ["kounde"] },
      { name: "Kevin Gameiro", teams: ["Sevilla", "Atletico Madrid", "Valencia"], aliases: ["gameiro"] },
      { name: "Sergio Ramos", teams: ["Sevilla", "Real Madrid"], aliases: ["ramos"] },
      { name: "Sergio Reguilon", teams: ["Real Sociedad", "Sevilla", "Real Madrid", "Atletico Madrid"], aliases: ["reguilon"] },
      { name: "Vitolo", teams: ["Sevilla", "Atletico Madrid"] },
      { name: "Adil Rami", teams: ["Valencia", "Sevilla"], aliases: ["rami"] },
      { name: "Andre Gomes", teams: ["Valencia", "Barcelona"], aliases: ["gomes"] },
      { name: "Daniel Wass", teams: ["Valencia", "Celta Vigo"], aliases: ["wass"] },
      { name: "David Villa", teams: ["Valencia", "Barcelona", "Atletico Madrid", "Sporting de Gijón", "Zaragoza"], aliases: ["villa"] },
      { name: "Ever Banega", teams: ["Valencia", "Sevilla"], aliases: ["banega"] },
      { name: "Francis Coquelin", teams: ["Valencia", "Villarreal"], aliases: ["coquelin"] },
      { name: "Gabriel Paulista", teams: ["Valencia", "Villarreal"], aliases: ["paulista"] },
      { name: "Geoffrey Kondogbia", teams: ["Valencia", "Atletico Madrid", "Sevilla"], aliases: ["kondogbia"] },
      { name: "Jeison Murillo", teams: ["Valencia", "Barcelona"], aliases: ["murillo"] },
      { name: "Jordi Alba", teams: ["Valencia", "Barcelona"], aliases: ["alba"] },
      { name: "Kang-In Lee", teams: ["Valencia", "Mallorca"], aliases: ["kang in lee"] },
      { name: "Pablo Hernandez", teams: ["Valencia", "Celta Vigo"], aliases: ["pablo hernandez"] },
      { name: "Paco Alcacer", teams: ["Valencia", "Barcelona", "Getafe", "Villarreal"], aliases: ["alcacer"] },
      { name: "Raul Albiol", teams: ["Valencia", "Real Madrid", "Villarreal", "Getafe"], aliases: ["albiol"] },
      { name: "Santi Mina", teams: ["Valencia", "Celta Vigo"], aliases: ["mina"] },
      { name: "Sergio Canales", teams: ["Valencia", "Real Madrid", "Real Betis", "Racing Santander", "Real Sociedad"], aliases: ["canales"] },
      { name: "Ayoze Perez", teams: ["Villarreal", "Real Betis"], aliases: ["ayoze"] },
      { name: "Santi Cazorla", teams: ["Villarreal", "Malaga", "Real Oviedo", "Recreativo"], aliases: ["cazorla"] },
      { name: "David Soria", teams: ["Getafe", "Sevilla"], aliases: ["soria"] },
      { name: "Jiri Letacek", teams: ["Getafe"], aliases: ["letacek"] },
      { name: "Djene Dakonam", teams: ["Getafe"], aliases: ["djene"] },
      { name: "Omar Alderete", teams: ["Getafe", "Valencia"], aliases: ["alderete"] },
      { name: "Juan Berrocal", teams: ["Getafe"], aliases: ["berrocal"] },
      { name: "Nabil Aberdin", teams: ["Getafe"], aliases: ["aberdin"] },
      { name: "Diego Rico", teams: ["Getafe", "Real Sociedad", "Leganes"], aliases: ["diego rico"] },
      { name: "Fabrizio Angileri", teams: ["Getafe"], aliases: ["angileri"] },
      { name: "Allan Nyom", teams: ["Getafe", "Leganes", "Granada"], aliases: ["nyom"] },
      { name: "Alex Sola", teams: ["Getafe", "Real Sociedad", "Alaves"], aliases: ["sola"] },
      { name: "Mauro Arambarri", teams: ["Getafe"], aliases: ["arambarri"] },
      { name: "Luis Milla", teams: ["Getafe", "Granada", "Levante"], aliases: ["milla"] },
      { name: "Yellu Santiago", teams: ["Getafe", "Valencia"], aliases: ["yellu"] },
      { name: "Christantus Uche", teams: ["Getafe"], aliases: ["uche"] },
      { name: "Carles Alena", teams: ["Getafe", "Barcelona", "Real Betis", "Alaves"], aliases: ["alena"] },
      { name: "John Patrick", teams: ["Getafe"], aliases: ["patrick"] },
      { name: "Peter Federico", teams: ["Getafe", "Real Madrid", "Valencia"], aliases: ["peter"] },
      { name: "Borja Mayoral", teams: ["Getafe", "Real Madrid", "Levante", "Granada"], aliases: ["mayoral"] },
      { name: "Bertug Yildirim", teams: ["Getafe"], aliases: ["bertug", "yildirim"] },
      { name: "Alvaro Rodriguez", teams: ["Getafe", "Real Madrid", "Elche", "Girona"], aliases: ["alvaro"] },
      { name: "Abel Bretones", teams: ["Osasuna", "Oviedo"], aliases: ["bretones"] },
      { name: "Alberto Risco", teams: ["Getafe"], aliases: ["risco"] },
      { name: "Sergio Herrera", teams: ["Osasuna"], aliases: ["herrera"] },
      { name: "Aitor Fernandez", teams: ["Osasuna", "Villarreal", "Levante"], aliases: ["aitor"] },
      { name: "Alejandro Catena", teams: ["Osasuna", "Rayo Vallecano"], aliases: ["catena"] },
      { name: "Enzo Boyomo", teams: ["Osasuna", "Real Valladolid"], aliases: ["boyomo"] },
      { name: "Juan Cruz", teams: ["Osasuna", "Elche"], aliases: ["juan cruz"] },
      { name: "Jorge Herrando", teams: ["Osasuna"], aliases: ["herrando"] },
      { name: "Unai Garcia", teams: ["Osasuna"], aliases: ["unai garcia"] },
      { name: "Jesus Areso", teams: ["Osasuna", "Athletic Bilbao"], aliases: ["areso"] },
      { name: "Ruben Pena", teams: ["Osasuna", "Villarreal"], aliases: ["ruben pena"] },
      { name: "Lucas Torro", teams: ["Osasuna", "Real Madrid"], aliases: ["torro"] },
      { name: "Jon Moncayola", teams: ["Osasuna"], aliases: ["moncayola"] },
      { name: "Iker Munoz", teams: ["Osasuna"], aliases: ["iker munoz"] },
      { name: "Pablo Ibanez", teams: ["Osasuna"], aliases: ["pablo ibanez"] },
      { name: "Moi Gomez", teams: ["Osasuna", "Villarreal", "Getafe", "Espanyol"], aliases: ["moi gomez"] },
      { name: "Ruben Garcia", teams: ["Osasuna", "Levante", "Eibar", "Huesca"], aliases: ["ruben garcia"] },
      { name: "Raul Garcia de Haro", teams: ["Osasuna", "Real Betis", "Athletic Bilbao"], aliases: ["raul garcia"] },
      { name: "Jose Arnaiz", teams: ["Osasuna", "Barcelona", "Leganes"], aliases: ["arnaiz"] },
      { name: "Kike Barja", teams: ["Osasuna"], aliases: ["barja"] },
      { name: "Iker Benito", teams: ["Osasuna"], aliases: ["benito"] },
      { name: "Marko Dmitrovic", teams: ["Espanyol", "Sevilla", "Leganes"], aliases: ["dmitrovic"] },
      { name: "Angel Fortuno", teams: ["Espanyol"], aliases: ["fortuno"] },
      { name: "Pol Tristan", teams: ["Espanyol"], aliases: ["tristan"] },
      { name: "Llorenc Serred", teams: ["Espanyol"], aliases: ["serred"] },
      { name: "Leandro Cabrera", teams: ["Espanyol", "Getafe"], aliases: ["cabrera"] },
      { name: "Jose Salinas", teams: ["Espanyol"], aliases: ["salinas"] },
      { name: "Fernando Calero", teams: ["Espanyol"], aliases: ["calero"] },
      { name: "Carlos Romero", teams: ["Espanyol", "Villarreal"], aliases: ["carlos romero"] },
      { name: "Miguel Rubio", teams: ["Espanyol"], aliases: ["miguel rubio"] },
      { name: "Omar El Hilali", teams: ["Espanyol"], aliases: ["el hilali"] },
      { name: "Ruben Sanchez", teams: ["Espanyol"], aliases: ["ruben sanchez"] },
      { name: "Clemens Riedel", teams: ["Espanyol"], aliases: ["riedel"] },
      { name: "Jose Angel Lopez", teams: ["Espanyol"], aliases: ["jose angel"] },
      { name: "Pere Milla", teams: ["Espanyol", "Elche"], aliases: ["pere milla"] },
      { name: "Charles Pickel", teams: ["Espanyol"], aliases: ["pickel"] },
      { name: "Edu Exposito", teams: ["Espanyol"], aliases: ["exposito"] },
      { name: "Pol Lozano", teams: ["Espanyol"], aliases: ["lozano"] },
      { name: "Urko Gonzalez", teams: ["Espanyol"], aliases: ["urko"] },
      { name: "Ramon Terrats", teams: ["Espanyol", "Villarreal", "Girona"], aliases: ["terrats"] },
      { name: "Ferran Gomez", teams: ["Espanyol"], aliases: ["ferran gomez"] },
      { name: "Enrique Garcia", teams: ["Espanyol"], aliases: ["enrique garcia"] },
      { name: "Javier Puado", teams: ["Espanyol"], aliases: ["puado"] },
      { name: "Cyril Ngonge", teams: ["Espanyol"], aliases: ["ngonge"] },
      { name: "Tyrhys Dolan", teams: ["Espanyol"], aliases: ["dolan"] },
      { name: "Jofre Carreras", teams: ["Espanyol"], aliases: ["jofre"] },
      { name: "Roberto Fernandez", teams: ["Espanyol", "Malaga"], aliases: ["roberto fernandez"] },
      { name: "Antoniu Roca", teams: ["Espanyol"], aliases: ["roca"] },
      { name: "Adama Timera", teams: ["Espanyol"], aliases: ["timera"] },
      { name: "Mikel Santos", teams: ["Athletic Bilbao"], aliases: ["mikel santos"] },
      { name: "Alex Padilla", teams: ["Athletic Bilbao"], aliases: ["padilla"] },
      { name: "Yuri Berchiche", teams: ["Athletic Bilbao", "Real Sociedad"], aliases: ["yuri"] },
      { name: "Aymeric Laporte", teams: ["Athletic Bilbao"], aliases: ["laporte"] },
      { name: "Yeray Alvarez", teams: ["Athletic Bilbao"], aliases: ["yeray"] },
      { name: "Inigo Lekue", teams: ["Athletic Bilbao"], aliases: ["lekue"] },
      { name: "Andoni Gorosabel", teams: ["Athletic Bilbao", "Real Sociedad", "Alaves"], aliases: ["gorosabel"] },
      { name: "Aitor Paredes", teams: ["Athletic Bilbao"], aliases: ["paredes"] },
      { name: "Unai Egiluz", teams: ["Athletic Bilbao"], aliases: ["egiluz"] },
      { name: "Adama Boiro", teams: ["Athletic Bilbao", "Osasuna"], aliases: ["boiro"] },
      { name: "Aimar Dunabeitia", teams: ["Athletic Bilbao"], aliases: ["dunabeitia"] },
      { name: "Inigo Ruiz de Galarreta", teams: ["Athletic Bilbao", "Mallorca", "Las Palmas"], aliases: ["galarreta"] },
      { name: "Mikel Vesga", teams: ["Athletic Bilbao", "Leganes"], aliases: ["vesga"] },
      { name: "Robert Navarro", teams: ["Athletic Bilbao", "Real Sociedad"], aliases: ["robert navarro"] },
      { name: "Benat Prados", teams: ["Athletic Bilbao"], aliases: ["prados"] },
      { name: "Unai Gomez", teams: ["Athletic Bilbao"], aliases: ["unai gomez"] },
      { name: "Mikel Jauregizar", teams: ["Athletic Bilbao"], aliases: ["jauregizar"] },
      { name: "Alex Berenguer", teams: ["Athletic Bilbao", "Osasuna"], aliases: ["berenguer"] },
      { name: "Gorka Guruzeta", teams: ["Athletic Bilbao"], aliases: ["guruzeta"] },
      { name: "Nico Serrano", teams: ["Athletic Bilbao"], aliases: ["nico serrano"] },
      { name: "Elijah Gift", teams: ["Athletic Bilbao"], aliases: ["gift"] },
      { name: "Juan Carlos", teams: ["Girona"], aliases: ["juan carlos"] },
      { name: "Paulo Gazzaniga", teams: ["Girona", "Rayo Vallecano", "Elche"], aliases: ["gazzaniga"] },
      { name: "Ruben Blanco", teams: ["Girona", "Celta Vigo"], aliases: ["ruben blanco"] },
      { name: "Vladyslav Krapyvtsov", teams: ["Girona"], aliases: ["krapyvtsov"] },
      { name: "Aleksandar Andreev", teams: ["Girona"], aliases: ["andreev"] },
      { name: "Alex Moreno", teams: ["Girona", "Real Betis", "Rayo Vallecano", "Mallorca"], aliases: ["alex moreno"] },
      { name: "Daley Blind", teams: ["Girona"], aliases: ["blind"] },
      { name: "David Lopez", teams: ["Girona", "Espanyol", "Athletic Bilbao"], aliases: ["david lopez"] },
      { name: "Axel Witsel", teams: ["Girona", "Atletico Madrid"], aliases: ["witsel"] },
      { name: "Alejandro Frances", teams: ["Girona"], aliases: ["frances"] },
      { name: "Arnau Martinez", teams: ["Girona"], aliases: ["arnau martinez"] },
      { name: "Vitor Reis", teams: ["Girona"], aliases: ["vitor reis"] },
      { name: "Hugo Rincon", teams: ["Girona"], aliases: ["hugo rincon"] },
      { name: "Pol Arnau", teams: ["Girona"], aliases: ["pol arnau"] },
      { name: "Gibert Jordana", teams: ["Girona"], aliases: ["jordana"] },
      { name: "Antonio Salguero", teams: ["Girona"], aliases: ["salguero"] },
      { name: "Thomas Lemar", teams: ["Girona", "Atletico Madrid"], aliases: ["lemar"] },
      { name: "Donny van de Beek", teams: ["Girona"], aliases: ["van de beek"] },
      { name: "Azzedine Ounahi", teams: ["Girona"], aliases: ["ounahi"] },
      { name: "Joel Roca", teams: ["Girona"], aliases: ["joel roca"] },
      { name: "Claudio Echeverri", teams: ["Girona"], aliases: ["echeverri"] },
      { name: "Lancinet Kourouma", teams: ["Girona"], aliases: ["kourouma"] },
      { name: "Portu", teams: ["Girona", "Real Sociedad", "Getafe"], aliases: ["portu"] },
      { name: "Abel Ruiz", teams: ["Girona"], aliases: ["abel ruiz"] },
      { name: "Vladyslav Vanat", teams: ["Girona"], aliases: ["vanat"] },
      { name: "Juan Arango Jr", teams: ["Girona"], aliases: ["arango jr"] },
      { name: "Papa Dame Ba", teams: ["Girona"], aliases: ["papa dame"] },
      { name: "Javier Sarasa", teams: ["Girona"], aliases: ["sarasa"] },
      { name: "Daniel Cardenas", teams: ["Rayo Vallecano", "Levante"], aliases: ["cardenas"] },
      { name: "Augusto Batalla", teams: ["Rayo Vallecano", "Granada"], aliases: ["batalla"] },
      { name: "Adrian Molina", teams: ["Rayo Vallecano"], aliases: ["adrian molina"] },
      { name: "Juanpe", teams: ["Rayo Vallecano"], aliases: ["juanpe"] },
      { name: "Florian Lejeune", teams: ["Rayo Vallecano", "Alaves", "Eibar"], aliases: ["lejeune"] },
      { name: "Ivan Balliu", teams: ["Rayo Vallecano"], aliases: ["balliu"] },
      { name: "Pacha Espino", teams: ["Rayo Vallecano", "Cadiz"], aliases: ["espino", "pacha espino"] },
      { name: "Luiz Felipe", teams: ["Rayo Vallecano", "Real Betis"], aliases: ["luiz felipe"] },
      { name: "Abdul Mumin", teams: ["Rayo Vallecano"], aliases: ["mumin"] },
      { name: "Sergio Lozano", teams: ["Rayo Vallecano"], aliases: ["sergio lozano"] },
      { name: "Andrei Ratiu", teams: ["Rayo Vallecano"], aliases: ["ratiu"] },
      { name: "Pep Chavarria", teams: ["Rayo Vallecano"], aliases: ["chavarria"] },
      { name: "Jozhua Vertrouwd", teams: ["Rayo Vallecano"], aliases: ["vertrouwd"] },
      { name: "Nobel Mendy", teams: ["Rayo Vallecano", "Real Betis"], aliases: ["mendy", "nobel mendy"] },
      { name: "Marco de las Sias", teams: ["Rayo Vallecano"], aliases: ["marco de las sias"] },
      { name: "Oscar Trejo", teams: ["Rayo Vallecano", "Mallorca", "Elche"], aliases: ["trejo"] },
      { name: "Alvaro Garcia", teams: ["Rayo Vallecano", "Cadiz"], aliases: ["alvaro garcia"] },
      { name: "Diego Mendez", teams: ["Rayo Vallecano"], aliases: ["diego mendez"] },
      { name: "Gerard Gumbau", teams: ["Rayo Vallecano", "Granada", "Elche", "Leganes"], aliases: ["gumbau"] },
      { name: "Unai Lopez", teams: ["Rayo Vallecano", "Athletic Bilbao", "Leganes"], aliases: ["unai lopez"] },
      { name: "Pedro Diaz", teams: ["Rayo Vallecano"], aliases: ["pedro diaz"] },
      { name: "Isi Palazon", teams: ["Rayo Vallecano"], aliases: ["isi", "isi palazon"] },
      { name: "Oscar Valentin", teams: ["Rayo Vallecano"], aliases: ["oscar valentin"] },
      { name: "Randy Nteka", teams: ["Rayo Vallecano", "Elche"], aliases: ["nteka"] },
      { name: "Pathe Ciss", teams: ["Rayo Vallecano"], aliases: ["ciss", "pathe ciss"] },
      { name: "Fran Perez", teams: ["Rayo Vallecano", "Valencia"], aliases: ["fran perez"] },
      { name: "Samu Becerra", teams: ["Rayo Vallecano"], aliases: ["samu becerra"] },
      { name: "Marco Roman", teams: ["Rayo Vallecano"], aliases: ["marco roman"] },
      { name: "Jorge de Frutos", teams: ["Rayo Vallecano", "Levante", "Real Madrid"], aliases: ["de frutos"] },
      { name: "Sergio Camello", teams: ["Rayo Vallecano", "Atletico Madrid"], aliases: ["camello"] },
      { name: "Alexandre Alemao", teams: ["Rayo Vallecano"], aliases: ["alemao"] },
      { name: "Carlos Martin", teams: ["Rayo Vallecano", "Atletico Madrid", "Alaves"], aliases: ["carlos martin"] },
      { name: "Cristian Rivero", teams: ["Valencia"], aliases: ["cristian rivero"] },
      { name: "Stole Dimitrievski", teams: ["Valencia", "Rayo Vallecano"], aliases: ["dimitrievski"] },
      { name: "Pere Garcia Bauza", teams: ["Valencia"], aliases: ["pere garcia"] },
      { name: "Julen Agirrezabala", teams: ["Valencia", "Athletic Bilbao"], aliases: ["agirrezabala"] },
      { name: "Vicent Abril", teams: ["Valencia"], aliases: ["vicent abril"] },
      { name: "Dimitri Foulquier", teams: ["Valencia", "Getafe", "Granada"], aliases: ["foulquier"] },
      { name: "Renzo Saravia", teams: ["Valencia"], aliases: ["saravia"] },
      { name: "Jesus Vazquez", teams: ["Valencia"], aliases: ["jesus vazquez"] },
      { name: "Eray Comert", teams: ["Valencia"], aliases: ["comert"] },
      { name: "Mouctar Diakhaby", teams: ["Valencia"], aliases: ["diakhaby"] },
      { name: "Unai Nunez", teams: ["Valencia", "Athletic Bilbao", "Mallorca"], aliases: ["unai nunez"] },
      { name: "Thierry Correia", teams: ["Valencia"], aliases: ["correia"] },
      { name: "Copete", teams: ["Valencia"], aliases: ["copete"] },
      { name: "Cesar Tarrega", teams: ["Valencia"], aliases: ["tarrega"] },
      { name: "Ruben Iranzo", teams: ["Valencia"], aliases: ["iranzo"] },
      { name: "Marcos Navarro", teams: ["Valencia"], aliases: ["marcos navarro"] },
      { name: "Alex Panach", teams: ["Valencia"], aliases: ["panach"] },
      { name: "Joel Fontanet", teams: ["Valencia"], aliases: ["fontanet"] },
      { name: "Aaron Mayol", teams: ["Valencia"], aliases: ["mayol"] },
      { name: "Baptiste Santamaria", teams: ["Valencia", "Osasuna"], aliases: ["santamaria", "baptiste santamaria"] },
      { name: "Guido Rodriguez", teams: ["Valencia", "Real Betis"], aliases: ["guido rodriguez", "guido"] },
      { name: "Filip Ugrinic", teams: ["Valencia"], aliases: ["ugrinic"] },
      { name: "Lucas Beltran", teams: ["Valencia", "Fiorentina"], aliases: ["lucas beltran"] },
      { name: "Andre Almeida", teams: ["Valencia"], aliases: ["andre almeida"] },
      { name: "Lucas Nunez", teams: ["Valencia"], aliases: ["lucas nunez"] },
      { name: "Arnaut Danjuma", teams: ["Valencia", "Villarreal"], aliases: ["danjuma"] },
      { name: "Dani Raba", teams: ["Valencia", "Villarreal", "Eibar"], aliases: ["raba"] },
      { name: "Luis Rioja", teams: ["Valencia", "Alaves", "Osasuna", "Granada", "Eibar"], aliases: ["rioja"] },
      { name: "Largie Ramazani", teams: ["Valencia", "Almeria"], aliases: ["ramazani"] },
      { name: "Marc Jurado", teams: ["Valencia", "Barcelona"], aliases: ["marc jurado"] },
      { name: "Mario Dominguez", teams: ["Valencia"], aliases: ["mario dominguez"] },
      { name: "David Otorbi", teams: ["Valencia"], aliases: ["otorbi"] },
      { name: "Aimar Blazquez", teams: ["Valencia"], aliases: ["blazquez"] },
      { name: "Ivan Cuellar", teams: ["Mallorca", "Leganes"], aliases: ["cuellar", "ivan cuellar"] },
      { name: "Lucas Bergstrom", teams: ["Mallorca"], aliases: ["bergstrom"] },
      { name: "Nil Torreguitart", teams: ["Mallorca"], aliases: ["torreguitart"] },
      { name: "Leo Roman", teams: ["Mallorca"], aliases: ["leo roman"] },
      { name: "Rares Vlad", teams: ["Mallorca"], aliases: ["vlad"] },
      { name: "Javier Olaizola", teams: ["Mallorca"], aliases: ["olaizola"] },
      { name: "Johan Mojica", teams: ["Mallorca", "Elche", "Getafe"], aliases: ["mojica"] },
      { name: "Luis Orejuela", teams: ["Mallorca", "Cadiz"], aliases: ["orejuela"] },
      { name: "Martin Valjent", teams: ["Mallorca"], aliases: ["valjent"] },
      { name: "Antonio Raillo", teams: ["Mallorca"], aliases: ["raillo"] },
      { name: "Pablo Maffeo", teams: ["Mallorca", "Girona"], aliases: ["maffeo"] },
      { name: "Toni Lato", teams: ["Mallorca", "Valencia", "Rayo Vallecano"], aliases: ["toni lato"] },
      { name: "Marash Kumbulla", teams: ["Mallorca", "Espanyol"], aliases: ["kumbulla"] },
      { name: "Mateu Morey", teams: ["Mallorca"], aliases: ["morey"] },
      { name: "Iliesse Salhi", teams: ["Mallorca"], aliases: ["salhi"] },
      { name: "Leo Sanchez", teams: ["Mallorca"], aliases: ["leo sanchez"] },
      { name: "Omar Mascarell", teams: ["Mallorca", "Eibar", "Granada"], aliases: ["mascarell"] },
      { name: "Samu Costa", teams: ["Mallorca"], aliases: ["samu costa"] },
      { name: "Manu Morlanes", teams: ["Mallorca", "Villarreal"], aliases: ["morlanes"] },
      { name: "Antonio Sanchez", teams: ["Mallorca", "Granada"], aliases: ["antonio sanchez"] },
      { name: "Jan Salas", teams: ["Mallorca"], aliases: ["jan salas"] },
      { name: "Jandro Garcia", teams: ["Mallorca"], aliases: ["jandro"] },
      { name: "Abdon Prats", teams: ["Mallorca"], aliases: ["abdon", "abdon prats"] },
      { name: "Takuma Asano", teams: ["Mallorca"], aliases: ["asano"] },
      { name: "Vedat Muriqi", teams: ["Mallorca", "Real Sociedad"], aliases: ["muriqi"] },
      { name: "Zito Luvumbo", teams: ["Mallorca", "Celta Vigo"], aliases: ["luvumbo"] },
      { name: "Javi Llabres", teams: ["Mallorca"], aliases: ["llabres"] },
      { name: "Mateo Joseph", teams: ["Mallorca"], aliases: ["mateo joseph"] },
      { name: "Justin-Noel Kalumba", teams: ["Mallorca"], aliases: ["kalumba"] },
      { name: "Jan Virgili", teams: ["Mallorca"], aliases: ["virgili"] },
      { name: "Rafael Romero", teams: ["Sevilla"], aliases: ["rafael romero"] },
      { name: "Odisseas Vlachodimos", teams: ["Sevilla"], aliases: ["vlachodimos"] },
      { name: "Alberto Flores", teams: ["Sevilla"], aliases: ["alberto flores"] },
      { name: "Orjan Nyland", teams: ["Sevilla"], aliases: ["nyland"] },
      { name: "Lorenzo Luchino", teams: ["Sevilla"], aliases: ["luchino"] },
      { name: "Cesar Azpilicueta", teams: ["Sevilla"], aliases: ["azpilicueta"] },
      { name: "Marcao", teams: ["Sevilla", "Getafe"], aliases: ["marcao"] },
      { name: "Fabio Cardoso", teams: ["Sevilla"], aliases: ["fabio cardoso"] },
      { name: "Gabriel Suazo", teams: ["Sevilla", "Celta Vigo"], aliases: ["suazo"] },
      { name: "Jose Angel Carmona", teams: ["Sevilla"], aliases: ["carmona", "jose angel carmona"] },
      { name: "Federico Gattoni", teams: ["Sevilla"], aliases: ["gattoni"] },
      { name: "Tanguy Nianzou", teams: ["Sevilla"], aliases: ["nianzou"] },
      { name: "Andres Castrin", teams: ["Sevilla"], aliases: ["castrin"] },
      { name: "Enrique Salas", teams: ["Sevilla"], aliases: ["enrique salas"] },
      { name: "Oso", teams: ["Sevilla"], aliases: ["oso"] },
      { name: "Iker Ortin", teams: ["Sevilla"], aliases: ["ortin"] },
      { name: "Nemanja Gudelj", teams: ["Sevilla"], aliases: ["gudelj"] },
      { name: "Joan Jordan", teams: ["Sevilla", "Eibar", "Alaves"], aliases: ["joan jordan"] },
      { name: "Djibril Sow", teams: ["Sevilla"], aliases: ["sow"] },
      { name: "Ruben Vargas", teams: ["Sevilla"], aliases: ["ruben vargas"] },
      { name: "Batista Mendy", teams: ["Sevilla"], aliases: ["batista mendy"] },
      { name: "Lucien Agoume", teams: ["Sevilla", "Leganes"], aliases: ["agoume"] },
      { name: "Juanlu Sanchez", teams: ["Sevilla"], aliases: ["juanlu"] },
      { name: "Manu Bueno", teams: ["Sevilla"], aliases: ["manu bueno"] },
      { name: "Edu Altozano", teams: ["Sevilla"], aliases: ["altozano"] },
      { name: "Alexis Ruano", teams: ["Sevilla", "Valencia", "Getafe", "Alaves", "Malaga"], aliases: ["alexis"] },
      { name: "Neal Maupay", teams: ["Sevilla"], aliases: ["maupay"] },
      { name: "Chidera Ejuke", teams: ["Sevilla", "Celta Vigo"], aliases: ["ejuke"] },
      { name: "Akor Adams", teams: ["Sevilla"], aliases: ["akor adams"] },
      { name: "Peque", teams: ["Sevilla"], aliases: ["peque"] },
      { name: "Miguel Sierra", teams: ["Sevilla"], aliases: ["miguel sierra"] },
      { name: "Alex Costa", teams: ["Sevilla"], aliases: ["alex costa"] },
      { name: "Raul Fernandez", teams: ["Alaves", "Rayo Vallecano"], aliases: ["raul fernandez"] },
      { name: "Antonio Sivera", teams: ["Alaves", "Valencia"], aliases: ["sivera"] },
      { name: "Gregoire Swiderski", teams: ["Alaves"], aliases: ["swiderski"] },
      { name: "Ruben Montero", teams: ["Alaves"], aliases: ["ruben montero"] },
      { name: "Ville Koski", teams: ["Alaves"], aliases: ["koski"] },
      { name: "Jonny", teams: ["Alaves", "Villarreal", "Celta Vigo"], aliases: ["jonny"] },
      { name: "Facundo Garces", teams: ["Alaves"], aliases: ["garces"] },
      { name: "Nahuel Tenaglia", teams: ["Alaves"], aliases: ["tenaglia"] },
      { name: "Victor Parada", teams: ["Alaves"], aliases: ["victor parada"] },
      { name: "Paco Sanz", teams: ["Alaves", "Levante"], aliases: ["paco sanz"] },
      { name: "Angel Perez", teams: ["Alaves"], aliases: ["angel perez"] },
      { name: "Carlos Ballestero", teams: ["Alaves"], aliases: ["ballestero"] },
      { name: "Egoitz Munoz", teams: ["Alaves"], aliases: ["egoitz munoz"] },
      { name: "Youssef Lekhedim", teams: ["Alaves"], aliases: ["lekhedim"] },
      { name: "Alvaro Garcia Alaves", teams: ["Alaves"], aliases: ["alvaro garcia alaves"] },
      { name: "Xanet Olaiz", teams: ["Alaves"], aliases: ["olaiz"] },
      { name: "Carlos Protesoni", teams: ["Alaves"], aliases: ["protesoni"] },
      { name: "Jon Guridi", teams: ["Alaves", "Real Sociedad"], aliases: ["guridi"] },
      { name: "Ander Guevara", teams: ["Alaves", "Real Sociedad"], aliases: ["guevara"] },
      { name: "Antonio Blanco", teams: ["Alaves", "Real Madrid", "Granada", "Getafe"], aliases: ["antonio blanco"] },
      { name: "Calebe", teams: ["Alaves"], aliases: ["calebe"] },
      { name: "Lander Pinillos", teams: ["Alaves"], aliases: ["pinillos"] },
      { name: "Toni Martinez", teams: ["Alaves", "Valencia", "Eibar", "Porto"], aliases: ["toni martinez"] },
      { name: "Mariano", teams: ["Alaves", "Real Madrid", "Lyon", "Malaga"], aliases: ["mariano diaz", "mariano"] },
      { name: "Lucas Boye", teams: ["Alaves", "Elche", "Valencia"], aliases: ["boye"] },
      { name: "Ibrahim Diabate", teams: ["Alaves"], aliases: ["diabate"] },
      { name: "Abde Rebbach", teams: ["Alaves"], aliases: ["rebbach"] },
      { name: "Diego Morcillo", teams: ["Alaves"], aliases: ["morcillo"] },
      { name: "Aitor Manas", teams: ["Alaves"], aliases: ["manas"] },
      { name: "Izei Hernandez", teams: ["Alaves"], aliases: ["izei"] },
      { name: "Matias Dituro", teams: ["Elche", "Celta Vigo"], aliases: ["dituro"] },
      { name: "Alejandro Iturbe", teams: ["Elche"], aliases: ["iturbe"] },
      { name: "Pedro Bigas", teams: ["Elche", "Espanyol", "Las Palmas"], aliases: ["bigas"] },
      { name: "Leo Petrot", teams: ["Elche", "Valencia", "Osasuna"], aliases: ["petrot"] },
      { name: "Victor Chust", teams: ["Elche", "Real Madrid", "Cadiz"], aliases: ["chust"] },
      { name: "Adria Pedrosa", teams: ["Elche", "Espanyol"], aliases: ["adria pedrosa"] },
      { name: "John Donald", teams: ["Elche"], aliases: ["john donald"] },
      { name: "David Affengruber", teams: ["Elche"], aliases: ["affengruber"] },
      { name: "David Delgado", teams: ["Elche", "Osasuna"], aliases: ["david delgado"] },
      { name: "Buba Sangare", teams: ["Elche"], aliases: ["sangare"] },
      { name: "Bema Sina", teams: ["Elche"], aliases: ["bema sina"] },
      { name: "Albert Niculaesei", teams: ["Elche"], aliases: ["niculaesei"] },
      { name: "Nico Salvador", teams: ["Elche"], aliases: ["nico salvador"] },
      { name: "Pablo Felipe", teams: ["Elche"], aliases: ["pablo felipe"] },
      { name: "Josan", teams: ["Elche", "Las Palmas", "Osasuna"], aliases: ["josan"] },
      { name: "Aleix Febas", teams: ["Elche", "Rayo Vallecano", "Mallorca"], aliases: ["febas"] },
      { name: "Gonzalo Villar", teams: ["Elche", "Granada", "Getafe"], aliases: ["gonzalo villar"] },
      { name: "Marc Aguado", teams: ["Elche", "Mallorca", "Osasuna"], aliases: ["marc aguado"] },
      { name: "Federico Redondo", teams: ["Elche"], aliases: ["federico redondo"] },
      { name: "Martim Neto", teams: ["Elche"], aliases: ["martim neto"] },
      { name: "Antonio Martinez", teams: ["Elche", "Villarreal", "Osasuna"], aliases: ["antonio martinez"] },
      { name: "Alex Herraiz", teams: ["Elche"], aliases: ["herraiz"] },
      { name: "Andre Silva", teams: ["Elche", "Real Sociedad"], aliases: ["andre silva"] },
      { name: "Rafa Mir", teams: ["Elche", "Sevilla", "Villarreal", "Granada"], aliases: ["rafa mir"] },
      { name: "Grady Diangana", teams: ["Elche"], aliases: ["diangana"] },
      { name: "Jose Antonio Morente", teams: ["Elche", "Osasuna"], aliases: ["morente"] },
      { name: "German Valera", teams: ["Elche", "Barcelona"], aliases: ["german valera"] },
      { name: "Lucas Cepeda", teams: ["Elche"], aliases: ["cepeda"] },
      { name: "Yago Alonso", teams: ["Elche"], aliases: ["yago alonso"] },
      { name: "Adam Boayar", teams: ["Elche"], aliases: ["boayar"] },
      { name: "Daniel Ballesteros", teams: ["Elche"], aliases: ["daniel ballesteros"] },
      { name: "Alex Sanchez Elche", teams: ["Elche"], aliases: ["alex sanchez elche"] },
      { name: "Mathew Ryan", teams: ["Levante"], aliases: ["mathew ryan"] },
      { name: "Pablo Cunat", teams: ["Levante"], aliases: ["cunat"] },
      { name: "Alejandro Primo", teams: ["Levante"], aliases: ["primo"] },
      { name: "Cayetano", teams: ["Levante"], aliases: ["cayetano"] },
      { name: "Jeremy Toljan", teams: ["Levante", "Osasuna"], aliases: ["toljan"] },
      { name: "Matias Moreno", teams: ["Levante"], aliases: ["matias moreno"] },
      { name: "Victor Garcia Levante", teams: ["Levante"], aliases: ["victor garcia levante"] },
      { name: "Unai Elgezabel", teams: ["Levante"], aliases: ["elgezabel"] },
      { name: "Diego Pampin", teams: ["Levante"], aliases: ["pampin"] },
      { name: "Adrian de la Fuente", teams: ["Levante"], aliases: ["adrian de la fuente"] },
      { name: "Manu Sanchez", teams: ["Levante", "Atletico Madrid", "Osasuna"], aliases: ["manu sanchez"] },
      { name: "Alan Matturro", teams: ["Levante"], aliases: ["matturro"] },
      { name: "Martin Krug", teams: ["Levante"], aliases: ["krug"] },
      { name: "Nacho Perez", teams: ["Levante"], aliases: ["nacho perez"] },
      { name: "Huseini Nakoha", teams: ["Levante"], aliases: ["nakoha"] },
      { name: "Carlos Alvarez Levante", teams: ["Levante"], aliases: ["carlos alvarez levante"] },
      { name: "Kervin Arriaga", teams: ["Levante"], aliases: ["arriaga"] },
      { name: "Roger Brugue", teams: ["Levante"], aliases: ["brugue"] },
      { name: "Orio Rey", teams: ["Levante"], aliases: ["orio rey"] },
      { name: "Pablo Martinez Levante", teams: ["Levante"], aliases: ["pablo martinez levante"] },
      { name: "Unai Vencedor", teams: ["Levante", "Athletic Bilbao", "Granada", "Valencia"], aliases: ["vencedor"] },
      { name: "Jon Ander Olasagasti", teams: ["Levante"], aliases: ["olasagasti"] },
      { name: "Ugo Raghouber", teams: ["Levante"], aliases: ["raghouber"] },
      { name: "Dani Cervera", teams: ["Levante"], aliases: ["dani cervera"] },
      { name: "Joan Ruiz Agustina", teams: ["Levante"], aliases: ["joan ruiz"] },
      { name: "Pablo Roson", teams: ["Levante", "Deportivo La Coruna"], aliases: ["roson"] },
      { name: "Jose Luis Morales", teams: ["Levante"], aliases: ["morales", "jose luis morales"] },
      { name: "Iker Losada", teams: ["Levante", "Celta Vigo"], aliases: ["losada"] },
      { name: "Ivan Romero", teams: ["Levante", "Sevilla", "Espanyol"], aliases: ["ivan romero"] },
      { name: "Tai Abed", teams: ["Levante"], aliases: ["tai abed"] },
      { name: "Etta Eyong", teams: ["Levante"], aliases: ["eyong"] },
      { name: "Carlos Espi", teams: ["Levante"], aliases: ["espi"] },
      { name: "Paco Cortes", teams: ["Levante"], aliases: ["paco cortes"] },
      { name: "Kareem Tunde", teams: ["Levante"], aliases: ["tunde"] },
      { name: "Aaron Escandell", teams: ["Real Oviedo", "Valencia", "Getafe", "Villarreal"], aliases: ["escandell"] },
      { name: "Horatiu Moldovan", teams: ["Real Oviedo", "Atletico Madrid"], aliases: ["moldovan"] },
      { name: "Miguel Narvaez", teams: ["Real Oviedo"], aliases: ["narvaez"] },
      { name: "Diego Espinosa", teams: ["Real Oviedo"], aliases: ["diego espinosa"] },
      { name: "Dani Calvo", teams: ["Real Oviedo", "Villarreal", "Osasuna"], aliases: ["dani calvo"] },
      { name: "David Costas", teams: ["Real Oviedo", "Celta Vigo", "Granada"], aliases: ["costas"] },
      { name: "Eric Bailly", teams: ["Real Oviedo", "Villarreal"], aliases: ["bailly"] },
      { name: "Lucas Oviedo", teams: ["Real Oviedo"], aliases: ["lucas oviedo"] },
      { name: "David Carmo", teams: ["Real Oviedo"], aliases: ["carmo"] },
      { name: "Nacho Vidal", teams: ["Real Oviedo", "Osasuna", "Valencia"], aliases: ["nacho vidal"] },
      { name: "Javi Lopez Oviedo", teams: ["Real Oviedo"], aliases: ["javi lopez oviedo"] },
      { name: "Rahim Alhassane", teams: ["Real Oviedo"], aliases: ["alhassane"] },
      { name: "Marco Esteban", teams: ["Real Oviedo"], aliases: ["marco esteban"] },
      { name: "Omar Falah", teams: ["Real Oviedo"], aliases: ["falah"] },
      { name: "Adri Fernandez", teams: ["Real Oviedo"], aliases: ["adri fernandez"] },
      { name: "Leander Dendoncker", teams: ["Real Oviedo", "Villarreal"], aliases: ["dendoncker"] },
      { name: "Santiago Colombatto", teams: ["Real Oviedo"], aliases: ["colombatto"] },
      { name: "Alberto Reina", teams: ["Real Oviedo"], aliases: ["alberto reina"] },
      { name: "Luka Ilic", teams: ["Real Oviedo", "Malaga"], aliases: ["luka ilic"] },
      { name: "Kwasi Sibo", teams: ["Real Oviedo"], aliases: ["sibo"] },
      { name: "Nicolas Fonseca", teams: ["Real Oviedo"], aliases: ["nicolas fonseca"] },
      { name: "Diego Menendez", teams: ["Real Oviedo"], aliases: ["diego menendez"] },
      { name: "Cheli", teams: ["Real Oviedo"], aliases: ["cheli"] },
      { name: "Pablo Agudin", teams: ["Real Oviedo"], aliases: ["agudin"] },
      { name: "Ovie Ejaria", teams: ["Real Oviedo"], aliases: ["ejaria"] },
      { name: "Haissem Hassan", teams: ["Real Oviedo"], aliases: ["hassan"] },
      { name: "Federico Vinas", teams: ["Real Oviedo", "Celta Vigo"], aliases: ["vinas"] },
      { name: "Lamine Gueye", teams: ["Real Oviedo"], aliases: ["lamine gueye"] },
      { name: "Thiago Borbas", teams: ["Real Oviedo"], aliases: ["borbas"] },
      { name: "Ilyas Chaira", teams: ["Real Oviedo"], aliases: ["chaira"] },
      { name: "Thiago Fernandez Oviedo", teams: ["Real Oviedo"], aliases: ["thiago fernandez oviedo"] },
      { name: "Alex Fores", teams: ["Real Oviedo"], aliases: ["fores"] },
      { name: "Dimitrios Stamatakis", teams: ["Osasuna"], aliases: ["stamatakis"] },
      { name: "Javi Galan", teams: ["Osasuna", "Celta Vigo", "Atletico Madrid", "Huesca"], aliases: ["javi galan"] },
      { name: "Valentin Rosier", teams: ["Osasuna", "Celta Vigo", "Real Sociedad"], aliases: ["rosier"] },
      { name: "Mikel Serrano", teams: ["Osasuna"], aliases: ["mikel serrano"] },
      { name: "Inigo Arguibide", teams: ["Osasuna"], aliases: ["arguibide"] },
      { name: "Raul Chasco", teams: ["Osasuna"], aliases: ["chasco"] },
      { name: "Unai Santos", teams: ["Osasuna"], aliases: ["unai santos"] },
      { name: "Asier Osambela", teams: ["Osasuna"], aliases: ["osambela"] },
      { name: "Jon Garcia Osasuna", teams: ["Osasuna"], aliases: ["jon garcia osasuna"] },
      { name: "Mauro Echegoyen", teams: ["Osasuna"], aliases: ["echegoyen"] },
      { name: "Enrique Barja", teams: ["Osasuna"], aliases: ["barja"] },
      { name: "Raul Moro", teams: ["Osasuna", "Real Madrid", "Real Valladolid"], aliases: ["raul moro"] },
      { name: "Roberto Arroyo", teams: ["Osasuna", "Malaga", "Granada", "Cadiz"], aliases: ["arroyo"] },
      { name: "Victor Munoz", teams: ["Osasuna"], aliases: ["victor munoz"] },
      { name: "Martin Pedroarena", teams: ["Osasuna"], aliases: ["pedroarena"] },
      { name: "Aly Doumbia", teams: ["Osasuna"], aliases: ["doumbia"] },
      { name: "Jorge Benito Getafe", teams: ["Getafe"], aliases: ["jorge benito getafe"] },
      { name: "Diego Ferrer", teams: ["Getafe"], aliases: ["diego ferrer"] },
      { name: "Kiko Femenia", teams: ["Getafe", "Villarreal", "Alaves"], aliases: ["femenia", "kiko"] },
      { name: "Domingos Duarte", teams: ["Getafe", "Granada"], aliases: ["domingos duarte"] },
      { name: "Abdel Abqar", teams: ["Getafe"], aliases: ["abqar"] },
      { name: "Juan Iglesias", teams: ["Getafe"], aliases: ["juan iglesias"] },
      { name: "Zaid Romero", teams: ["Getafe"], aliases: ["zaid romero"] },
      { name: "Marc Vilaplana", teams: ["Getafe"], aliases: ["vilaplana"] },
      { name: "Lucas Laso", teams: ["Getafe"], aliases: ["lucas laso"] },
      { name: "Sebastian Boselli", teams: ["Getafe"], aliases: ["boselli"] },
      { name: "Ismael Bekhoucha", teams: ["Getafe"], aliases: ["bekhoucha"] },
      { name: "Davinchi", teams: ["Getafe"], aliases: ["davinchi"] },
      { name: "Jorge Montes", teams: ["Getafe"], aliases: ["jorge montes"] },
      { name: "Tito", teams: ["Getafe"], aliases: ["tito"] },
      { name: "Javi Munoz", teams: ["Getafe"], aliases: ["javi munoz"] },
      { name: "Veljko Birmancevic", teams: ["Getafe"], aliases: ["birmancevic"] },
      { name: "Hugo Solozabal", teams: ["Getafe"], aliases: ["solozabal"] },
      { name: "Mario Martin Getafe", teams: ["Getafe"], aliases: ["mario martin getafe"] },
      { name: "Alejandro Mestanza", teams: ["Getafe"], aliases: ["mestanza"] },
      { name: "Adrian Riquelme", teams: ["Getafe"], aliases: ["riquelme"] },
      { name: "Juanmi", teams: ["Getafe", "Real Betis", "Malaga", "Real Sociedad", "Sevilla"], aliases: ["juanmi"] },
      { name: "Abu Kamara", teams: ["Getafe"], aliases: ["abu kamara"] },
      { name: "Martin Satriano", teams: ["Getafe", "Celta Vigo"], aliases: ["satriano"] },
      { name: "Luis Vazquez", teams: ["Getafe"], aliases: ["luis vazquez"] },
      { name: "Alex Sancris", teams: ["Getafe"], aliases: ["sancris"] },
      { name: "Joselu Perez", teams: ["Getafe"], aliases: ["joselu perez"] },
      { name: "Adrian Liso", teams: ["Getafe"], aliases: ["liso"] },
      { name: "Yassin Tallal", teams: ["Getafe"], aliases: ["tallal"] },
      { name: "Mykyta Aleksandrov", teams: ["Getafe"], aliases: ["aleksandrov"] },
      { name: "Aitor Fraga", teams: ["Real Sociedad"], aliases: ["aitor fraga"] },
      { name: "Theo Folgado", teams: ["Real Sociedad"], aliases: ["folgado"] },
      { name: "Duje Caleta-Car", teams: ["Real Sociedad"], aliases: ["caleta car"] },
      { name: "Jon Aramburu", teams: ["Real Sociedad"], aliases: ["aramburu"] },
      { name: "Kazunari Kita", teams: ["Real Sociedad"], aliases: ["kita"] },
      { name: "Jon Martin", teams: ["Real Sociedad"], aliases: ["jon martin"] },
      { name: "Inaki Ruperez", teams: ["Real Sociedad"], aliases: ["ruperez"] },
      { name: "Luken Beitia", teams: ["Real Sociedad"], aliases: ["beitia"] },
      { name: "Yangel Herrera", teams: ["Real Sociedad", "Granada"], aliases: ["yangel herrera", "yangel"] },
      { name: "Pablo Marin", teams: ["Real Sociedad"], aliases: ["pablo marin"] },
      { name: "Alex Lebarbier", teams: ["Real Sociedad"], aliases: ["lebarbier"] },
      { name: "Jon Gorrotxategi", teams: ["Real Sociedad"], aliases: ["gorrotxategi"] },
      { name: "Lander Astiazaran", teams: ["Real Sociedad"], aliases: ["astiazaran"] },
      { name: "Tomas Carbonell", teams: ["Real Sociedad"], aliases: ["carbonell"] },
      { name: "Ibai Aguirre", teams: ["Real Sociedad"], aliases: ["ibai aguirre"] },
      { name: "Goncalo Guedes", teams: ["Real Sociedad", "Valencia"], aliases: ["guedes"] },
      { name: "Sergio Gomez", teams: ["Real Sociedad", "Barcelona"], aliases: ["sergio gomez"] },
      { name: "Wesley Ribeiro", teams: ["Real Sociedad"], aliases: ["wesley ribeiro"] },
      { name: "Jon Karrikaburu", teams: ["Real Sociedad"], aliases: ["karrikaburu"] },
      { name: "Daniel Diaz", teams: ["Real Sociedad"], aliases: ["daniel diaz"] },
      { name: "Arkaitz Mariezkurrena", teams: ["Real Sociedad"], aliases: ["mariezkurrena"] },
      { name: "Alex Marchal", teams: ["Real Sociedad"], aliases: ["marchal"] },
      { name: "Job Ochieng", teams: ["Real Sociedad"], aliases: ["ochieng"] },
      { name: "Gorka Carrera", teams: ["Real Sociedad"], aliases: ["gorka carrera"] },
      { name: "Andrei Radu", teams: ["Celta Vigo"], aliases: ["andrei radu"] },
      { name: "Marcos Gonzalez", teams: ["Celta Vigo"], aliases: ["marcos gonzalez"] },
      { name: "Joseph Aidoo", teams: ["Celta Vigo"], aliases: ["aidoo"] },
      { name: "Carlos Dominguez", teams: ["Celta Vigo", "Osasuna"], aliases: ["carlos dominguez"] },
      { name: "Javi Rueda", teams: ["Celta Vigo"], aliases: ["javi rueda"] },
      { name: "Alvaro Nunez", teams: ["Celta Vigo"], aliases: ["alvaro nunez"] },
      { name: "Yoel Lago", teams: ["Celta Vigo"], aliases: ["lago"] },
      { name: "Manuel Fernandez Celta", teams: ["Celta Vigo"], aliases: ["manuel fernandez celta"] },
      { name: "Pablo Meixus", teams: ["Celta Vigo"], aliases: ["meixus"] },
      { name: "Matias Vecino", teams: ["Celta Vigo", "Malaga", "Osasuna"], aliases: ["vecino"] },
      { name: "Franco Cervi", teams: ["Celta Vigo", "Osasuna"], aliases: ["cervi"] },
      { name: "Miguel Roman", teams: ["Celta Vigo"], aliases: ["miguel roman"] },
      { name: "Fernando Lopez", teams: ["Celta Vigo"], aliases: ["fernando lopez"] },
      { name: "Andres Antanon", teams: ["Celta Vigo"], aliases: ["antanon"] },
      { name: "Hugo Burcio", teams: ["Celta Vigo"], aliases: ["burcio"] },
      { name: "Ferran Jutgla", teams: ["Celta Vigo", "Barcelona"], aliases: ["jutgla"] },
      { name: "Hugo Gonzalez Celta", teams: ["Celta Vigo"], aliases: ["hugo gonzalez celta"] },
      { name: "Jones El-Abdellaoui", teams: ["Celta Vigo"], aliases: ["jones el abdellaoui", "jones"] },
      { name: "Oscar Marcos", teams: ["Celta Vigo"], aliases: ["oscar marcos"] },
      { name: "Angel Arcos", teams: ["Celta Vigo"], aliases: ["angel arcos"] },
      { name: "German Garcia", teams: ["Real Betis"], aliases: ["german garcia"] },
      { name: "Manu Gonzalez", teams: ["Real Betis"], aliases: ["manu gonzalez"] },
      { name: "Darling Bladi", teams: ["Real Betis"], aliases: ["bladi"] },
      { name: "Angel Ortiz", teams: ["Real Betis"], aliases: ["angel ortiz"] },
      { name: "Carlos De Roa", teams: ["Real Betis"], aliases: ["de roa"] },
      { name: "Nelson Deossa", teams: ["Real Betis"], aliases: ["deossa"] },
      { name: "Daniel Perez", teams: ["Real Betis"], aliases: ["daniel perez"] },
      { name: "Ivan Corralejo", teams: ["Real Betis"], aliases: ["corralejo"] },
      { name: "Pablo Garcia", teams: ["Real Betis"], aliases: ["pablo garcia"] },
      { name: "Jose Morante", teams: ["Real Betis"], aliases: ["morante"] },
      { name: "Rodrigo Marina", teams: ["Real Betis"], aliases: ["marina"] },
      { name: "Alvaro Moreno", teams: ["Atletico Madrid"], aliases: ["alvaro moreno"] },
      { name: "Mario de Luis", teams: ["Atletico Madrid", "Real Madrid"], aliases: ["mario de luis"] },
      { name: "Salvi Esquivel", teams: ["Atletico Madrid"], aliases: ["salvi"] },
      { name: "Ilias Kostis", teams: ["Atletico Madrid"], aliases: ["kostis"] },
      { name: "Daniel Martinez Atletico", teams: ["Atletico Madrid"], aliases: ["daniel martinez atletico"] },
      { name: "Javier Bonar", teams: ["Atletico Madrid"], aliases: ["bonar"] },
      { name: "Aleksa Puric", teams: ["Atletico Madrid"], aliases: ["puric"] },
      { name: "Geronimo Spina", teams: ["Atletico Madrid"], aliases: ["spina"] },
      { name: "Javier Serrano", teams: ["Atletico Madrid"], aliases: ["javier serrano"] },
      { name: "Julio Diaz", teams: ["Atletico Madrid"], aliases: ["julio diaz"] },
      { name: "Jano Monserrate", teams: ["Atletico Madrid"], aliases: ["monserrate"] },
      { name: "Taufik Seidu", teams: ["Atletico Madrid"], aliases: ["seidu"] },
      { name: "Javier Morcillo", teams: ["Atletico Madrid"], aliases: ["morcillo"] },
      { name: "Nicolas Gonzalez", teams: ["Atletico Madrid"], aliases: ["nico gonzalez"] },
      { name: "Rayane Belaid", teams: ["Atletico Madrid"], aliases: ["belaid"] },
      { name: "Iker Luque", teams: ["Atletico Madrid"], aliases: ["luque"] },
      { name: "Sergio Esteban", teams: ["Atletico Madrid"], aliases: ["sergio esteban"] },
      { name: "Ruben Gomez", teams: ["Villarreal"], aliases: ["ruben gomez"] },
      { name: "Alex Freeman", teams: ["Villarreal"], aliases: ["freeman"] },
      { name: "Pau Navarro", teams: ["Villarreal"], aliases: ["pau navarro"] },
      { name: "Isma Sierra", teams: ["Villarreal"], aliases: ["sierra"] },
      { name: "Daniel Budesca", teams: ["Villarreal"], aliases: ["budesca"] },
      { name: "Jean Ives Valou", teams: ["Villarreal"], aliases: ["valou"] },
      { name: "Alassane Diatta", teams: ["Villarreal"], aliases: ["diatta"] },
      { name: "Carlos Macia", teams: ["Villarreal"], aliases: ["macia"] },
      { name: "Hugo Lopez", teams: ["Villarreal"], aliases: ["hugo lopez"] },
      { name: "Alfonso Gonzalez", teams: ["Villarreal"], aliases: ["alfonso gonzalez"] },
      { name: "Joselillo", teams: ["Villarreal"], aliases: ["joselillo"] },
      { name: "Mahamoud Barry", teams: ["Villarreal"], aliases: ["barry"] },
      { name: "Pau Cabanes", teams: ["Villarreal"], aliases: ["cabanes"] },
      { name: "Javier Navarro", teams: ["Real Madrid"], aliases: ["javier navarro"] },
      { name: "Sergio Mestre", teams: ["Real Madrid"], aliases: ["mestre"] },
      { name: "David Jimenez", teams: ["Real Madrid"], aliases: ["david jimenez"] },
      { name: "Mario Rivas", teams: ["Real Madrid"], aliases: ["mario rivas"] },
      { name: "Joan Martinez", teams: ["Real Madrid"], aliases: ["joan martinez"] },
      { name: "Diego Aguado", teams: ["Real Madrid"], aliases: ["aguado"] },
      { name: "Victor Valdepenas", teams: ["Real Madrid"], aliases: ["valdepenas"] },
      { name: "Jesus Fortea", teams: ["Real Madrid"], aliases: ["fortea"] },
      { name: "Lamini Fati", teams: ["Real Madrid"], aliases: ["lamini fati"] },
      { name: "Cesar Palacios", teams: ["Real Madrid"], aliases: ["palacios"] },
      { name: "Manuel Angel", teams: ["Real Madrid"], aliases: ["manuel angel"] },
      { name: "Pol Fortuny", teams: ["Real Madrid"], aliases: ["fortuny"] },
      { name: "Thiago Pitarch", teams: ["Real Madrid"], aliases: ["pitarch"] },
      { name: "Jorge Cestero", teams: ["Real Madrid"], aliases: ["cestero"] },
      { name: "Dani Meso", teams: ["Real Madrid"], aliases: ["meso"] },
      { name: "Alvaro Leiva", teams: ["Real Madrid"], aliases: ["leiva"] },
      { name: "Daniel Yanez", teams: ["Real Madrid"], aliases: ["yanez"] },
      { name: "Diego Kochen", teams: ["Barcelona"], aliases: ["kochen"] },
      { name: "Eder Aller", teams: ["Barcelona"], aliases: ["eder aller"] },
      { name: "Alvaro Cortes", teams: ["Barcelona"], aliases: ["alvaro cortes"] },
      { name: "Xavi Espart", teams: ["Barcelona"], aliases: ["espart"] },
      { name: "Jofre Torrents", teams: ["Barcelona"], aliases: ["torrents"] },
      { name: "Juan Hernandez", teams: ["Barcelona"], aliases: ["juan hernandez"] },
      { name: "Guille Fernandez", teams: ["Barcelona"], aliases: ["guille"] },
      { name: "Tomas Marques", teams: ["Barcelona"], aliases: ["marques"] },
      { name: "Daniel Rodriguez Barca", teams: ["Barcelona"], aliases: ["daniel rodriguez"] },
      { name: "Toni Fernandez", teams: ["Barcelona"], aliases: ["toni fernandez"] },
      // === Jugadors d'un sol club a La Liga ===
      // Barcelona
      { name: "Lionel Messi", teams: ["Barcelona"], aliases: ["messi", "leo messi"] },
      { name: "Xavi Hernandez", teams: ["Barcelona"], aliases: ["xavi"] },
      { name: "Andres Iniesta", teams: ["Barcelona"], aliases: ["iniesta"] },
      { name: "Carles Puyol", teams: ["Barcelona"], aliases: ["puyol"] },
      { name: "Victor Valdes", teams: ["Barcelona"], aliases: ["valdes"] },
      { name: "Gerard Pique", teams: ["Barcelona", "Zaragoza"], aliases: ["pique"] },
      { name: "Sergio Busquets", teams: ["Barcelona"], aliases: ["busquets"] },
      { name: "Pedro Rodriguez", teams: ["Barcelona"], aliases: ["pedro"] },
      { name: "Cesc Fabregas", teams: ["Barcelona"], aliases: ["fabregas", "cesc"] },
      { name: "Neymar", teams: ["Barcelona"], aliases: ["neymar jr"] },
      { name: "Zlatan Ibrahimovic", teams: ["Barcelona"], aliases: ["ibrahimovic", "ibra", "zlatan"] },
      { name: "Ronaldinho", teams: ["Barcelona"], aliases: ["ronaldinho gaucho"] },
      { name: "Thierry Henry", teams: ["Barcelona"], aliases: ["henry"] },
      { name: "Sergi Roberto", teams: ["Barcelona"], aliases: ["sergi roberto"] },
      { name: "Hristo Stoichkov", teams: ["Barcelona"], aliases: ["stoichkov"] },
      { name: "Pep Guardiola", teams: ["Barcelona"], aliases: ["guardiola"] },
      { name: "Migueli", teams: ["Barcelona"], aliases: ["migueli"] },
      { name: "Thiago Alcantara", teams: ["Barcelona"], aliases: ["thiago"] },
      // Real Madrid
      { name: "Raul Gonzalez", teams: ["Real Madrid"], aliases: ["raul"] },
      { name: "Iker Casillas", teams: ["Real Madrid"], aliases: ["casillas"] },
      { name: "Roberto Carlos", teams: ["Real Madrid"], aliases: ["roberto carlos"] },
      { name: "Zinedine Zidane", teams: ["Real Madrid"], aliases: ["zidane", "zizou"] },
      { name: "Cristiano Ronaldo", teams: ["Real Madrid"], aliases: ["cr7"] },
      { name: "Marcelo", teams: ["Real Madrid"], aliases: ["marcelo vieira"] },
      { name: "Casemiro", teams: ["Real Madrid"], aliases: ["carlos casemiro"] },
      { name: "Karim Benzema", teams: ["Real Madrid"], aliases: ["benzema", "kb9"] },
      { name: "Pepe Kepper", teams: ["Real Madrid"], aliases: ["pepe"] },
      { name: "Mesut Ozil", teams: ["Real Madrid"], aliases: ["ozil"] },
      { name: "Gonzalo Higuain", teams: ["Real Madrid"], aliases: ["higuain", "pipita"] },
      { name: "Angel Di Maria", teams: ["Real Madrid"], aliases: ["di maria", "fideo"] },
      { name: "Arjen Robben", teams: ["Real Madrid"], aliases: ["robben"] },
      { name: "Emilio Butragueno", teams: ["Real Madrid"], aliases: ["butragueno", "el buitre"] },
      { name: "Gareth Bale", teams: ["Real Madrid"], aliases: ["bale"] },
      { name: "Toni Kroos", teams: ["Real Madrid"], aliases: ["kroos"] },
      { name: "Nacho Fernandez", teams: ["Real Madrid"], aliases: ["nacho"] },
      { name: "Guti", teams: ["Real Madrid"], aliases: ["guti hernandez"] },
      { name: "Manolo Sanchis", teams: ["Real Madrid"], aliases: ["sanchis"] },
      { name: "Chendo", teams: ["Real Madrid"], aliases: ["chendo"] },
      { name: "Jose Antonio Camacho", teams: ["Real Madrid"], aliases: ["camacho"] },
      { name: "Pirri", teams: ["Real Madrid"], aliases: ["pirri"] },
      { name: "Francisco Gento", teams: ["Real Madrid"], aliases: ["gento"] },
      // Atletico Madrid
      { name: "Fernando Torres", teams: ["Atletico Madrid"], aliases: ["torres", "el nino"] },
      { name: "Radamel Falcao", teams: ["Atletico Madrid"], aliases: ["falcao", "el tigre"] },
      { name: "Saul Niguez", teams: ["Atletico Madrid", "Rayo Vallecano"], aliases: ["saul"] },
      { name: "Angel Correa", teams: ["Atletico Madrid"], aliases: ["correa"] },
      // Sevilla
      { name: "Frederic Kanoute", teams: ["Sevilla"], aliases: ["kanoute"] },
      { name: "Alberto Moreno", teams: ["Sevilla"], aliases: ["alberto moreno"] },
      // Valencia
      { name: "Juan Mata", teams: ["Valencia"], aliases: ["mata"] },
      // Athletic Bilbao
      { name: "Joseba Etxeberria", teams: ["Athletic Bilbao"], aliases: ["etxeberria"] },
      { name: "Aritz Aduriz", teams: ["Athletic Bilbao", "Mallorca", "Valencia", "Real Valladolid"], aliases: ["aduriz"] },
      // Legends and Missing
      { name: "David Silva", teams: ["Valencia", "Real Sociedad", "Eibar", "Celta Vigo"], aliases: ["silva"] },
      { name: "Luis Enrique", teams: ["Sporting de Gijón", "Real Madrid", "Barcelona"], aliases: ["luis enrique"] },
      { name: "Raul Garcia", teams: ["Osasuna", "Atletico Madrid", "Athletic Bilbao"], aliases: ["raul garcia"] },
      { name: "Gaizka Mendieta", teams: ["Valencia", "Barcelona"], aliases: ["mendieta"] },
      { name: "Ruben Baraja", teams: ["Atletico Madrid", "Valencia", "Real Valladolid"], aliases: ["baraja"] },
      { name: "David Albelda", teams: ["Valencia", "Villarreal"], aliases: ["albelda"] },
      { name: "Santiago Cañizares", teams: ["Real Madrid", "Celta Vigo", "Valencia"], aliases: ["canizares"] },
      { name: "Michel Salgado", teams: ["Celta Vigo", "Real Madrid"], aliases: ["michel salgado"] },
      { name: "Bojan Krkic", teams: ["Barcelona", "Alaves"], aliases: ["bojan"] },
      { name: "Juan Carlos Valeron", teams: ["Las Palmas", "Mallorca", "Atletico Madrid", "Deportivo La Coruña"], aliases: ["valeron"] },
      { name: "Bebeto", teams: ["Deportivo La Coruña", "Sevilla"], aliases: ["bebeto"] },
      { name: "Djalminha", teams: ["Deportivo La Coruña"], aliases: ["djalminha"] },
      { name: "David Trezeguet", teams: ["Hércules"], aliases: ["trezeguet"] },
      { name: "Nelson Valdez", teams: ["Hércules", "Valencia"], aliases: ["valdez"] },
      { name: "Royston Drenthe", teams: ["Real Madrid", "Hércules"], aliases: ["drenthe"] },
      { name: "Felipe Caicedo", teams: ["Levante", "Espanyol", "Malaga"], aliases: ["caicedo"] },
      { name: "Ricardo Carvalho", teams: ["Real Madrid"], aliases: ["carvalho"] },
      { name: "Sami Khedira", teams: ["Real Madrid"], aliases: ["khedira"] },
      { name: "Emmanuel Adebayor", teams: ["Real Madrid"], aliases: ["adebayor"] },
      { name: "Ibrahim Afellay", teams: ["Barcelona"], aliases: ["afellay"] },
      { name: "Javier Mascherano", teams: ["Barcelona"], aliases: ["mascherano"] },
      { name: "Seydou Keita", teams: ["Sevilla", "Barcelona", "Valencia"], aliases: ["keita"] },
      { name: "Jose Antonio Reyes", teams: ["Sevilla", "Real Madrid", "Atletico Madrid", "Espanyol"], aliases: ["reyes"] },
      { name: "Simao Sabrosa", teams: ["Atletico Madrid", "Espanyol", "Barcelona"], aliases: ["simao"] },
      { name: "Kun Aguero", teams: ["Atletico Madrid", "Barcelona"], aliases: ["aguero"] },
      { name: "David De Gea", teams: ["Atletico Madrid"], aliases: ["de gea"] },
      { name: "Borja Valero", teams: ["Mallorca", "Villarreal"], aliases: ["borja valero"] },
      { name: "Nilmar", teams: ["Villarreal"], aliases: ["nilmar"] },
      { name: "Giuseppe Rossi", teams: ["Villarreal", "Levante", "Celta Vigo"], aliases: ["rossi"] },
      { name: "Salomon Rondon", teams: ["Malaga"], aliases: ["rondon"] },
      { name: "Miquel Soler", teams: ["Barcelona", "Real Madrid", "Atletico Madrid", "Sevilla", "Valencia", "Espanyol", "Mallorca"], aliases: ["soler"] },
      { name: "Luis Garcia Legend", teams: ["Atletico Madrid", "Barcelona", "Real Valladolid", "Racing Santander", "Espanyol", "Tenerife"], aliases: ["luis garcia legend"] },
      // Almeria 2010/11
      { name: "Diego Alves", teams: ["Almeria", "Valencia"], aliases: ["diego alves"] },
      { name: "Pablo Piatti", teams: ["Almeria", "Valencia", "Espanyol", "Elche"], aliases: ["piatti"] },
      // Athletic 2010/11
      { name: "Gorka Iraizoz", teams: ["Athletic Bilbao", "Espanyol", "Girona"], aliases: ["iraizoz"] },
      { name: "Andoni Iraola", teams: ["Athletic Bilbao"], aliases: ["iraola"] },
      { name: "Fernando Llorente", teams: ["Athletic Bilbao", "Sevilla"], aliases: ["llorente"] },
      { name: "Javi Martinez", teams: ["Athletic Bilbao"], aliases: ["javi martinez"] },
      // Atletico 2010/11
      { name: "Tomas Ujfalusi", teams: ["Atletico Madrid"], aliases: ["ujfalusi"] },
      { name: "Luis Perea", teams: ["Atletico Madrid"], aliases: ["perea"] },
      { name: "Tiago Mendes", teams: ["Atletico Madrid"], aliases: ["tiago"] },
      // Barca 2010/11
      { name: "Adriano Correia", teams: ["Sevilla", "Barcelona", "Besiktas"], aliases: ["adriano"] },
      { name: "Maxwell", teams: ["Barcelona"], aliases: ["maxwell"] },
      // Deportivo 2010/11
      { name: "Daniel Aranzubia", teams: ["Athletic Bilbao", "Deportivo La Coruña", "Atletico Madrid"], aliases: ["aranzubia"] },
      { name: "Andres Guardado", teams: ["Deportivo La Coruña", "Valencia", "Real Betis"], aliases: ["guardado"] },
      // Espanyol 2010/11
      { name: "Carlos Kameni", teams: ["Espanyol", "Malaga"], aliases: ["kameni"] },
      { name: "Pablo Osvaldo", teams: ["Espanyol"], aliases: ["osvaldo"] },
      { name: "Joan Verdu", teams: ["Espanyol", "Deportivo La Coruña", "Betis", "Levante"], aliases: ["verdu"] },
      // Getafe 2010/11
      { name: "Cata Diaz", teams: ["Getafe", "Atletico Madrid"], aliases: ["cata diaz"] },
      { name: "Manu del Moral", teams: ["Atletico Madrid", "Getafe", "Sevilla", "Elche", "Eibar"], aliases: ["manu del moral"] },
      // Levante 2010/11
      { name: "Sergio Ballesteros", teams: ["Levante", "Mallorca", "Villarreal", "Rayos Vallecano"], aliases: ["ballesteros"] },
      { name: "Vicente Iborra", teams: ["Levante", "Sevilla", "Villarreal"], aliases: ["iborra"] },
      // Malaga 2010/11
      { name: "Jesus Gamez", teams: ["Malaga", "Atletico Madrid"], aliases: ["jesus gamez"] },
      { name: "Willy Caballero", teams: ["Malaga", "Elche"], aliases: ["caballero"] },
      // Mallorca 2010/11
      { name: "Dudu Aouate", teams: ["Racing Santander", "Deportivo La Coruña", "Mallorca"], aliases: ["aouate"] },
      { name: "Pierre Webo", teams: ["Osasuna", "Mallorca"], aliases: ["webo"] },
      // Osasuna 2010/11
      { name: "Walter Pandiani", teams: ["Deportivo La Coruña", "Mallorca", "Espanyol", "Osasuna", "Villarreal"], aliases: ["pandiani", "el rifle"] },
      { name: "Nacho Monreal", teams: ["Osasuna", "Malaga", "Real Sociedad"], aliases: ["monreal"] },
      // Racing 2010/11
      { name: "Pedro Munitis", teams: ["Racing Santander", "Real Madrid", "Deportivo La Coruña"], aliases: ["munitis"] },
      // Real Sociedad 2010/11
      // Sevilla 2010/11
      { name: "Andres Palop", teams: ["Valencia", "Villarreal", "Sevilla"], aliases: ["palop"] },
      { name: "Luis Fabiano", teams: ["Sevilla"], aliases: ["luis fabiano"] },
      // Sporting 2010/11
      { name: "David Barral", teams: ["Sporting de Gijón", "Levante", "Granada", "Cadiz"], aliases: ["barral"] },
      { name: "Diego Castro", teams: ["Sporting de Gijón", "Getafe"], aliases: ["diego castro"] },
      // Valencia 2010/11
      { name: "Jeremy Mathieu", teams: ["Valencia", "Barcelona"], aliases: ["mathieu"] },
      // Villarreal 2010/11
      { name: "Cani", teams: ["Zaragoza", "Villarreal", "Atletico Madrid"], aliases: ["cani"] },
      // Zaragoza 2010/11
      { name: "Ander Herrera", teams: ["Zaragoza", "Athletic Bilbao"], aliases: ["ander herrera"] },
      { name: "Leonardo Ponzio", teams: ["Zaragoza"], aliases: ["ponzio"] },
      // Real Madrid 2011/12
      { name: "Fabio Coentrao", teams: ["Real Madrid"], aliases: ["coentrao"] },
      { name: "Raphael Varane", teams: ["Real Madrid"], aliases: ["varane"] },
      { name: "Hamit Altintop", teams: ["Real Madrid"], aliases: ["altintop"] },
      // Barca 2011/12
      // Barca 2011/12
      { name: "Alexis Sanchez", teams: ["Barcelona", "Sevilla"], aliases: ["alexis"] },
      { name: "James Rodriguez", teams: ["Real Madrid", "Rayo Vallecano"], aliases: ["james"] },
      { name: "Jese Rodriguez", teams: ["Real Madrid", "Las Palmas", "Real Betis"], aliases: ["jese"] },
      { name: "Edinson Cavani", teams: ["Valencia"], aliases: ["cavani"] },
      { name: "Isaac Cuenca", teams: ["Barcelona", "Granada"], aliases: ["cuenca"] },
      // Valencia 2011/12
      { name: "Sofiane Feghouli", teams: ["Valencia", "Almeria"], aliases: ["feghouli"] },
      { name: "Jonas Goncalves", teams: ["Valencia"], aliases: ["jonas"] },
      // Malaga 2011/12
      { name: "Jeremy Toulalan", teams: ["Malaga"], aliases: ["toulalan"] },
      { name: "Martin Mathijsen", teams: ["Malaga"], aliases: ["mathijsen"] },
      // Atletico 2011/12
      { name: "Miranda", teams: ["Atletico Madrid"], aliases: ["miranda"] },
      { name: "Diego Ribas", teams: ["Atletico Madrid"], aliases: ["diego ribas"] },
      // Levante 2011/12
      { name: "Arouna Koné", teams: ["Sevilla", "Levante"], aliases: ["kone"] },
      { name: "Jose Javier Barkero", teams: ["Real Sociedad", "Levante"], aliases: ["barkero"] },
      // Real Betis 2011/12
      { name: "Ruben Castro", teams: ["Las Palmas", "Deportivo La Coruña", "Real Betis", "Malaga", "Rayo Vallecano"], aliases: ["ruben castro"] },
      { name: "Jorge Molina", teams: ["Real Betis", "Getafe", "Granada"], aliases: ["jorge molina"] },
      { name: "Beñat Etxebarria", teams: ["Real Betis", "Athletic Bilbao"], aliases: ["benat"] },
      // Rayo Vallecano 2011/12
      { name: "Michu", teams: ["Rayo Vallecano"], aliases: ["michu"] },
      { name: "Roberto Trashorras", teams: ["Barcelona", "Rayo Vallecano"], aliases: ["trashorras"] },
      { name: "Piti", teams: ["Rayo Vallecano", "Granada"], aliases: ["piti"] },
      // Granada 2011/12
      { name: "Guilherme Siqueira", teams: ["Granada", "Atletico Madrid", "Valencia"], aliases: ["siqueira"] },
      { name: "Ikechukwu Uche", teams: ["Recreativo", "Getafe", "Zaragoza", "Granada", "Villarreal", "Malaga"], aliases: ["uche"] },
      { name: "Mikel Rico", teams: ["Granada", "Athletic Bilbao"], aliases: ["mikel rico"] },
      // Real Sociedad 2011/12
      { name: "Carlos Vela", teams: ["Real Sociedad"], aliases: ["vela"] },
      { name: "Gabi", teams: ["Atletico Madrid", "Zaragoza", "Getafe"], aliases: ["gabi"] },
      { name: "Antonio Lopez", teams: ["Atletico Madrid", "Mallorca"], aliases: ["antonio lopez"] },
      { name: "Santi Ezquerro", teams: ["Osasuna", "Athletic Bilbao", "Barcelona"], aliases: ["ezquerro"] },
      { name: "Asier del Horno", teams: ["Athletic Bilbao", "Valencia", "Real Valladolid", "Levante"], aliases: ["del horno"] },
      { name: "Andoni Zubizarreta", teams: ["Athletic Bilbao", "Barcelona", "Valencia"], aliases: ["zubizarreta"] },
      { name: "Luis Milla Legend", teams: ["Barcelona", "Real Madrid", "Valencia"], aliases: ["luis milla legend"] },
      { name: "Ruben de la Red", teams: ["Real Madrid", "Getafe"], aliases: ["de la red"] },
      { name: "Julen Guerrero", teams: ["Athletic Bilbao"], aliases: ["guerrero"] },
      { name: "Iker Muniain", teams: ["Athletic Bilbao"], aliases: ["muniain"] },
      { name: "Markel Susaeta", teams: ["Athletic Bilbao"], aliases: ["susaeta"] },
      { name: "Jose Angel Iribar", teams: ["Athletic Bilbao"], aliases: ["iribar"] },
      { name: "Dani Ruiz-Bazan", teams: ["Athletic Bilbao"], aliases: ["dani"] },
      { name: "Txetxu Rojo", teams: ["Athletic Bilbao"], aliases: ["rojo"] },
      // Real Sociedad
      { name: "Xabi Prieto", teams: ["Real Sociedad"], aliases: ["prieto"] },
      { name: "Luis Arconada", teams: ["Real Sociedad"], aliases: ["arconada"] },
      { name: "Alberto Gorriz", teams: ["Real Sociedad"], aliases: ["gorriz"] },
      { name: "Juan Antonio Larrañaga", teams: ["Real Sociedad"], aliases: ["larranaga"] },
      { name: "Jesus Maria Satrustegui", teams: ["Real Sociedad"], aliases: ["satrustegui"] },
      // Villarreal
      { name: "Robert Pires", teams: ["Villarreal"], aliases: ["pires"] },
      { name: "Bruno Soriano", teams: ["Villarreal"], aliases: ["bruno"] },
      { name: "Manu Trigueros", teams: ["Villarreal"], aliases: ["trigueros"] },
      // Mallorca
      { name: "Dani Guiza", teams: ["Mallorca"], aliases: ["guiza"] },
      // Osasuna
      { name: "Savo Milosevic", teams: ["Osasuna"], aliases: ["milosevic"] },
      // Celta Vigo
      { name: "Hugo Mallo", teams: ["Celta Vigo"], aliases: ["mallo"] },
      // Deportivo La Coruña
      { name: "Mauro Silva", teams: ["Deportivo La Coruña"], aliases: ["mauro silva"] },
      { name: "Fran", teams: ["Deportivo La Coruña"], aliases: ["fran gonzalez"] },
      // Zaragoza
      { name: "Xavi Aguado", teams: ["Zaragoza"], aliases: ["aguado"] },
      // Rayo Vallecano
      { name: "Michel", teams: ["Rayo Vallecano"], aliases: ["michel sanchez"] },
      // Malaga
      { name: "Weligton", teams: ["Malaga"], aliases: ["weligton"] },
      // Athletic Bilbao
      { name: "Carlos Gurpegui", teams: ["Athletic Bilbao"], aliases: ["gurpegui"] },
      // Real Sociedad
      { name: "Mikel Gonzalez", teams: ["Real Sociedad"], aliases: ["mikel"] },
      { name: "Dani Estrada", teams: ["Real Sociedad"], aliases: ["estrada"] },
      { name: "Gorka Elustondo", teams: ["Real Sociedad"], aliases: ["elustondo"] },
      // Villarreal
      { name: "Marcos Senna", teams: ["Villarreal"], aliases: ["senna"] },
      // Atletico Madrid
      { name: "Adelardo Rodriguez", teams: ["Atletico Madrid"], aliases: ["adelardo"] },
      // Espanyol
      { name: "Mauricio Pochettino", teams: ["Espanyol"], aliases: ["pochettino"] },
      { name: "Dani Jarque", teams: ["Espanyol"], aliases: ["jarque"] },
      { name: "Thomas N'Kono", teams: ["Espanyol"], aliases: ["nkono"] },
      // Celta Vigo
      { name: "Borja Oubiña", teams: ["Celta Vigo"], aliases: ["oubina"] },
      { name: "Alexander Mostovoi", teams: ["Celta Vigo"], aliases: ["mostovoi"] },
      // Osasuna
      { name: "Jan Urban", teams: ["Osasuna"], aliases: ["urban"] },
      { name: "Patxi Puñal", teams: ["Osasuna"], aliases: ["punal"] },
      // Real Betis
      { name: "Denilson", teams: ["Real Betis"], aliases: ["denilson de oliveira"] },
      // Malaga
      { name: "Vicente Valcarce", teams: ["Malaga"], aliases: ["valcarce"] },
      // Girona
      { name: "Alex Granell", teams: ["Girona"], aliases: ["granell"] },
      // Las Palmas
      { name: "David Garcia", teams: ["Las Palmas"], aliases: ["david garcia"] },
      // Leganes
      { name: "Alexander Szymanowski", teams: ["Leganes"], aliases: ["szymanowski"] },
      // Alaves
      { name: "Martin Aguirregabiria", teams: ["Alaves"], aliases: ["martin"] },
      // Elche
      { name: "Edu Albacar", teams: ["Elche"], aliases: ["albacar"] },
      // Rayo Vallecano
      { name: "Cota", teams: ["Rayo Vallecano"], aliases: ["cota"] },
      // Sporting de Gijón
      { name: "Joaquin Alonso", teams: ["Sporting de Gijón"], aliases: ["joaquin"] },
      { name: "Juan Carlos Ablanedo", teams: ["Sporting de Gijón"], aliases: ["ablanedo"] },
      // Real Sociedad
      { name: "Mikel Aranburu", teams: ["Real Sociedad"], aliases: ["aranburu"] },
      // Real Valladolid
      { name: "Luis Mariano Minguela", teams: ["Real Valladolid"], aliases: ["minguela"] },
      // Mallorca
      { name: "Juan Arango", teams: ["Mallorca"], aliases: ["arango"] },
      // Cadiz
      { name: "Magico Gonzalez", teams: ["Cadiz"], aliases: ["magico"] },
      // Granada
      { name: "Odion Ighalo", teams: ["Granada"], aliases: ["ighalo"] },
      // Sporting de Gijón
      { name: "Quini", teams: ["Sporting de Gijón", "Barcelona"], aliases: ["quini"] },



    ];

    const PLAYER_PROFILE = {
      "pedri": { countryCode: "es", position: "MC" },
      "gavi": { countryCode: "es", position: "MC" },
      "lamine yamal": { countryCode: "es", position: "ED" },
      "ronald araujo": { countryCode: "uy", position: "DFC" },
      "marcandre ter stegen": { countryCode: "de", position: "POR" },
      "wojciech szczesny": { countryCode: "pl", position: "POR" },
      "inaki pena": { countryCode: "es", position: "POR" },
      "joan garcia": { countryCode: "es", position: "POR" },
      "alejandro balde": { countryCode: "es", position: "LI" },
      "andreas christensen": { countryCode: "dk", position: "DFC" },
      "inigo martinez": { countryCode: "es", position: "DFC" },
      "eric garcia": { countryCode: "es", position: "DFC" },
      "joao cancelo": { countryCode: "pt", position: "LD" },
      "hector fort": { countryCode: "es", position: "LD" },
      "gerard martin": { countryCode: "es", position: "LI" },
      "frenkie de jong": { countryCode: "nl", position: "MC" },
      "marc casado": { countryCode: "es", position: "MC" },
      "marc bernal": { countryCode: "es", position: "MC" },
      "pablo torre": { countryCode: "es", position: "MCO" },
      "roony bardghji": { countryCode: "se", position: "ED" },
      "raphinha": { countryCode: "br", position: "ED" },
      "robert lewandowski": { countryCode: "pl", position: "DC" },
      "ferran torres": { countryCode: "es", position: "ED" },
      "marcus rashford": { countryCode: "en", position: "EI" },
      "ansu fati": { countryCode: "es", position: "EI" },
      "pau victor": { countryCode: "es", position: "DC" },
      "pau cubarsi": { countryCode: "es", position: "DFC" },
      "fermin lopez": { countryCode: "es", position: "MCO" },
      "dani olmo": { countryCode: "es", position: "MCO" },
      "vinicius junior": { countryCode: "br", position: "EI" },
      "jude bellingham": { countryCode: "en", position: "MC" },
      "kylian mbappe": { countryCode: "fr", position: "DC" },
      "rodrygo": { countryCode: "br", position: "ED" },
      "federico valverde": { countryCode: "uy", position: "MC" },
      "aurelien tchouameni": { countryCode: "fr", position: "MCD" },
      "eduardo camavinga": { countryCode: "fr", position: "MC" },
      "eder militao": { countryCode: "br", position: "DFC" },
      "thibaut courtois": { countryCode: "be", position: "POR" },
      "andriy lunin": { countryCode: "ua", position: "POR" },
      "fran gonzalez": { countryCode: "es", position: "POR" },
      "dani carvajal": { countryCode: "es", position: "LD" },
      "antonio rudiger": { countryCode: "de", position: "DFC" },
      "david alaba": { countryCode: "at", position: "DFC" },
      "ferland mendy": { countryCode: "fr", position: "LI" },
      "fran garcia": { countryCode: "es", position: "LI" },
      "trent alexanderarnold": { countryCode: "en", position: "LD" },
      "alvaro carreras": { countryCode: "es", position: "LI" },
      "dean huijsen": { countryCode: "es", position: "DFC" },
      "raul asencio": { countryCode: "es", position: "DFC" },
      "luka modric": { countryCode: "hr", position: "MC" },
      "brahim diaz": { countryCode: "ma", position: "MCO" },
      "endrick": { countryCode: "br", position: "DC" },
      "arda guler": { countryCode: "tr", position: "MCO" },
      "dani ceballos": { countryCode: "es", position: "MC" },
      "franco mastantuono": { countryCode: "ar", position: "MCO" },
      "gonzalo garcia": { countryCode: "es", position: "DC" },
      "jan oblak": { countryCode: "si", position: "POR" },
      "juan musso": { countryCode: "ar", position: "POR" },
      "koke": { countryCode: "es", position: "MC" },
      "rodrigo de paul": { countryCode: "ar", position: "MC" },
      "jose maria gimenez": { countryCode: "uy", position: "DFC" },
      "samuel lino": { countryCode: "br", position: "EI" },
      "nahuel molina": { countryCode: "ar", position: "LD" },
      "marc pubill": { countryCode: "es", position: "LD" },
      "matteo ruggeri": { countryCode: "it", position: "LI" },
      "david hancko": { countryCode: "sk", position: "DFC" },
      "conor gallagher": { countryCode: "en", position: "MC" },
      "pablo barrios": { countryCode: "es", position: "MC" },
      "johnny cardoso": { countryCode: "us", position: "MC" },
      "thiago almada": { countryCode: "ar", position: "MC" },
      "rodrigo mendoza": { countryCode: "es", position: "MC" },
      "obed vargas": { countryCode: "mx", position: "MC" },
      "julian alvarez": { countryCode: "ar", position: "DC" },
      "alexander sorloth": { countryCode: "no", position: "DC" },
      "nico gonzalez": { countryCode: "ar", position: "DC" },
      "ademola lookman": { countryCode: "ng", position: "DC" },
      "giuliano simeone": { countryCode: "ar", position: "DC" },
      "inaki williams": { countryCode: "gh", position: "ED" },
      "nico williams": { countryCode: "es", position: "EI" },
      "unai simon": { countryCode: "es", position: "POR" },
      "oihan sancet": { countryCode: "es", position: "MCO" },
      "dani vivian": { countryCode: "es", position: "DFC" },
      "mikel oyarzabal": { countryCode: "es", position: "DC" },
      "martin zubimendi": { countryCode: "es", position: "MCD" },
      "alex remiro": { countryCode: "es", position: "POR" },
      "unai marrero": { countryCode: "es", position: "POR" },
      "nayef aguerd": { countryCode: "ma", position: "DFC" },
      "igor zubeldia": { countryCode: "es", position: "DFC" },
      "jon pacheco": { countryCode: "es", position: "DFC" },
      "aritz elustondo": { countryCode: "es", position: "DFC" },
      "hamari traore": { countryCode: "ml", position: "LD" },
      "aihen munoz": { countryCode: "es", position: "LI" },
      "javi lopez": { countryCode: "es", position: "LI" },
      "takefusa kubo": { countryCode: "jp", position: "ED" },
      "luka sucic": { countryCode: "hr", position: "MC" },
      "benat turrientes": { countryCode: "es", position: "MC" },
      "carlos soler": { countryCode: "es", position: "MC" },
      "arsen zakharyan": { countryCode: "ru", position: "MCO" },
      "urko gonzalez de zarate": { countryCode: "es", position: "MCD" },
      "sheraldo becker": { countryCode: "sr", position: "ED" },
      "orri oskarsson": { countryCode: "is", position: "DC" },
      "ander barrenetxea": { countryCode: "es", position: "EI" },
      "umar sadiq": { countryCode: "ng", position: "DC" },
      "bryan zaragoza": { countryCode: "es", position: "EI" },
      "viktor tsygankov": { countryCode: "ua", position: "ED" },
      "ivan martin": { countryCode: "es", position: "MCO" },
      "cristhian stuani": { countryCode: "uy", position: "DC" },
      "bryan gil": { countryCode: "es", position: "EI" },
      "luiz junior": { countryCode: "br", position: "POR" },
      "diego conde": { countryCode: "es", position: "POR" },
      "arnau tenas": { countryCode: "es", position: "POR" },
      "juan foyth": { countryCode: "ar", position: "LD" },
      "rafa marin": { countryCode: "es", position: "DFC" },
      "santiago mourino": { countryCode: "uy", position: "DFC" },
      "logan costa": { countryCode: "cv", position: "DFC" },
      "willy kambwala": { countryCode: "fr", position: "DFC" },
      "renato veiga": { countryCode: "pt", position: "DFC" },
      "sergi cardona": { countryCode: "es", position: "LI" },
      "alfonso pedraza": { countryCode: "es", position: "LI" },
      "alex baena": { countryCode: "es", position: "MC" },
      "dani parejo": { countryCode: "es", position: "MC" },
      "thomas partey": { countryCode: "gh", position: "MC" },
      "santi comesana": { countryCode: "es", position: "MC" },
      "pape gueye": { countryCode: "sn", position: "MC" },
      "alberto moleiro": { countryCode: "es", position: "MCO" },
      "tajon buchanan": { countryCode: "ca", position: "EI" },
      "gerard moreno": { countryCode: "es", position: "DC" },
      "georges mikautadze": { countryCode: "ge", position: "DC" },
      "nicolas pepe": { countryCode: "ci", position: "ED" },
      "ilias akhomach": { countryCode: "ma", position: "ED" },
      "alfon gonzalez": { countryCode: "es", position: "ED" },
      "tani oluwaseyi": { countryCode: "ca", position: "DC" },
      "alvaro valles": { countryCode: "es", position: "POR" },
      "pau lopez": { countryCode: "es", position: "POR" },
      "adrian san miguel": { countryCode: "es", position: "POR" },
      "diego llorente": { countryCode: "es", position: "DFC" },
      "junior firpo": { countryCode: "do", position: "LI" },
      "natan": { countryCode: "br", position: "DFC" },
      "ricardo rodriguez": { countryCode: "ch", position: "LI" },
      "valentin gomez": { countryCode: "ar", position: "DFC" },
      "nabil fekir": { countryCode: "fr", position: "MCO" },
      "pablo fornals": { countryCode: "es", position: "MCO" },
      "isco": { countryCode: "es", position: "MCO" },
      "vitor roque": { countryCode: "br", position: "DC" },
      "marc roca": { countryCode: "es", position: "MCD" },
      "rodrigo riquelme": { countryCode: "es", position: "EI" },
      "sofyan amrabat": { countryCode: "ma", position: "MCD" },
      "sergi altimira": { countryCode: "es", position: "MC" },
      "alvaro fidalgo": { countryCode: "mx", position: "MC" },
      "abde ezzalzouli": { countryCode: "ma", position: "EI" },
      "chimy avila": { countryCode: "ar", position: "DC" },
      "cucho hernandez": { countryCode: "co", position: "DC" },
      "antony": { countryCode: "br", position: "ED" },
      "cedric bakambu": { countryCode: "cd", position: "DC" },
      "aitor ruibal": { countryCode: "es", position: "ED" },
      "assane diao": { countryCode: "es", position: "ED" },
      "jose gaya": { countryCode: "es", position: "LI" },
      "hugo duro": { countryCode: "es", position: "DC" },
      "pepelu": { countryCode: "es", position: "MC" },
      "javi guerra": { countryCode: "es", position: "MC" },
      "jesus navas": { countryCode: "es", position: "LD" },
      "isaac romero": { countryCode: "es", position: "DC" },
      "vicente guaita": { countryCode: "es", position: "POR" },
      "ivan villar": { countryCode: "es", position: "POR" },
      "marc vidal": { countryCode: "es", position: "POR" },
      "carl starfelt": { countryCode: "se", position: "DFC" },
      "marcos alonso": { countryCode: "es", position: "LI" },
      "mihailo ristic": { countryCode: "rs", position: "LI" },
      "sergio carreira": { countryCode: "es", position: "LD" },
      "javi rodriguez": { countryCode: "es", position: "DFC" },
      "ilaix moriba": { countryCode: "gn", position: "MC" },
      "fran beltran": { countryCode: "es", position: "MC" },
      "sergi darder": { countryCode: "es", position: "MC" },
      "williot swedberg": { countryCode: "se", position: "EI" },
      "hugo sotelo": { countryCode: "es", position: "MC" },
      "luca de la torre": { countryCode: "us", position: "MC" },
      "damian rodriguez": { countryCode: "es", position: "MC" },
      "iago aspas": { countryCode: "es", position: "DC" },
      "jonathan bamba": { countryCode: "ci", position: "EI" },
      "tasos douvikas": { countryCode: "gr", position: "DC" },
      "hugo alvarez": { countryCode: "es", position: "MC" },
      "pablo duran": { countryCode: "es", position: "DC" },
      "aimar oroz": { countryCode: "es", position: "MCO" },
      "ante budimir": { countryCode: "hr", position: "DC" },
      "carlos vicente": { countryCode: "es", position: "ED" },
      "luis figo": { countryCode: "pt", position: "ED" },
      "ronaldo nazario": { countryCode: "br", position: "DC" },
      "michael laudrup": { countryCode: "dk", position: "MCO" },
      "samuel etoo": { countryCode: "cm", position: "DC" },
      "dani alves": { countryCode: "br", position: "LD" },
      "ivan rakitic": { countryCode: "hr", position: "MC" },
      "jules kounde": { countryCode: "fr", position: "DFC" },
      "clement lenglet": { countryCode: "fr", position: "DFC" },
      "sergio ramos": { countryCode: "es", position: "DFC" },
      "sergio reguilon": { countryCode: "es", position: "LI" },
      "kevin gameiro": { countryCode: "fr", position: "DC" },
      "geoffrey kondogbia": { countryCode: "cf", position: "MCD" },
      "ever banega": { countryCode: "ar", position: "MC" },
      "adil rami": { countryCode: "fr", position: "DFC" },
      "david villa": { countryCode: "es", position: "DC" },
      "jordi alba": { countryCode: "es", position: "LI" },
      "paco alcacer": { countryCode: "es", position: "DC" },
      "andre gomes": { countryCode: "pt", position: "MC" },
      "jeison murillo": { countryCode: "co", position: "DFC" },
      "raul albiol": { countryCode: "es", position: "DFC" },
      "sergio canales": { countryCode: "es", position: "MCO" },
      "denis cheryshev": { countryCode: "ru", position: "EI" },
      "fernando morientes": { countryCode: "es", position: "DC" },
      "alvaro morata": { countryCode: "es", position: "DC" },
      "marcos llorente": { countryCode: "es", position: "MC" },
      "theo hernandez": { countryCode: "fr", position: "LI" },
      "antoine griezmann": { countryCode: "fr", position: "DC" },
      "martin odegaard": { countryCode: "no", position: "MCO" },
      "asier illarramendi": { countryCode: "es", position: "MCD" },
      "esteban granero": { countryCode: "es", position: "MC" },
      "robin le normand": { countryCode: "es", position: "DFC" },
      "arda turan": { countryCode: "tr", position: "MCO" },
      "memphis depay": { countryCode: "nl", position: "DC" },
      "joao felix": { countryCode: "pt", position: "SD" },
      "luis suarez": { countryCode: "uy", position: "DC" },
      "francis coquelin": { countryCode: "fr", position: "MCD" },
      "gabriel paulista": { countryCode: "br", position: "DFC" },
      "rodri": { countryCode: "es", position: "MCD" },
      "diego godin": { countryCode: "uy", position: "DFC" },
      "joan capdevila": { countryCode: "es", position: "LI" },
      "carlos bacca": { countryCode: "co", position: "DC" },
      "denis suarez": { countryCode: "es", position: "MC" },
      "munir el haddadi": { countryCode: "ma", position: "SD" },
      "jasper cillessen": { countryCode: "nl", position: "POR" },
      "nolito": { countryCode: "es", position: "EI" },
      "santi mina": { countryCode: "es", position: "DC" },
      "juanfran": { countryCode: "es", position: "LD" },
      "mario suarez": { countryCode: "es", position: "MCD" },
      "vitolo": { countryCode: "es", position: "EI" },
      "diego costa": { countryCode: "es", position: "DC" },
      "rafinha alcantara": { countryCode: "br", position: "MC" },
      "joaquin sanchez": { countryCode: "es", position: "ED" },
      "claudio bravo": { countryCode: "cl", position: "POR" },
      "marc bartra": { countryCode: "es", position: "DFC" },
      "hector bellerin": { countryCode: "es", position: "LD" },
      "juan miranda": { countryCode: "es", position: "LI" },
      "giovani lo celso": { countryCode: "ar", position: "MC" },
      "ayoze perez": { countryCode: "es", position: "EI" },
      "martin braithwaite": { countryCode: "dk", position: "DC" },
      "aleix vidal": { countryCode: "es", position: "LD" },
      "raul de tomas": { countryCode: "es", position: "DC" },
      "lucas vazquez": { countryCode: "es", position: "ED" },
      "jose callejon": { countryCode: "es", position: "ED" },
      "marco asensio": { countryCode: "es", position: "ED" },
      "pablo sarabia": { countryCode: "es", position: "ED" },
      "borja iglesias": { countryCode: "es", position: "DC" },
      "augusto fernandez": { countryCode: "ar", position: "MC" },
      "javi varas": { countryCode: "es", position: "POR" },
      "carles perez": { countryCode: "es", position: "ED" },
      "oscar mingueza": { countryCode: "es", position: "LD" },
      "javier manquillo": { countryCode: "es", position: "LD" },
      "santi cazorla": { countryCode: "es", position: "MCO" },
      "samu castillejo": { countryCode: "es", position: "ED" },
      "roque santa cruz": { countryCode: "py", position: "DC" },
      "ruud van nistelrooy": { countryCode: "nl", position: "DC" },
      "fernando hierro": { countryCode: "es", position: "DFC" },
      "julio baptista": { countryCode: "br", position: "SD" },
      "roberto soldado": { countryCode: "es", position: "DC" },
      "ezequiel garay": { countryCode: "ar", position: "DFC" },
      "daniel wass": { countryCode: "dk", position: "MC" },
      "pablo hernandez": { countryCode: "es", position: "EI" },
      "diego lopez": { countryCode: "es", position: "DC" },
      "alvaro odriozola": { countryCode: "es", position: "LD" },
      "kangin lee": { countryCode: "kr", position: "MCO" },
      "xabi alonso": { countryCode: "es", position: "MCD" },
      "adnan januzaj": { countryCode: "be", position: "EI" },
      "mario hermoso": { countryCode: "es", position: "DFC" },
      "brais mendez": { countryCode: "es", position: "MC" },
      "joseba llorente": { countryCode: "es", position: "DC" },
      "david soria": { countryCode: "es", position: "POR" },
      "jiri letacek": { countryCode: "cz", position: "POR" },
      "djene dakonam": { countryCode: "tg", position: "DFC" },
      "omar alderete": { countryCode: "py", position: "DFC" },
      "juan berrocal": { countryCode: "es", position: "DFC" },
      "nabil aberdin": { countryCode: "fr", position: "DFC" },
      "diego rico": { countryCode: "es", position: "LI" },
      "fabrizio angileri": { countryCode: "ar", position: "DFC" },
      "allan nyom": { countryCode: "cm", position: "LD" },
      "alex sola": { countryCode: "es", position: "DFC" },
      "mauro arambarri": { countryCode: "uy", position: "MCD" },
      "luis milla": { countryCode: "es", position: "MC" },
      "yellu santiago": { countryCode: "es", position: "MC" },
      "christantus uche": { countryCode: "ng", position: "MC" },
      "carles alena": { countryCode: "es", position: "MC" },
      "john patrick": { countryCode: "ie", position: "MC" },
      "peter federico": { countryCode: "do", position: "DC" },
      "borja mayoral": { countryCode: "es", position: "DC" },
      "bertug yildirim": { countryCode: "tr", position: "DC" },
      "alvaro rodriguez": { countryCode: "uy", position: "DC" },
      "abel bretones": { countryCode: "es", position: "DFC" },
      "alberto risco": { countryCode: "es", position: "MC" },
      "sergio herrera": { countryCode: "es", position: "POR" },
      "aitor fernandez": { countryCode: "es", position: "POR" },
      "alejandro catena": { countryCode: "es", position: "DFC" },
      "enzo boyomo": { countryCode: "cm", position: "DFC" },
      "juan cruz": { countryCode: "es", position: "DFC" },
      "jorge herrando": { countryCode: "es", position: "DFC" },
      "unai garcia": { countryCode: "es", position: "DFC" },
      "jesus areso": { countryCode: "es", position: "LD" },
      "ruben pena": { countryCode: "es", position: "LD" },
      "lucas torro": { countryCode: "es", position: "MCD" },
      "jon moncayola": { countryCode: "es", position: "MC" },
      "iker munoz": { countryCode: "es", position: "MC" },
      "pablo ibanez": { countryCode: "es", position: "MC" },
      "moi gomez": { countryCode: "es", position: "EI" },
      "ruben garcia": { countryCode: "es", position: "EI" },
      "raul garcia de haro": { countryCode: "es", position: "DC" },
      "jose arnaiz": { countryCode: "es", position: "EI" },
      "kike barja": { countryCode: "es", position: "ED" },
      "iker benito": { countryCode: "es", position: "DC" },
      "marko dmitrovic": { countryCode: "rs", position: "POR" },
      "angel fortuno": { countryCode: "es", position: "POR" },
      "pol tristan": { countryCode: "es", position: "POR" },
      "llorenc serred": { countryCode: "es", position: "POR" },
      "leandro cabrera": { countryCode: "uy", position: "DFC" },
      "jose salinas": { countryCode: "es", position: "LI" },
      "fernando calero": { countryCode: "es", position: "DFC" },
      "carlos romero": { countryCode: "es", position: "LI" },
      "miguel rubio": { countryCode: "es", position: "DFC" },
      "omar el hilali": { countryCode: "ma", position: "LD" },
      "ruben sanchez": { countryCode: "es", position: "LD" },
      "clemens riedel": { countryCode: "de", position: "DFC" },
      "jose angel lopez": { countryCode: "es", position: "DFC" },
      "pere milla": { countryCode: "es", position: "EI" },
      "charles pickel": { countryCode: "cd", position: "MC" },
      "edu exposito": { countryCode: "es", position: "MC" },
      "pol lozano": { countryCode: "es", position: "MC" },
      "urko gonzalez": { countryCode: "es", position: "MC" },
      "ramon terrats": { countryCode: "es", position: "MC" },
      "ferran gomez": { countryCode: "es", position: "MC" },
      "enrique garcia": { countryCode: "es", position: "DC" },
      "javier puado": { countryCode: "es", position: "EI" },
      "cyril ngonge": { countryCode: "be", position: "ED" },
      "tyrhys dolan": { countryCode: "en", position: "EI" },
      "jofre carreras": { countryCode: "es", position: "ED" },
      "roberto fernandez": { countryCode: "es", position: "DC" },
      "antoniu roca": { countryCode: "es", position: "ED" },
      "adama timera": { countryCode: "fr", position: "DC" },
      "mikel santos": { countryCode: "es", position: "POR" },
      "alex padilla": { countryCode: "mx", position: "POR" },
      "yuri berchiche": { countryCode: "es", position: "LI" },
      "aymeric laporte": { countryCode: "es", position: "DFC" },
      "yeray alvarez": { countryCode: "es", position: "DFC" },
      "inigo lekue": { countryCode: "es", position: "LD" },
      "andoni gorosabel": { countryCode: "es", position: "LD" },
      "aitor paredes": { countryCode: "es", position: "DFC" },
      "unai egiluz": { countryCode: "es", position: "DFC" },
      "adama boiro": { countryCode: "es", position: "LI" },
      "aimar dunabeitia": { countryCode: "es", position: "DFC" },
      "inigo ruiz de galarreta": { countryCode: "es", position: "MC" },
      "mikel vesga": { countryCode: "es", position: "MC" },
      "robert navarro": { countryCode: "es", position: "MCO" },
      "benat prados": { countryCode: "es", position: "MC" },
      "unai gomez": { countryCode: "es", position: "MCO" },
      "mikel jauregizar": { countryCode: "es", position: "MC" },
      "alex berenguer": { countryCode: "es", position: "EI" },
      "gorka guruzeta": { countryCode: "es", position: "DC" },
      "nico serrano": { countryCode: "es", position: "EI" },
      "elijah gift": { countryCode: "es", position: "ED" },
      "juan carlos": { countryCode: "es", position: "POR" },
      "paulo gazzaniga": { countryCode: "ar", position: "POR" },
      "ruben blanco": { countryCode: "es", position: "POR" },
      "vladyslav krapyvtsov": { countryCode: "ua", position: "POR" },
      "aleksandar andreev": { countryCode: "bg", position: "POR" },
      "alex moreno": { countryCode: "es", position: "LI" },
      "daley blind": { countryCode: "nl", position: "DFC" },
      "david lopez": { countryCode: "es", position: "DFC" },
      "axel witsel": { countryCode: "be", position: "DFC" },
      "alejandro frances": { countryCode: "es", position: "DFC" },
      "arnau martinez": { countryCode: "es", position: "LD" },
      "vitor reis": { countryCode: "br", position: "DFC" },
      "hugo rincon": { countryCode: "es", position: "LD" },
      "pol arnau": { countryCode: "es", position: "DFC" },
      "gibert jordana": { countryCode: "es", position: "DFC" },
      "antonio salguero": { countryCode: "es", position: "DFC" },
      "thomas lemar": { countryCode: "fr", position: "MCO" },
      "donny van de beek": { countryCode: "nl", position: "MC" },
      "azzedine ounahi": { countryCode: "ma", position: "MC" },
      "joel roca": { countryCode: "es", position: "EI" },
      "claudio echeverri": { countryCode: "ar", position: "MCO" },
      "lancinet kourouma": { countryCode: "gn", position: "MC" },
      "portu": { countryCode: "es", position: "ED" },
      "abel ruiz": { countryCode: "es", position: "DC" },
      "vladyslav vanat": { countryCode: "ua", position: "DC" },
      "juan arango": { countryCode: "ve", position: "DC" },
      "papa dame ba": { countryCode: "sn", position: "DC" },
      "javier sarasa": { countryCode: "es", position: "DC" },
      "daniel cardenas": { countryCode: "es", position: "POR" },
      "augusto batalla": { countryCode: "ar", position: "POR" },
      "adrian molina": { countryCode: "es", position: "POR" },
      "juanpe": { countryCode: "es", position: "POR" },
      "florian lejeune": { countryCode: "fr", position: "DFC" },
      "ivan balliu": { countryCode: "al", position: "LD" },
      "pacha espino": { countryCode: "uy", position: "LI" },
      "luiz felipe": { countryCode: "it", position: "DFC" },
      "abdul mumin": { countryCode: "gh", position: "DFC" },
      "sergio lozano": { countryCode: "es", position: "MC" },
      "andrei ratiu": { countryCode: "ro", position: "LD" },
      "pep chavarria": { countryCode: "es", position: "LI" },
      "jozhua vertrouwd": { countryCode: "nl", position: "DFC" },
      "nobel mendy": { countryCode: "sn", position: "DFC" },
      "marco de las sias": { countryCode: "es", position: "DFC" },
      "oscar trejo": { countryCode: "ar", position: "MCO" },
      "alvaro garcia": { countryCode: "es", position: "EI" },
      "diego mendez": { countryCode: "es", position: "MC" },
      "gerard gumbau": { countryCode: "es", position: "MC" },
      "unai lopez": { countryCode: "es", position: "MC" },
      "pedro diaz": { countryCode: "es", position: "MC" },
      "isi palazon": { countryCode: "es", position: "ED" },
      "oscar valentin": { countryCode: "es", position: "MCD" },
      "randy nteka": { countryCode: "ao", position: "DC" },
      "pathe ciss": { countryCode: "sn", position: "MC" },
      "fran perez": { countryCode: "es", position: "ED" },
      "samu becerra": { countryCode: "es", position: "MC" },
      "marco roman": { countryCode: "es", position: "MC" },
      "jorge de frutos": { countryCode: "es", position: "ED" },
      "sergio camello": { countryCode: "es", position: "DC" },
      "alexandre alemao": { countryCode: "br", position: "DC" },
      "carlos martin": { countryCode: "es", position: "DC" },
      "cristian rivero": { countryCode: "es", position: "POR" },
      "stole dimitrievski": { countryCode: "mk", position: "POR" },
      "pere garcia bauza": { countryCode: "es", position: "POR" },
      "julen agirrezabala": { countryCode: "es", position: "POR" },
      "vicent abril": { countryCode: "es", position: "POR" },
      "dimitri foulquier": { countryCode: "fr", position: "LD" },
      "renzo saravia": { countryCode: "ar", position: "LD" },
      "jesus vazquez": { countryCode: "es", position: "LI" },
      "eray comert": { countryCode: "ch", position: "DFC" },
      "mouctar diakhaby": { countryCode: "gn", position: "DFC" },
      "unai nunez": { countryCode: "es", position: "DFC" },
      "thierry correia": { countryCode: "pt", position: "LD" },
      "copete": { countryCode: "es", position: "DFC" },
      "cesar tarrega": { countryCode: "es", position: "DFC" },
      "ruben iranzo": { countryCode: "es", position: "LI" },
      "marcos navarro": { countryCode: "es", position: "DFC" },
      "alex panach": { countryCode: "es", position: "DFC" },
      "joel fontanet": { countryCode: "es", position: "DFC" },
      "aaron mayol": { countryCode: "es", position: "DFC" },
      "baptiste santamaria": { countryCode: "fr", position: "MCD" },
      "guido rodriguez": { countryCode: "ar", position: "MCD" },
      "filip ugrinic": { countryCode: "ch", position: "MC" },
      "lucas beltran": { countryCode: "ar", position: "MCO" },
      "andre almeida": { countryCode: "pt", position: "MC" },
      "lucas nunez": { countryCode: "es", position: "MC" },
      "arnaut danjuma": { countryCode: "nl", position: "EI" },
      "dani raba": { countryCode: "es", position: "DC" },
      "luis rioja": { countryCode: "es", position: "EI" },
      "largie ramazani": { countryCode: "be", position: "EI" },
      "marc jurado": { countryCode: "es", position: "LD" },
      "mario dominguez": { countryCode: "es", position: "DC" },
      "david otorbi": { countryCode: "es", position: "ED" },
      "aimar blazquez": { countryCode: "es", position: "ED" },
      "ivan cuellar": { countryCode: "es", position: "POR" },
      "lucas bergstrom": { countryCode: "fi", position: "POR" },
      "nil torreguitart": { countryCode: "es", position: "POR" },
      "leo roman": { countryCode: "es", position: "POR" },
      "rares vlad": { countryCode: "ro", position: "POR" },
      "javier olaizola": { countryCode: "es", position: "DFC" },
      "johan mojica": { countryCode: "co", position: "LI" },
      "luis orejuela": { countryCode: "es", position: "LD" },
      "martin valjent": { countryCode: "sk", position: "DFC" },
      "antonio raillo": { countryCode: "es", position: "DFC" },
      "pablo maffeo": { countryCode: "ar", position: "LD" },
      "toni lato": { countryCode: "es", position: "LI" },
      "marash kumbulla": { countryCode: "al", position: "DFC" },
      "mateu morey": { countryCode: "es", position: "LD" },
      "iliesse salhi": { countryCode: "fr", position: "DFC" },
      "leo sanchez": { countryCode: "es", position: "DFC" },
      "omar mascarell": { countryCode: "gq", position: "MCD" },
      "samu costa": { countryCode: "pt", position: "MCD" },
      "manu morlanes": { countryCode: "es", position: "MC" },
      "antonio sanchez": { countryCode: "es", position: "MC" },
      "jan salas": { countryCode: "es", position: "MC" },
      "jandro garcia": { countryCode: "es", position: "MC" },
      "abdon prats": { countryCode: "es", position: "DC" },
      "takuma asano": { countryCode: "jp", position: "ED" },
      "vedat muriqi": { countryCode: "xk", position: "DC" },
      "zito luvumbo": { countryCode: "ao", position: "EI" },
      "javi llabres": { countryCode: "es", position: "DC" },
      "mateo joseph": { countryCode: "fr", position: "DC" },
      "justinnoel kalumba": { countryCode: "fr", position: "DC" },
      "jan virgili": { countryCode: "es", position: "DC" },
      "rafael romero": { countryCode: "es", position: "POR" },
      "odisseas vlachodimos": { countryCode: "gr", position: "POR" },
      "alberto flores": { countryCode: "es", position: "POR" },
      "orjan nyland": { countryCode: "no", position: "POR" },
      "lorenzo luchino": { countryCode: "ar", position: "POR" },
      "cesar azpilicueta": { countryCode: "es", position: "LD" },
      "marcao": { countryCode: "br", position: "DFC" },
      "fabio cardoso": { countryCode: "pt", position: "DFC" },
      "gabriel suazo": { countryCode: "cl", position: "LI" },
      "jose angel carmona": { countryCode: "es", position: "DFC" },
      "federico gattoni": { countryCode: "ar", position: "DFC" },
      "tanguy nianzou": { countryCode: "fr", position: "DFC" },
      "andres castrin": { countryCode: "es", position: "DFC" },
      "enrique salas": { countryCode: "es", position: "DFC" },
      "oso": { countryCode: "es", position: "LD" },
      "iker ortin": { countryCode: "es", position: "DFC" },
      "nemanja gudelj": { countryCode: "rs", position: "MCD" },
      "joan jordan": { countryCode: "es", position: "MC" },
      "djibril sow": { countryCode: "ch", position: "MC" },
      "ruben vargas": { countryCode: "ch", position: "EI" },
      "batista mendy": { countryCode: "fr", position: "MC" },
      "lucien agoume": { countryCode: "fr", position: "MC" },
      "juanlu sanchez": { countryCode: "es", position: "LD" },
      "manu bueno": { countryCode: "es", position: "MCO" },
      "edu altozano": { countryCode: "es", position: "MC" },
      "alexis sanchez": { countryCode: "cl", position: "DC" },
      "neal maupay": { countryCode: "fr", position: "DC" },
      "chidera ejuke": { countryCode: "ng", position: "EI" },
      "akor adams": { countryCode: "ng", position: "DC" },
      "peque": { countryCode: "es", position: "ED" },
      "miguel sierra": { countryCode: "es", position: "DC" },
      "alex costa": { countryCode: "es", position: "ED" },
      "raul fernandez": { countryCode: "es", position: "POR" },
      "antonio sivera": { countryCode: "es", position: "POR" },
      "gregoire swiderski": { countryCode: "ca", position: "POR" },
      "ruben montero": { countryCode: "es", position: "POR" },
      "ville koski": { countryCode: "fi", position: "DFC" },
      "jonny": { countryCode: "es", position: "LD" },
      "facundo garces": { countryCode: "ar", position: "DFC" },
      "nahuel tenaglia": { countryCode: "ar", position: "LD" },
      "victor parada": { countryCode: "es", position: "DFC" },
      "paco sanz": { countryCode: "es", position: "DFC" },
      "angel perez": { countryCode: "es", position: "DFC" },
      "carlos ballestero": { countryCode: "es", position: "DFC" },
      "egoitz munoz": { countryCode: "es", position: "LI" },
      "youssef lekhedim": { countryCode: "ma", position: "LD" },
      "alvaro garcia alaves": { countryCode: "es", position: "LI" },
      "xanet olaiz": { countryCode: "es", position: "DFC" },
      "carlos protesoni": { countryCode: "uy", position: "MC" },
      "jon guridi": { countryCode: "es", position: "MCD" },
      "ander guevara": { countryCode: "es", position: "MCD" },
      "antonio blanco": { countryCode: "es", position: "MCD" },
      "calebe": { countryCode: "br", position: "MC" },
      "lander pinillos": { countryCode: "es", position: "EI" },
      "toni martinez": { countryCode: "es", position: "DC" },
      "mariano": { countryCode: "do", position: "DC" },
      "lucas boye": { countryCode: "ar", position: "DC" },
      "ibrahim diabate": { countryCode: "ci", position: "DC" },
      "abde rebbach": { countryCode: "dz", position: "EI" },
      "diego morcillo": { countryCode: "es", position: "ED" },
      "aitor manas": { countryCode: "es", position: "DC" },
      "izei hernandez": { countryCode: "es", position: "DC" },
      "matias dituro": { countryCode: "ar", position: "POR" },
      "alejandro iturbe": { countryCode: "es", position: "POR" },
      "pedro bigas": { countryCode: "es", position: "DFC" },
      "leo petrot": { countryCode: "fr", position: "DFC" },
      "victor chust": { countryCode: "es", position: "DFC" },
      "adria pedrosa": { countryCode: "es", position: "LI" },
      "john donald": { countryCode: "es", position: "LD" },
      "david affengruber": { countryCode: "at", position: "DFC" },
      "david delgado": { countryCode: "es", position: "DFC" },
      "buba sangare": { countryCode: "es", position: "LI" },
      "bema sina": { countryCode: "gh", position: "DFC" },
      "albert niculaesei": { countryCode: "ro", position: "DFC" },
      "nico salvador": { countryCode: "es", position: "DFC" },
      "pablo felipe": { countryCode: "es", position: "DFC" },
      "josan": { countryCode: "es", position: "MC" },
      "aleix febas": { countryCode: "es", position: "MC" },
      "gonzalo villar": { countryCode: "es", position: "MC" },
      "marc aguado": { countryCode: "es", position: "MCD" },
      "federico redondo": { countryCode: "ar", position: "MC" },
      "martim neto": { countryCode: "pt", position: "MC" },
      "antonio martinez": { countryCode: "es", position: "MC" },
      "alex herraiz": { countryCode: "es", position: "EI" },
      "andre silva": { countryCode: "pt", position: "DC" },
      "rafa mir": { countryCode: "es", position: "DC" },
      "grady diangana": { countryCode: "cd", position: "EI" },
      "jose antonio morente": { countryCode: "es", position: "ED" },
      "german valera": { countryCode: "es", position: "EI" },
      "lucas cepeda": { countryCode: "cl", position: "ED" },
      "yago alonso": { countryCode: "es", position: "DC" },
      "adam boayar": { countryCode: "ma", position: "EI" },
      "daniel ballesteros": { countryCode: "es", position: "DC" },
      "alex sanchez elche": { countryCode: "es", position: "EI" },
      "mathew ryan": { countryCode: "au", position: "POR" },
      "pablo cunat": { countryCode: "es", position: "POR" },
      "alejandro primo": { countryCode: "es", position: "POR" },
      "cayetano": { countryCode: "es", position: "POR" },
      "jeremy toljan": { countryCode: "de", position: "LD" },
      "matias moreno": { countryCode: "ar", position: "DFC" },
      "victor garcia levante": { countryCode: "ve", position: "DFC" },
      "unai elgezabel": { countryCode: "es", position: "DFC" },
      "diego pampin": { countryCode: "es", position: "LI" },
      "adrian de la fuente": { countryCode: "es", position: "LD" },
      "manu sanchez": { countryCode: "es", position: "LI" },
      "alan matturro": { countryCode: "uy", position: "DFC" },
      "martin krug": { countryCode: "pa", position: "DFC" },
      "nacho perez": { countryCode: "es", position: "DFC" },
      "huseini nakoha": { countryCode: "gh", position: "DFC" },
      "carlos alvarez levante": { countryCode: "es", position: "MC" },
      "kervin arriaga": { countryCode: "hn", position: "MC" },
      "roger brugue": { countryCode: "es", position: "MC" },
      "orio rey": { countryCode: "es", position: "MC" },
      "pablo martinez levante": { countryCode: "es", position: "MC" },
      "unai vencedor": { countryCode: "es", position: "MCD" },
      "jon ander olasagasti": { countryCode: "es", position: "MC" },
      "ugo raghouber": { countryCode: "fr", position: "MC" },
      "dani cervera": { countryCode: "es", position: "MC" },
      "joan ruiz agustina": { countryCode: "es", position: "EI" },
      "pablo roson": { countryCode: "es", position: "MC" },
      "jose luis morales": { countryCode: "es", position: "EI" },
      "iker losada": { countryCode: "es", position: "ED" },
      "ivan romero": { countryCode: "es", position: "DC" },
      "tai abed": { countryCode: "il", position: "DC" },
      "etta eyong": { countryCode: "cm", position: "ED" },
      "carlos espi": { countryCode: "es", position: "DC" },
      "paco cortes": { countryCode: "es", position: "DC" },
      "kareem tunde": { countryCode: "es", position: "DC" },
      "aaron escandell": { countryCode: "es", position: "POR" },
      "horatiu moldovan": { countryCode: "ro", position: "POR" },
      "miguel narvaez": { countryCode: "es", position: "POR" },
      "diego espinosa": { countryCode: "es", position: "DFC" },
      "dani calvo": { countryCode: "es", position: "DFC" },
      "david costas": { countryCode: "es", position: "DFC" },
      "eric bailly": { countryCode: "ci", position: "DFC" },
      "lucas oviedo": { countryCode: "es", position: "LI" },
      "david carmo": { countryCode: "pt", position: "DFC" },
      "nacho vidal": { countryCode: "es", position: "LD" },
      "javi lopez oviedo": { countryCode: "es", position: "LI" },
      "rahim alhassane": { countryCode: "ne", position: "DFC" },
      "marco esteban": { countryCode: "es", position: "DFC" },
      "omar falah": { countryCode: "es", position: "LD" },
      "adri fernandez": { countryCode: "es", position: "LI" },
      "leander dendoncker": { countryCode: "be", position: "MCD" },
      "santiago colombatto": { countryCode: "ar", position: "MCD" },
      "alberto reina": { countryCode: "es", position: "MC" },
      "luka ilic": { countryCode: "rs", position: "MC" },
      "kwasi sibo": { countryCode: "gh", position: "MC" },
      "nicolas fonseca": { countryCode: "uy", position: "MCD" },
      "diego menendez": { countryCode: "es", position: "MC" },
      "cheli": { countryCode: "es", position: "EI" },
      "pablo agudin": { countryCode: "es", position: "MC" },
      "ovie ejaria": { countryCode: "en", position: "EI" },
      "haissem hassan": { countryCode: "eg", position: "ED" },
      "federico vinas": { countryCode: "uy", position: "DC" },
      "lamine gueye": { countryCode: "sn", position: "DC" },
      "thiago borbas": { countryCode: "uy", position: "DC" },
      "ilyas chaira": { countryCode: "ma", position: "ED" },
      "thiago fernandez oviedo": { countryCode: "uy", position: "DC" },
      "alex fores": { countryCode: "es", position: "DC" },
      "dimitrios stamatakis": { countryCode: "gr", position: "POR" },
      "javi galan": { countryCode: "es", position: "LI" },
      "valentin rosier": { countryCode: "fr", position: "LD" },
      "mikel serrano": { countryCode: "es", position: "DFC" },
      "inigo arguibide": { countryCode: "es", position: "LI" },
      "raul chasco": { countryCode: "es", position: "DFC" },
      "unai santos": { countryCode: "es", position: "DFC" },
      "asier osambela": { countryCode: "es", position: "MC" },
      "jon garcia osasuna": { countryCode: "es", position: "MC" },
      "mauro echegoyen": { countryCode: "es", position: "MC" },
      "enrique barja": { countryCode: "es", position: "DC" },
      "raul garcia": { countryCode: "es", position: "MC" },
      "raul moro": { countryCode: "es", position: "EI" },
      "roberto arroyo": { countryCode: "es", position: "ED" },
      "victor munoz": { countryCode: "es", position: "DC" },
      "martin pedroarena": { countryCode: "es", position: "DC" },
      "aly doumbia": { countryCode: "es", position: "DC" },
      "jorge benito getafe": { countryCode: "es", position: "POR" },
      "diego ferrer": { countryCode: "es", position: "POR" },
      "kiko femenia": { countryCode: "es", position: "LD" },
      "djene": { countryCode: "tg", position: "DFC" },
      "domingos duarte": { countryCode: "pt", position: "DFC" },
      "abdel abqar": { countryCode: "ma", position: "DFC" },
      "juan iglesias": { countryCode: "es", position: "DFC" },
      "zaid romero": { countryCode: "ar", position: "DFC" },
      "marc vilaplana": { countryCode: "es", position: "LD" },
      "lucas laso": { countryCode: "es", position: "DFC" },
      "sebastian boselli": { countryCode: "uy", position: "DFC" },
      "ismael bekhoucha": { countryCode: "ma", position: "DFC" },
      "davinchi": { countryCode: "es", position: "LI" },
      "jorge montes": { countryCode: "es", position: "DFC" },
      "tito": { countryCode: "es", position: "DFC" },
      "javi munoz": { countryCode: "es", position: "MC" },
      "veljko birmancevic": { countryCode: "rs", position: "EI" },
      "hugo solozabal": { countryCode: "es", position: "MC" },
      "mario martin getafe": { countryCode: "es", position: "MC" },
      "alejandro mestanza": { countryCode: "es", position: "EI" },
      "adrian riquelme": { countryCode: "es", position: "MCO" },
      "juanmi": { countryCode: "es", position: "DC" },
      "abu kamara": { countryCode: "en", position: "EI" },
      "martin satriano": { countryCode: "uy", position: "DC" },
      "luis vazquez": { countryCode: "ar", position: "DC" },
      "alex sancris": { countryCode: "es", position: "ED" },
      "joselu perez": { countryCode: "es", position: "DC" },
      "adrian liso": { countryCode: "es", position: "DC" },
      "yassin tallal": { countryCode: "ma", position: "EI" },
      "mykyta aleksandrov": { countryCode: "ua", position: "DC" },
      "aitor fraga": { countryCode: "es", position: "POR" },
      "theo folgado": { countryCode: "es", position: "POR" },
      "duje caletacar": { countryCode: "hr", position: "DFC" },
      "jon aramburu": { countryCode: "ve", position: "LD" },
      "kazunari kita": { countryCode: "jp", position: "LD" },
      "jon martin": { countryCode: "es", position: "DFC" },
      "inaki ruperez": { countryCode: "es", position: "DFC" },
      "luken beitia": { countryCode: "es", position: "DFC" },
      "yangel herrera": { countryCode: "ve", position: "MC" },
      "pablo marin": { countryCode: "es", position: "MC" },
      "alex lebarbier": { countryCode: "fr", position: "MC" },
      "jon gorrotxategi": { countryCode: "es", position: "MC" },
      "lander astiazaran": { countryCode: "es", position: "MC" },
      "tomas carbonell": { countryCode: "es", position: "MC" },
      "ibai aguirre": { countryCode: "es", position: "EI" },
      "goncalo guedes": { countryCode: "pt", position: "EI" },
      "sergio gomez": { countryCode: "es", position: "LI" },
      "wesley ribeiro": { countryCode: "br", position: "ED" },
      "jon karrikaburu": { countryCode: "es", position: "DC" },
      "daniel diaz": { countryCode: "es", position: "DC" },
      "arkaitz mariezkurrena": { countryCode: "es", position: "DC" },
      "alex marchal": { countryCode: "es", position: "DC" },
      "job ochieng": { countryCode: "ke", position: "ED" },
      "gorka carrera": { countryCode: "es", position: "DC" },
      "andrei radu": { countryCode: "ro", position: "POR" },
      "marcos gonzalez": { countryCode: "es", position: "POR" },
      "joseph aidoo": { countryCode: "gh", position: "DFC" },
      "carlos dominguez": { countryCode: "es", position: "DFC" },
      "javi rueda": { countryCode: "es", position: "DFC" },
      "alvaro nunez": { countryCode: "es", position: "LD" },
      "yoel lago": { countryCode: "es", position: "DFC" },
      "manuel fernandez celta": { countryCode: "es", position: "DFC" },
      "pablo meixus": { countryCode: "es", position: "LI" },
      "matias vecino": { countryCode: "uy", position: "MCD" },
      "franco cervi": { countryCode: "ar", position: "EI" },
      "miguel roman": { countryCode: "es", position: "MC" },
      "fernando lopez": { countryCode: "es", position: "MC" },
      "andres antanon": { countryCode: "es", position: "MC" },
      "hugo burcio": { countryCode: "es", position: "MC" },
      "ferran jutgla": { countryCode: "es", position: "DC" },
      "hugo gonzalez celta": { countryCode: "es", position: "DC" },
      "jones elabdellaoui": { countryCode: "ma", position: "EI" },
      "oscar marcos": { countryCode: "es", position: "DC" },
      "angel arcos": { countryCode: "es", position: "DC" },
      "adrian": { countryCode: "es", position: "POR" },
      "german garcia": { countryCode: "ar", position: "POR" },
      "manu gonzalez": { countryCode: "es", position: "POR" },
      "darling bladi": { countryCode: "fr", position: "DFC" },
      "angel ortiz": { countryCode: "es", position: "LD" },
      "carlos de roa": { countryCode: "es", position: "DFC" },
      "nelson deossa": { countryCode: "co", position: "MC" },
      "daniel perez": { countryCode: "es", position: "MC" },
      "ivan corralejo": { countryCode: "es", position: "MC" },
      "pablo garcia": { countryCode: "es", position: "DC" },
      "jose morante": { countryCode: "es", position: "DC" },
      "rodrigo marina": { countryCode: "es", position: "DC" },
      "alvaro moreno": { countryCode: "es", position: "POR" },
      "mario de luis": { countryCode: "es", position: "POR" },
      "salvi esquivel": { countryCode: "es", position: "POR" },
      "ilias kostis": { countryCode: "gr", position: "DFC" },
      "daniel martinez atletico": { countryCode: "es", position: "DFC" },
      "javier bonar": { countryCode: "es", position: "LD" },
      "aleksa puric": { countryCode: "rs", position: "DFC" },
      "geronimo spina": { countryCode: "ar", position: "DFC" },
      "javier serrano": { countryCode: "es", position: "MC" },
      "julio diaz": { countryCode: "es", position: "LI" },
      "jano monserrate": { countryCode: "es", position: "MC" },
      "taufik seidu": { countryCode: "es", position: "MC" },
      "javier morcillo": { countryCode: "es", position: "EI" },
      "nicolas gonzalez": { countryCode: "ar", position: "DC" },
      "rayane belaid": { countryCode: "es", position: "EI" },
      "iker luque": { countryCode: "es", position: "ED" },
      "sergio esteban": { countryCode: "es", position: "DC" },
      "ruben gomez": { countryCode: "es", position: "POR" },
      "alex freeman": { countryCode: "us", position: "LD" },
      "pau navarro": { countryCode: "es", position: "DFC" },
      "isma sierra": { countryCode: "es", position: "DFC" },
      "daniel budesca": { countryCode: "es", position: "LD" },
      "jean ives valou": { countryCode: "ci", position: "DFC" },
      "alassane diatta": { countryCode: "sn", position: "MC" },
      "carlos macia": { countryCode: "es", position: "MC" },
      "hugo lopez": { countryCode: "es", position: "ED" },
      "alfonso gonzalez": { countryCode: "es", position: "ED" },
      "joselillo": { countryCode: "es", position: "ED" },
      "mahamoud barry": { countryCode: "ml", position: "DC" },
      "pau cabanes": { countryCode: "es", position: "DC" },
      "javier navarro": { countryCode: "es", position: "POR" },
      "sergio mestre": { countryCode: "es", position: "POR" },
      "david jimenez": { countryCode: "es", position: "LD" },
      "mario rivas": { countryCode: "es", position: "DFC" },
      "joan martinez": { countryCode: "es", position: "DFC" },
      "diego aguado": { countryCode: "es", position: "DFC" },
      "victor valdepenas": { countryCode: "es", position: "DFC" },
      "jesus fortea": { countryCode: "es", position: "LD" },
      "lamini fati": { countryCode: "es", position: "DFC" },
      "cesar palacios": { countryCode: "es", position: "MC" },
      "manuel angel": { countryCode: "es", position: "MC" },
      "pol fortuny": { countryCode: "es", position: "MC" },
      "thiago pitarch": { countryCode: "es", position: "MC" },
      "jorge cestero": { countryCode: "es", position: "MC" },
      "dani meso": { countryCode: "es", position: "MC" },
      "alvaro leiva": { countryCode: "es", position: "EI" },
      "daniel yanez": { countryCode: "es", position: "ED" },
      "diego kochen": { countryCode: "us", position: "POR" },
      "eder aller": { countryCode: "es", position: "POR" },
      "alvaro cortes": { countryCode: "es", position: "DFC" },
      "xavi espart": { countryCode: "es", position: "LD" },
      "jofre torrents": { countryCode: "es", position: "LI" },
      "juan hernandez": { countryCode: "es", position: "MC" },
      "guille fernandez": { countryCode: "es", position: "MC" },
      "tomas marques": { countryCode: "es", position: "MC" },
      "daniel rodriguez barca": { countryCode: "es", position: "EI" },
      "toni fernandez": { countryCode: "es", position: "DC" },
      // === Jugadors d'un sol club a La Liga ===
      "lionel messi": { countryCode: "ar", position: "SD" },
      "xavi hernandez": { countryCode: "es", position: "MC" },
      "andres iniesta": { countryCode: "es", position: "MCO" },
      "carles puyol": { countryCode: "es", position: "DFC" },
      "victor valdes": { countryCode: "es", position: "POR" },
      "gerard pique": { countryCode: "es", position: "DFC" },
      "sergio busquets": { countryCode: "es", position: "MCD" },
      "pedro rodriguez": { countryCode: "es", position: "ED" },
      "cesc fabregas": { countryCode: "es", position: "MC" },
      "neymar": { countryCode: "br", position: "EI" },
      "zlatan ibrahimovic": { countryCode: "se", position: "DC" },
      "ronaldinho": { countryCode: "br", position: "MCO" },
      "thierry henry": { countryCode: "fr", position: "ED" },
      "sergi roberto": { countryCode: "es", position: "LD" },
      "hristo stoichkov": { countryCode: "bg", position: "EI" },
      "pep guardiola": { countryCode: "es", position: "MC" },
      "migueli": { countryCode: "es", position: "DFC" },
      "raul gonzalez": { countryCode: "es", position: "DC" },
      "iker casillas": { countryCode: "es", position: "POR" },
      "roberto carlos": { countryCode: "br", position: "LI" },
      "zinedine zidane": { countryCode: "fr", position: "MCO" },
      "cristiano ronaldo": { countryCode: "pt", position: "ED" },
      "marcelo": { countryCode: "br", position: "LI" },
      "casemiro": { countryCode: "br", position: "MCD" },
      "karim benzema": { countryCode: "fr", position: "DC" },
      "pepe kepper": { countryCode: "pt", position: "DFC" },
      "mesut ozil": { countryCode: "de", position: "MCO" },
      "gonzalo higuain": { countryCode: "ar", position: "DC" },
      "angel di maria": { countryCode: "ar", position: "ED" },
      "arjen robben": { countryCode: "nl", position: "ED" },
      "emilio butragueno": { countryCode: "es", position: "DC" },
      "gareth bale": { countryCode: "cy", position: "ED" },
      "toni kroos": { countryCode: "de", position: "MC" },
      "nacho fernandez": { countryCode: "es", position: "DFC" },
      "guti": { countryCode: "es", position: "MCO" },
      "manolo sanchis": { countryCode: "es", position: "DFC" },
      "chendo": { countryCode: "es", position: "LD" },
      "jose antonio camacho": { countryCode: "es", position: "LI" },
      "pirri": { countryCode: "es", position: "MC" },
      "francisco gento": { countryCode: "es", position: "EI" },
      "fernando torres": { countryCode: "es", position: "DC" },
      "radamel falcao": { countryCode: "co", position: "DC" },
      "saul niguez": { countryCode: "es", position: "MC" },
      "angel correa": { countryCode: "ar", position: "ED" },
      "frederic kanoute": { countryCode: "ml", position: "DC" },
      "alberto moreno": { countryCode: "es", position: "LI" },
      "juan mata": { countryCode: "es", position: "MCO" },
      "joseba etxeberria": { countryCode: "es", position: "EI" },
      "aritz aduriz": { countryCode: "es", position: "DC" },
      "julen guerrero": { countryCode: "es", position: "MCO" },
      "iker muniain": { countryCode: "es", position: "EI" },
      "markel susaeta": { countryCode: "es", position: "ED" },
      "andoni iraola": { countryCode: "es", position: "LD" },
      "jose angel iribar": { countryCode: "es", position: "POR" },
      "dani ruizbazan": { countryCode: "es", position: "DC" },
      "txetxu rojo": { countryCode: "es", position: "EI" },
      "xabi prieto": { countryCode: "es", position: "ED" },
      "luis arconada": { countryCode: "es", position: "POR" },
      "alberto gorriz": { countryCode: "es", position: "DFC" },
      "juan antonio larranaga": { countryCode: "es", position: "DFC" },
      "jesus maria satrustegui": { countryCode: "es", position: "DC" },
      "robert pires": { countryCode: "fr", position: "EI" },
      "bruno soriano": { countryCode: "es", position: "MCD" },
      "manu trigueros": { countryCode: "es", position: "MC" },
      "dani guiza": { countryCode: "es", position: "DC" },
      "savo milosevic": { countryCode: "rs", position: "DC" },
      "hugo mallo": { countryCode: "es", position: "LD" },
      "mauricio pochettino": { countryCode: "ar", position: "DFC" },
      "mauro silva": { countryCode: "br", position: "MCD" },
      "fran": { countryCode: "es", position: "MC" },
      "xavi aguado": { countryCode: "es", position: "DFC" },
      "michel": { countryCode: "es", position: "MCO" },
      "weligton": { countryCode: "br", position: "DFC" },
      "carlos gurpegui": { countryCode: "es", position: "DFC" },
      "mikel gonzalez": { countryCode: "es", position: "DFC" },
      "dani estrada": { countryCode: "es", position: "LD" },
      "gorka elustondo": { countryCode: "es", position: "MC" },
      "marcos senna": { countryCode: "br", position: "MCD" },
      "adelardo rodriguez": { countryCode: "es", position: "MC" },
      "dani jarque": { countryCode: "es", position: "DFC" },
      "thomas nkono": { countryCode: "cm", position: "POR" },
      "borja oubina": { countryCode: "es", position: "MC" },
      "alexander mostovoi": { countryCode: "ru", position: "MCO" },
      "jan urban": { countryCode: "pl", position: "DC" },
      "patxi punal": { countryCode: "es", position: "MCD" },
      "denilson": { countryCode: "br", position: "EI" },
      "vicente valcarce": { countryCode: "es", position: "LI" },
      "alex granell": { countryCode: "es", position: "MC" },
      "david garcia": { countryCode: "es", position: "DFC" },
      "alexander szymanowski": { countryCode: "ar", position: "EI" },
      "martin aguirregabiria": { countryCode: "es", position: "LD" },
      "edu albacar": { countryCode: "es", position: "LI" },
      "cota": { countryCode: "es", position: "LD" },
      "joaquin alonso": { countryCode: "es", position: "MC" },
      "juan carlos ablanedo": { countryCode: "es", position: "POR" },
      "mikel aranburu": { countryCode: "es", position: "MC" },
      "luis mariano minguela": { countryCode: "es", position: "MC" },
      "juan arango": { countryCode: "ve", position: "MCO" },
      "juan arango jr": { countryCode: "ve", position: "EI" },
      "magico gonzalez": { countryCode: "sv", position: "ED" },
      "odion ighalo": { countryCode: "ng", position: "DC" },
      "quini": { countryCode: "es", position: "DC" },
      "diego forlan": { countryCode: "uy", position: "DC" },
      "david silva": { countryCode: "es", position: "MCO" },
      "luis enrique": { countryCode: "es", position: "MC" },
      "raul garcia": { countryCode: "es", position: "MC" },
      "alvaro negredo": { countryCode: "es", position: "DC" },
      "gaizka mendieta": { countryCode: "es", position: "MC" },
      "ruben baraja": { countryCode: "es", position: "MC" },
      "david albelda": { countryCode: "es", position: "MCD" },
      "santiago canizares": { countryCode: "es", position: "POR" },
      "michel salgado": { countryCode: "es", position: "LD" },
      "bojan krkic": { countryCode: "es", position: "DC" },
      "juan carlos valeron": { countryCode: "es", position: "MCO" },
      "bebeto": { countryCode: "br", position: "DC" },
      "djalminha": { countryCode: "br", position: "MCO" },
      "david trezeguet": { countryCode: "fr", position: "DC" },
      "nelson valdez": { countryCode: "py", position: "DC" },
      "royston drenthe": { countryCode: "nl", position: "LI" },
      "felipe caicedo": { countryCode: "ec", position: "DC" },
      "ricardo carvalho": { countryCode: "pt", position: "DFC" },
      "sami khedira": { countryCode: "de", position: "MC" },
      "emmanuel adebayor": { countryCode: "tg", position: "DC" },
      "ibrahim afellay": { countryCode: "nl", position: "EI" },
      "javier mascherano": { countryCode: "ar", position: "MCD" },
      "seydou keita": { countryCode: "ml", position: "MC" },
      "jose antonio reyes": { countryCode: "es", position: "ED" },
      "simao sabrosa": { countryCode: "pt", position: "EI" },
      "kun aguero": { countryCode: "ar", position: "DC" },
      "david de gea": { countryCode: "es", position: "POR" },
      "borja valero": { countryCode: "es", position: "MC" },
      "nilmar": { countryCode: "br", position: "DC" },
      "giuseppe rossi": { countryCode: "it", position: "DC" },
      "salomon rondon": { countryCode: "ve", position: "DC" },
      "diego alves": { countryCode: "br", position: "POR" },
      "pablo piatti": { countryCode: "ar", position: "EI" },
      "gorka iraizoz": { countryCode: "es", position: "POR" },
      "andoni iraola": { countryCode: "es", position: "LD" },
      "fernando llorente": { countryCode: "es", position: "DC" },
      "javi martinez": { countryCode: "es", position: "MC" },
      "tomas ujfalusi": { countryCode: "cz", position: "DFC" },
      "luis perea": { countryCode: "co", position: "DFC" },
      "tiago mendes": { countryCode: "pt", position: "MC" },
      "adriano correia": { countryCode: "br", position: "LI" },
      "maxwell": { countryCode: "br", position: "LI" },
      "daniel aranzubia": { countryCode: "es", position: "POR" },
      "andres guardado": { countryCode: "mx", position: "MC" },
      "carlos kameni": { countryCode: "cm", position: "POR" },
      "pablo osvaldo": { countryCode: "it", position: "DC" },
      "joan verdu": { countryCode: "es", position: "MC" },
      "cata diaz": { countryCode: "ar", position: "DFC" },
      "manu del moral": { countryCode: "es", position: "DC" },
      "sergio ballesteros": { countryCode: "es", position: "DFC" },
      "vicente iborra": { countryCode: "es", position: "MC" },
      "jesus gamez": { countryCode: "es", position: "LD" },
      "willy caballero": { countryCode: "ar", position: "POR" },
      "dudu aouate": { countryCode: "il", position: "POR" },
      "pierre webo": { countryCode: "cm", position: "DC" },
      "walter pandiani": { countryCode: "uy", position: "DC" },
      "nacho monreal": { countryCode: "es", position: "LI" },
      "pedro munitis": { countryCode: "es", position: "DC" },
      "claudio bravo": { countryCode: "cl", position: "POR" },
      "xabi prieto": { countryCode: "es", position: "ED" },
      "andres palop": { countryCode: "es", position: "POR" },
      "luis fabiano": { countryCode: "br", position: "DC" },
      "david barral": { countryCode: "es", position: "DC" },
      "diego castro": { countryCode: "es", position: "EI" },
      "jeremy mathieu": { countryCode: "fr", position: "DFC" },
      "pablo hernandez": { countryCode: "es", position: "ED" },
      "joan capdevila": { countryCode: "es", position: "LI" },
      "cani": { countryCode: "es", position: "MC" },
      "ander herrera": { countryCode: "es", position: "MC" },
      "alexis ruano": { countryCode: "es", position: "DFC" },
      "miquel soler": { countryCode: "es", position: "LI" },
      "luis garcia legend": { countryCode: "es", position: "ED" },
      "james rodriguez": { countryCode: "co", position: "MCO" },
      "jese rodriguez": { countryCode: "es", position: "ED" },
      "edinson cavani": { countryCode: "uy", position: "DC" },
      "leonardo ponzio": { countryCode: "ar", position: "MC" },
      "fabio coentrao": { countryCode: "pt", position: "LI" },
      "raphael varane": { countryCode: "fr", position: "DFC" },
      "hamit altintop": { countryCode: "tr", position: "MC" },
      "alexis sanchez": { countryCode: "cl", position: "EI" },
      "isaac cuenca": { countryCode: "es", position: "ED" },
      "sofiane feghouli": { countryCode: "dz", position: "ED" },
      "jonas goncalves": { countryCode: "br", position: "MCO" },
      "jeremy toulalan": { countryCode: "fr", position: "MCD" },
      "martin mathijsen": { countryCode: "nl", position: "DFC" },
      "miranda": { countryCode: "br", position: "DFC" },
      "diego ribas": { countryCode: "br", position: "MCO" },
      "arda turan": { countryCode: "tr", position: "EI" },
      "thibaut courtois": { countryCode: "be", position: "POR" },
      "arouna kone": { countryCode: "ci", position: "DC" },
      "jose javier barkero": { countryCode: "es", position: "MCO" },
      "ruben castro": { countryCode: "es", position: "DC" },
      "jorge molina": { countryCode: "es", position: "DC" },
      "benat etxebarria": { countryCode: "es", position: "MC" },
      "michu": { countryCode: "es", position: "MCO" },
      "roberto trashorras": { countryCode: "es", position: "MC" },
      "piti": { countryCode: "es", position: "EI" },
      "guilherme siqueira": { countryCode: "br", position: "LI" },
      "ikechukwu uche": { countryCode: "ng", position: "DC" },
      "mikel rico": { countryCode: "es", position: "MC" },
      "carlos vela": { countryCode: "mx", position: "ED" },
      "inigo martinez": { countryCode: "es", position: "DFC" },
      "giovani dos santos": { countryCode: "mx", position: "ED" },
      "cristian tello": { countryCode: "es", position: "EI" },
      "gabi": { countryCode: "es", position: "MC" },
      "antonio lopez": { countryCode: "es", position: "LI" },
      "santi ezquerro": { countryCode: "es", position: "DC" },
      "asier del horno": { countryCode: "es", position: "LI" },
      "andoni zubizarreta": { countryCode: "es", position: "POR" },
      "luis milla legend": { countryCode: "es", position: "MC" },
      "ruben de la red": { countryCode: "es", position: "MC" },
      "thiago alcantara": { countryCode: "es", position: "MC" },
      "jan oblak": { countryCode: "si", position: "POR" }




    };

    const COUNTRY_META = {
      de: { name: "Alemanya" },
      pl: { name: "Polònia" },
      en: { name: "Anglaterra" },
      si: { name: "Eslovènia" },
      gh: { name: "Ghana" },
      ua: { name: "Ucraïna" },
      tr: { name: "Turquia" },
      ma: { name: "Marroc" },
      nl: { name: "Països Baixos" },
      ar: { name: "Argentina" },
      br: { name: "Brasil" },
      cf: { name: "R. Centreafricana" },
      cm: { name: "Camerun" },
      cv: { name: "Cap Verd" },
      cd: { name: "RD Congo" },
      ch: { name: "Suïssa" },
      co: { name: "Colòmbia" },
      ci: { name: "Costa d'Ivori" },
      cl: { name: "Chile" },
      ca: { name: "Canadà" },
      dk: { name: "Dinamarca" },
      do: { name: "República Dominicana" },
      es: { name: "Espanya" },
      be: { name: "Bèlgica" },
      at: { name: "Austria" },
      fr: { name: "França" },
      ge: { name: "Geòrgia" },
      gn: { name: "Guinea" },
      gr: { name: "Grècia" },
      hr: { name: "Croàcia" },
      it: { name: "Itàlia" },
      is: { name: "Islàndia" },
      jp: { name: "Japó" },
      kr: { name: "Corea del Sud" },
      ml: { name: "Mali" },
      rs: { name: "Sèrbia" },
      se: { name: "Suècia" },
      sr: { name: "Surinam" },
      mx: { name: "Mèxic" },
      ng: { name: "Nigèria" },
      no: { name: "Noruega" },
      pt: { name: "Portugal" },
      py: { name: "Paraguay" },
      ru: { name: "Rússia" },
      sk: { name: "Eslovàquia" },
      sn: { name: "Senegal" },
      us: { name: "Estats Units" },
      uy: { name: "Uruguay" },
      bg: { name: "Bulgària" },
      ve: { name: "Veneçuela" },
      al: { name: "Albània" },
      ro: { name: "Romania" },
      ao: { name: "Angola" },
      mk: { name: "Macedònia del Nord" },
      fi: { name: "Finlàndia" },
      gq: { name: "Guinea Equatorial" },
      xk: { name: "Kosovo" },
      dz: { name: "Algèria" },
      au: { name: "Austràlia" },
      pa: { name: "Panamà" },
      hn: { name: "Hondures" },
      il: { name: "Israel" },
      ne: { name: "Níger" },
      eg: { name: "Egipte" },
      cz: { name: "Txèquia" },
      tg: { name: "Togo" },
      ke: { name: "Kenya" },
      cy: { name: "Gal·les" }
    };

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
        "flags/" + code + ".png",                                                                          // 1r: fitxer local
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
      return (TEAM_META[team] && TEAM_META[team].logo) || "";
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
          cols = pickUnique(colPool, 3, random);
          if (cols.length < 3) continue;

          const hasCountry = cols.some((constraint) => parseConstraint(constraint).type === "country");
          const hasPosition = cols.some((constraint) => parseConstraint(constraint).type === "position");
          if (!hasCountry || !hasPosition) {
            continue;
          }
        }

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
          // Simplified approach since normalizeName doesn't strictly preserve length 
          // (it might strip accents but usually preserves alpha-numeric layout)
          // For a perfect match, case-insensitive index on original name is better:
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
  
        buildIndex();
        
        let found = false;
        for(let attempt=0; attempt < 30; attempt++) {
            const seed = Date.now() + attempt;
            try {
               const board = generateBoard(seed, [], { teams: 0, countries: 3, positions: 0 }); 
               console.log("FOUND DEFAULT BOARD in seed attempt", attempt);
               console.log(board);
               found = true;
               break;
            } catch(e) {
               // failed
            }
        }
        if(!found) console.log("Failed to find board after 30 seeds.");
    