// Project 3 JS - 3D Space Simulation using Three.js

// Create scene
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("space-container").appendChild(renderer.domElement);

// Add stars
function addStar() {
  const geometry = new THREE.SphereGeometry(0.1, 8, 8);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  star.position.x = Math.random() * 200 - 100;
  star.position.y = Math.random() * 200 - 100;
  star.position.z = Math.random() * 200 - 100;

  scene.add(star);
}

Array(500).fill().forEach(addStar);

// Add a rotating planet
const planetGeometry = new THREE.SphereGeometry(2, 32, 32);
const planetMaterial = new THREE.MeshStandardMaterial({ color: 0x00ffcc });
const planet = new THREE.Mesh(planetGeometry, planetMaterial);
planet.position.set(0, 0, -10);
scene.add(planet);

// Add light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Camera position
camera.position.z = 5;

// Animate
function animate() {
  requestAnimationFrame(animate);

  planet.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
