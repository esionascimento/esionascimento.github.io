/* esionascimento */
/* 1-Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator . */
const fatorial = (n) => {
  if (n >= 0) {
    let aux = 1;
    for (let index = 1; index < n; index += 1) {
      aux = aux * (index+1);
    }
    return aux;
  }
}
console.log(fatorial(5));

/* 2-Crie uma função que receba uma frase e retorne qual a maior palavra. */
const stringa = "Bom dia a todos!";
const result = stringa.match(/\w+/g).sort((a, b) => b.length - a.length)[0];  
console.log(result);

/* 3-Crie uma página que contenha:
Um botão ao qual será associado um event listener ;
Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada. */
const consButton = document.querySelector('button');
const consP = document.querySelector('p');
const clickCount = () => {
  const aux = parseInt(consP.innerText);
  consP.innerText = aux + 1;
}
consButton.addEventListener('click', clickCount);
