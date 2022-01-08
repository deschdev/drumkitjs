function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if (!audio) return; // will stop the function from running
        audio.currentTime = 0; // restarts to the beginning for multiple quick sound successions
        audio.play();
        key.classList.add('playing');
}

function removeTransition(e) {
    if ( e.propertyName !== 'transform') return; // skip it if it is not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);