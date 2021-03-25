const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

/* 2-Teste se o retorno de sum(4, 5) é 9 */
assert.strictEqual(sum(4,5),9);
/* 3-Teste se o retorno de sum(0, 0) é 0 */
assert.strictEqual(sum(0, 0), 0);
/* 4-Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5) */
assert.strictEqual(sum(4,'5'),0);
/* 5-Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5") */

/* ----------------------------------------------------------------------------- */
const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

/* 3-Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado */
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3),[1,2,4]);
/* 4-Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4] */
assert.notDeepStrictEqual(myRemove([1,2,3,4],3), [1,2,3,4]);
/* 6-Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado */
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5),[1,2,3,4]);

/* ----------------------------------------------------------------------------- */
const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(item, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

/* 4-Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado */
assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4],3),[1,2,4]);

/* ----------------------------------------------------------------------------- */
const assert = require('assert');

function myFizzBuzz(num) {
  //EARLY RETURN
  if (typeof num !== 'number') return false;

  /* if (typeof num !== 'number') {
    throw 'INVALIDO, somente numeros';
  } */
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

/* 5-Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado */
assert.deepStrictEqual(myFizzBuzz(15),'fizzbuzz');
/* 6-Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado */
assert.deepStrictEqual(myFizzBuzz(6),'fizz');
/* 7-Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado */
assert.deepStrictEqual(myFizzBuzz(25),'buzz');
/* 8-Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado */
const aux = 7;
assert.deepStrictEqual(myFizzBuzz(aux), aux);
/* 9-Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado */
assert.deepStrictEqual(myFizzBuzz(''), false);
/* assert.throws(() => {
  myFizzBuzz('');
}) */

/* ----------------------------------------------------------------------------- */
const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
/* idênticos */
assert.deepStrictEqual(obj1,obj2);
/* não idênticos */
assert.deepStrictEqual(obj1,obj3);