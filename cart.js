// Get cart from localStorage
function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Add item to cart
function addToCart(productId, color = '', size = '', quantity = 1) {
    const cart = getCart();
    const existingItemIndex = cart.findIndex(item => 
        item.id === productId && 
        item.color === color && 
        item.size === size
    );
    
    if (existingItemIndex >= 0) {
        // Item already in cart, update quantity
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Add new item to cart
        cart.push({
            id: productId,
            color,
            size,
            quantity
        });
    }
    
    saveCart(cart);
}

// Remove item from cart
function removeFromCart(productId, color = '', size = '') {
    let cart = getCart();
    cart = cart.filter(item => 
        !(item.id === productId && 
        item.color === color && 
        item.size === size)
    );
    saveCart(cart);
}

// Update item quantity in cart
function updateCartItemQuantity(productId, color = '', size = '', newQuantity) {
    const cart = getCart();
    const itemIndex = cart.findIndex(item => 
        item.id === productId && 
        item.color === color && 
        item.size === size
    );
    
    if (itemIndex >= 0) {
        if (newQuantity > 0) {
            cart[itemIndex].quantity = newQuantity;
        } else {
            cart.splice(itemIndex, 1);
        }
        saveCart(cart);
    }
}

// Calculate cart totals
function calculateCartTotals() {
    const cart = getCart();
    const subtotal = cart.reduce((total, item) => {
        const product = getProductById(item.id);
        return total + (product.price * item.quantity);
    }, 0);
    
    const shipping = subtotal > 0 ? 5.99 : 0;
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + shipping + tax;
    
    return {
        subtotal: subtotal.toFixed(2),
        shipping: shipping.toFixed(2),
        tax: tax.toFixed(2),
        total: total.toFixed(2)
    };
}

// Render cart page
function renderCartPage() {
    const cart = getCart();
    const cartContainer = document.getElementById('cart-items');
    const cartTotals = calculateCartTotals();
    
    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
                <a href="products.html" class="btn">Continue Shopping</a>
            </div>
        `;
    } else {
        let cartHTML = '';
        
        cart.forEach(item => {
            const product = getProductById(item.id);
            cartHTML += renderCartItem(item, product);
        });
        
        cartContainer.innerHTML = cartHTML;
        
        // Add event listeners to quantity controls
        document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
            btn.addEventListener('click', function() {
                const cartItem = this.closest('.cart-item');
                const productId = parseInt(cartItem.getAttribute('data-id'));
                const color = cartItem.getAttribute('data-color');
                const size = cartItem.getAttribute('data-size');
                const quantityInput = cartItem.querySelector('input');
                let quantity = parseInt(quantityInput.value);
                
                if (quantity > 1) {
                    quantity--;
                    quantityInput.value = quantity;
                    updateCartItemQuantity(productId, color, size, quantity);
                    updateCartTotals();
                }
            });
        });
        
        document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
            btn.addEventListener('click', function() {
                const cartItem = this.closest('.cart-item');
                const productId = parseInt(cartItem.getAttribute('data-id'));
                const color = cartItem.getAttribute('data-color');
                const size = cartItem.getAttribute('data-size');
                const quantityInput = cartItem.querySelector('input');
                let quantity = parseInt(quantityInput.value);
                
                quantity++;
                quantityInput.value = quantity;
                updateCartItemQuantity(productId, color, size, quantity);
                updateCartTotals();
            });
        });
        
        document.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', function() {
                const cartItem = this.closest('.cart-item');
                const productId = parseInt(cartItem.getAttribute('data-id'));
                const color = cartItem.getAttribute('data-color');
                const size = cartItem.getAttribute('data-size');
                
                removeFromCart(productId, color, size);
                renderCartPage();
                updateCartCount();
            });
        });
        
        // Update input changes
        document.querySelectorAll('.cart-item input').forEach(input => {
            input.addEventListener('change', function() {
                const cartItem = this.closest('.cart-item');
                const productId = parseInt(cartItem.getAttribute('data-id'));
                const color = cartItem.getAttribute('data-color');
                const size = cartItem.getAttribute('data-size');
                const quantity = parseInt(this.value);
                
                if (quantity > 0) {
                    updateCartItemQuantity(productId, color, size, quantity);
                    updateCartTotals();
                } else {
                    removeFromCart(productId, color, size);
                    renderCartPage();
                    updateCartCount();
                }
            });
        });
    }
    
    // Update totals
    document.getElementById('cart-subtotal').textContent = `$${cartTotals.subtotal}`;
    document.getElementById('cart-shipping').textContent = `$${cartTotals.shipping}`;
    document.getElementById('cart-tax').textContent = `$${cartTotals.tax}`;
    document.getElementById('cart-total').textContent = `$${cartTotals.total}`;
    
    // Load recently viewed products
    loadRecentlyViewed();
}

// Update cart totals on cart page
function updateCartTotals() {
    const cartTotals = calculateCartTotals();
    
    document.getElementById('cart-subtotal').textContent = `$${cartTotals.subtotal}`;
    document.getElementById('cart-shipping').textContent = `$${cartTotals.shipping}`;
    document.getElementById('cart-tax').textContent = `$${cartTotals.tax}`;
    document.getElementById('cart-total').textContent = `$${cartTotals.total}`;
}

// Load recently viewed products
function loadRecentlyViewed() {
    const recentlyViewedContainer = document.getElementById('recently-viewed');
    if (!recentlyViewedContainer) return;
    
    // In a real app, you would track recently viewed products
    // For demo purposes, we'll just show some random products
    const randomProducts = [...products].sort(() => 0.5 - Math.random()).slice(0, 4);
    
    recentlyViewedContainer.innerHTML = randomProducts.map(product => 
        renderProductCard(product)
    ).join('');
}

// Render checkout page
function renderCheckoutPage() {
    const cart = getCart();
    const orderItemsContainer = document.getElementById('sidebar-order-items');
    const cartTotals = calculateCartTotals();
    
    // Render order items in sidebar
    let orderItemsHTML = '';
    
    cart.forEach(item => {
        const product = getProductById(item.id);
        orderItemsHTML += renderOrderSummaryItem(item, product);
    });
    
    orderItemsContainer.innerHTML = orderItemsHTML;
    
    // Update totals
    document.getElementById('sidebar-subtotal').textContent = `$${cartTotals.subtotal}`;
    document.getElementById('sidebar-shipping').textContent = `$${cartTotals.shipping}`;
    document.getElementById('sidebar-tax').textContent = `$${cartTotals.tax}`;
    document.getElementById('sidebar-total').textContent = `$${cartTotals.total}`;
    
    // Checkout steps navigation
    const steps = document.querySelectorAll('.step');
    const stepPanes = document.querySelectorAll('.checkout-step');
    
    steps.forEach(step => {
        step.addEventListener('click', function() {
            const stepNumber = this.getAttribute('data-step');
            goToCheckoutStep(stepNumber);
        });
    });
    
    // Next/back buttons
    document.querySelectorAll('.btn-next').forEach(btn => {
        btn.addEventListener('click', function() {
            const nextStep = this.getAttribute('data-next');
            if (validateCheckoutStep(nextStep - 1)) {
                goToCheckoutStep(nextStep);
            }
        });
    });
    
    document.querySelectorAll('.btn-back').forEach(btn => {
        btn.addEventListener('click', function() {
            const prevStep = this.getAttribute('data-back');
            goToCheckoutStep(prevStep);
        });
    });
    
    // Edit links
    document.querySelectorAll('.edit-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const stepToEdit = this.getAttribute('data-edit');
            goToCheckoutStep(stepToEdit);
        });
    });
    
    // Payment method selection
    document.querySelectorAll('input[name="payment-method"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const method = this.value;
            document.querySelectorAll('.payment-method').forEach(pm => {
                pm.classList.remove('active');
            });
            
            this.closest('.payment-method').classList.add('active');
        });
    });
    
    // Form submission
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateCheckoutStep(3)) {
                // In a real app, you would process the payment here
                alert('Order placed successfully! Thank you for your purchase.');
                
                // Clear cart
                localStorage.removeItem('cart');
                updateCartCount();
                
                // Redirect to confirmation page
                window.location.href = 'index.html';
            }
        });
    }
    
    // Start with step 1
    goToCheckoutStep(1);
}

// Go to specific checkout step
function goToCheckoutStep(stepNumber) {
    // Update steps UI
    document.querySelectorAll('.step').forEach(step => {
        step.classList.toggle('active', step.getAttribute('data-step') === stepNumber);
    });
    
    // Update step content
    document.querySelectorAll('.checkout-step').forEach(step => {
        step.classList.toggle('active', step.id === `step-${stepNumber}`);
    });
    
    // Update review section if on step 3
    if (stepNumber === '3') {
        updateReviewSection();
    }
}

// Validate checkout step before proceeding
function validateCheckoutStep(stepNumber) {
    if (stepNumber === 1) {
        // Validate shipping info
        const requiredFields = [
            'shipping-first-name',
            'shipping-last-name',
            'shipping-address',
            'shipping-city',
            'shipping-state',
            'shipping-zip',
            'shipping-country',
            'shipping-phone'
        ];
        
        let isValid = true;
        
        requiredFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (!field.value.trim()) {
                field.style.borderColor = 'red';
                isValid = false;
            } else {
                field.style.borderColor = '';
            }
        });
        
        if (!isValid) {
            alert('Please fill in all required shipping information.');
            return false;
        }
        
        return true;
    } else if (stepNumber === 2) {
        // Validate payment info
        const paymentMethod = document.querySelector('input[name="payment-method"]:checked');
        
        if (!paymentMethod) {
            alert('Please select a payment method.');
            return false;
        }
        
        if (paymentMethod.value === 'credit-card') {
            const requiredFields = [
                'card-number',
                'card-name',
                'card-expiry',
                'card-cvv'
            ];
            
            let isValid = true;
            
            requiredFields.forEach(fieldId => {
                const field = document.getElementById(fieldId);
                if (!field.value.trim()) {
                    field.style.borderColor = 'red';
                    isValid = false;
                } else {
                    field.style.borderColor = '';
                }
            });
            
            if (!isValid) {
                alert('Please fill in all required payment information.');
                return false;
            }
        }
        
        return true;
    } else if (stepNumber === 3) {
        // Validate terms agreement
        const termsAgree = document.getElementById('terms-agree');
        
        if (!termsAgree.checked) {
            alert('You must agree to the terms and conditions to place your order.');
            termsAgree.style.outline = '1px solid red';
            return false;
        } else {
            termsAgree.style.outline = '';
            return true;
        }
    }
    
    return true;
}

// Update review section with entered information
function updateReviewSection() {
    // Shipping info
    const shippingInfo = `
        <p>${document.getElementById('shipping-first-name').value} ${document.getElementById('shipping-last-name').value}</p>
        <p>${document.getElementById('shipping-address').value}</p>
        <p>${document.getElementById('shipping-city').value}, ${document.getElementById('shipping-state').value} ${document.getElementById('shipping-zip').value}</p>
        <p>${document.getElementById('shipping-country').value}</p>
        <p>${document.getElementById('shipping-phone').value}</p>
    `;
    
    document.getElementById('review-shipping').innerHTML = shippingInfo;
    
    // Payment info
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked');
    let paymentInfo = '';
    
    if (paymentMethod) {
        if (paymentMethod.value === 'credit-card') {
            const cardNumber = document.getElementById('card-number').value;
            paymentInfo = `
                <p>Credit Card ending in ${cardNumber.slice(-4)}</p>
                <p>Expires ${document.getElementById('card-expiry').value}</p>
            `;
        } else if (paymentMethod.value === 'paypal') {
            paymentInfo = '<p>PayPal</p>';
        }
    }
    
    document.getElementById('review-payment').innerHTML = paymentInfo;
    
    // Order items
    const cart = getCart();
    const orderItemsContainer = document.getElementById('review-order-items');
    let orderItemsHTML = '';
    
    cart.forEach(item => {
        const product = getProductById(item.id);
        orderItemsHTML += renderOrderSummaryItem(item, product);
    });
    
    orderItemsContainer.innerHTML = orderItemsHTML;
    
    // Order totals
    const cartTotals = calculateCartTotals();
    
    document.getElementById('review-subtotal').textContent = `$${cartTotals.subtotal}`;
    document.getElementById('review-shipping-cost').textContent = `$${cartTotals.shipping}`;
    document.getElementById('review-tax').textContent = `$${cartTotals.tax}`;
    document.getElementById('review-total').textContent = `$${cartTotals.total}`;
}

// Initialize cart page
if (document.getElementById('cart-items')) {
    renderCartPage();
    updateCartCount();
}

// Initialize checkout page
if (document.getElementById('checkout-form')) {
    renderCheckoutPage();
    updateCartCount();
}