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
  },
  {
    id: "madrid_expensive",
    title: "Fichajes más caros de la historia del Real Madrid",
    items: [
      { name: "Eden Hazard", country: "be" },
      { name: "Jude Bellingham", country: "gb-eng" },
      { name: "Gareth Bale", country: "gb-wls" },
      { name: "Cristiano Ronaldo", country: "pt" },
      { name: "Aurélien Tchouaméni", country: "fr" },
      { name: "Zinedine Zidane", country: "fr" },
      { name: "James Rodríguez", country: "co" },
      { name: "Kaká", country: "br" },
      { name: "Luka Jović", country: "rs" },
      { name: "Éder Militão", country: "br" }
    ]
  },
  {
    id: "belgium_scorers",
    title: "Máximos goleadores históricos de la Selección de Bélgica",
    items: [
      { name: "Romelu Lukaku", country: "be" },
      { name: "Eden Hazard", country: "be" },
      { name: "Bernard Voorhoof", country: "be" },
      { name: "Paul Van Himst", country: "be" },
      { name: "Marc Wilmots", country: "be" },
      { name: "Jan Vertonghen", country: "be" },
      { name: "Kevin De Bruyne", country: "be" },
      { name: "Dries Mertens", country: "be" },
      { name: "Michy Batshuayi", country: "be" },
      { name: "Leandro Trossard", country: "be" }
    ]
  },
  {
    id: "colombia_scorers",
    title: "Máximos goleadores históricos de la Selección de Colombia",
    items: [
      { name: "Radamel Falcao", country: "co" },
      { name: "James Rodríguez", country: "co" },
      { name: "Arnoldo Iguarán", country: "co" },
      { name: "Faustino Asprilla", country: "co" },
      { name: "Freddy Rincón", country: "co" },
      { name: "Carlos Bacca", country: "co" },
      { name: "Teófilo Gutiérrez", country: "co" },
      { name: "Víctor Aristizábal", country: "co" },
      { name: "Adolfo Valencia", country: "co" },
      { name: "Luis Díaz", country: "co" }
    ]
  },
  {
    id: "atletico_expensive",
    title: "Fichajes más caros de la historia del Atlético de Madrid",
    items: [
      { name: "João Félix", country: "pt" },
      { name: "Julián Alvarez", country: "ar" },
      { name: "Thomas Lemar", country: "fr" },
      { name: "Diego Costa", country: "es" },
      { name: "Antoine Griezmann", country: "fr" },
      { name: "Álvaro Morata", country: "es" },
      { name: "Rodri", country: "es" },
      { name: "Conor Gallagher", country: "gb-eng" },
      { name: "Jackson Martínez", country: "co" },
      { name: "Vitolo", country: "es" }
    ]
  },
  {
    id: "chile_scorers",
    title: "Máximos goleadores históricos de la Selección de Chile",
    items: [
      { name: "Alexis Sánchez", country: "cl" },
      { name: "Eduardo Vargas", country: "cl" },
      { name: "Marcelo Salas", country: "cl" },
      { name: "Iván Zamorano", country: "cl" },
      { name: "Arturo Vidal", country: "cl" },
      { name: "Carlos Caszely", country: "cl" },
      { name: "Leonel Sánchez", country: "cl" },
      { name: "Jorge Aravena", country: "cl" },
      { name: "Matías Fernández", country: "cl" },
      { name: "Esteban Paredes", country: "cl" }
    ]
  },
  {
    id: "sweden_scorers",
    title: "Máximos goleadores históricos de la Selección de Suecia",
    items: [
      { name: "Zlatan Ibrahimović", country: "se" },
      { name: "Sven Rydell", country: "se" },
      { name: "Gunnar Nordahl", country: "se" },
      { name: "Henrik Larsson", country: "se" },
      { name: "Gunnar Gren", country: "se" },
      { name: "Thomas Brolin", country: "se" },
      { name: "Agne Simonsson", country: "se" },
      { name: "Marcus Berg", country: "se" },
      { name: "Kennet Andersson", country: "se" },
      { name: "Emil Forsberg", country: "se" }
    ]
  },
  {
    id: "premier_expensive",
    title: "Fichajes más caros de la historia de la Premier League",
    items: [
      { name: "Enzo Fernández", country: "ar" },
      { name: "Moisés Caicedo", country: "ec" },
      { name: "Declan Rice", country: "gb-eng" },
      { name: "Jack Grealish", country: "gb-eng" },
      { name: "Romelu Lukaku", country: "be" },
      { name: "Paul Pogba", country: "fr" },
      { name: "Antony", country: "br" },
      { name: "Harry Maguire", country: "gb-eng" },
      { name: "Joško Gvardiol", country: "hr" },
      { name: "Darwin Núñez", country: "uy" }
    ]
  },
  {
    id: "croatia_scorers",
    title: "Máximos goleadores históricos de la Selección de Croacia",
    items: [
      { name: "Davor Šuker", country: "hr" },
      { name: "Ivan Perišić", country: "hr" },
      { name: "Mario Mandžukić", country: "hr" },
      { name: "Andrej Kramarić", country: "hr" },
      { name: "Luka Modrić", country: "hr" },
      { name: "Eduardo da Silva", country: "hr" },
      { name: "Darijo Srna", country: "hr" },
      { name: "Ivica Olić", country: "hr" },
      { name: "Niko Kranjčar", country: "hr" },
      { name: "Goran Vlaović", country: "hr" }
    ]
  },
  {
    id: "poland_scorers",
    title: "Máximos goleadores históricos de la Selección de Polonia",
    items: [
      { name: "Robert Lewandowski", country: "pl" },
      { name: "Włodzimierz Lubański", country: "pl" },
      { name: "Grzegorz Lato", country: "pl" },
      { name: "Kazimierz Deyna", country: "pl" },
      { name: "Ernest Pohl", country: "pl" },
      { name: "Andrzej Szarmach", country: "pl" },
      { name: "Gerard Cieślik", country: "pl" },
      { name: "Zbigniew Boniek", country: "pl" },
      { name: "Jakub Błaszczykowski", country: "pl" },
      { name: "Arkadiusz Milik", country: "pl" }
    ]
  },
  {
    id: "seriea_expensive",
    title: "Fichajes más caros de la historia de la Serie A",
    items: [
      { name: "Cristiano Ronaldo", country: "pt" },
      { name: "Gonzalo Higuaín", country: "ar" },
      { name: "Matthijs de Ligt", country: "nl" },
      { name: "Dušan Vlahović", country: "rs" },
      { name: "Arthur Melo", country: "br" },
      { name: "Victor Osimhen", country: "ng" },
      { name: "Romelu Lukaku", country: "be" },
      { name: "Hernán Crespo", country: "ar" },
      { name: "Gianluigi Buffon", country: "it" },
      { name: "Gaizka Mendieta", country: "es" }
    ]
  },
  {
    id: "morocco_scorers",
    title: "Máximos goleadores históricos de la Selección de Marruecos",
    items: [
      { name: "Ahmed Faras", country: "ma" },
      { name: "Salaheddine Bassir", country: "ma" },
      { name: "Youssef En-Nesyri", country: "ma" },
      { name: "Hakim Ziyech", country: "ma" },
      { name: "Marouane Chamakh", country: "ma" },
      { name: "Abdeljalil Hadda", country: "ma" },
      { name: "Hassan Amchrat", country: "ma" },
      { name: "Ayoub El Kaabi", country: "ma" },
      { name: "Aziz Bouderbala", country: "ma" },
      { name: "Sofiane Boufal", country: "ma" }
    ]
  },
  {
    id: "ivory_coast_scorers",
    title: "Máximos goleadores históricos de la Selección de Costa de Marfil",
    items: [
      { name: "Didier Drogba", country: "ci" },
      { name: "Abdoulaye Traoré", country: "ci" },
      { name: "Salomon Kalou", country: "ci" },
      { name: "Gervinho", country: "ci" },
      { name: "Ibrahima Bakayoko", country: "ci" },
      { name: "Wilfried Bony", country: "ci" },
      { name: "Yaya Touré", country: "ci" },
      { name: "Laurent Pokou", country: "ci" },
      { name: "Aruna Dindane", country: "ci" },
      { name: "Sébastien Haller", country: "ci" }
    ]
  },
  {
    id: "bundesliga_expensive",
    title: "Fichajes más caros de la historia de la Bundesliga",
    items: [
      { name: "Harry Kane", country: "gb-eng" },
      { name: "Lucas Hernandez", country: "fr" },
      { name: "Matthijs de Ligt", country: "nl" },
      { name: "Kim Min-jae", country: "kr" },
      { name: "Leroy Sané", country: "de" },
      { name: "Dayot Upamecano", country: "fr" },
      { name: "Michael Olise", country: "fr" },
      { name: "João Palhinha", country: "pt" },
      { name: "Corentin Tolisso", country: "fr" },
      { name: "Javi Martínez", country: "es" }
    ]
  },
  {
    id: "nigeria_scorers",
    title: "Máximos goleadores históricos de la Selección de Nigeria",
    items: [
      { name: "Rashidi Yekini", country: "ng" },
      { name: "Segun Odegbami", country: "ng" },
      { name: "Yakubu Ayegbeni", country: "ng" },
      { name: "Victor Osimhen", country: "ng" },
      { name: "Ikechukwu Uche", country: "ng" },
      { name: "Obafemi Martins", country: "ng" },
      { name: "Samson Siasia", country: "ng" },
      { name: "Odion Ighalo", country: "ng" },
      { name: "Ahmed Musa", country: "ng" },
      { name: "Julius Aghahowa", country: "ng" }
    ]
  },
  {
    id: "cameroon_scorers",
    title: "Máximos goleadores históricos de la Selección de Camerún",
    items: [
      { name: "Samuel Eto'o", country: "cm" },
      { name: "Roger Milla", country: "cm" },
      { name: "Patrick M'Boma", country: "cm" },
      { name: "Vincent Aboubakar", country: "cm" },
      { name: "Eric Maxim Choupo-Moting", country: "cm" },
      { name: "François Omam-Biyik", country: "cm" },
      { name: "Alphonse Tchami", country: "cm" },
      { name: "Geremi Njitap", country: "cm" },
      { name: "Karl Toko Ekambi", country: "cm" },
      { name: "Pierre Webó", country: "cm" }
    ]
  },
  {
    id: "seriea_clean_sheets",
    title: "Porteros con más porterías a cero en la historia de la Serie A",
    items: [
      { name: "Gianluigi Buffon", country: "it" },
      { name: "Samir Handanović", country: "si" },
      { name: "Dino Zoff", country: "it" },
      { name: "Enrico Albertosi", country: "it" },
      { name: "Giovanni Galli", country: "it" },
      { name: "Gianluca Pagliuca", country: "it" },
      { name: "Luca Marchegiani", country: "it" },
      { name: "Morgan De Sanctis", country: "it" },
      { name: "Angelo Peruzzi", country: "it" },
      { name: "Christian Abbiati", country: "it" }
    ]
  },
  {
    id: "senegal_scorers",
    title: "Máximos goleadores históricos de la Selección de Senegal",
    items: [
      { name: "Sadio Mané", country: "sn" },
      { name: "Henri Camara", country: "sn" },
      { name: "Mamadou Niang", country: "sn" },
      { name: "El Hadji Diouf", country: "sn" },
      { name: "Moussa Sow", country: "sn" },
      { name: "Papiss Cissé", country: "sn" },
      { name: "Boulaye Dia", country: "sn" },
      { name: "Habib Diallo", country: "sn" },
      { name: "Famara Diédhiou", country: "sn" },
      { name: "Ismaïla Sarr", country: "sn" }
    ]
  },
  {
    id: "ghana_scorers",
    title: "Máximos goleadores históricos de la Selección de Ghana",
    items: [
      { name: "Asamoah Gyan", country: "gh" },
      { name: "Edward Acquah", country: "gh" },
      { name: "Kwasi Owusu", country: "gh" },
      { name: "André Ayew", country: "gh" },
      { name: "Jordan Ayew", country: "gh" },
      { name: "Karim Abdul Razak", country: "gh" },
      { name: "Tony Yeboah", country: "gh" },
      { name: "Abedi Pelé", country: "gh" },
      { name: "Mubarak Wakaso", country: "gh" },
      { name: "Sulley Muntari", country: "gh" }
    ]
  },
  {
    id: "ligue1_expensive",
    title: "Fichajes más caros de la historia de la Ligue 1",
    items: [
      { name: "Neymar", country: "br" },
      { name: "Kylian Mbappé", country: "fr" },
      { name: "Randal Kolo Muani", country: "fr" },
      { name: "Achraf Hakimi", country: "ma" },
      { name: "Gonçalo Ramos", country: "pt" },
      { name: "Ousmane Dembélé", country: "fr" },
      { name: "Manuel Ugarte", country: "uy" },
      { name: "Edinson Cavani", country: "uy" },
      { name: "Ángel Di María", country: "ar" },
      { name: "Bradley Barcola", country: "fr" }
    ]
  },
  {
    id: "algeria_scorers",
    title: "Máximos goleadores históricos de la Selección de Argelia",
    items: [
      { name: "Islam Slimani", country: "dz" },
      { name: "Abdelhafid Tasfaout", country: "dz" },
      { name: "Riyad Mahrez", country: "dz" },
      { name: "Baghdad Bounedjah", country: "dz" },
      { name: "Lakhdar Belloumi", country: "dz" },
      { name: "Hillel Soudani", country: "dz" },
      { name: "Djamel Menad", country: "dz" },
      { name: "Sofiane Feghouli", country: "dz" },
      { name: "Rabah Madjer", country: "dz" },
      { name: "Mustapha Dahleb", country: "dz" }
    ]
  },
  {
    id: "egypt_scorers",
    title: "Máximos goleadores históricos de la Selección de Egipto",
    items: [
      { name: "Mohamed Salah", country: "eg" },
      { name: "Hossam Hassan", country: "eg" },
      { name: "Hassan El-Shazly", country: "eg" },
      { name: "Mohamed Aboutrika", country: "eg" },
      { name: "Ahmed Hassan", country: "eg" },
      { name: "Amr Zaki", country: "eg" },
      { name: "Emad Moteab", country: "eg" },
      { name: "Ahmed El-Kass", country: "eg" },
      { name: "Mahmoud El Khatib", country: "eg" },
      { name: "Mohamed Zidan", country: "eg" }
    ]
  },
  {
    id: "laliga_assists_season",
    title: "Máximos asistentes en una temporada de La Liga",
    items: [
      { name: "Lionel Messi", country: "ar" },
      { name: "Mesut Özil", country: "de" },
      { name: "Xavi Hernández", country: "es" },
      { name: "Luis Figo", country: "pt" },
      { name: "Cristiano Ronaldo", country: "pt" },
      { name: "Luis Suárez", country: "uy" },
      { name: "Ángel Di María", country: "ar" },
      { name: "Neymar", country: "br" },
      { name: "Koke", country: "es" },
      { name: "Ivan Rakitić", country: "hr" }
    ]
  },
  {
    id: "premier_scorers_season",
    title: "Máximos goleadores en una temporada de la Premier League",
    items: [
      { name: "Erling Haaland", country: "no" },
      { name: "Mohamed Salah", country: "eg" },
      { name: "Alan Shearer", country: "gb-eng" },
      { name: "Andy Cole", country: "gb-eng" },
      { name: "Luis Suárez", country: "uy" },
      { name: "Cristiano Ronaldo", country: "pt" },
      { name: "Kevin Phillips", country: "gb-eng" },
      { name: "Thierry Henry", country: "fr" },
      { name: "Robin van Persie", country: "nl" },
      { name: "Harry Kane", country: "gb-eng" }
    ]
  },
  {
    id: "city_expensive",
    title: "Fichajes más caros de la historia del Manchester City",
    items: [
      { name: "Jack Grealish", country: "gb-eng" },
      { name: "Kevin De Bruyne", country: "be" },
      { name: "Rúben Dias", country: "pt" },
      { name: "Rodri", country: "es" },
      { name: "Joško Gvardiol", country: "hr" },
      { name: "Riyad Mahrez", country: "dz" },
      { name: "João Cancelo", country: "pt" },
      { name: "Aymeric Laporte", country: "es" },
      { name: "Raheem Sterling", country: "gb-eng" },
      { name: "Erling Haaland", country: "no" }
    ]
  },
  {
    id: "liverpool_expensive",
    title: "Fichajes más caros de la historia del Liverpool",
    items: [
      { name: "Darwin Núñez", country: "uy" },
      { name: "Virgil van Dijk", country: "nl" },
      { name: "Alisson Becker", country: "br" },
      { name: "Dominik Szoboszlai", country: "hu" },
      { name: "Naby Keïta", country: "gn" },
      { name: "Luis Díaz", country: "co" },
      { name: "Alexis Mac Allister", country: "ar" },
      { name: "Mohamed Salah", country: "eg" },
      { name: "Diogo Jota", country: "pt" },
      { name: "Cody Gakpo", country: "nl" }
    ]
  },
  {
    id: "laliga_scorers_season",
    title: "Máximos goleadores en una temporada de La Liga",
    items: [
      { name: "Lionel Messi", country: "ar" },
      { name: "Cristiano Ronaldo", country: "pt" },
      { name: "Luis Suárez", country: "uy" },
      { name: "Baltazar", country: "br" },
      { name: "Hugo Sánchez", country: "mx" },
      { name: "Telmo Zarra", country: "es" },
      { name: "Diego Forlán", country: "uy" },
      { name: "Ricardo Oliveira", country: "br" },
      { name: "Ronaldo Nazário", country: "br" },
      { name: "Samuel Eto'o", country: "cm" }
    ]
  },
  {
    id: "united_expensive",
    title: "Fichajes más caros de la historia del Manchester United",
    items: [
      { name: "Paul Pogba", country: "fr" },
      { name: "Antony", country: "br" },
      { name: "Harry Maguire", country: "gb-eng" },
      { name: "Jadon Sancho", country: "gb-eng" },
      { name: "Romelu Lukaku", country: "be" },
      { name: "Ángel Di María", country: "ar" },
      { name: "Casemiro", country: "br" },
      { name: "Rasmus Højlund", country: "dk" },
      { name: "Bruno Fernandes", country: "pt" },
      { name: "Mason Mount", country: "gb-eng" }
    ]
  },
  {
    id: "chelsea_expensive",
    title: "Fichajes más caros de la historia del Chelsea",
    items: [
      { name: "Enzo Fernández", country: "ar" },
      { name: "Moisés Caicedo", country: "ec" },
      { name: "Romelu Lukaku", country: "be" },
      { name: "Wesley Fofana", country: "fr" },
      { name: "Mykhailo Mudryk", country: "ua" },
      { name: "Marc Cucurella", country: "es" },
      { name: "Kai Havertz", country: "de" },
      { name: "Kepa Arrizabalaga", country: "es" },
      { name: "Álvaro Morata", country: "es" },
      { name: "Christian Pulisic", country: "us" }
    ]
  },
  {
    id: "premier_assists_season",
    title: "Máximos asistentes en una temporada de la Premier League",
    items: [
      { name: "Kevin De Bruyne", country: "be" },
      { name: "Thierry Henry", country: "fr" },
      { name: "Mesut Özil", country: "de" },
      { name: "Cesc Fàbregas", country: "es" },
      { name: "Frank Lampard", country: "gb-eng" },
      { name: "Christian Eriksen", country: "dk" },
      { name: "David Silva", country: "es" },
      { name: "Mohamed Salah", country: "eg" },
      { name: "Trent Alexander-Arnold", country: "gb-eng" },
      { name: "Leroy Sané", country: "de" }
    ]
  },
  {
    id: "arsenal_expensive",
    title: "Fichajes más caros de la historia del Arsenal",
    items: [
      { name: "Declan Rice", country: "gb-eng" },
      { name: "Nicolas Pépé", country: "ci" },
      { name: "Kai Havertz", country: "de" },
      { name: "Pierre-Emerick Aubameyang", country: "ga" },
      { name: "Ben White", country: "gb-eng" },
      { name: "Alexandre Lacazette", country: "fr" },
      { name: "Gabriel Jesus", country: "br" },
      { name: "Thomas Partey", country: "gh" },
      { name: "Mesut Özil", country: "de" },
      { name: "Jurriën Timber", country: "nl" }
    ]
  },
  {
    id: "realmadrid_expensive",
    title: "Fichajes más caros de la historia del Real Madrid",
    items: [
      { name: "Jude Bellingham", country: "gb-eng" },
      { name: "Eden Hazard", country: "be" },
      { name: "Gareth Bale", country: "gb-wls" },
      { name: "Cristiano Ronaldo", country: "pt" },
      { name: "Aurélien Tchouaméni", country: "fr" },
      { name: "Zinedine Zidane", country: "fr" },
      { name: "James Rodríguez", country: "co" },
      { name: "Kaká", country: "br" },
      { name: "Luka Jović", country: "rs" },
      { name: "Éder Militão", country: "br" }
    ]
  },
  {
    id: "seriea_scorers_season",
    title: "Máximos goleadores en una temporada de la Serie A",
    items: [
      { name: "Gonzalo Higuaín", country: "ar" },
      { name: "Ciro Immobile", country: "it" },
      { name: "Gino Rossetti", country: "it" },
      { name: "Gunnar Nordahl", country: "se" },
      { name: "Antonio Valentín Angelillo", country: "it" },
      { name: "Giuseppe Meazza", country: "it" },
      { name: "Felice Borel", country: "it" },
      { name: "Ferenc Hirzer", country: "hu" },
      { name: "Julio Libonatti", country: "it" },
      { name: "Cristiano Ronaldo", country: "pt" }
    ]
  },
  {
    id: "bayern_expensive",
    title: "Fichajes más caros de la historia del Bayern Munich",
    items: [
      { name: "Harry Kane", country: "gb-eng" },
      { name: "Lucas Hernandez", country: "fr" },
      { name: "Matthijs de Ligt", country: "nl" },
      { name: "Kim Min-jae", country: "kr" },
      { name: "Leroy Sané", country: "de" },
      { name: "Dayot Upamecano", country: "fr" },
      { name: "Michael Olise", country: "fr" },
      { name: "João Palhinha", country: "pt" },
      { name: "Corentin Tolisso", country: "fr" },
      { name: "Javi Martínez", country: "es" }
    ]
  }
];
