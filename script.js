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



/*let he1 = document.getElementById("popup-content");
let heading = "Keeping track of hundreds of components";
let h1 = document.createElement("h1");
h1.innerText = heading;
he1.appendChild(h1);


let para = document.getElementById("js-p");
let lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.";
let p = document.createElement("p");
p.innerText = lorem;
para.appendChild(p);

let para2 = document.getElementById("js-p2");
let lorem2 =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.";
let p2 = document.createElement("p");
p2.innerText = lorem2;
para2.appendChild(p2);

let pops = document.getElementById("pop-outer");

function clickPopX() {
  pops.style.display = "none";
}

/*function pop() {
  pops.style.display = "block";
}*/

const dataCards = [
  {
    id: 1,
    image: './ImageP1/Snapshoot Portfolio1.png',
    heading: 'Keeping track of hundreds of components',
    techStack: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    lorem: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    },
  {
    id: 2,
    image: './ImageP1/Snapshoot Portfolio.png',
    heading: 'Keeping track of hundreds of components',
    techStack: ['Ruby on Rails', 'CSS', 'JavaScript'],
    lorem: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
  },
  {
    id: 3,
    image: './ImageP1/Snapshoot Portfolio1.png',
    heading: 'Keeping track of hundreds of components',
    techStack: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    lorem: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    },
  {
    id: 4,
    image: './ImageP1/Snapshoot Portfolio.png',
    heading: 'Keeping track of hundreds of components',
    techStack: ['Ruby on Rails', 'CSS', 'JavaScript'],
    lorem: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
  },
  {
    id: 5,
    image: './ImageP1/Snapshoot Portfolio1.png',
    heading: 'Keeping track of hundreds of components',
    techStack: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    lorem: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    },
  {
    id: 6,
    image: './ImageP1/Snapshoot Portfolio.png',
    heading: 'Keeping track of hundreds of components',
    techStack: ['Ruby on Rails', 'CSS', 'JavaScript'],
    lorem: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
  },
]

let popupBtns = document.querySelectorAll('.pwin');
console.log(popupBtns);
let popupBtnsArray = Array.from(popupBtns);
console.log('popupBtnsArray', popupBtnsArray);
const popup = document.getElementById('popup');

dataCards.forEach((card,i) => {
  const temp = document.createElement('div');
  temp.innerHTML = `
  <div class='popupCont'><div><img src=${card.image}></div>
  <h3>${card.heading}</h3>
  <ul>
  ${card.techStack.map((tech) => `<li>${tech}</li>`)}
  </ul>
  <p>${card.lorem}</p></div>
  `;
  popup.append(temp);
})

const clicked = () => {
  console.log('clicked');
  popup.classList.remove('hidden');
  popup.classList.add('visible');
};

popupBtnsArray.forEach((btn, i) => {
  btn.addEventListener('click', clicked)
})

const popupConts = document.querySelectorAll('.popupCont');
console.log('popupConts', popupConts);

for(let i = 0; i < popupConts.length; i++) {
  for( let j = 0; j < popupBtns.length; j++) {
    popupBtns[i].onclick = function openPopup() {
      popupConts[i].style.visibility = 'visible';
    }
  }
}