const printItems = [
    { name: "Color Print (A4)",
     image: "color-print.jpg",
     price: "15"
    },
    { name: "Black & White Print (A4)", 
     image: "bw-print.jpg",
     price: "5"
    },
    { name: "Lamination",
     image: "lamination.jpg",
     price: "20" 
    },
    { name: "Photo Print",
     image: "photo-print.jpg",
     price: "25"
    }
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
            <button class="add-to-cart-btn" data-idx="${idx}">Add to Cart</button>
        </div>
    `;
    printList.appendChild(card);
});
// --- Cart Logic ---
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(item, qty = 1) {
    qty = parseInt(qty);
    if (!qty || qty < 1) qty = 1;
    const idx = cart.findIndex(c => c.name === item.name && c.image === item.image);
    if (idx > -1) {
        cart[idx].qty += qty;
    } else {
        cart.push({ ...item, qty });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
}

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart-btn')) {
        const idx = e.target.dataset.idx;
        const qtyInput = e.target.parentElement.querySelector('input[type="number"]');
        let qty = qtyInput.value;
        let item = printItems[idx];
        addToCart(item, qty);
        alert(`Added ${qty} x ${item.name} to cart!`);
    }
});

// --- Cart Modal Logic ---
const cartModal = document.getElementById('cartModal');
const openCartBtn = document.getElementById('openCartBtn');
const closeCartBtn = document.querySelector('.close-cart');
if (openCartBtn) openCartBtn.onclick = () => { cartModal.style.display = 'flex'; renderCart(); };
if (closeCartBtn) closeCartBtn.onclick = () => { cartModal.style.display = 'none'; };
window.onclick = (e) => { if (e.target == cartModal) cartModal.style.display = 'none'; };

function updateCartBadge() {
    if (openCartBtn) {
        let cartCount = cart.reduce((acc, item) => acc + item.qty, 0);
        openCartBtn.innerHTML = `&#128722; Cart (${cartCount})`;
    }
}
updateCartBadge();

function renderCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = cart.length === 0 ? '<p>Your cart is empty.</p>' : '';
    let total = 0;
    cart.forEach((item, idx) => {
        total += item.price * item.qty;
        cartItemsDiv.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" style="width:55px;vertical-align:middle;border-radius:8px;margin-right:6px;">
                <b>${item.name}</b> x ${item.qty} = &#8377;${item.price * item.qty}
                <button class="remove-cart-item" data-idx="${idx}" style="margin-left:10px;color:#C68EFD;background:none;border:none;cursor:pointer;">Remove</button>
            </div>
        `;
    });
    document.getElementById('cartTotal').textContent = `₹${total}`;
}

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('remove-cart-item')) {
        const idx = e.target.dataset.idx;
        cart.splice(idx, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        updateCartBadge();
    }
});

const checkoutBtn = document.querySelector('.checkout-btn');
if (checkoutBtn) {
    checkoutBtn.onclick = function() {
        alert('Proceeding to checkout. (Add your payment logic here)');
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        updateCartBadge();
    };
}
