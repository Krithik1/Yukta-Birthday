// JavaScript to reveal a secret message
document.getElementById('revealMessage').addEventListener('click', function() {
    const messageElement = document.getElementById('secretMessage');
    messageElement.innerHTML = `<p>
    You are the love of my life, and I feel so incredibly fortunate to have you by my side.<br>
    I can’t imagine a day without hearing your voice or sharing my thoughts with you.<br>
    On this special birthday, and for every one that follows, my wish is for us to grow old together, cherishing every moment.<br>
    - To my dearest buddhi.
</p>`;
});

// JavaScript to reveal the massage coupon with animation and show party effect
document.getElementById('showCoupon').addEventListener('click', function() {
    const couponElement = document.getElementById('couponMessage');
    couponElement.style.display = "block"; // Ensure it's visible
    couponElement.classList.add('show'); // Add class to trigger the animation

    // Trigger party effect
    showPartyEffect();
});

function showPartyEffect() {
    const partyEffect = document.getElementById('partyEffect');
    partyEffect.style.display = "block";

    const numberOfConfetti = 100;
    for (let i = 0; i < numberOfConfetti; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        confetti.style.background = getRandomColor(); // Random color
        confetti.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random animation duration
        partyEffect.appendChild(confetti);

        // Remove confetti after animation
        setTimeout(() => confetti.remove(), 3000); // Remove after a few seconds
    }
}

function getRandomColor() {
    const colors = ['#f39c12', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// JavaScript for Image Carousel
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

document.getElementById('next').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
});

document.getElementById('prev').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
});

function updateCarousel() {
    const carouselWidth = document.querySelector('.carousel').clientWidth;
    const offset = -carouselWidth * currentIndex;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}px)`;
}