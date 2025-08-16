const printItems = [
    { name: "Color Print (A4)", image: "color-print.jpg", price: "15" },
    { name: "Black & White Print (A4)", image: "bw-print.jpg", price: "5" },
    { name: "Lamination", image: "lamination.jpg", price: "20" },
    { name: "Photo Print", image: "photo-print.jpg", price: "25" }
];

const printList = document.getElementById('printList');
printItems.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>&#8377;${item.price}</p>
        <div class="quantity-select">
            <label>Qty:</label>
            <input type="number" min="1" value="1" name="print-qty-${idx}">
        </div>
        <button class="add-to-cart" data-idx="${idx}">Add to Cart</button>
    `;
    printList.appendChild(card);
});
printList.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart')) {
        const idx = e.target.getAttribute('data-idx');
        const qty = parseInt(document.getElementById(`print-qty-${idx}`).value, 10);
        const item = printItems[idx];
        addToCart({
            name: item.name,
            image: item.image,
            price: Number(item.price),
            qty: qty
        });
        alert(`${item.name} added to cart!`);
    }
});
