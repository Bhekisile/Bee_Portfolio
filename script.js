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

const dataCards = [
  {
    id: 1,
    image: './ImageP1/Snapshoot-Portfolio1.png',
    heading: 'Keeping track of hundreds of components',
    techStack: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
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
    image: './ImageP1/Snapshoot-Portfolio1.png',
    heading: 'Keeping track of hundreds of components',
    techStack: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
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
    image: './ImageP1/Snapshoot-Portfolio1.png',
    heading: 'Keeping track of hundreds of components',
    techStack: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
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
];

const popupBtns = document.querySelectorAll('.pwin');
const popupBtnsArray = Array.from(popupBtns);
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');

dataCards.forEach((card) => {
  const temp = document.createElement('div');
  temp.innerHTML = `
  
  <div class='popupCont'>
  <button class='btn-close'>&times;</button>
  <div class='img1'><img class='pop-img' src=${card.image}></div>
  <h3>${card.heading}</h3>
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
  <div class='active' id='overlay'></div>
  
  `;
  popup.append(temp);
});
const clicked = () => {
  popup.classList.remove('hidden');
  popup.classList.add('visible');
  // overlay.classList.remove('hidden');
  overlay.classList.add('active');
};
popupBtnsArray.forEach((btn) => {
  btn.addEventListener('click', clicked);
});
const popupConts = document.querySelectorAll('.popupCont');
const closeBtns = document.querySelectorAll('.btn-close');
for (let i = 0; i < popupConts.length; i += 1) {
  for (let j = 0; j < popupBtns.length; j += 1) {
    popupBtns[i].onclick = function openPopup() {
      popupConts[i].style.visibility = 'visible';
    };
    closeBtns[i].onclick = function closePopup() {
      popupConts[i].style.visibility = 'hidden';
    };
  }
}

// Form validation
function formValidation() {
  const name = document.form.name.value;
  const error = document.getElementById('error');
  const email = document.form.email.value;
  const comment = document.form.comment.value;
  const errorMessages = [];

  if (name.trim() === '') {
    errorMessages.push('Name is required');
  } else if (email.trim() === '') {
    errorMessages.push('Email is required');
  } else if (email !== email.toLowerCase()) {
    errorMessages.push('Email must be in lowercase');
  } else if (comment.trim() === '') {
    errorMessages.push('Message is required');
  }
  if (errorMessages.length > 0) {
    error.textContent = errorMessages.join('.');
    return false;
  }
  error.textContent = '';
  return true;
}
formValidation();