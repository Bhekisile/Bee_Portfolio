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

/*function mediaQueryMatches() {
  const x = window.matchMedia("(max-width: 500px)")
  if (x.matches) {
    let popup = document.getElementById("popup");
    let img = document.createElement("img")
    img.src = dataCards[0].image;
    popup.appendChild(img);

    var ul = document.getElementById("badges");
    var li = document.createElement("li");
    //var text = document.createTextNode(skill);
    //li.appendChild(text);
    ul.appendChild(li);
    li.classList.add("badge");
    
  } else {
    let img = document.createElement("img")
    img.src = dataCards[1].image;
    popup.appendChild(img);

    li.classList.add("badge");
  }
  pop();
}*/
let popupBtns = document.querySelectorAll('.pwin');
console.log(popupBtns);
let popupBtnsArray = Array.from(popupBtns);
console.log('popupBtnsArray', popupBtnsArray);
const popup = document.getElementById('popup');


function topper() {
  const clicked = () => {
    console.log('clicked');
    popup.classList.remove('hidden');
    popup.classList.add('visible');
  };
  
  for(let i = 0; i < dataCards.length; i++) {
    popup.innerHTML = `
    <img src=${dataCards.image}>
    <ul>
      ${
        dataCards.techStack.map((tech) => <li>{tech}</li>)
      }
    </ul>
    `
  }

  popupBtnsArray.forEach((btn, i) => {
    btn.addEventListener('click', clicked)
  })
}
topper()



