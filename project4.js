const planets = document.querySelectorAll('.planet');

planets.forEach(planet => {
  planet.addEventListener('click', () => {
    // Remove existing info boxes
    document.querySelectorAll('.planet-info').forEach(info => info.remove());

    // Create info box
    const infoBox = document.createElement('div');
    infoBox.className = 'planet-info';
    infoBox.textContent = planet.dataset.fact;

    planet.parentElement.appendChild(infoBox);

    // Position info box below planet
    infoBox.style.left = `${planet.offsetLeft + planet.offsetWidth / 2 - infoBox.offsetWidth / 2}px`;
    infoBox.style.top = `${planet.offsetTop + planet.offsetHeight + 5}px`;

    // Fade in
    requestAnimationFrame(() => {
      infoBox.style.opacity = 1;
    });
  });
});
