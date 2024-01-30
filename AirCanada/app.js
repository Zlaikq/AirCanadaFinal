// Local reviews data
const reviews = [
  {
    id: 1,
    name: 'Harry Thompson',
    job: 'Flight Attendant',
    img: 'https://t3.ftcdn.net/jpg/03/78/07/62/360_F_378076274_zse4g2mURQBLHjE6V9z5XiJIFAjQIl47.jpg',
    text: "In my time here, I've had the opportunity to work with a diverse and dedicated team. Air Canada places a strong emphasis on safety, and I feel confident knowing that we undergo rigorous training to handle any situation that may arise during a flight.",
  },
  {
    id: 2,
    name: 'Captain James Mitchell',
    job: 'Senior Captain',
    img: 'https://previews.123rf.com/images/tunedin123/tunedin1231407/tunedin123140702885/29825156-close-up-of-senior-flight-captain-on-white-background.jpg',
    text: 'Air Canada has been a significant part of my journey as a pilot. The airline\'s commitment to safety, professionalism, and continuous improvement has shaped my career in ways I could not have imagined when I first joined.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    job: 'Air Traffic Controller',
    img: 'https://samchui.com/wp-content/uploads/2020/09/Lauren-scaled.jpeg',
    text: 'Working as an air traffic controller at Air Canada is both challenging and rewarding. Every day, we manage the complex ballet of aircraft movements to ensure safe take-offs, landings, and transitions through our airspace.',
  },
  {
    id: 4,
    name: 'Alex Bennett',
    job: 'Aviation Mechanic',
    img: 'https://calaero.edu/wp-content/uploads/2022/09/what-does-take-become-aircraft-maintenance-technician.jpg',
    text: 'Being an aviation mechanic at Air Canada is both a challenge and a source of immense pride. Our team plays a critical role in ensuring that each aircraft is in optimal condition for every flight. The sense of responsibility is always present, knowing that the safety of passengers and crew depends on the work we do.',
  },
];
// Select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
const changeColorBtn = document.querySelector('.change-color-btn');

// Set starting item
let currentItem = 0;

// Load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// Show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// Show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// Show previous person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

// Show random person
randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

// Change background color on button click
changeColorBtn.addEventListener('click', function () {
  const blackShades = ['#000000', '#111111', '#222222', '#333333'];
  const redShades = ['#ff0000', '#cc0000', '#990000', '#660000'];

  const colors = Math.random() < 0.5 ? blackShades : redShades;
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

// Counter elements
const counterDisplay = document.getElementById('counter');
const likeBtn = document.querySelector('.like-btn');
const dislikeBtn = document.querySelector('.dislike-btn');
const resetBtn = document.querySelector('.reset-btn');

// Initial counter value
let counter = 0;

// Display initial counter value
counterDisplay.textContent = counter;

// Like button event listener
likeBtn.addEventListener('click', function () {
  counter += 2;
  updateCounter();
});

// Dislike button event listener
dislikeBtn.addEventListener('click', function () {
  counter -= 1;
  updateCounter();
});

// Reset button event listener
resetBtn.addEventListener('click', function () {
  counter = 0;
  updateCounter();
});

// Update counter and apply color based on its value
function updateCounter() {
  counterDisplay.textContent = counter;

  if (counter !== 0) {
    counterDisplay.style.backgroundColor = 'transparent';
  }

  if (counter > 0) {
    counterDisplay.style.color = 'white';
  } else if (counter < 0) {
    counterDisplay.style.color = 'red';
  } else {
    counterDisplay.style.color = 'black';
  }
}

// Event listener to prevent white background on hover
counterDisplay.addEventListener('mouseover', function () {
  if (counter !== 0) {
    counterDisplay.style.backgroundColor = 'transparent';
  }
});

// Event listener to revert background on mouseout
counterDisplay.addEventListener('mouseout', function () {
  counterDisplay.style.backgroundColor = 'transparent';
});

// Add this event listener to toggle the visibility of buttons when clicking the airplane icon
const toggleBtnContainer = document.querySelector('.toggle-btn-container');
const buttonsToToggle = document.querySelectorAll('.counter-btn, .random-btn, .change-color-btn');

toggleBtnContainer.addEventListener('click', function () {
  document.body.classList.toggle('hide-buttons');
  buttonsToToggle.forEach((btn) => btn.classList.toggle('hidden'));
});