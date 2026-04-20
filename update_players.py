import json
import re

file_path = 'grid.html'

players_to_add = [
    # BARCELONA
    {'name': 'Pedri', 'teams': ['Barcelona'], 'countryCode': 'es', 'position': 'MC'},
    {'name': 'Gavi', 'teams': ['Barcelona'], 'countryCode': 'es', 'position': 'MC'},
    {'name': 'Lamine Yamal', 'teams': ['Barcelona'], 'countryCode': 'es', 'position': 'ED'},
    {'name': 'Ronald Araujo', 'teams': ['Barcelona'], 'countryCode': 'uy', 'position': 'DFC'},
    {'name': 'Marc-Andre ter Stegen', 'teams': ['Barcelona'], 'aliases': ['ter stegen'], 'countryCode': 'de', 'position': 'POR'},
    {'name': 'Alejandro Balde', 'teams': ['Barcelona'], 'aliases': ['balde'], 'countryCode': 'es', 'position': 'LI'},
    {'name': 'Frenkie de Jong', 'teams': ['Barcelona'], 'aliases': ['de jong'], 'countryCode': 'nl', 'position': 'MC'},
    {'name': 'Raphinha', 'teams': ['Barcelona'], 'countryCode': 'br', 'position': 'EI'},
    {'name': 'Robert Lewandowski', 'teams': ['Barcelona'], 'aliases': ['lewandowski'], 'countryCode': 'pl', 'position': 'DC'},
    {'name': 'Pau Cubarsi', 'teams': ['Barcelona'], 'aliases': ['cubarsi'], 'countryCode': 'es', 'position': 'DFC'},
    {'name': 'Fermin Lopez', 'teams': ['Barcelona'], 'aliases': ['fermin'], 'countryCode': 'es', 'position': 'MC'},
    
    # REAL MADRID
    {'name': 'Vinicius Junior', 'teams': ['Real Madrid'], 'aliases': ['vinicius', 'vini jr'], 'countryCode': 'br', 'position': 'EI'},
    {'name': 'Jude Bellingham', 'teams': ['Real Madrid'], 'aliases': ['bellingham'], 'countryCode': 'en', 'position': 'MCO'},
    {'name': 'Kylian Mbappe', 'teams': ['Real Madrid'], 'aliases': ['mbappe'], 'countryCode': 'fr', 'position': 'DC'},
    {'name': 'Rodrygo', 'teams': ['Real Madrid'], 'aliases': ['rodrygo goes'], 'countryCode': 'br', 'position': 'ED'},
    {'name': 'Federico Valverde', 'teams': ['Real Madrid'], 'aliases': ['valverde', 'fede valverde'], 'countryCode': 'uy', 'position': 'MC'},
    {'name': 'Aurelien Tchouameni', 'teams': ['Real Madrid'], 'aliases': ['tchouameni'], 'countryCode': 'fr', 'position': 'MCD'},
    {'name': 'Eduardo Camavinga', 'teams': ['Real Madrid'], 'aliases': ['camavinga'], 'countryCode': 'fr', 'position': 'MC'},
    {'name': 'Eder Militao', 'teams': ['Real Madrid'], 'aliases': ['militao'], 'countryCode': 'br', 'position': 'DFC'},
    {'name': 'Thibaut Courtois', 'teams': ['Real Madrid'], 'aliases': ['courtois'], 'countryCode': 'be', 'position': 'POR'},
    {'name': 'Antonio Rudiger', 'teams': ['Real Madrid'], 'aliases': ['rudiger'], 'countryCode': 'de', 'position': 'DFC'},

    # ATLETICO MADRID
    {'name': 'Jan Oblak', 'teams': ['Atletico Madrid'], 'aliases': ['oblak'], 'countryCode': 'si', 'position': 'POR'},
    {'name': 'Koke', 'teams': ['Atletico Madrid'], 'aliases': ['koke resurreccion'], 'countryCode': 'es', 'position': 'MC'},
    {'name': 'Rodrigo De Paul', 'teams': ['Atletico Madrid'], 'aliases': ['de paul'], 'countryCode': 'ar', 'position': 'MC'},
    {'name': 'Jose Maria Gimenez', 'teams': ['Atletico Madrid'], 'aliases': ['gimenez'], 'countryCode': 'uy', 'position': 'DFC'},
    {'name': 'Samuel Lino', 'teams': ['Atletico Madrid'], 'aliases': ['lino'], 'countryCode': 'br', 'position': 'EI'},
    {'name': 'Nahuel Molina', 'teams': ['Atletico Madrid'], 'aliases': ['molina'], 'countryCode': 'ar', 'position': 'LD'},

    # ATHLETIC BILBAO
    {'name': 'Inaki Williams', 'teams': ['Athletic Bilbao'], 'aliases': ['inaki'], 'countryCode': 'gh', 'position': 'ED'},
    {'name': 'Nico Williams', 'teams': ['Athletic Bilbao'], 'aliases': ['nico'], 'countryCode': 'es', 'position': 'EI'},
    {'name': 'Unai Simon', 'teams': ['Athletic Bilbao'], 'aliases': ['simon'], 'countryCode': 'es', 'position': 'POR'},
    {'name': 'Oihan Sancet', 'teams': ['Athletic Bilbao'], 'aliases': ['sancet'], 'countryCode': 'es', 'position': 'MCO'},
    {'name': 'Dani Vivian', 'teams': ['Athletic Bilbao'], 'aliases': ['vivian'], 'countryCode': 'es', 'position': 'DFC'},

    # REAL SOCIEDAD
    {'name': 'Mikel Oyarzabal', 'teams': ['Real Sociedad'], 'aliases': ['oyarzabal'], 'countryCode': 'es', 'position': 'EI'},
    {'name': 'Martin Zubimendi', 'teams': ['Real Sociedad'], 'aliases': ['zubimendi'], 'countryCode': 'es', 'position': 'MCD'},
    {'name': 'Alex Remiro', 'teams': ['Real Sociedad'], 'aliases': ['remiro'], 'countryCode': 'es', 'position': 'POR'},
    {'name': 'Igor Zubeldia', 'teams': ['Real Sociedad'], 'aliases': ['zubeldia'], 'countryCode': 'es', 'position': 'DFC'},

    # GIRONA
    {'name': 'Viktor Tsygankov', 'teams': ['Girona'], 'aliases': ['tsygankov'], 'countryCode': 'ua', 'position': 'ED'},
    {'name': 'Ivan Martin', 'teams': ['Girona'], 'aliases': ['ivan martin'], 'countryCode': 'es', 'position': 'MCO'},
    {'name': 'Cristhian Stuani', 'teams': ['Girona', 'Espanyol'], 'aliases': ['stuani'], 'countryCode': 'uy', 'position': 'DC'},

    # VILLARREAL
    {'name': 'Alex Baena', 'teams': ['Villarreal'], 'aliases': ['baena'], 'countryCode': 'es', 'position': 'EI'},
    {'name': 'Dani Parejo', 'teams': ['Villarreal', 'Valencia'], 'aliases': ['parejo'], 'countryCode': 'es', 'position': 'MC'},

    # REAL BETIS
    {'name': 'Nabil Fekir', 'teams': ['Real Betis'], 'aliases': ['fekir'], 'countryCode': 'fr', 'position': 'MCO'},
    {'name': 'Pablo Fornals', 'teams': ['Real Betis', 'Villarreal', 'Malaga'], 'aliases': ['fornals'], 'countryCode': 'es', 'position': 'MCO'},
    
    # VALENCIA
    {'name': 'Jose Gaya', 'teams': ['Valencia', 'Barcelona'], 'aliases': ['gaya'], 'countryCode': 'es', 'position': 'LI'},
    {'name': 'Hugo Duro', 'teams': ['Valencia', 'Getafe'], 'aliases': ['duro'], 'countryCode': 'es', 'position': 'DC'},
    {'name': 'Pepelu', 'teams': ['Valencia', 'Getafe'], 'countryCode': 'es', 'position': 'DC'},
    
    # SEVILLA
    {'name': 'Jesus Navas', 'teams': ['Sevilla'], 'aliases': ['navas'], 'countryCode': 'es', 'position': 'LD'},
    {'name': 'Lucas Ocampos', 'teams': ['Sevilla', 'Villarreal'], 'aliases': ['ocampos'], 'countryCode': 'ar', 'position': 'EI'},

    # CELTA VIGO
    {'name': 'Fran Beltran', 'teams': ['Celta Vigo', 'Rayo Vallecano'], 'aliases': ['beltran'], 'countryCode': 'es', 'position': 'MC'},
    
    # OSASUNA
    {'name': 'David Garcia', 'teams': ['Osasuna'], 'aliases': ['david garcia'], 'countryCode': 'es', 'position': 'DFC'},
    {'name': 'Ante Budimir', 'teams': ['Osasuna', 'Mallorca'], 'aliases': ['budimir'], 'countryCode': 'hr', 'position': 'DC'},

    # ALAVES
    {'name': 'Luis Rioja', 'teams': ['Alaves'], 'aliases': ['rioja'], 'countryCode': 'es', 'position': 'EI'}
]

new_countries = {
    'de': {'name': 'Alemania'},
    'pl': {'name': 'Polonia'},
    'en': {'name': 'Inglaterra'},
    'si': {'name': 'Eslovenia'},
    'gh': {'name': 'Ghana'},
    'ua': {'name': 'Ucrania'}
}

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Construir strings a inyectar
players_str = ''
profiles_str = ''

for p in players_to_add:
    aliases_str = f\", aliases: {json.dumps(p.get('aliases', []))}\" if 'aliases' in p else \"\"
    players_str += f\"      {{ name: \\\"{p['name']}\\\", teams: {json.dumps(p['teams'])}{aliases_str} }},\\n\"
    
    profile_key = p['name'].lower().replace('á', 'a').replace('é', 'e').replace('í', 'i').replace('ó', 'o').replace('ú', 'u')
    profiles_str += f\"      \\\"{profile_key}\\\": {{ countryCode: \\\"{p['countryCode']}\\\", position: \\\"{p['position']}\\\" }},\\n\"

countries_str = ''
for code, data in new_countries.items():
    countries_str += f\"      {code}: {{ name: \\\"{data['name']}\\\" }},\\n\"


# Reemplazar en el contenido
content = re.sub(r'(const PLAYERS = \[\\n)', r'\g<1>' + players_str, content)
content = re.sub(r'(const PLAYER_PROFILE = \{\\n)', r'\g<1>' + profiles_str, content)
content = re.sub(r'(const COUNTRY_META = \{\\n)', r'\g<1>' + countries_str, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(\"Update complete!\")
