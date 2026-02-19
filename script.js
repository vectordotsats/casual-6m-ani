const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const mainSection = document.getElementById('mainSection');
const successSection = document.getElementById('successSection');

let yesScale = 1;
const messages = [
    "Are you sure?",
    "Think again! 🥺",
    "Really really sure??",
    "Don't do this to me!",
    "I'm gonna bite you!",
    "I'm not kidding, i will bite you!",
    "Look at the big button!",
    "Click the blue one!",
    "Common nah, click YES!"
];
let messageIndex = 0;

// Function to create floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    
    // Randomize heart type and position
    const hearts = ['💙', '✨','🤍', '💝'];
    heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Spawn some hearts automatically every second
setInterval(createHeart, 1000);

noBtn.addEventListener('click', () => {
    // Make YES button grow
    yesScale += 0.5;
    yesBtn.style.transform = `scale(${yesScale})`;
    
    // Update NO button text
    noBtn.innerText = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Move the NO button slightly so it's harder to spam click
    const x = Math.random() * 10 - 5;
    const y = Math.random() * 10 - 5;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener('click', () => {
    mainSection.style.display = 'none';
    successSection.style.display = 'block';
    
    // Shower of hearts when she says YES
    for(let i=0; i<30; i++) {
        setTimeout(createHeart, i * 100);
    }
});