var TOP10_CATEGORIES = [
  {
    id: "barca_scorers",
    title: "Máximos goleadores históricos del FC Barcelona",
    items: [
      { name: "Lionel Messi", country: "ar" },
      { name: "César Rodríguez", country: "es" },
      { name: "Luis Suárez", country: "uy" },
      { name: "László Kubala", country: "hu" },
      { name: "Josep Samitier", country: "es" },
      { name: "Josep Escolà", country: "es" },
      { name: "Paulino Alcántara", country: "es" },
      { name: "Samuel Eto'o", country: "cm" },
      { name: "Rivaldo", country: "br" },
      { name: "Mariano Martín", country: "es" }
    ]
  },
  {
    id: "madrid_scorers",
    title: "Máximos goleadores históricos del Real Madrid",
    items: [
      { name: "Cristiano Ronaldo", country: "pt" },
      { name: "Karim Benzema", country: "fr" },
      { name: "Raúl González", country: "es" },
      { name: "Alfredo Di Stéfano", country: "es" },
      { name: "Carlos Santillana", country: "es" },
      { name: "Ferenc Puskás", country: "hu" },
      { name: "Hugo Sánchez", country: "mx" },
      { name: "Paco Gento", country: "es" },
      { name: "Pirri", country: "es" },
      { name: "Emilio Butragueño", country: "es" }
    ]
  },
  {
    id: "laliga_scorers",
    title: "Máximos goleadores históricos de La Liga",
    items: [
      { name: "Lionel Messi", country: "ar" },
      { name: "Cristiano Ronaldo", country: "pt" },
      { name: "Telmo Zarra", country: "es" },
      { name: "Karim Benzema", country: "fr" },
      { name: "Hugo Sánchez", country: "mx" },
      { name: "Raúl González", country: "es" },
      { name: "Alfredo Di Stéfano", country: "es" },
      { name: "César Rodríguez", country: "es" },
      { name: "Quini", country: "es" },
      { name: "Pahíño", country: "es" }
    ]
  },
  {
    id: "spain_scorers",
    title: "Máximos goleadores históricos de la Selección Española",
    items: [
      { name: "David Villa", country: "es" },
      { name: "Raúl González", country: "es" },
      { name: "Fernando Torres", country: "es" },
      { name: "Álvaro Morata", country: "es" },
      { name: "David Silva", country: "es" },
      { name: "Fernando Hierro", country: "es" },
      { name: "Fernando Morientes", country: "es" },
      { name: "Emilio Butragueño", country: "es" },
      { name: "Alfredo Di Stéfano", country: "es" },
      { name: "Sergio Ramos", country: "es" }
    ]
  },
  {
    id: "barca_appearances",
    title: "Jugadores con más partidos oficiales en el FC Barcelona",
    items: [
      { name: "Lionel Messi", country: "ar" },
      { name: "Xavi Hernández", country: "es" },
      { name: "Sergio Busquets", country: "es" },
      { name: "Andrés Iniesta", country: "es" },
      { name: "Gerard Piqué", country: "es" },
      { name: "Carles Puyol", country: "es" },
      { name: "Migueli", country: "es" },
      { name: "Víctor Valdés", country: "es" },
      { name: "Jordi Alba", country: "es" },
      { name: "Carles Rexach", country: "es" }
    ]
  },
  {
    id: "madrid_appearances",
    title: "Jugadores con más partidos oficiales en el Real Madrid",
    items: [
      { name: "Raúl González", country: "es" },
      { name: "Iker Casillas", country: "es" },
      { name: "Manolo Sanchís", country: "es" },
      { name: "Sergio Ramos", country: "es" },
      { name: "Karim Benzema", country: "fr" },
      { name: "Santillana", country: "es" },
      { name: "Fernando Hierro", country: "es" },
      { name: "Luka Modrić", country: "hr" },
      { name: "Paco Gento", country: "es" },
      { name: "José Antonio Camacho", country: "es" }
    ]
  },
  {
    id: "champions_scorers",
    title: "Máximos goleadores históricos de la UEFA Champions League",
    items: [
      { name: "Cristiano Ronaldo", country: "pt" },
      { name: "Lionel Messi", country: "ar" },
      { name: "Robert Lewandowski", country: "pl" },
      { name: "Karim Benzema", country: "fr" },
      { name: "Raúl González", country: "es" },
      { name: "Kylian Mbappé", country: "fr" },
      { name: "Ruud van Nistelrooy", country: "nl" },
      { name: "Andriy Shevchenko", country: "ua" },
      { name: "Thierry Henry", country: "fr" },
      { name: "Thomas Müller", country: "de" }
    ]
  },
  {
    id: "premier_scorers",
    title: "Máximos goleadores históricos de la Premier League",
    items: [
      { name: "Alan Shearer", country: "gb-eng" },
      { name: "Harry Kane", country: "gb-eng" },
      { name: "Wayne Rooney", country: "gb-eng" },
      { name: "Mohamed Salah", country: "eg" },
      { name: "Andrew Cole", country: "gb-eng" },
      { name: "Sergio Agüero", country: "ar" },
      { name: "Frank Lampard", country: "gb-eng" },
      { name: "Thierry Henry", country: "fr" },
      { name: "Robbie Fowler", country: "gb-eng" },
      { name: "Jermain Defoe", country: "gb-eng" }
    ]
  },
  {
    id: "seriea_scorers",
    title: "Máximos goleadores históricos de la Serie A",
    items: [
      { name: "Silvio Piola", country: "it" },
      { name: "Francesco Totti", country: "it" },
      { name: "Gunnar Nordahl", country: "se" },
      { name: "Giuseppe Meazza", country: "it" },
      { name: "José Altafini", country: "it" },
      { name: "Antonio Di Natale", country: "it" },
      { name: "Roberto Baggio", country: "it" },
      { name: "Ciro Immobile", country: "it" },
      { name: "Kurt Hamrin", country: "se" },
      { name: "Alessandro Del Piero", country: "it" }
    ]
  },
  {
    id: "bundesliga_scorers",
    title: "Máximos goleadores históricos de la Bundesliga",
    items: [
      { name: "Gerd Müller", country: "de" },
      { name: "Robert Lewandowski", country: "pl" },
      { name: "Klaus Fischer", country: "de" },
      { name: "Jupp Heynckes", country: "de" },
      { name: "Manfred Burgsmüller", country: "de" },
      { name: "Claudio Pizarro", country: "pe" },
      { name: "Ulf Kirsten", country: "de" },
      { name: "Stefan Kuntz", country: "de" },
      { name: "Klaus Allofs", country: "de" },
      { name: "Dieter Müller", country: "de" }
    ]
  },
  {
    id: "ballondor_winners",
    title: "Jugadores con más Balones de Oro ganados",
    items: [
      { name: "Lionel Messi", country: "ar" },
      { name: "Cristiano Ronaldo", country: "pt" },
      { name: "Johan Cruyff", country: "nl" },
      { name: "Michel Platini", country: "fr" },
      { name: "Marco van Basten", country: "nl" },
      { name: "Alfredo Di Stéfano", country: "es" },
      { name: "Franz Beckenbauer", country: "de" },
      { name: "Kevin Keegan", country: "gb-eng" },
      { name: "Karl-Heinz Rummenigge", country: "de" },
      { name: "Ronaldo Nazário", country: "br" }
    ]
  },
  {
    id: "ligue1_scorers",
    title: "Máximos goleadores históricos de la Ligue 1",
    items: [
      { name: "Delio Onnis", country: "ar" },
      { name: "Bernard Lacombe", country: "fr" },
      { name: "Hervé Revelli", country: "fr" },
      { name: "Roger Courtois", country: "fr" },
      { name: "Thadée Cisowski", country: "fr" },
      { name: "Roger Piantoni", country: "fr" },
      { name: "Kylian Mbappé", country: "fr" },
      { name: "Joseph Ujlaki", country: "fr" },
      { name: "Fleury Di Nallo", country: "fr" },
      { name: "Carlos Bianchi", country: "ar" }
    ]
  },
  {
    id: "spain_appearances",
    title: "Jugadores con más partidos oficiales en la Selección Española",
    items: [
      { name: "Sergio Ramos", country: "es" },
      { name: "Iker Casillas", country: "es" },
      { name: "Sergio Busquets", country: "es" },
      { name: "Xavi Hernández", country: "es" },
      { name: "Andrés Iniesta", country: "es" },
      { name: "Andoni Zubizarreta", country: "es" },
      { name: "David Silva", country: "es" },
      { name: "Xabi Alonso", country: "es" },
      { name: "Cesc Fàbregas", country: "es" },
      { name: "Fernando Torres", country: "es" }
    ]
  },
  {
    id: "worldcup_scorers",
    title: "Máximos goleadores históricos de la Copa del Mundo",
    items: [
      { name: "Miroslav Klose", country: "de" },
      { name: "Ronaldo Nazário", country: "br" },
      { name: "Gerd Müller", country: "de" },
      { name: "Just Fontaine", country: "fr" },
      { name: "Lionel Messi", country: "ar" },
      { name: "Kylian Mbappé", country: "fr" },
      { name: "Pelé", country: "br" },
      { name: "Sándor Kocsis", country: "hu" },
      { name: "Jürgen Klinsmann", country: "de" },
      { name: "Helmut Rahn", country: "de" }
    ]
  },
  {
    id: "champions_titles",
    title: "Jugadores con más títulos de la UEFA Champions League",
    items: [
      { name: "Paco Gento", country: "es" },
      { name: "Luka Modrić", country: "hr" },
      { name: "Dani Carvajal", country: "es" },
      { name: "Nacho Fernández", country: "es" },
      { name: "Toni Kroos", country: "de" },
      { name: "Cristiano Ronaldo", country: "pt" },
      { name: "Karim Benzema", country: "fr" },
      { name: "Paolo Maldini", country: "it" },
      { name: "Alessandro Costacurta", country: "it" },
      { name: "Clarence Seedorf", country: "nl" }
    ]
  },
  {
    id: "brazil_scorers",
    title: "Máximos goleadores históricos de la Selección de Brasil",
    items: [
      { name: "Neymar Jr", country: "br" },
      { name: "Pelé", country: "br" },
      { name: "Ronaldo Nazário", country: "br" },
      { name: "Romário", country: "br" },
      { name: "Zico", country: "br" },
      { name: "Bebeto", country: "br" },
      { name: "Rivaldo", country: "br" },
      { name: "Jairzinho", country: "br" },
      { name: "Ronaldinho", country: "br" },
      { name: "Ademir", country: "br" }
    ]
  },
  {
    id: "golden_boot",
    title: "Jugadores con más Botas de Oro ganadas",
    items: [
      { name: "Lionel Messi", country: "ar" },
      { name: "Cristiano Ronaldo", country: "pt" },
      { name: "Robert Lewandowski", country: "pl" },
      { name: "Luis Suárez", country: "uy" },
      { name: "Thierry Henry", country: "fr" },
      { name: "Diego Forlán", country: "uy" },
      { name: "Gerd Müller", country: "de" },
      { name: "Eusébio", country: "pt" },
      { name: "Mário Jardel", country: "br" },
      { name: "Fernando Gomes", country: "pt" }
    ]
  },
  {
    id: "argentina_scorers",
    title: "Máximos goleadores históricos de la Selección de Argentina",
    items: [
      { name: "Lionel Messi", country: "ar" },
      { name: "Gabriel Batistuta", country: "ar" },
      { name: "Sergio Agüero", country: "ar" },
      { name: "Hernán Crespo", country: "ar" },
      { name: "Diego Maradona", country: "ar" },
      { name: "Gonzalo Higuaín", country: "ar" },
      { name: "Ángel Di María", country: "ar" },
      { name: "Luis Artime", country: "ar" },
      { name: "Daniel Passarella", country: "ar" },
      { name: "Leopoldo Luque", country: "ar" }
    ]
  },
  {
    id: "portugal_scorers",
    title: "Máximos goleadores históricos de la Selección de Portugal",
    items: [
      { name: "Cristiano Ronaldo", country: "pt" },
      { name: "Pauleta", country: "pt" },
      { name: "Eusébio", country: "pt" },
      { name: "Luís Figo", country: "pt" },
      { name: "Nuno Gomes", country: "pt" },
      { name: "Hélder Postiga", country: "pt" },
      { name: "Rui Costa", country: "pt" },
      { name: "Bruno Fernandes", country: "pt" },
      { name: "Nani", country: "pt" },
      { name: "João Pinto", country: "pt" }
    ]
  },
  {
    id: "premier_cleansheets",
    title: "Porteros con más porterías a cero en la historia de la Premier League",
    items: [
      { name: "Petr Čech", country: "cz" },
      { name: "David James", country: "gb-eng" },
      { name: "Mark Schwarzer", country: "au" },
      { name: "David de Gea", country: "es" },
      { name: "David Seaman", country: "gb-eng" },
      { name: "Nigel Martyn", country: "gb-eng" },
      { name: "Pepe Reina", country: "es" },
      { name: "Brad Friedel", country: "us" },
      { name: "Tim Howard", country: "us" },
      { name: "Edwin van der Sar", country: "nl" }
    ]
  },
  {
    id: "france_scorers",
    title: "Máximos goleadores históricos de la Selección de Francia",
    items: [
      { name: "Olivier Giroud", country: "fr" },
      { name: "Kylian Mbappé", country: "fr" },
      { name: "Thierry Henry", country: "fr" },
      { name: "Antoine Griezmann", country: "fr" },
      { name: "Michel Platini", country: "fr" },
      { name: "Karim Benzema", country: "fr" },
      { name: "David Trezeguet", country: "fr" },
      { name: "Zinedine Zidane", country: "fr" },
      { name: "Jean-Pierre Papin", country: "fr" },
      { name: "Just Fontaine", country: "fr" }
    ]
  },
  {
    id: "england_scorers",
    title: "Máximos goleadores históricos de la Selección de Inglaterra",
    items: [
      { name: "Harry Kane", country: "gb-eng" },
      { name: "Wayne Rooney", country: "gb-eng" },
      { name: "Bobby Charlton", country: "gb-eng" },
      { name: "Gary Lineker", country: "gb-eng" },
      { name: "Jimmy Greaves", country: "gb-eng" },
      { name: "Michael Owen", country: "gb-eng" },
      { name: "Tom Finney", country: "gb-eng" },
      { name: "Nat Lofthouse", country: "gb-eng" },
      { name: "Alan Shearer", country: "gb-eng" },
      { name: "Frank Lampard", country: "gb-eng" }
    ]
  },
  {
    id: "laliga_assists",
    title: "Máximos asistentes históricos de La Liga",
    items: [
      { name: "Lionel Messi", country: "ar" },
      { name: "Xavi Hernández", country: "es" },
      { name: "Karim Benzema", country: "fr" },
      { name: "Antoine Griezmann", country: "fr" },
      { name: "Luis Suárez", country: "uy" },
      { name: "Koke", country: "es" },
      { name: "Toni Kroos", country: "de" },
      { name: "Dani Parejo", country: "es" },
      { name: "Luka Modrić", country: "hr" },
      { name: "Iago Aspas", country: "es" }
    ]
  },
  {
    id: "italy_scorers",
    title: "Máximos goleadores históricos de la Selección de Italia",
    items: [
      { name: "Gigi Riva", country: "it" },
      { name: "Giuseppe Meazza", country: "it" },
      { name: "Silvio Piola", country: "it" },
      { name: "Roberto Baggio", country: "it" },
      { name: "Alessandro Del Piero", country: "it" },
      { name: "Adolfo Baloncieri", country: "it" },
      { name: "Filippo Inzaghi", country: "it" },
      { name: "Alessandro Altobelli", country: "it" },
      { name: "Francesco Graziani", country: "it" },
      { name: "Christian Vieri", country: "it" }
    ]
  },
  {
    id: "germany_scorers",
    title: "Máximos goleadores históricos de la Selección de Alemania",
    items: [
      { name: "Miroslav Klose", country: "de" },
      { name: "Gerd Müller", country: "de" },
      { name: "Lukas Podolski", country: "de" },
      { name: "Rudi Völler", country: "de" },
      { name: "Jürgen Klinsmann", country: "de" },
      { name: "Karl-Heinz Rummenigge", country: "de" },
      { name: "Thomas Müller", country: "de" },
      { name: "Uwe Seeler", country: "de" },
      { name: "Michael Ballack", country: "de" },
      { name: "Oliver Bierhoff", country: "de" }
    ]
  },
  {
    id: "pichichi_winners",
    title: "Jugadores con más trofeos Pichichi (Máximo goleador de La Liga)",
    items: [
      { name: "Lionel Messi", country: "ar" },
      { name: "Telmo Zarra", country: "es" },
      { name: "Alfredo Di Stéfano", country: "es" },
      { name: "Quini", country: "es" },
      { name: "Hugo Sánchez", country: "mx" },
      { name: "Ferenc Puskás", country: "hu" },
      { name: "Cristiano Ronaldo", country: "pt" },
      { name: "Isidro Lángara", country: "es" },
      { name: "José Eulogio Gárate", country: "es" },
      { name: "Manuel Pahíño", country: "es" }
    ]
  },
  {
    id: "expensive_transfers",
    title: "Fichajes más caros de la historia del fútbol",
    items: [
      { name: "Neymar Jr", country: "br" },
      { name: "Kylian Mbappé", country: "fr" },
      { name: "Philippe Coutinho", country: "br" },
      { name: "Ousmane Dembélé", country: "fr" },
      { name: "João Félix", country: "pt" },
      { name: "Enzo Fernández", country: "ar" },
      { name: "Antoine Griezmann", country: "fr" },
      { name: "Jack Grealish", country: "gb-eng" },
      { name: "Cristiano Ronaldo", country: "pt" },
      { name: "Declan Rice", country: "gb-eng" }
    ]
  },
  {
    id: "single_season_scorers",
    title: "Jugadores con más goles en una sola temporada de liga (Top 5 Ligas)",
    items: [
      { name: "Lionel Messi", country: "ar" },
      { name: "Cristiano Ronaldo", country: "pt" },
      { name: "Luis Suárez", country: "uy" },
      { name: "Robert Lewandowski", country: "pl" },
      { name: "Erling Haaland", country: "no" },
      { name: "Gerd Müller", country: "de" },
      { name: "Mohamed Salah", country: "eg" },
      { name: "Gonzalo Higuaín", country: "ar" },
      { name: "Ciro Immobile", country: "it" },
      { name: "Zlatan Ibrahimović", country: "se" }
    ]
  },
  {
    id: "single_season_assisters",
    title: "Jugadores con más asistencias en una sola temporada de liga (Top 5 Ligas)",
    items: [
      { name: "Lionel Messi", country: "ar" },
      { name: "Thomas Müller", country: "de" },
      { name: "Kevin De Bruyne", country: "be" },
      { name: "Mesut Özil", country: "de" },
      { name: "Thierry Henry", country: "fr" },
      { name: "Xavi Hernández", country: "es" },
      { name: "Cesc Fàbregas", country: "es" },
      { name: "Ángel Di María", country: "ar" },
      { name: "Frank Lampard", country: "gb-eng" },
      { name: "Juan Mata", country: "es" }
    ]
  },
  {
    id: "liverpool_scorers",
    title: "Máximos goleadores históricos del Liverpool FC",
    items: [
      { name: "Ian Rush", country: "gb-wls" },
      { name: "Roger Hunt", country: "gb-eng" },
      { name: "Gordon Hodgson", country: "gb-eng" },
      { name: "Billy Liddell", country: "gb-sct" },
      { name: "Mohamed Salah", country: "eg" },
      { name: "Steven Gerrard", country: "gb-eng" },
      { name: "Robbie Fowler", country: "gb-eng" },
      { name: "Kenny Dalglish", country: "gb-sct" },
      { name: "Michael Owen", country: "gb-eng" },
      { name: "Harry Chambers", country: "gb-eng" }
    ]
  },
  {
    id: "manutd_scorers",
    title: "Máximos goleadores históricos del Manchester United",
    items: [
      { name: "Wayne Rooney", country: "gb-eng" },
      { name: "Bobby Charlton", country: "gb-eng" },
      { name: "Denis Law", country: "gb-sct" },
      { name: "Jack Rowley", country: "gb-eng" },
      { name: "Dennis Viollet", country: "gb-eng" },
      { name: "George Best", country: "gb-nir" },
      { name: "Joe Spence", country: "gb-eng" },
      { name: "Ryan Giggs", country: "gb-wls" },
      { name: "Mark Hughes", country: "gb-wls" },
      { name: "Paul Scholes", country: "gb-eng" }
    ]
  },
  {
    id: "bayern_scorers",
    title: "Máximos goleadores históricos del Bayern Munich",
    items: [
      { name: "Gerd Müller", country: "de" },
      { name: "Robert Lewandowski", country: "pl" },
      { name: "Thomas Müller", country: "de" },
      { name: "Karl-Heinz Rummenigge", country: "de" },
      { name: "Rainer Ohlhauser", country: "de" },
      { name: "Roland Wohlfarth", country: "de" },
      { name: "Dieter Hoeneß", country: "de" },
      { name: "Arjen Robben", country: "nl" },
      { name: "Giovane Élber", country: "br" },
      { name: "Mario Gómez", country: "de" }
    ]
  },
  {
    id: "laliga_cleansheets",
    title: "Porteros con más porterías a cero en la historia de La Liga",
    items: [
      { name: "Andoni Zubizarreta", country: "es" },
      { name: "Paco Buyo", country: "es" },
      { name: "Iker Casillas", country: "es" },
      { name: "Santiago Cañizares", country: "es" },
      { name: "Víctor Valdés", country: "es" },
      { name: "Jan Oblak", country: "si" },
      { name: "Pepe Reina", country: "es" },
      { name: "Diego Alves", country: "br" },
      { name: "Andrés Palop", country: "es" },
      { name: "Claudio Bravo", country: "cl" }
    ]
  },
  {
    id: "league_titles",
    title: "Jugadores con más títulos de liga ganados (Top 5 Ligas)",
    items: [
      { name: "Ryan Giggs", country: "gb-wls" },
      { name: "Lionel Messi", country: "ar" },
      { name: "Thomas Müller", country: "de" },
      { name: "David Alaba", country: "at" },
      { name: "Paul Scholes", country: "gb-eng" },
      { name: "Kingsley Coman", country: "fr" },
      { name: "Gary Neville", country: "gb-eng" },
      { name: "Gianluigi Buffon", country: "it" },
      { name: "Thiago Alcántara", country: "es" },
      { name: "Paco Gento", country: "es" }
    ]
  },
  {
    id: "netherlands_scorers",
    title: "Máximos goleadores históricos de la Selección de los Países Bajos",
    items: [
      { name: "Robin van Persie", country: "nl" },
      { name: "Memphis Depay", country: "nl" },
      { name: "Klaas-Jan Huntelaar", country: "nl" },
      { name: "Patrick Kluivert", country: "nl" },
      { name: "Arjen Robben", country: "nl" },
      { name: "Dennis Bergkamp", country: "nl" },
      { name: "Faas Wilkes", country: "nl" },
      { name: "Ruud van Nistelrooy", country: "nl" },
      { name: "Wesley Sneijder", country: "nl" },
      { name: "Johan Cruyff", country: "nl" }
    ]
  },
  {
    id: "champions_assists",
    title: "Máximos asistentes históricos de la UEFA Champions League",
    items: [
      { name: "Cristiano Ronaldo", country: "pt" },
      { name: "Lionel Messi", country: "ar" },
      { name: "Ángel Di María", country: "ar" },
      { name: "Neymar Jr", country: "br" },
      { name: "Ryan Giggs", country: "gb-wls" },
      { name: "Karim Benzema", country: "fr" },
      { name: "Thomas Müller", country: "de" },
      { name: "Kevin De Bruyne", country: "be" },
      { name: "David Beckham", country: "gb-eng" },
      { name: "Kylian Mbappé", country: "fr" }
    ]
  },
  {
    id: "most_trophies",
    title: "Jugadores con más títulos oficiales ganados (Fútbol Masculino)",
    items: [
      { name: "Lionel Messi", country: "ar" },
      { name: "Dani Alves", country: "br" },
      { name: "Andrés Iniesta", country: "es" },
      { name: "Gerard Piqué", country: "es" },
      { name: "Sergio Busquets", country: "es" },
      { name: "Cristiano Ronaldo", country: "pt" },
      { name: "Ryan Giggs", country: "gb-wls" },
      { name: "Maxwell", country: "br" },
      { name: "Vítor Baía", country: "pt" },
      { name: "Xavi Hernández", country: "es" }
    ]
  },
  {
    id: "barca_expensive",
    title: "Fichajes más caros de la historia del FC Barcelona",
    items: [
      { name: "Philippe Coutinho", country: "br" },
      { name: "Ousmane Dembélé", country: "fr" },
      { name: "Antoine Griezmann", country: "fr" },
      { name: "Neymar Jr", country: "br" },
      { name: "Frenkie de Jong", country: "nl" },
      { name: "Luis Suárez", country: "uy" },
      { name: "Zlatan Ibrahimović", country: "se" },
      { name: "Ferran Torres", country: "es" },
      { name: "Raphinha", country: "br" },
      { name: "Dani Olmo", country: "es" }
    ]
  },
  {
    id: "uruguay_scorers",
    title: "Máximos goleadores históricos de la Selección de Uruguay",
    items: [
      { name: "Luis Suárez", country: "uy" },
      { name: "Edinson Cavani", country: "uy" },
      { name: "Diego Forlán", country: "uy" },
      { name: "Héctor Scarone", country: "uy" },
      { name: "Ángel Romano", country: "uy" },
      { name: "Óscar Míguez", country: "uy" },
      { name: "Sebastián Abreu", country: "uy" },
      { name: "Pedro Petrone", country: "uy" },
      { name: "Fernando Morena", country: "uy" },
      { name: "Darwin Núñez", country: "uy" }
    ]
  },
  {
    id: "mexico_scorers",
    title: "Máximos goleadores históricos de la Selección de México",
    items: [
      { name: "Javier Hernández", country: "mx" },
      { name: "Jared Borgetti", country: "mx" },
      { name: "Cuauhtémoc Blanco", country: "mx" },
      { name: "Luis Hernández", country: "mx" },
      { name: "Carlos Hermosillo", country: "mx" },
      { name: "Enrique Borja", country: "mx" },
      { name: "Luís Roberto Alves", country: "mx" },
      { name: "Hugo Sánchez", country: "mx" },
      { name: "Raúl Jiménez", country: "mx" },
      { name: "Andrés Guardado", country: "mx" }
    ]
  }
];
