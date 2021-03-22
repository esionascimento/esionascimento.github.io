/* if (localStorage.tamFonte) {
  let recuperarDados = function() {
  let recuperaFont = localStorage.getItem('tamFont')
  document.getElementById('tamFont').value = localStorage.tamFont;
} */
let corFundoTela;
let CorTxt;
let tamFonte;
let espacamento;
let tipoFonte;
let aux;
let leBody = document.getElementById('body');
let alterarP = document.getElementById('paragrafo');
let alterarP2 = document.getElementById('paragrafo2');
let buttonTela = document.querySelector('#btn-corTela');
let buttonTexto = document.querySelector('#btn-corTexto');
let inputTela = document.querySelector('#corFundo');
let inputTxt = document.querySelector('#corTexto');
if(localStorage.corTela){
  aux = localStorage.getItem('corTela');
  leBody.style.backgroundColor = aux;
}

/* let exem2 = localStorage.getItem('tamFonte');
console.log(exem2); */
/*   
alterarP.style.fontSize = exem2;
alterarP2.style.fontSize = exem2; */

buttonTela.addEventListener('click', alteraTela);
buttonTexto.addEventListener('click', alteraTexto);

function alteraTela() {
  let tela = inputTela.value;
  if(tela !== 'undefined'){
    console.log(tela);
    aux = tela;
  }else{
    aux = corFundoTela;
  }
  leBody.style.backgroundColor = aux;
}
function alteraTexto() {
  let texto = inputTxt.value;
  if(texto !== 'undefined'){
    aux = texto;
  }else{
    aux=CorTxt;
  }
  leBody.style.color = aux;
}
let corTela = localStorage.setItem("corTela", 'red');
let CorTxt = localStorage.setItem("corTxt", 'green');

//let alteraPara = document.querySelectorAll('.para');

/* function update() {
  var select = document.getElementById('tamFont');
  var option = select.options[select.selectedIndex];
  alterarP.style.fontSize = option.value;
  alterarP2.style.fontSize = option.value;
}
update();
function updateEspacamento() {
  var select = document.getElementById('espacamento');
  var option = select.options[select.selectedIndex];
  alterarP.style.letterSpacing = option.value;
  alterarP2.style.letterSpacing = option.value;
}
updateEspacamento();


function alteraTipoFonte(e) {
  alterarP.style.fontFamily = getTipoFonte.value;
  alterarP2.style.fontFamily = getTipoFonte.value;
}

let salvarDados = function() {
  leBody.style.backgroundColor = getCorFundoTela.value;
  let salvarBody = document.querySelector('body').value;
  let tamFont = document.getElementById('tamFont').value;
  let tipoFont = document.getElementById('espacamento').value;
  localStorage.setItem('body', salvarBody);
  localStorage.setItem('tamFonte', tamFont);
  localStorage.setItem('tipoFont', tipoFont);
}
document.onchange = salvarDados;

 */