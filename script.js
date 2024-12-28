// Food items data
const foodItems = [
    { name: 'Home made pizza', price: '₹299', image: "assets/img1.png", time:"50-75 min", rating: 4.7},
    { name: 'Home made pizza', price: '₹249', image: 'assets/img2.png', time:"45-60 min", rating: 4.2},
    { name: 'Home made pizza', price: '₹199', image: 'assets/img3.png', time:"60-70 min", rating: 4.3},
    { name: 'Home made pizza', price: '₹349', image: 'assets/img4.png', time:"45-60 min", rating: 4.5},
    { name: 'Home made pizza', price: '₹299', image: "assets/img5.png", time:"60-70 min", rating: 4.7},
    { name: 'Home made pizza', price: '₹249', image: 'assets/img6.png', time:"50-75 min", rating: 4.5},
    { name: 'Home made pizza', price: '₹199', image: 'assets/img7.png', time:"45-60 min", rating: 4.6},
    { name: 'Home made pizza', price: '₹349', image: 'assets/img8.png', time:"60-70 min", rating: 4.1},
    { name: 'Home made pizza', price: '₹299', image: "assets/img9.png", time:"50-75 min", rating: 4.2},
    { name: 'Home made pizza', price: '₹249', image: 'assets/img10.png', time:"45-60 min", rating: 4.7},
    { name: 'Home made pizza', price: '₹199', image: 'assets/img1.png' , time:"60-70 min", rating: 4.7},
    { name: 'Home made pizza', price: '₹349', image: 'assets/img2.png' , time:"50-75 min", rating: 4.2},
];

// Populate food grid
const foodGrid = document.querySelector('.food-grid');
foodItems.forEach((item, index) => {
    const foodItem = document.createElement('div');
    foodItem.className = 'food-item';
    const showDiscountBadge = Math.random() < 0.5;
    foodItem.innerHTML = `
    ${showDiscountBadge ? `<div class="item-discount-badge">25%</div>` : ''}
        <img src="${item.image}" alt="${item.name}">
        
        <div class="food-item-info">
            <h3>${item.name}</h3>
            <p class="price">${item.price}</p>
        </div>
        <div class="food-meta">
            <div class="rating">
            
                <span style="font-size:175%; margin-bottom:5px; color:black">★</span>
                <h3>${item.rating}</h3>
            </div>
            <div class="delivery-time">
                <h3>(${item.time})</h3>
            </div>
            <div class="add-to-cart">
                <button>
                    <img src="assets/plus.jpg" alt="Add to Cart" class="icon">
                </button>
            </div>
        </div>
    `;
    foodGrid.appendChild(foodItem);
});

// Modal and carousel functionality remains unchanged
const cartModal = document.getElementById('cartModal');
const requestDishModal = document.getElementById('requestDishModal');
const cartIcon = document.getElementById('cartIcon');
const requestDishBtn = document.querySelector('.request-dish-btn');
const modalCloseButtons = document.querySelectorAll('.modal-close');

function openModal(modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

cartIcon.addEventListener('click', () => openModal(cartModal));
requestDishBtn.addEventListener('click', () => openModal(requestDishModal));



modalCloseButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target);
    }
});

const requestForm = document.getElementById('requestForm');
requestForm.addEventListener('submit', (e) => {
    e.preventDefault();
    closeModal(requestDishModal);
});

// Function to redirect to the home page
function redirectToHome() {
    window.location.href = '/index.html'; 
}

function renderCarouselItems() {
    const track = document.querySelector('.popular-carousel-track');
    track.innerHTML = '';

    foodItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'popular-carousel-item';
        itemElement.innerHTML = `
            <div class="item-discount-badge">${index % 2 === 0 ? '20%' : '50%'}</div>
            <img src="${item.image}" alt="${item.name}">
            <div class="food-item-info">
                <h3>${item.name}</h3>
                <p class="price">${item.price}</p>
            </div>
            <div class="food-meta">
                <div class="rating">
                    <img src="assets/rating.png" alt="Rating" class="icon">
                </div>
                <div class="delivery-time">
                    <h3>(${item.time})</h3>
                </div>
                <div class="add-to-cart">
                    <button>
                        <img src="assets/plus.jpg" alt="Add to Cart" class="icon">
                    </button>
                </div>
            </div>
        `;
        track.appendChild(itemElement);
    });

    // Highlight the middle card initially
    updateActiveCard();
}

let currentIndex = 0;
const itemWidth = 33.33; 

function updateActiveCard() {
    const items = document.querySelectorAll('.popular-carousel-item');
    items.forEach(item => item.classList.remove('active'));

    // Calculate the middle card index
    const middleIndex = currentIndex + 1; 
    if (items[middleIndex]) {
        items[middleIndex].classList.add('active');
    }
}

function updateCarousel() {
    const track = document.querySelector('.popular-carousel-track');
    const items = document.querySelectorAll('.popular-carousel-item');
    
    // Remove active class from all items
    items.forEach((item) => item.classList.remove('active'));
    
    // Calculate the middle card and add the active class
    const middleIndex = currentIndex + 1; 
    if (items[middleIndex]) {
        items[middleIndex].classList.add('active');
    }

    // Update the transform for the track
    track.style.transform = `translateX(-${currentIndex * itemWidth}%)`;
}

// Initialize the carousel
renderCarouselItems();
updateCarousel();

// Add event listeners for navigation buttons
document.querySelector('.popular-carousel-btn.next').addEventListener('click', () => {
    const totalItems = document.querySelectorAll('.popular-carousel-item').length;
    if (currentIndex < totalItems - 3) {
        currentIndex++;
        updateCarousel();
    }
});

document.querySelector('.popular-carousel-btn.prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});


const video = document.getElementById('promo-video');
const playPauseBtn = document.getElementById('playPauseBtn');

// Toggle play/pause on video click
video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.classList.remove('show'); 
    } else {
        video.pause();
        playPauseBtn.classList.add('show'); 
    }
});

// Play/pause video on play button click
playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.classList.remove('show'); 
    } else {
        video.pause();
        playPauseBtn.classList.add('show');
    }
});

// Show play button when video is paused
video.addEventListener('pause', () => {
    playPauseBtn.classList.add('show');
});

// Hide play button when video is playing
video.addEventListener('play', () => {
    playPauseBtn.classList.remove('show');
});
