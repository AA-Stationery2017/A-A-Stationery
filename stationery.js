const stationeryItems = [
    { name: "Notebook",
     image: "notebook.jpg", 
     price: "50"
    },
    { name: "Ball Pen",
     image: "pen.jpg",
     price: "10" 
    },
    { name: "Highlighter", 
     image: "highlighter.jpg", 
     price: "20"
    },
    { name: "Stapler", 
     image: "stapler.jpg", 
     price: "60"
    },
    { name: "Sticky Notes", 
     image: "sticky-notes.jpg",
     price: "25"
    }
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
    `;
    stationeryList.appendChild(card);
});
