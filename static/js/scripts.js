
// Array of custom MP4 sounds
const sounds = [
    'sound1.mp4',
    'sound2.mp4',
    'sound3.mp4',
    // Add more sounds here
];

// Function to play sound
function playSound(index) {
    const audio = new Audio(sounds[index]);
    audio.play();
}

// Function to create animation
function createAnimation() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    document.getElementById('animation-container').appendChild(circle);

    // Remove circle after animation ends
    setTimeout(() => {
        circle.remove();
    }, 600);  // Match with CSS animation duration
}

// Add event listener for keypresses
window.addEventListener('keydown', (e) => {
    const keyIndex = e.keyCode % sounds.length;
    playSound(keyIndex);  // Play sound corresponding to the key pressed
    createAnimation();    // Trigger animation
});
