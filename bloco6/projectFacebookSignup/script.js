const consButton = document.querySelector('#button-login');
const consButtonRegister = document.querySelector('#facebook-register');
const consLadoDireito = document.querySelector('.right-content');
const consRadio = document.querySelector('#personalizado');
const auxContainer = document.querySelector('#divRadio');
const constValidar = document.querySelectorAll('.input-text');
const consGender = document.getElementsByName('gender');

consButton.addEventListener('click', (event) => {
  event.preventDefault();
  const aux = document.querySelector('#user-email-phone').value;
  alert(aux);
});

const funGender = () => {
  let aux;
  for (let index = 0; index < consGender.length; index += 1) {
    if (consGender[index].checked) {
      console.log(consGender.checked);
      console.log(consGender[index.value]);
      aux = consGender[index].value;
    }
  }
  return aux;
};

function cadastro() {
  const auxName = document.querySelector('#input-name');
  const auxLastName = document.querySelector('#input-lastname');
  const auxFoneEmail = document.querySelector('#input-foneEmail');
  const auxNiver = document.querySelector('#input-niver');
  const auxGender = funGender();
  const auxInfo = document.createElement('p');
  auxInfo.innerText = `Olá, ${auxName.value} ${auxLastName.value}
  ${auxFoneEmail.value}
  ${auxNiver.value}
  ${auxGender}`;
  consLadoDireito.innerHTML = '';
  consLadoDireito.className = 'right-content';
  consLadoDireito.appendChild(auxInfo);
}

consButtonRegister.addEventListener('click', (event) => {
  event.preventDefault();
  let aux = true;
  const auxSpan = document.querySelector('span');
  auxSpan.innerHTML = '';
  for (let index = 0; index < constValidar.length; index += 1) {
    if (constValidar[index].value === '') {
      auxSpan.innerText = 'Campos inválidos';
      aux = false;
    }
  }
  if (aux) {
    cadastro();
  }
});

consRadio.addEventListener('click', () => {
  const auxInput = document.createElement('input');
  auxInput.name = 'gender-custom';
  auxInput.placeholder = 'Gênero (opcional)';
  auxInput.id = 'eai';
  auxContainer.appendChild(auxInput);
});

/* document.querySelector('#masculino').onclick = () => {
  const aux = document.querySelector('#eai');
  auxContainer.removeChild(aux);
};

document.querySelector('#feminino').addEventListener('click', () => {
  const aux = document.querySelector('#eai');
  auxContainer.removeChild(aux);
});
 */
