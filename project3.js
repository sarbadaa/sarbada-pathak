const planets = document.querySelectorAll('.planet');
const facts = {
  mercury: "Mercury is the closest planet to the Sun.",
  venus: "Venus has a thick, toxic atmosphere.",
  earth: "Earth is the only planet known to support life.",
  mars: "Mars is known as the Red Planet."
};

planets.forEach(p => {
  let angle = Math.random() * 360;
  const radius = parseFloat(getComputedStyle(p).getPropertyValue('--radius'));
  const speed = parseFloat(getComputedStyle(p).getPropertyValue('--speed'));

  // Orbit animation
  setInterval(() => {
    angle += speed * 360 / 60; // rotate around
    const x = 50 + radius * Math.cos(angle) / window.innerWidth * 2;
    const y = 50 + radius * Math.sin(angle) / window.innerHeight * 2;
    p.style.transform = `translate(${x}vw, ${y}vh)`;
  }, 20);

  // Click for fact
  p.addEventListener('click', () => {
    alert(facts[p.id]);
  });
});
