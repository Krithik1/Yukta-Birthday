// JavaScript to reveal a secret message
document.getElementById('revealMessage').addEventListener('click', function() {
    const messageElement = document.getElementById('secretMessage');
    messageElement.textContent = "You are the love of my life, and I feel so lucky to have you!";
});

// JavaScript to reveal the massage coupon
document.getElementById('showCoupon').addEventListener('click', function() {
    const couponElement = document.getElementById('couponMessage');
    couponElement.style.display = "block";
});

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