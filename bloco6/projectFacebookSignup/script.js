const consButton = document.querySelector('#button-login');
const consButtonRegister = document.querySelector('#facebook-register');
const body = document.querySelector('.right-content');

consButton.addEventListener('click', (event) => {
  event.preventDefault();
  const aux = document.querySelector('#user-email-phone').value;
  alert(aux);
});

consButtonRegister.addEventListener('click', (event) => {
  event.preventDefault();
  const auxP = document.querySelector('span');
  auxP.innerHTML = '';
  const constValidar = document.querySelectorAll('.input-text');
  for (let index = 0; index < constValidar.length; index += 1) {
    if (constValidar[index].value === '') {
      auxP.innerText = 'Campos inválidos';
      body.appendChild(auxP);
    }
  }
});
