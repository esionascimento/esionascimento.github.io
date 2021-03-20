const leBody = document.querySelector('body');
const leNav = document.createElement('nav');
leNav.className = 'menu clpadding';
leBody.appendChild(leNav);

function addNoCabecalho(itag, iclass, itext, ilink){
  let aux = document.createElement(itag);
  aux.className = iclass;
  aux.innerText = itext;
  aux.href = ilink;

  leNav.appendChild(aux);
}
addNoCabecalho('a', 'menu-box clpadding', 'Esio Nascimento', '/index.html');
addNoCabecalho('a', 'menu-box clpadding', 'Trabalhos', '/trabalhos.html');
addNoCabecalho('a', 'menu-box clpadding', 'CV', '/cv.html');
