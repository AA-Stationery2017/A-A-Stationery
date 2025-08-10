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
    `;
    printList.appendChild(card);
});