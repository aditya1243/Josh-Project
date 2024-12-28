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

    const items = [
        { name: 'Home made pizza', price: '₹190', rating: 4.7, time: '50-79 min', image: 'assets/pizza.jpg' },
        { name: 'Tandoori Chicken', price: '₹184', rating: 4.3, time: '15-29 min', image: 'assets/tandoori.jpg' },
        { name: 'Chilli Chicken', price: '₹116', rating: 4.1, time: '30-40 min', image: 'assets/chilli.jpg' },
        { name: 'Butter Chicken', price: '₹220', rating: 4.5, time: '25-35 min', image: 'assets/butter.jpg' },
        { name: 'Paneer Tikka', price: '₹180', rating: 4.2, time: '20-30 min', image: 'assets/paneer.jpg' }
    ];

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
}

let currentIndex = 0;
const itemWidth = 33.33; 

function updateCarousel() {
    const track = document.querySelector('.popular-carousel-track');
    track.style.transform = `translateX(-${currentIndex * itemWidth}%)`;
}

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

// Initialize carousel
renderCarouselItems();
updateCarousel();
