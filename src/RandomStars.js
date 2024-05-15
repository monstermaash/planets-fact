console.log("RandomStars.js is loaded");

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function createStars(numStars) {
  const body = document.body;
  const existingStars = document.querySelectorAll('.star');
  existingStars.forEach(star => star.remove());

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    const starSize = ['star--large', 'star--medium', 'star--small'][Math.floor(Math.random() * 3)];
    star.classList.add(starSize);

    const x = getRandomNumber(0, window.innerWidth);
    const y = getRandomNumber(0, window.innerHeight);
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    body.appendChild(star);
  }
}

function handleResize() {
  const numStars = window.innerWidth < 900 ? 100 : 200;
  createStars(numStars);
}

handleResize();

window.addEventListener('resize', handleResize);
