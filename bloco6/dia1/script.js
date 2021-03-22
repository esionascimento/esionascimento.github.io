const auxSelect = document.querySelector('#input-estado');
const buttonEnviar = document.querySelector('#button-enviar');
const buttonLimpar = document.querySelector('#button-limpar');
const buttonDefault = document.querySelector('#buttonDefault');
const leOl = document.querySelector('#formulario');
const body = document.querySelector('body');

let estados = {
  'AC': 'Acre',
  'AL': 'Alagoas',
  'AP': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'ES': 'Espírito Santo',
  'GO': 'Goiás',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do Sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraima',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins'
};

for (let key in estados) {
  let auxOption = document.createElement('option');
  auxOption.className = 'option';
  auxOption.value = key;
  auxOption.innerText = estados[key];
  auxSelect.appendChild(auxOption);
}

function salvar(){
  let auxInput = document.querySelectorAll('input')
  const aux = [];
  auxInput.forEach((li, index) => {
    aux[index] = [li.name, li.value];
  });
  localStorage.setItem('Formulario', JSON.stringify(aux));
}
buttonEnviar.addEventListener('click', salvar);

function recuperar(event) {
  event.preventDefault();
  if(leOl !== null) {
    leOl.innerHTML = '';
  }
  if(localStorage.Formulario) {
    const aux = Object.entries(JSON.parse(localStorage.getItem('Formulario')));
    for (let i = 0; i < aux.length; i += 1) {
      const auxRecupera = document.createElement('li');
      const text = aux[i][1][0];
      const chave = aux[i][1][1];
      let auxLi = `${text}: ${chave}`;
      auxRecupera.innerText = auxLi;
      leOl.appendChild(auxRecupera);
    }
  }
}
buttonDefault.addEventListener('click', recuperar);