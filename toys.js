const toysItems = [
    { name: "Rubik's Cube",
     image: "rubiks-cube.jpg",
     price: "80"
    },
    { name: "Toy Car",
     image: "toy-car.jpg",
     price: "100"
    },
    { name: "Action Figure",
     image: "action-figure.jpg",
     price: "250"
    },
    { name: "Puzzle Game",
     image: "puzzle-game.jpg",
     price: "90" 
    }
];

const toysList = document.getElementById('toysList');
toysItems.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>&#8377;${item.price}</p>
        <div class="quantity-select">
            <label>Qty:</label>
            <input type="number" min="1" value="1" name="toy-qty-${idx}">
        </div>
    `;
    toysList.appendChild(card);
});
