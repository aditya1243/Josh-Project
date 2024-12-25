// Food items data
const foodItems = [
    { name: 'Home made pizza', price: '₹299', image: "assets/img1.png"},
    { name: 'Home made pizza', price: '₹249', image: 'assets/img2.png' },
    { name: 'Home made pizza', price: '₹199', image: 'assets/img3.png' },
    { name: 'Home made pizza', price: '₹349', image: 'assets/img4.png' },
    { name: 'Home made pizza', price: '₹299', image: "assets/img5.png"},
    { name: 'Home made pizza', price: '₹249', image: 'assets/img6.png' },
    { name: 'Home made pizza', price: '₹199', image: 'assets/img7.png' },
    { name: 'Home made pizza', price: '₹349', image: 'assets/img8.png' },
    { name: 'Home made pizza', price: '₹299', image: "assets/img9.png"},
    { name: 'Home made pizza', price: '₹249', image: 'assets/img10.png' },
    { name: 'Home made pizza', price: '₹199', image: 'assets/img1.png' },
    { name: 'Home made pizza', price: '₹349', image: 'assets/img2.png' },
];

// Populate food grid
const foodGrid = document.querySelector('.food-grid');
foodItems.forEach(item => {
    const foodItem = document.createElement('div');
    foodItem.className = 'food-item';
    foodItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="food-item-info">
            <h3>${item.name}</h3>
            <p class="price">${item.price}</p>
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
    window.location.href = '/index.html'; // Change '/' to the appropriate path if necessary
}

const carouselTrack = document.querySelector('.carousel-track');
console.log(carouselTrack+" "+"present");
foodItems.forEach(item => {
    const carouselItem = document.createElement('div');
    carouselItem.className = 'carousel-item';
    carouselItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="carousel-image">
        <div class="carousel-item-info">
            <h3>${item.name}</h3>
            <p class="price">${item.price}</p>
        </div>
    `;
    carouselTrack.appendChild(carouselItem);
});

// Carousel functionality
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');
let currentIndex = 0;

function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Ensure circular movement
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    // Translate carousel track to show the current item
    const offset = -currentIndex * 100; // Assuming each item is 100% of the container width
    carouselTrack.style.transform = `translateX(${offset}%)`;

    // Optional: Add active class to the current item (if needed)
    items.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
    });
}

// Add event listeners for buttons
prevButton.addEventListener('click', () => {
    currentIndex--;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex++;
    updateCarousel();
});

// Initialize the carousel
updateCarousel();