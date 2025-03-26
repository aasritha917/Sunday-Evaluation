async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error("Failed to fetch products.");
        }
        const products = await response.json();

        console.log("Fetched Products:", products);

        const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
        console.log(`Total Price: $${totalPrice.toFixed(2)}`);

        displayProducts(products, totalPrice);

    } catch (error) {
        console.error("Error:", error);
        document.body.innerHTML = `<p style="color: red;">Failed to fetch products. Please try again later.</p>`;
    }
}

function displayProducts(products, totalPrice) {
    const container = document.createElement("div");
    container.innerHTML = `<h2>Product List</h2><p><strong>Total Price: $${totalPrice.toFixed(2)}</strong></p>`;
    
    products.forEach(product => {
        const item = document.createElement("div");
        item.innerHTML = `
            <img src="${product.image}" width="100" height="100">
            <p><strong>${product.title}</strong></p>
            <p>Price: $${product.price}</p>
            <button onclick="alert('Product: ${product.title}')">View Details</button>
            <hr>
        `;
        container.appendChild(item);
    });

    document.body.appendChild(container);
}

fetchProducts();
