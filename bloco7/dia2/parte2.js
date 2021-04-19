/* esionascimento */
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/* 1-Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. */
console.log('-----Questao 1-----');
const addManha = (lesson2, turno, value) => lesson2[turno] = value;
addManha(lesson2,'turno', 'manhã');
console.log(lesson2);
console.log(`
`);
/* 2-Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. */
console.log('-----Questao 2-----');
const listarKeys = (les) => {
  for (let key in les) {
    if (Object.hasOwnProperty.call(les, key)) {
      const element = key;
      console.log(element);
    }
  }
}
listarKeys(lesson1);
console.log(`
`);
/* 3-Crie uma função para mostrar o tamanho de um objeto. */
console.log('-----Questao 3-----');
const tamanhoObjeto = (les) => {
  console.log(Object.keys(les).length);
}
tamanhoObjeto(lesson3);
console.log(`
`);
/* 4-Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. */
console.log('-----Questao 4-----');
const listarValores = (les) => {
  for (const key in les) {
    if (Object.hasOwnProperty.call(les, key)) {
      const element = les[key];
      console.log(element);
    }
  }
}
listarValores(lesson2);
console.log(`
`);
/* 5-Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte: */
console.log('-----Questao 5-----');
const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});
console.log(allLessons);
console.log(`
`);
/* 6-Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas. */
console.log('-----Questao 6-----');
const somaTotal = (um, dois, tres) => um.numeroEstudantes + dois.numeroEstudantes + tres.numeroEstudantes;
console.log(`${somaTotal(lesson1, lesson2, lesson3)}
`);

/* 7-Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo: */
/* console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica' */
console.log('-----Questao 7-----');
const valorChave = (les, index) => Object.values(les)[index];
console.log(`${valorChave(lesson1, 3)}
`);

/* 8-Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo: */
/* console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false */
console.log(`-----Questao 8-----`);
const verificarExiste = (les, key, value) => Object.keys(les).includes(key) && Object.values(les).includes(value);
console.log(`${verificarExiste(lesson1, 'turno', 'manhã')}
`);