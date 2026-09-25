const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const replacement = `                <option value="Currican">Curricà</option>
                <option value="Eging">Eging (Cefalòpodes)</option>
                <option value="Fondo">Fondo</option>
                <option value="Boya">Boya</option>
                <option value="BreakLine">BreakLine</option>
                <option value="Altre">Altre</option>`;

content = content.replace(/<option value="Currican">.*?<\/option>[\s\n]*<option value="Eging">.*?<\/option>[\s\n]*<option value="Altre">.*?<\/option>/, replacement);

fs.writeFileSync('index.html', content, 'utf8');
console.log('Success index.html');
