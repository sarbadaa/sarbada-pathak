// Select all planet elements
const planets = document.querySelectorAll('.planet');

// Facts for each planet
const facts = {
  mercury: "Mercury is the closest planet to the Sun.",
  venus: "Venus has a thick, toxic atmosphere.",
  earth: "Earth is the only planet known to support life.",
  mars: "Mars is known as the Red Planet."
};

// For each planet, set up orbit and click behavior
planets.forEach(p => {
  let angle = Math.random() * 2 * Math.PI; // random starting angle in radians
  const radius = parseFloat(getComputedStyle(p).getPropertyValue('--radius')); // distance from Sun
  const speed = parseFloat(getComputedStyle(p).getPropertyValue('--speed'));    // orbit speed

  // Orbit animation
  setInterval(() => {
    angle += speed; // increment angle
    const x = radius * Math.cos(angle); // x position
    const y = radius * Math.sin(angle); // y position
    // Apply transform: center planet and move to (x, y)
    p.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
  }, 20);

  // Show fact on click
  p.addEventListener('click', () => {
    alert(facts[p.id]);
  });
});
