// Sample products (customize this array as needed)
const products = [
    { id: 1, name: 'Pastel Dress', price: 29.99, category: 'clothing', image: 'https://via.placeholder.com/250x150/f8c8dc/6b5b95?text=Dress' },
    { id: 2, name: 'Lavender Scarf', price: 15.99, category: 'accessories', image: 'https://via.placeholder.com/250x150/e6e6fa/6b5b95?text=Scarf' },
    { id: 3, name: 'Cream Throw Pillow', price: 19.99, category: 'home', image: 'https://via.placeholder.com/250x150/fefefe/6b5b95?text=Pillow' },
    { id: 4, name: 'Purple Handbag', price: 49.99, category: 'accessories', image: 'https://via.placeholder.com/250x150/dda0dd/6b5b95?text=Handbag' },
    { id: 5, name: 'Soft Blue Sweater', price: 39.99, category: 'clothing', image: 'https://via.placeholder.com/250x150/add8e6/6b5b95?text=Sweater' },
    { id: 6, name: 'Pastel Candle Set', price: 24.99, category: 'home', image: 'https://via.placeholder.com/250x150/f8c8dc/6b5b95?text=Candles' }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Load products
function loadProducts(category = 'all') {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';
    const filtered = category === 'all' ? products : products.filter(p => p.category === category);
    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        grid.appendChild(card);
    });
}

// Add to cart
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
}

// Update cart display
function updateCart() {
    document.getElementById('cart-count').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        cartItems.innerHTML += `<p>${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}</p>`;
    });
    document.getElementById('cart-total').textContent = total.toFixed(2);
}

// Modal handling
document.getElementById('cart-link').addEventListener('click', () => {
    updateCart();
    document.getElementById('cart-modal').style.display = 'block';
});

document.querySelectorAll('.close').forEach(close => {
    close.addEventListener('click', () => {
        document.querySelectorAll('.modal').forEach(modal => modal.style.display = 'none');
    });
});

document.getElementById('checkout-btn').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'none';
    document.getElementById('checkout-modal').style.display = 'block';
});

document.getElementById('checkout-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Order placed successfully! (This is a demo - no real payment processed.)');
    cart = [];
    localStorage.removeItem('cart');
    updateCart();
    document.getElementById('checkout-modal').style.display = 'none';
});

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        loadProducts(btn.dataset.category);
    });
});

// Scroll to products
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Initialize
loadProducts();
updateCart();