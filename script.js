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
    image: './ImageP1/capsHome.png',
    heading: 'College of Science, Engineering and Technology 2023',
    techStack: ['HTML', 'GitHub', 'JavaScript', 'CSS'],
    description: 'The project is about the College of Science Department at the University of South Africa. The navigation bar is the feature I like the most; it takes you to the section you want. There are courses, lectures, and sponsorship sections.',
    linkLiveVersion: 'https://bhekisile.github.io/capstone-project/',
    linkSource: 'https://github.com/Bhekisile/capstone-project',
  },
  {
    id: 2,
    image: './ImageP1/awesomeBook.png',
    heading: 'Awesome Books',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Github'],
    description: '<p>This is a library project that allows the addition and removal of books. It uses the Luxon library to display dates and times. It is a website that contains add-on books, book lists, and contact details pages.</p>',
    linkLiveVersion: 'https://bhekisile.github.io/Awesome_books/',
    linkSource: 'https://github.com/Bhekisile/Awesome_books',
  },
  {
    id: 3,
    image: './ImageP1/todo.png',
    heading: 'To Do List',
    techStack: ['HTML', 'GitHub', 'JavaScript', 'Webpack'],
    description: 'To-do-list is a list of tasks that need to be completed. The user can add, edit, and delete the task and each task is rendered dynamically on page load. The project uses webpack to bundle JavaScript files.',
    linkLiveVersion: 'https://bhekisile.github.io/To-do-list/dist/',
    linkSource: 'https://github.com/Bhekisile/To-do-list',
  },
  {
    id: 4,
    image: './ImageP1/recipeApp.png',
    heading: 'Recipe App',
    techStack: ['Ruby on Rails', 'PostgreSQL', 'Bootstrap5'],
    description: '<p>This project will help you keep track of all your recipes and ingredients. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Also, since sharing recipes is an important part of cooking the app should allow you to make them public so anyone can access them.</p>',
    linkLiveVersion: 'https://recipeapp-sd71.onrender.com',
    linkSource: 'https://github.com/Bhekisile/Recipe-app',
  },
  {
    id: 5,
    image: './ImageP1/budgetApp.png',
    heading: 'Budget App',
    techStack: ['Ruby on Rails', 'PostgreSQL', 'Bootstrap5'],
    description: '<p>This is a mobile web application where you can manage your budget. There is a list of transactions associated with the category, so that you can see how much money you spent and on what.</p>',
    linkLiveVersion: 'https://budgetapp-trdy.onrender.com',
    linkSource: 'https://github.com/Bhekisile/budget-app',
  },
  {
    id: 6,
    image: './ImageP1/metrics.png',
    heading: 'Stock Screener',
    techStack: ['JavaScript', 'React',  'Redux', 'CSS'],
    description: 'This is a metric website containing data or parameters used for stock screening. It displays a list of companies from all over the world with the corresponding parameters and values. The user can filter the application by company\'s name. It is more beneficial to those who search for stocks. The data is extracted from the Financial Modeling Prep API.',
    linkLiveVersion: 'https://stock-screener-7lyx.onrender.com',
    linkSource: 'https://github.com/Bhekisile/Metrics-webapp',
  },
];

const popupBtns = document.querySelectorAll('.pwin');
const popupBtnsArray = Array.from(popupBtns);
console.log('popupBtns', popupBtns);
const popup = document.getElementById('popup');

dataCards.forEach((card) => {
  const temp = document.createElement('div');
  temp.innerHTML = `
  <div class='popupCont hidden'>
  <button class='btn-close'>&times;</button>
  <div class='img1'><img class='pop-img' src=${card.image}></div>
  <h3>${card.heading}</h3>
  <ul>
  ${card.techStack.map((tech) => `<li>${tech}</li>`)}
  </ul>
  <div class='text'>${card.description}</div>
  <div class="card-button">
        <button class='btn-1'>
          <a href=${card.linkLiveVersion} class="btn-live">
            <span class='live-text'>See live</span>
            <img src="./ImageP1/live-icon.png" alt="see live icon">
          </a>
        </button>
        <button class='btn-2'>
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
const overlay = document.getElementById('overlay');
const clicked = () => {
  popup.classList.remove('hidden');
  popup.classList.add('visible');
};
popupBtnsArray.forEach((btn) => {
  btn.addEventListener('click', clicked);
});
const popupConts = document.querySelectorAll('.popupCont');
const closeBtns = document.querySelectorAll('.btn-close');
for (let i = 0; i < popupConts.length; i += 1) {
  for (let j = 0; j < popupBtns.length; j += 1) {
    popupBtns[i].onclick = function openPopup() {
      overlay.style.visibility = 'visible';
      popupConts[i].style.visibility = 'visible';
      popupConts[i].classList.remove('hidden');
      popupConts[i].classList.add('visible');
    };
    closeBtns[i].onclick = function closePopup() {
      popupConts[i].style.visibility = 'hidden';
      popupConts[i].classList.remove('visible');
      popupConts[i].classList.add('hidden');
      overlay.style.visibility = 'hidden';
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