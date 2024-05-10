console.log("RandomStars.js is loaded");

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function createStars(numStars) {
  const body = document.body;

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

// Call createStars function with desired number of stars
createStars(200); // Generate 200 stars
