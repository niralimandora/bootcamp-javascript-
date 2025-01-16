let products = JSON.parse(localStorage.getItem('products')) || [];

// Load products on page load
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
});

// Add product
document.querySelector('#productForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const price = parseFloat(document.querySelector('#price').value);
    const image = document.querySelector('#image').value.trim();
    const category = document.querySelector('#category').value.trim();

    if (!title || isNaN(price) || !image || !category) {
        alert('All fields are required.');
        return;
    }

    const product = { id: Date.now(), title, price, image, category };
    products.push(product);
    saveToLocalStorage();
    displayProducts(products);
    e.target.reset();
});

// Display products
function displayProducts(productsArray) {
    const productList = document.querySelector('#productList');
    productList.innerHTML = '';

    productsArray.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';

        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="details">
                <h3>${product.title}</h3>
                <p>Price: $${product.price.toFixed(2)}</p>
                <p>Category: ${product.category}</p>
            </div>
            <div class="actions">
                <button class="edit" onclick="editProduct(${product.id})">Edit</button>
                <button class="delete" onclick="deleteProduct(${product.id})">Delete</button>
            </div>
        `;
        productList.appendChild(productItem);
    });
}

// Save to local storage
function saveToLocalStorage() {
    localStorage.setItem('products', JSON.stringify(products));
}

// Edit product
function editProduct(id) {
    const product = products.find(p => p.id === id);

    if (!product) return;

    document.querySelector('#title').value = product.title;
    document.querySelector('#price').value = product.price;
    document.querySelector('#image').value = product.image;
    document.querySelector('#category').value = product.category;

    products = products.filter(p => p.id !== id);
    saveToLocalStorage();
    displayProducts(products);
}

// Delete product
function deleteProduct(id) {
    products = products.filter(product => product.id !== id);
    saveToLocalStorage();
    displayProducts(products);
}

// Sorting
document.querySelector('#sort').addEventListener('change', (e) => {
    const value = e.target.value;
    if (value === 'low-to-high') {
        products.sort((a, b) => a.price - b.price);
    } else if (value === 'high-to-low') {
        products.sort((a, b) => b.price - a.price);
    }
    displayProducts(products);
});

// Searching
document.querySelector('#search').addEventListener('input', (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchValue)
    );
    displayProducts(filteredProducts);
});
