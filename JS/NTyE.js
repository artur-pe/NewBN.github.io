// Emojis de festejo que aparecerán
const emojis = ['🎉', '🎊', '🎈', '🥳', '🎂'];

// Función para generar emojis
function launchEmojis() {
  for (let i = 0; i < 30; i++) {
    // Crear un elemento de emoji
    const emojiElement = document.createElement('div');
    emojiElement.classList.add('emoji');
    
    // Colocar el emoji de forma aleatoria
    emojiElement.style.top = `${Math.random() * 100}vh`;
    emojiElement.style.left = `${Math.random() * 100}vw`;
    emojiElement.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    document.body.appendChild(emojiElement);

    // Remover el emoji del DOM después de la animación
    setTimeout(() => {
      emojiElement.remove();
    }, 300000); // 3 segundos, el tiempo que dura la animación
  }
}

// Lanzar los emojis al cargar la página
window.onload = function() {
  launchEmojis();
};