const menu = document.getElementById('ham-menu');
const ham = document.getElementById('menu');
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

const dataCards = [
  {
    id: 1,
    image: './ImageP1/Snapshoot-Portfolio2.png',
    heading: 'Keeping track of hundreds of components',
    techStack: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    linkLiveVersion: 'https://www.google.com',
    linkSource: 'https://github.com/bhekisile/',
    },
  {
    id: 2,
    image: './ImageP1/Snapshoot-Portfolio.png',
    heading: 'Keeping track of hundreds of components',
    techStack: ['Ruby on Rails', 'CSS', 'JavaScript'],
    description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>',
    linkLiveVersion: 'https://www.google.com',
    linkSource: 'https://github.com/bhekisile/',
  },
  {
    id: 3,
    image: './ImageP1/Snapshoot-Portfolio2.png',
    heading: 'Keeping track of hundreds of components',
    techStack: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    linkLiveVersion: 'https://www.google.com',
    linkSource: 'https://github.com/bhekisile/',
    },
  {
    id: 4,
    image: './ImageP1/Snapshoot-Portfolio.png',
    heading: 'Keeping track of hundreds of components',
    techStack: ['Ruby on Rails', 'CSS', 'JavaScript'],
    description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>',
    linkLiveVersion: 'https://www.google.com',
    linkSource: 'https://github.com/bhekisile/',
  },
  {
    id: 5,
    image: './ImageP1/Snapshoot-Portfolio2.png',
    heading: 'Keeping track of hundreds of components',
    techStack: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    linkLiveVersion: 'https://www.google.com',
    linkSource: 'https://github.com/bhekisile/',
    },
  {
    id: 6,
    image: './ImageP1/Snapshoot-Portfolio.png',
    heading: 'Keeping track of hundreds of components',
    techStack: ['Ruby on Rails', 'CSS', 'JavaScript'],
    description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>',
    linkLiveVersion: 'https://www.google.com',
    linkSource: 'https://github.com/bhekisile/',
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
  <img class='btn-close' src='./ImageP1/close-iconw.png' alt''>
  <div class='popupCont'>
  <div class='img1'><img src=${card.image}></div>
  <h3 class==p-heading>${card.heading}</h3>
  <ul>
  ${card.techStack.map((tech) => `<li>${tech}</li>`)}
  </ul>
  <div class='text'>${card.description}</div>
  <div class="card-button">
        <button class='btn-1>
          <a href=${card.linkLiveVersion} class="btn-live">
            <span class='live-text'>See live</span>
            <img src="./ImageP1/live-icon.png" alt="see live icon">
          </a>
        </button>
        <button class='btn-2>
          <a href=${card.linkSource} class="btn-source">
            <span class='live-text'>See source</span>
            <img src="./ImageP1/github-w.png" alt="see github icon">
          </a>
        </button>
  </div>
  </div>
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