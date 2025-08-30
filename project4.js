// Project 4 JS

const container = document.getElementById('galaxy-container');

// Galaxy data
const galaxies = [
  { name: 'Milky Way', x: 200, y: 100, info: 'Our home galaxy with billions of stars.' },
  { name: 'Andromeda', x: 500, y: 300, info: 'Nearest spiral galaxy to Milky Way.' },
  { name: 'Triangulum', x: 800, y: 150, info: 'Small spiral galaxy in Local Group.' }
];

// Create galaxies
galaxies.forEach(g => {
  const div = document.createElement('div');
  div.classList.add('galaxy');
  div.style.left = g.x + 'px';
  div.style.top = g.y + 'px';
  div.textContent = g.name;

  div.addEventListener('click', () => {
    alert(`${g.name}: ${g.info}`);
  });

  container.appendChild(div);
});

// Add floating black holes
for (let i = 0; i < 5; i++) {
  const bh = document.createElement('div');
  bh.classList.add('blackhole');
  bh.style.left = Math.random() * window.innerWidth + 'px';
  bh.style.top = Math.random() * window.innerHeight + 'px';
  container.appendChild(bh);
}

// Add floating metroids
for (let i = 0; i < 7; i++) {
  const m = document.createElement('div');
  m.classList.add('metroid');
  m.style.left = Math.random() * window.innerWidth + 'px';
  m.style.top = Math.random() * window.innerHeight + 'px';
  container.appendChild(m);
}

// Add moving rocket every 10 seconds
function launchRocket() {
  const rocket = document.createElement('div');
  rocket.classList.add('rocket');
  rocket.style.left = '-60px';
  rocket.style.top = Math.random() * (window.innerHeight - 60) + 'px';
  container.appendChild(rocket);

  let pos = -60;
  const interval = setInterval(() => {
    if(pos > window.innerWidth){
      rocket.remove();
      clearInterval(interval);
    } else {
      pos += 5;
      rocket.style.left = pos + 'px';
    }
  }, 20);
}

// Launch rocket every 10 seconds
setInterval(launchRocket, 10000);
launchRocket(); // Launch one immediately
