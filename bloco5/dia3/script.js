/* esionascimento */
function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function createDaysOfTheMonth() {
  let getDaysList = document.querySelector('#days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement('li');
    dayItem.className = 'day';
    if (day === 24 || day === 31){
      dayItem.innerHTML = day;
      dayItem.className = 'day holiday';
      getDaysList.appendChild(dayItem);
    }else if (day === 4 || day === 11 || day === 18) {
      dayItem.innerHTML = day;
      dayItem.className = 'day friday';
      getDaysList.appendChild(dayItem);
    }else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    }else {
      dayItem.innerHTML = day;
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
  }
}
createDaysOfTheMonth();
//2
function funFeriados(idButton,buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  newButton.innerHTML = buttonName;
  newButton.id = idButton;
  buttonContainer.appendChild(newButton);
}
funFeriados('btn-holiday','Feriados');
//3 
function clickButton(){
  for (let index = 0; index < getFeriados.length; index += 1){
    if( getFeriados[index].style.backgroundColor == "black"){
      console.log("eai");
      getFeriados[index].style.backgroundColor = "rgb(238,238,238)";
    } else {
      console.log("22");
      getFeriados[index].style.backgroundColor = "black";
    }
  }
}

let getButton = document.querySelector('#btn-holiday');
let getFeriados = document.querySelectorAll('.holiday');
getButton.addEventListener('click', clickButton);
//4
funFeriados('btn-friday','Sexta-feira');
//5
function clickButtonFriday(){
    let array = [4,11,18,25];

    for (let index = 0; index < getFriday.length; index += 1){
      
      if (getFriday[index].innerHTML == array[index]) {
        getFriday[index].innerHTML = 'Sexta-Feira';
      }else {
        getFriday[index].innerHTML = array[index];
      }
    }
}

let getButtonFriday = document.querySelector('#btn-friday');
let getFriday = document.querySelectorAll('.day.friday');
getButtonFriday.addEventListener('click', clickButtonFriday);

//6
function dayMouseOver() {
  event.target.style.fontSize = '30px';
  event.target.style.fontWeight = '600';
}
function dayMouseOut() {
  event.target.style.fontWeight = '200';
  event.target.style.fontSize = '20px';
}
let diasOn = document.querySelector('#days');
diasOn.addEventListener('mouseover', dayMouseOver);
let diasOff = document.querySelector('#days');
diasOff.addEventListener('mouseout', dayMouseOut);
//7
let spanzinho = document.createElement('span');
let tasks = document.querySelector('.my-tasks');
funTasks('cozinha');
function funTasks(tarefa) {
  spanzinho.innerHTML = tarefa;
  tasks.appendChild(spanzinho);
}
//8
function legenda(cor) {
  let divTask = document.createElement('div');
  divTask.className = 'task';
  divTask.style.background = cor;
  tasks.appendChild(divTask);
}
legenda('blue');
//9

let divSelect = document.querySelector('.task');
function clickSelected() {

  if(divSelect.className == 'task') {
    divSelect.className = 'task selected';
  }else {
    divSelect.className = 'task';
  }
}
divSelect.addEventListener('click', clickSelected);
//10
let clickTask = document.querySelector('#days');
clickTask.addEventListener('click', clickTaskSelected);
let guardaSelect = document.querySelector('.task');

function clickTaskSelected(eventoDeOrigem) {
  let diaMes = eventoDeOrigem.target;
  console.log(diaMes);
  if (guardaSelect.className == 'task selected') {
    diaMes.style.color = 'blue';
  } else {
    diaMes.style.color = 'rgb(119,119,119)';
  }
}
//bonus

let task_in = document.querySelector('#task-input1');
let list_compromisso = document.querySelector('.task-list');

btCompromisso = document.querySelector('#btn-add');
btCompromisso.addEventListener('click', funCompromisso);
task_in.addEventListener('keypress', funEnter);

function funEnter(e) {
  if(e.which == 13){
     funCompromisso();
  }
}
function funCompromisso() {
  let dayItem = document.createElement('li');
  dayItem.innerHTML = task_in.value;
  if(dayItem.innerHTML == ''){
    alert('Erro');
  }
  list_compromisso.appendChild(dayItem);
}