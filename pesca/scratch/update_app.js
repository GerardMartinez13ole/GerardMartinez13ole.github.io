const fs = require('fs');
let content = fs.readFileSync('app.js', 'utf8');

const newFunc = `
window.togglePeixdexView = (view) => {
  const btnAlbum = document.getElementById('btn-view-album');
  const btnLlista = document.getElementById('btn-view-llista');
  const viewAlbum = document.getElementById('peixdex-album-view');
  const viewLlista = document.getElementById('peixdex-llista-view');

  if (view === 'album') {
    btnAlbum.className = 'btn btn-primary';
    btnLlista.className = 'btn btn-secondary';
    viewAlbum.style.display = 'block';
    viewLlista.style.display = 'none';
  } else {
    btnAlbum.className = 'btn btn-secondary';
    btnLlista.className = 'btn btn-primary';
    viewAlbum.style.display = 'none';
    viewLlista.style.display = 'block';
  }
};
`;

content += '\n' + newFunc;
fs.writeFileSync('app.js', content, 'utf8');
console.log('Success app.js');
