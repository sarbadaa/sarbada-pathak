const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close');

cards.forEach(card => {
  card.addEventListener('click', () => {
    // Flip the card
    card.classList.toggle('flipped');

    // Show modal with more info
    modalTitle.textContent = card.dataset.skill;
    modalText.textContent = card.querySelector('.back').textContent;
    modal.style.display = 'flex';
  });
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal if clicked outside
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
