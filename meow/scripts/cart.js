document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    let cart = [];

    // Function to update the cart UI
    function updateCartUI() {
        cartItems.innerHTML = ''; // Clear previous items

        let total = 0;

        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
            cartItems.appendChild(listItem);

            // Add button to decrement item quantity
            const subtractButton = document.createElement('button');
            subtractButton.textContent = '-';
            subtractButton.classList.add('mx-2', 'text-white', 'bg-red-500', 'hover:bg-red-600', 'px-2', 'py-1', 'rounded');
            subtractButton.addEventListener('click', () => subtractFromCart(item.name));
            listItem.appendChild(subtractButton);

            total += item.price * item.quantity;
        });

        totalPrice.textContent = `Total: $${total.toFixed(2)}`;
    }

    // Function to add items to the cart
    function addToCart(name, price) {
        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }

        updateCartUI();
    }

    // Function to subtract items from the cart
    function subtractFromCart(name) {
        const existingItemIndex = cart.findIndex(item => item.name === name);

        if (existingItemIndex !== -1) {
            cart[existingItemIndex].quantity--;
            if (cart[existingItemIndex].quantity === 0) {
                cart.splice(existingItemIndex, 1); // Remove item from cart if quantity becomes zero
            }
        }

        updateCartUI();
    }

    // Add to Cart Button Click Event
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const name = this.dataset.name;
            const price = parseFloat(this.dataset.price);
            addToCart(name, price);
        });
    });

    // Proceed to Checkout Button Click Event
    const checkoutButton = document.querySelector('.mt-4.bg-green-500');
    checkoutButton.addEventListener('click', function () {
        alert('Redirecting to Checkout...');
    });
});
