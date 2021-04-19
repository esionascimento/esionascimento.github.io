const assert = require('assert');
// escreva a função addOne aqui
/* 1-Escreva a função addOne para passar nos testes já implementados. */
const addOne = (myArray) => {
  let aux = [];
  for (const iterator of myArray) {
    aux.push(iterator + 1);
  }
  return aux;
};

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

/* ------------------------------------------------------------------------------- */
const assert = require('assert');
// escreva a função wordLengths aqui
/* 2-Escreva a função wordLengths para passar nos testes já implementados. */
const wordLengths = (words) => {
  let aux = [];
  for (const iterator of words) {
    let tamanho = iterator.length;
    aux.push(tamanho);
  }
  return aux;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);