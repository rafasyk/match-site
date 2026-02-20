const matchButton = document.getElementById('matchButton');
const matchScene = document.getElementById('matchScene');

matchButton.addEventListener('click', () => {
  matchScene.classList.remove('hidden');

  // toda vez q atuaiza reinicia a animação
  void matchScene.offsetWidth;

  matchScene.querySelectorAll('.profile, .match-label').forEach((element) => {
    element.style.animation = 'none';
    void element.offsetHeight;
    element.style.animation = '';
  });
});

function flipCard(cardElement) {
  cardElement.classList.toggle('flipped');
}