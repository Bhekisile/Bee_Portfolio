const menu = document.getElementById('ham-menu');
function clickMenu() {
  menu.style.display = 'block';
}

function clickX() {
  menu.style.display = 'none';
}

const getHam = document.querySelector('.getHam');
getHam.addEventListener('click', clickMenu);

const x = document.querySelector('#x');
x.addEventListener('click', clickX);