// donateItems.js

// Function to create an element with class and inner text
function createElement(type, className, innerText) {
    const elem = document.createElement(type);
    if (className) elem.className = className;
    if (innerText) elem.innerText = innerText;
    return elem;
}

// Main function to render the donation UI
function renderDonationUI() {
    // Main container
    const container = createElement('div', 'container');

    // App Bar - Header
    const appBar = createElement('div', 'app-bar');
    const appTitle = createElement('h1', 'app-title', 'App Logo');
    appBar.appendChild(appTitle);
    container.appendChild(appBar);

    // Search bar container
    const searchContainer = createElement('div', 'search-container');
    const searchInput = createElement('input');
    searchInput.type = 'search';
    searchInput.placeholder = 'Search';
    searchInput.className = 'search-input';
    searchContainer.appendChild(searchInput);
    container.appendChild(searchContainer);

    // Donated Items Title
    const donatedTitle = createElement('h2', 'donated-title', '~ DONATED ITEMS ~');
    container.appendChild(donatedTitle);

    // Items Section
    const itemsSection = createElement('div', 'items-section');

    // Kitchenware Item
    const kitchenware = createElement('div', 'item');
    const kitchenwareBox = createElement('div', 'item-box');
    kitchenwareBox.innerText = 'P/i'; // Placeholder icon text as in sketch
    const kitchenwareLabel = createElement('span', null, 'Kitchenware');
    kitchenware.appendChild(kitchenwareBox);
    kitchenware.appendChild(kitchenwareLabel);

    // T-shirt for men
    const tshirtMen = createElement('div', 'item');
    const tshirtMenBox = createElement('div', 'item-box');
    tshirtMenBox.innerText = 'T-shirt'; // placeholder icon text
    const tshirtMenLabel = createElement('span', null, 'T-Shirt for men');
    tshirtMen.appendChild(tshirtMenBox);
    tshirtMen.appendChild(tshirtMenLabel);

    // Kurti for women
    const kurtiWomen = createElement('div', 'item');
    const kurtiWomenBox = createElement('div', 'item-box');
    kurtiWomenBox.innerText = 'Kurt'; // placeholder icon text
    const kurtiWomenLabel = createElement('span', null, 'Kurti for women');
    kurtiWomen.appendChild(kurtiWomenBox);
    kurtiWomen.appendChild(kurtiWomenLabel);

    itemsSection.appendChild(kitchenware);
    itemsSection.appendChild(tshirtMen);
    itemsSection.appendChild(kurtiWomen);

    container.appendChild(itemsSection);

    // Categories for donation
    const categories = [
        'Modification from clothing',
        'Women fashion',
        'Makeup & Skincare',
        'Kids fashion',
        'Accessories'
    ];

    const categorySection = createElement('div', 'category-section');
    categories.forEach(cat => {
        const catDiv = createElement('div', 'category-item');
        const radioInput = createElement('input');
        radioInput.type = 'radio';
        radioInput.name = 'donation-category';
        radioInput.value = cat;
        const label = createElement('label', null, cat);

        catDiv.appendChild(radioInput);
        catDiv.appendChild(label);

        categorySection.appendChild(catDiv);
    });

    container.appendChild(categorySection);

    // Append the entire container to body or a specific element
    document.body.appendChild(container);
}

// Call the render function on window load
window.onload = () => {
    renderDonationUI();
};

// Optionally add minimal CSS styles here or in a CSS file for better presentation, e.g.,
// .container { padding: 10px; font-family: Arial, sans-serif; }
// .app-bar { background-color: #f0f0f0; padding: 10px; }
// .search-input { width: 100%; padding: 5px; margin: 10px 0; }
// .item { display: inline-block; margin: 10px; text-align: center; }
// .item-box { border: 1px solid #000; width: 80px; height: 80px; line-height: 80px; }
// .category-item { margin: 5px 0; }