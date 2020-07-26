'use strict';

function beginning () {
let frame = document.getElementById('frame');
let field = document.getElementById('field');
let sun = document.getElementById('sun');
let castle = document.getElementById('castle');
let knight = document.getElementById('knight');
let controls = document.getElementById('controls');
let talk = document.getElementById('talk');
document.getElementById('picture').onclick = function(event) {
  event.preventDefault();
}
   
let times = 0;
let maxTimes = 3;
let killOrc = false;
let savePrincess = false;


function goesKnight () {
knight.remove();
let knightOnLeft = document.createElement('img');
knightOnLeft.src = 'pictures/knightOnLeft.png';
knightOnLeft.alt = 'knight goes to his base'; 
knightOnLeft.id = 'knightOnLeft';
field.append(knightOnLeft);
knightOnLeft.getBoundingClientRect();
knightOnLeft.style.left = -100 +'px';
makeFigures();
}


yes.onclick = function(event) {
talk.innerHTML = '&ensp;&ensp;&ensp;Тогда я побежал в трактир за помощью!<br>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; Не натыкайтесь на орка!<br>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;(Помощь дает вам 1 доп.ход)';
talk.style.top= 230+'px';
talk.style.lineHeight= 1.5;
controls.children[1].remove();
controls.children[0].remove();
let bye = document.createElement('button');
bye.id = 'bye';
bye.innerHTML = "Проваливай уже!";
controls.append(bye);
document.getElementById('controls').style.top=355+'px'
document.getElementById('controls').style.left=190+'px'
document.getElementById('openBoard').classList.remove('not-visible');
document.getElementById('bye').onclick = function(event) {
  document.getElementsByClassName('max')[0].innerHTML = 4;
maxTimes = 4;

  controls.children[0].remove();
   goesKnight ();
  goesKnight = '';
  controls.remove();
  talk.remove();
  cloud.remove();
  setTime_0 ();
}
}

let persons =0;
function reforce_0 () {
let reforce = "<div id='reforce'><img id='jesterWarrior'  style= 'left:-150px' class='reforce jesterWarrior' src='pictures/jesterWarrior.png' alt='jester reforcing'</img><img id='jesters' class='reforce jesters' style= 'left:-90px' src='pictures/jesters.png' alt='jesters reforcing'</img><img id='viking' style= 'left:-40px' class='reforce viking' src='pictures/viking.png' alt=viking reforcing></div>";           
field.insertAdjacentHTML('beforeend',reforce);
document.getElementById('viking').style.left= document.getElementById('viking').getBoundingClientRect().left -50 +'px';
}

function reforce_1 () {
document.getElementById('jesters').style.left= document.getElementById('jesters').getBoundingClientRect().left + 40 +'px';
}
function reforce_2 () {
document.getElementById('jesterWarrior').style.left= document.getElementById('jesterWarrior').getBoundingClientRect().left + 150 +'px';
}

function setTime_0 () {
setTimeout(()=>reforce_0(),700);

function setTime_1 () {
setTimeout(()=>reforce_1(),1100);
}
 setTime_1()
function setTime_2 () {
setTimeout(()=>reforce_2(),1800);
}
 setTime_2 ();
}

 document.body.ondragstart = function() {
      return false;
  }
 document.body.onmousedown = function (event) {
    event.preventDefault();
  }

no.onclick = function() {
  talk.innerHTML = '&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;К черту помощь!<br>&ensp;&ensp;&ensp;&ensp;Сами одолеем орка и спасем принцессу!<br>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;(Вы не боитесь орка)';
  talk.style.top= 230+'px';

talk.style.lineHeight= 1.5;
controls.children[1].remove();
controls.children[0].remove();
let stay = document.createElement('button');
stay.id = 'stay';
stay.innerHTML = "За оружие!";
controls.append(stay);
document.getElementById('controls').style.top=355+'px'
document.getElementById('controls').style.left=205+'px'

document.getElementById('openBoard').classList.remove('not-visible');
stay.onclick = function(event) {
  document.getElementById('fearOrc').classList.remove('not-visible');
  document.getElementById('notAproblem').classList.remove('not-visible');
  killOrc = true;
  
  stayToHelp ();
  stayToHelp = '';
   controls.remove();
  talk.remove();
  cloud.remove();
}
}

function stayToHelp () {
knight.remove();

let horse = document.createElement('img');
horse.src = 'pictures/horse.png';
horse.alt = 'horse'; 
horse.id = 'horse';
field.append(horse);
horse.getBoundingClientRect();

let infantry = document.createElement('img');
infantry.src = 'pictures/infantry.png';
infantry.alt = 'knight helps '; 
infantry.id = 'infantry';
field.append(infantry);
infantry.getBoundingClientRect();
infantry.style.left = 230 +'px';
makeFigures();
}

 let orcHead = '<img id="orcHead" src="pictures/orcHead.png" alt="orcHead" class="not-visible">';
 let goblin1 = '<img id="goblin1" src="pictures/goblin.png" alt="goblin1"class="not-visible">';
 let goblin2 = '<img id="goblin2" src="pictures/goblin.png" alt="goblin2"class="not-visible">';
 let goblin3 = '<img id="goblin3" src="pictures/goblin.png" alt="goblin3"class="not-visible">';
 let goblin4 = '<img id="goblin4" src="pictures/goblin.png" alt="goblin4"class="not-visible">';
 let princess = '<img id="princess" src="pictures/princess.png" alt="princess"class="not-visible">';

let arr = [orcHead, goblin1, goblin2, goblin3, goblin4, princess];
var shuffledArr = arr.sort(function(){
  return Math.random() - 0.5;
}); 

let figure1, figure2, figure3, figure4, figure5, figure6;


function makeFigures() {
let figuresPreparing = "<div id='figures'><figure id='figure1' class='figure bord'></figure><figure id='figure2' class='figure bord'></figure><figure id='figure3' class='figure bord'></figure><figure id='figure4' class='figure bord'></figure><figure id='figure5' class='figure bord'></figure><figure id='figure6' class='figure bord'></figure></div>";

field.insertAdjacentHTML('beforeend',figuresPreparing);

let figure1 = document.getElementById('figure1');
let figure2 = document.getElementById('figure2');
let figure3 = document.getElementById('figure3');
let figure4 = document.getElementById('figure4');
let figure5 = document.getElementById('figure5');
let figure6 = document.getElementById('figure6');
occupy()
}

//('----------------начало функции-----------------------------') 
let i = 0;
function occupy() {
  let figures = document.getElementById('figures');
for (let figure of figures.children) {
 
 //('----------------начало онклик-----------------------------')  
  figure.onclick = function () {
 
 figure.firstElementChild.classList.remove("not-visible");

if (figure.firstElementChild.id == 'orcHead' && killOrc == false) {
  this.classList.remove("bord");
  this.onclick ='';
    defeat();
    } else if (figure.firstElementChild.id == 'orcHead' && killOrc == true) {
      this.classList.remove("bord");
     this.onclick ='';
    process (); 
} else if (figure.firstElementChild.id == 'princess') {
  this.classList.remove("bord");
  this.onclick ='';
  victory();
 } else {
 this.classList.remove("bord");
 this.onclick ='';
 process (this.innerHTML); 
}
}
//('-----------------конец онклик-----------------------------')



  figure.insertAdjacentHTML('afterbegin',arr[i]);
i++;
}
}
//('------------------конец функции-------------------------------')


//========================подсчеты================================
let process = function () {
        times+=1;
changeColor();
        if (times==3 && maxTimes==4) diabloComing();
       if (times==2 && maxTimes==3) diabloComing();
   document.getElementsByClassName('attempts')[0].innerHTML = times;
      if (times == maxTimes) {
        times-=1;
      defeat () 
         }

  }

function victory () {
  times+=1;
 document.getElementsByClassName('attempts')[0].innerHTML = times;
 document.getElementById('fearOrc').remove();
 document.getElementById('notAproblem').remove();
let congradulations = "<img id='jesus' src='pictures/jesus.png' alt='congradulations from Jesus'><img id='jesusCloud' src='pictures/jesusCloud.png' alt='jesusCloud'><div id='salut'>Поздравляю!</div>";
  document.getElementById('field').style.backgroundColor = '#40cfff';
 document.getElementById('land').style.backgroundColor = 'green';
 document.getElementById('sun').style.backgroundColor = 'yellow';
 diabloGoHome();
field.insertAdjacentHTML('beforeend',congradulations);
final ();
}


function defeat () {
times+=1;
document.getElementsByClassName('attempts')[0].innerHTML = times;
  document.getElementById('field').style.backgroundColor = '#281616';
 document.getElementById('land').style.backgroundColor = '#424242';
 document.getElementById('sun').style.backgroundColor = 'red';
let orcsDefeat = "<img id='orcsDefeat' src='pictures/orcsDefeat.png' alt='a lot of orcs'>";
field.insertAdjacentHTML('beforeend',orcsDefeat);
let wordDefeat = "<p id='wordDefeat'>Вы не спасли принцессу!</p>";
field.insertAdjacentHTML('beforeend',wordDefeat);
final ();
}


function final () {
for (let fig of document.getElementById('figures').children) {
  if (fig.classList.contains('bord')) {
fig.firstElementChild.remove();
    fig.classList.remove('bord')
    let figures = document.getElementById('figures');
for (let figure of figures.children) {
   figure.onclick ='';
  }
}
}
setTimeout(()=>restart(),1000)
}


//==================конец подсчетов====================

//6666666666666666работа мефисто66666666666666666666666
function diabloBirth() {
let devil = "<img id='devil' src='pictures/devil.png' alt='devil comes'>"
field.insertAdjacentHTML('beforeend',devil);
}
diabloBirth()

let devilTopPosition = -93;
let devilLeftPosition = -93;



function diabloComing() {
let devil = document.getElementById('devil');
devil.getBoundingClientRect();
devil.style.top = devilTopPosition + 80 +'px';
 devilTopPosition += 80;
devil.style.left = devilLeftPosition + 115 +'px';
devilLeftPosition += 115;
}

function diabloGoHome() {
let devil = document.getElementById('devil');
document.getElementById('devil').src = 'pictures/devilGoHome.png'
devil.getBoundingClientRect();
devil.style.top = devilTopPosition - 80 +'px';
 devilTopPosition -= 80;
devil.style.left = devilLeftPosition - 115 +'px';
devilLeftPosition -= 115;
}


function changeColor() {
if (times==1) {
  document.getElementById('field').style.backgroundColor = '#24737A';
 document.getElementById('land').style.backgroundColor = '#00FF40';
 document.getElementById('sun').style.backgroundColor = '#D7DF01';
}
if (times==2) {
  document.getElementById('field').style.backgroundColor = '#1D4346';
document.getElementById('land').style.backgroundColor = '#9FF781';
 document.getElementById('sun').style.backgroundColor = '#FF8000';
}
if (times==3) {
  document.getElementById('field').style.backgroundColor = '#0E191A';
document.getElementById('land').style.backgroundColor = '#ACFA58';
 document.getElementById('sun').style.backgroundColor = '#FF4000';
}
}
}
//6666666666666666 окончание работы мефистофеля66666666666666666666666

 function restart () {
if(confirm('изволите сыграть снова?')) window.location.reload(true);
}
window.onload = function() {
  beginning();
}

