function openDoc(url) {
  window.location.href = url;
}
const flowerContainer = document.getElementById('flower-container');

function createFlower() {
  const flower = document.createElement('div');
  flower.classList.add('flower');

  // Random horizontal position
  flower.style.left = Math.random() * window.innerWidth + 'px';
  
  // Random size
  const size = 100 + Math.random() * 80; // new range: 100px–150px
   flower.style.width = size + 'px';
   flower.style.height = size + 'px';

  // Random animation duration
  flower.style.animationDuration = 5 + Math.random() * 5 + 's';

  flowerContainer.appendChild(flower);

  // Remove flower after it floats off-screen
  setTimeout(() => {
    flower.remove();
  }, (parseFloat(flower.style.animationDuration) * 1000));
}

// Generate flowers at intervals
setInterval(createFlower, 500);