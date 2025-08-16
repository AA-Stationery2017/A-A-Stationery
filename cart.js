function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartList = document.getElementById('cartList');
    const cartTotal = document.getElementById('cartTotal');
    cartList.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartList.innerHTML = '<p>Your cart is empty.</p>';
        cartTotal.innerHTML = '';
        return;
    }

    cart.forEach((item, idx) => {
        const amount = item.qty * item.price;
        total += amount;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}" width="60" style="border-radius:10px">
            <span class="cart-name">${item.name}</span>
            <span>&#8377;${item.price} x </span>
            <input type="number" min="1" value="${item.qty}" data-idx="${idx}" class="cart-qty">
            <span>= &#8377;${amount}</span>
            <button class="remove-cart-item" data-idx="${idx}">Remove</button>
        `;
        cartList.appendChild(div);
    });

    cartTotal.innerHTML = `<strong>Total: &#8377;${total}</strong>`;
}

document.addEventListener('DOMContentLoaded', function() {
    renderCart();

    // Quantity change
    document.getElementById('cartList').addEventListener('change', function(e) {
        if (e.target.classList.contains('cart-qty')) {
            let cart = JSON.parse(localStorage.getItem('cart') || '[]');
            const idx = +e.target.getAttribute('data-idx');
            const newQty = parseInt(e.target.value, 10);
            if (newQty > 0) {
                cart[idx].qty = newQty;
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCart();
            }
        }
    });

    // Remove item
    document.getElementById('cartList').addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-cart-item')) {
            let cart = JSON.parse(localStorage.getItem('cart') || '[]');
            const idx = +e.target.getAttribute('data-idx');
            cart.splice(idx, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
        }
    });
});
