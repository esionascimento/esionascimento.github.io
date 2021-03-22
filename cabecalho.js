const leBody = document.querySelector('body');
const leNav = document.createElement('nav');
leNav.className = 'cabMenu cabPadding';
leBody.appendChild(leNav);

function addNoCabecalho(itag, iclass, itext, ilink){
  let aux = document.createElement(itag);
  aux.className = iclass;
  aux.innerText = itext;
  aux.href = ilink;

  leNav.appendChild(aux);
}
addNoCabecalho('a', 'cabMenuA cabPadding', 'Esio Nascimento', '/index.html');
addNoCabecalho('a', 'cabMenuA cabPadding', 'Trabalhos', '/trabalhos.html');
addNoCabecalho('a', 'cabMenuA cabPadding', 'CV', '/cv.html');
