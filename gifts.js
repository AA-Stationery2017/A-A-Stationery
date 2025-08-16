const giftsItems = [
    { name: "Gift Mug", image: "gift-mug.jpg", price: "150" },
    { name: "Greeting Card", image: "greeting-card.jpg", price: "30" },
    { name: "Photo Frame", image: "photo-frame.jpg", price: "120" },
    { name: "Keychain", image: "keychain.jpg", price: "40" }
];

const giftsList = document.getElementById('giftsList');
giftsItems.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>&#8377;${item.price}</p>
        <div class="quantity-select">
            <label>Qty:</label>
            <input type="number" min="1" value="1" name="gift-qty-${idx}">
        </div>
        <button class="add-to-cart" data-idx="${idx}">Add to Cart</button>
    `;
    giftsList.appendChild(card);
});
giftsList.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart')) {
        const idx = e.target.getAttribute('data-idx');
        const qty = parseInt(document.getElementById(`gift-qty-${idx}`).value, 10);
        const item = giftsItems[idx];
        addToCart({
            name: item.name,
            image: item.image,
            price: Number(item.price),
            quantity: quantity 
        });
        alert(`${item.name} added to cart!`);
    }
});
