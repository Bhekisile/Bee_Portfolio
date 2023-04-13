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


let he1 = document.getElementById("popup-content");
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

function pop() {
  pops.style.display = "block";
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
]

    const popup = document.getElementById("popup");
    let img = document.createElement("img")
    img.src = dataCards[1].image;
    popup.appendChild(img);

    var ul = document.getElementById("badges");
    var li = document.createElement("li");
    li.innerHTML = `
      <li class="badge">${dataCards[1].techStack.tech1}</li>
      <li class="badge">${dataCards[1].techStack.tech2}</li>
      <li class="badge">${dataCards[1].techStack.tech3}</li>
      `
    ul.append(li);
    
function qs(ClassorId) {
  return document.querySelector(ClassorId);
}

const form = qs("form");
const name = qs('input[name="name"]');
const email = qs('input[name="email"]');
const txt = qs('textarea[name="comment"]');

form.addEventListener("submit", (event) => {
  const errorMessages = [];
 //comment
  if (errorMessages.length > 0) {
    event.preventDefault();
    error.textContent = errorMessages.join(".");
  } else {
    error.textContent = "";
  }
});
  
