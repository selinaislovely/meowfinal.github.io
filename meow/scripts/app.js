document.addEventListener('DOMContentLoaded', () => {
    // Service Worker Registration
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    }

    // Initialize Swiper if needed (example)
    if (typeof Swiper !== 'undefined') {
        const swiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
                delay: 3000,
            },
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    let cart = [];

    // Add to Cart Button Click Event
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const name = this.dataset.name;
            const price = parseFloat(this.dataset.price);

            // Check if item is already in cart
            const existingItem = cart.find(item => item.name === name);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ name, price, quantity: 1 });
            }

            updateCartUI();
        });
    });

                // Update Cart UI
                function updateCartUI() {
        cartItems.innerHTML = ''; // Clear previous items

        let total = 0;

        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
            cartItems.appendChild(listItem);
            total += item.price * item.quantity;
        });

        totalPrice.textContent = `Total: $${total.toFixed(2)}`;
    }

    // Proceed to Checkout Button Click Event (You can add your checkout logic here)
    const checkoutButton = document.querySelector('.mt-4.bg-green-500');
    checkoutButton.addEventListener('click', function () {
        alert('Redirecting to Checkout...');
    });
});
