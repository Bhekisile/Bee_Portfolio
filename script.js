const menu = document.getElementById('ham-menu');
const ham = document.getElementById('menu');
function clickMenu() {
  menu.style.display = 'block';
  ham.style.display = 'none';
}

function clickX() {
  menu.style.display = 'none';
  ham.style.display = 'block';
}

let getHam = document.querySelector('.getHam');
getHam.addEventListener('click', clickMenu);

let x = document.querySelector('#x');
x.addEventListener('click', clickX);
