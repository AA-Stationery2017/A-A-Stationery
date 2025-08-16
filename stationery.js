const stationeryItems = [
    { name: "Notebook", image: "notebook.jpg", price: "50" },
    { name: "Ball Pen", image: "pen.jpg", price: "10" },
    { name: "Highlighter", image: "highlighter.jpg", price: "20" },
    { name: "Stapler", image: "stapler.jpg", price: "60" },
    { name: "Sticky Notes", image: "sticky-notes.jpg", price: "25" },
    { name: "Pencil Box", image: "pencil-box.jpg", price: "80" }
];

const stationeryList = document.getElementById('stationeryList');
stationeryItems.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>&#8377;${item.price}</p>
        <div class="quantity-select">
            <label>Qty:</label>
            <input type="number" min="1" value="1" name="stationery-qty-${idx}">
        </div>
        <button class="add-to-cart" data-idx="${idx}">Add to Cart</button>
    `;
    stationeryList.appendChild(card);
});
stationeryList.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart')) {
        const idx = e.target.getAttribute('data-idx');
        const qty = parseInt(document.getElementById(`stationery-qty-${idx}`).value, 10);
        const item = stationeryItems[idx];
        addToCart({
            name: item.name,
            image: item.image,
            price: Number(item.price),
            quantity: quantity 
        });
        alert(`${item.name} added to cart!`);
    }
});
