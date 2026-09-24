const fs = require('fs');
let content = fs.readFileSync('db.js', 'utf8');

const replacement = `      formCaptura.reset();
      document.getElementById('foto-preview').style.display = 'none';
      document.getElementById('foto-text').textContent = 'Pujar foto del peix';
      const especieAltreReset = document.getElementById('cap-especie-altre');
      if (especieAltreReset) {
        especieAltreReset.style.display = 'none';
        especieAltreReset.required = false;
      }`;

content = content.replace(/formCaptura\.reset\(\);\s*document\.getElementById\('foto-preview'\)\.style\.display = 'none';\s*document\.getElementById\('foto-text'\)\.textContent = 'Pujar foto del peix';/, replacement);

fs.writeFileSync('db.js', content, 'utf8');
console.log('Success');
