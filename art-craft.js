const artCraftItems = [
    { name: "Crayons",
     image: "crayons.jpg",
     price: "30"
    },
    
    { name: "Color Pencils", 
     image: "color-pencils.jpg", 
     price: "40"
    },
    { name: "Watercolors", 
     image: "watercolors.jpg",
     price: "60"
    },
    { name: "Craft Paper", 
     image: "craft-paper.jpg", 
     price: "20"
    },
    { name: "Glue Stick",
     image: "glue-stick.jpg",
     price: "15"
    }
    
];

const artCraftList = document.getElementById('artCraftList');
artCraftItems.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>&#8377;${item.price}</p>
        <div class="quantity-select">
            <label>Qty:</label>
            <input type="number" min="1" value="1" name="art-craft-qty-${idx}">
        </div>
         <button class="add-to-cart" data-idx="${idx}">Add to Cart</button>
    `;
    artCraftList.appendChild(card);
});
artCraftList.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart')) {
        const idx = e.target.getAttribute('data-idx');
        const qty = parseInt(document.getElementById(`art-craft-qty-${idx}`).value, 10);
        const item = artCraftItems[idx];
        addToCart({
            name: item.name,
            image: item.image,
            price: Number(item.price),
            qty: qty
        });
        alert(`${item.name} added to cart!`);
    }
});
