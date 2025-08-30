document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalText = document.getElementById('modal-text');
  const closeBtn = document.querySelector('.close');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Stop color animation while modal is open
      card.classList.add('flipped');
      card.querySelector('.front').style.animation = 'none';

      modalTitle.textContent = card.dataset.skill;
      modalText.textContent = card.querySelector('.back').textContent;
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    // Resume color animation
    cards.forEach(card => {
      card.classList.remove('flipped');
      card.querySelector('.front').style.animation = 'cardColorChange 4s infinite';
    });
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      cards.forEach(card => {
        card.classList.remove('flipped');
        card.querySelector('.front').style.animation = 'cardColorChange 4s infinite';
      });
    }
  });
});
