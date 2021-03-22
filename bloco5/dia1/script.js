
        /* Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName() */
/*  1-Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício) */
function changeText() {
  let text = document.getElementsByTagName('p')[1];
  text.innerHTML = "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem";
}
changeText();
/*  2-Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco. */
function changeSquareColorToGreen() {
  let square = document.getElementsByClassName('main-content')[0];
  square.style.backgroundColor = 'green';
}
changeSquareColorToGreen();
/* 3-Crie uma função que corrija o texto da tag <h1>. */
function corrigirNome () {
  let nome = document.getElementsByTagName('h1')[0];
  nome.innerHTML = 'Exercício 5.1 - JavaScript';
}
corrigirNome ();
/* 4-Crie uma função que modifique todo o texto da tag <p> para maiúsculo. */
function modifyTagP () {
  let dadoTagP = document.getElementsByTagName('p');
  for (let i = 0; i < dadoTagP.length; i += 1){
    dadoTagP[i].style.textTransform = 'uppercase';
  }
}
modifyTagP ();
/* 5-Crie uma função que exiba o conteúdo de todas as tags <p> no console. */
function showTagP() {
  let dadoTagP = document.getElementsByTagName('p');
  for (let i = 0; i < dadoTagP.length; i += 1){
    console.log(dadoTagP[i].innerHTML);
  }
}
showTagP();