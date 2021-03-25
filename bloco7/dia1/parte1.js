/* esionascimento */
/* 1. Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
  -Modifique a estrutura da função para que ela seja uma arrow function .
  -Modifique as concatenações para template literals . */

const testingScope = escopo => {
  escopo === true ? console.log(`Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !`) : console.log(`Não devo ser utilizada fora meu escopo (else)`);
}
testingScope(false);

/* 2. Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
  -Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
  -Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números. */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const odds = (aux) => {
  let menor;
  let auxShort;
  for (let i = 0; i < aux.length; i += 1) {
    menor = aux[i];
    for (let j = 0; j < aux.length; j += 1) {
      if (aux[i] <= menor) {
        menor = aux[i];
      }
    }
    auxShort = menor;
    console.log(auxShort);
  }
  /* return auxShort; */
}

console.log(odds(oddsAndEvens));