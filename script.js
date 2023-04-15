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


const dataCards = [
  {
    id: 1,
    image: './ImageP1/Snapshoot1.png',
    heading: 'Keeping track of hundreds of components',
    techStack: {
      tech1: 'Ruby on Rails',
      tech2: 'CSS',
      tech3: 'JavaScript',
    },
    lorem: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    linkLive: 'https://www.google.com',
    linkSource: 'https://github.com/bhekisile/',
  },
  {
    id: 2,
    image: './ImageP1/Snapshoot2.png',
    heading: 'Keeping track of hundreds of components',
    techStack: {
      tech1: 'Codekit',
      tech2: 'GitHub',
      tech3: 'JavaScript',
      tech4: 'Bootstrap',
      tech5: 'Terminal',
      tech6: 'Codepen',
    },
    lorem: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    linkLive: 'https://www.google.com',
    linkSource: 'https://github.com/bhekisile/',
  },
  {
    id: 3,
    image: './ImageP1/Snapshoot1.png',
    heading: 'Keeping track of hundreds of components',
    techStack: {
      tech1: 'Ruby on Rails',
      tech2: 'CSS',
      tech3: 'JavaScript',
    },
    lorem: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    lorem1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    button: 'https://www.google.com',
    button1: 'https://github.com/bhekisile/',
  },
  {
    id: 4,
    image: './ImageP1/Snapshoot1.png',
    heading: 'Keeping track of hundreds of components',
    techStack: {
      tech1: 'Ruby on Rails',
      tech2: 'CSS',
      tech3: 'JavaScript',
    },
    lorem: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    lorem1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    button: 'https://www.google.com',
    button1: 'https://github.com/bhekisile/',
  },
  {
    id: 5,
    image: './ImageP1/Snapshoot1.png',
    heading: 'Keeping track of hundreds of components',
    techStack: {
      tech1: 'Ruby on Rails',
      tech2: 'CSS',
      tech3: 'JavaScript',
    },
    lorem: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    lorem1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    button: 'https://www.google.com',
    button1: 'https://github.com/bhekisile/',
  },
  {
    id: 6,
    image: './ImageP1/Snapshoot1.png',
    heading: 'Keeping track of hundreds of components',
    techStack: {
      tech1: 'Ruby on Rails',
      tech2: 'CSS',
      tech3: 'JavaScript',
    },
    lorem: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    lorem1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    button: 'https://www.google.com',
    button1: 'https://github.com/bhekisile/',
  },
]

const mobileCards = (card) => `
  <article class="mobile-cards">
          <button type="button" class="btn-close">
              <img src="./ImageP1/close-icon.png" alt="close icon">
          </button>
          <div class="card-image">
              <img src=${dataCards[card].image} alt="">
          </div>
          <h2 class="card-heading">
              ${dataCards[card].heading}
          </h2>
          <ul class="lang-list">
              <li class="li-mobile">${dataCards[card].techStack.tech1}</li>
              <li class="li-mobile">${dataCards[card].techStack.tech2}</li>
              <li class="li-mobile">${dataCards[card].techStack.tech3}</li>
          </ul>
          <p class="card-para">
            ${dataCards[card].lorem}
          </p>
          <div class="card-button">
                  <button class="btn-live">
                  <a href=${dataCards[card].linkLive} class='btn-live-source'>
                  See live
                  <img src="./ImageP1/icon-live.png" alt="">
                  </a>
                  </button>
                  <button class="btn-source">
                  <a href=${dataCards[card].linkSource} class='btn-live-source'>
                  See source
                  <img src="./ImageP1/icon-source.png" alt="">
                  </a>
                  </button>
          </div>
          <script src="index.js"></script>
  </article>
  `;
  
  const popupBtns = document.querySelectorAll('.pwin');

  for (let i = 0; i < popupBtns.length; i++) {
    popupBtns[i].addEventListener('click', () => {
      const mobileCard = document.createElement('div');
      mobileCard.innerHTML = mobileCards(i);
      document.body.appendChild(mobileCard);
      const btnClose = document.querySelector('.btn-close');
      btnClose.addEventListener('click', async () => {
        document.body.removeChild(mobileCard);
      });
    });
  }

