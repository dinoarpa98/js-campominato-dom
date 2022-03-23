// let grid = document.getElementById('grid');

// for (let i = 1; i <= 100; i++) {
//   let box = document.createElement('div');
//   box.innerHTML += box.innerHTML += `<div>${i}</div>`;
//   box.classList.add('box');
//   grid.appendChild(box);


//   box.addEventListener('click', function () {
//     console.log(this);
//     console.log(this.innerHTML);
//     let numero = this.innerHTML;
//     box.classList.add('boxLightBlue');
//   });

// }

let btn = document.getElementById('btn');
let select = document.getElementById('scelte');
let grid = document.getElementById('grid');
let box = document.createElement('div');
let array = [];
let arrayBombs = [];
let arrayin = [];
let count = 0;

btn.addEventListener('click', function () {


  grid.innerHTML = '';




  let numeroCelle;

  if (select.value == "easy") {
    numeroCelle = 100;
  } else if (select.value == "medium") {
    numeroCelle = 81;
  } else {
    numeroCelle = 49;
  }



  array = [];

  for (x = 1; x < numeroCelle + 1; x++) {
    array.push(x);
  }

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  array = shuffle(array);
  console.log(array);



  arrayBombs = [];
  arrayin = [];

  for (y = 0; y < numeroCelle; y++) {
    arrayBombs.push(y);
  }

  arrayBombs = shuffle(arrayBombs);

  for (bombs = 1; bombs <= 16; bombs++) {
    arrayin.push(arrayBombs[bombs]);
  }

  console.log(`bombe: ${ arrayin }`);
  console.log(`bombe: ${ arrayin.sort(function(a, b){return a-b}) } `);



  for (let i = 0; i < numeroCelle; i++) {
    let grid = document.getElementById('grid');
    let box = document.createElement('div');
    grid.appendChild(box);

    if (numeroCelle == 100) {
      box.classList.add('box_1')
      box.id = array[i];
    } else if (numeroCelle == 81) {
      box.classList.add('box_2')
      box.id = array[i];
    } else {
      box.classList.add('box_3')
      box.id = array[i];
    }


    box.innerHTML = `<span>${array[i]}</span>`;

    count = 0;


    box.addEventListener('click', function () {

      console.log(this.innerHTML);

      if (arrayin.includes(parseInt(this.innerText))) {
        this.classList.add('bomb');

        alert(`Hai perso`);
      } else {
        this.classList.add('clicked');

        count++;
      }

      if (count == ((numeroCelle + 1) - arrayBombs[bombs])) {
        alert(`Hai Vinto!`);
      }
    });
  }
});