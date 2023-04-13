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

const getHam = document.querySelector('.getHam');
getHam.addEventListener('click', clickMenu);

const x = document.querySelector('#x');
x.addEventListener('click', clickX);

const he1 = document.getElementById('popup-content');
const heading = 'Keeping track of hundreds of components';
const h1 = document.createElement('h1');
h1.innerText = heading;
he1.appendChild(h1);

const para = document.getElementById('js-p');
const lorem = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.';
const p = document.createElement('p');
p.innerText = lorem;
para.appendChild(p);

const para2 = document.getElementById('js-p2');
const lorem2 = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.';
const p2 = document.createElement('p');
p2.innerText = lorem2;
para2.appendChild(p2);

const pops = document.getElementById('pop-outer');

function clickPopX() {
  pops.style.display = 'none';
}

function pop() {
  pops.style.display = 'block';
}

const dataCards = [
  {
    id: 0,
    image: './ImageP1/Snapshoot Portfolio1.png',
    techStack: {
      tech1: 'Codekit',
      tech2: 'GitHub',
      tech3: 'JavaScript',
      tech4: 'Bootstrap',
      tech5: 'Terminal',
      tech6: 'Codepen',
    },
  },
  {
    id: 1,
    image: './ImageP1/Snapshoot Portfolio.png',
    techStack: {
      tech1: 'Ruby on Rails',
      tech2: 'CSS',
      tech3: 'JavaScript',
    },
  },
];

const popup = document.getElementById('popup');
const img = document.createElement('img');
img.src = dataCards[1].image;
popup.appendChild(img);

const ul = document.getElementById('badges');
const li = document.createElement('li');
li.innerHTML = `
      <li class="badge">${dataCards[1].techStack.tech1}</li>
      <li class="badge">${dataCards[1].techStack.tech2}</li>
      <li class="badge">${dataCards[1].techStack.tech3}</li>
      `;
ul.append(li);

function qs(ClassorId) {
  return document.querySelector(ClassorId);
}

const form = qs('form');
const name = qs('input[name="name"]');
const email = qs('input[name="email"]');
const txt = qs('textarea[name="comment"]');
const error = document.getElementById('error');

form.addEventListener('submit', (event) => {
  const errorMessages = [];
  if (name.value.trim() === '') {
    errorMessages.push('Name is required');
  } else if (email.value.trim() === '') {
    errorMessages.push('Email is required');
  } else if (txt.value.trim() === '') {
    errorMessages.push('Message is required');
  } else if (email.value !== email.value.toLowerCase()) {
    errorMessages.push('Email must be in lowercase');
  }
  if (errorMessages.length > 0) {
    event.preventDefault();
    error.textContent = errorMessages.join('.');
  } else {
    error.textContent = '';
  }
});