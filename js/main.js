// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Load featured products on home page
    if (document.getElementById('featured-products')) {
        const featuredProducts = getFeaturedProducts();
        const featuredProductsContainer = document.getElementById('featured-products');
        
        featuredProductsContainer.innerHTML = featuredProducts.map(product => 
            renderProductCard(product)
        ).join('');
    }
    
    // Load products on products page
    if (document.getElementById('products-grid')) {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category') || 'all';
        const sortBy = urlParams.get('sort') || 'default';
        
        // Set selected category in filter
        const categoryFilter = document.getElementById('category-filter');
        if (categoryFilter) {
            categoryFilter.value = category;
        }
        
        // Set selected sort in filter
        const sortFilter = document.getElementById('sort-by');
        if (sortFilter) {
            sortFilter.value = sortBy;
        }
        
        // Get and display products
        let productsToDisplay = getProductsByCategory(category);
        productsToDisplay = sortProducts(productsToDisplay, sortBy);
        
        const productsContainer = document.getElementById('products-grid');
        productsContainer.innerHTML = productsToDisplay.map(product => 
            renderProductCard(product)
        ).join('');
        
        // Add event listeners to filters
        if (categoryFilter) {
            categoryFilter.addEventListener('change', function() {
                const newCategory = this.value;
                window.location.href = `products.html?category=${newCategory}`;
            });
        }
        
        if (sortFilter) {
            sortFilter.addEventListener('change', function() {
                const newSort = this.value;
                window.location.href = `products.html?category=${category}&sort=${newSort}`;
            });
        }
    }
    
    // Load product details
    if (document.getElementById('product-name')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));
        
        if (productId) {
            const product = getProductById(productId);
            
            if (product) {
                // Render product details
                const productDetailContainer = document.querySelector('.product-detail .container');
                productDetailContainer.innerHTML = renderProductDetails(product);
                
                // Add event listeners for thumbnails
                const thumbnails = document.querySelectorAll('.thumbnail');
                const mainImage = document.getElementById('main-product-image');
                
                thumbnails.forEach(thumb => {
                    thumb.addEventListener('click', function() {
                        // Update active thumbnail
                        thumbnails.forEach(t => t.classList.remove('active'));
                        this.classList.add('active');
                        
                        // Update main image
                        const newImage = this.getAttribute('data-image');
                        mainImage.src = newImage;
                    });
                });
                
                // Quantity selector
                const quantityInput = document.getElementById('product-quantity');
                const minusBtn = document.querySelector('.quantity-btn.minus');
                const plusBtn = document.querySelector('.quantity-btn.plus');
                
                minusBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    let currentValue = parseInt(quantityInput.value);
                    if (currentValue > 1) {
                        quantityInput.value = currentValue - 1;
                    }
                });
                
                plusBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    let currentValue = parseInt(quantityInput.value);
                    quantityInput.value = currentValue + 1;
                });
                
                // Tab switching
                const tabBtns = document.querySelectorAll('.tab-btn');
                const tabPanes = document.querySelectorAll('.tab-pane');
                
                tabBtns.forEach(btn => {
                    btn.addEventListener('click', function() {
                        const tabId = this.getAttribute('data-tab');
                        
                        // Update active tab button
                        tabBtns.forEach(b => b.classList.remove('active'));
                        this.classList.add('active');
                        
                        // Update active tab pane
                        tabPanes.forEach(pane => pane.classList.remove('active'));
                        document.getElementById(`${tabId}-tab`).classList.add('active');
                    });
                });
                
                // Load related products
                const relatedProducts = getRelatedProducts(productId);
                const relatedProductsContainer = document.getElementById('related-products');
                
                if (relatedProducts.length > 0) {
                    relatedProductsContainer.innerHTML = relatedProducts.map(p => 
                        renderProductCard(p)
                    ).join('');
                } else {
                    relatedProductsContainer.innerHTML = '<p>No related products found.</p>';
                }
            }
        }
    }
    
    // Add to cart buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            e.preventDefault();
            
            const productCard = e.target.closest('.product-card');
            if (productCard) {
                const productId = parseInt(productCard.getAttribute('data-id'));
                const product = getProductById(productId);
                
                if (product) {
                    // For product detail page, get selected options
                    let color = '';
                    let size = '';
                    let quantity = 1;
                    
                    if (document.getElementById('product-color')) {
                        color = document.getElementById('product-color').value;
                    }
                    
                    if (document.getElementById('product-size')) {
                        size = document.getElementById('product-size').value;
                    }
                    
                    if (document.getElementById('product-quantity')) {
                        quantity = parseInt(document.getElementById('product-quantity').value);
                    }
                    
                    addToCart(productId, color, size, quantity);
                    updateCartCount();
                    
                    // Show success message
                    alert(`${product.name} has been added to your cart!`);
                }
            }
        }
        
        // View details buttons
        if (e.target.classList.contains('btn-outline') && e.target.textContent.trim() === 'View Details') {
            e.preventDefault();
            
            const productCard = e.target.closest('.product-card');
            if (productCard) {
                const productId = parseInt(productCard.getAttribute('data-id'));
                window.location.href = `product-detail.html?id=${productId}`;
            }
        }
    });
    
    // Initialize cart count
    updateCartCount();
});

// Update cart count in header
function updateCartCount() {
    const cart = getCart();
    const cartCountElements = document.querySelectorAll('.cart-count');
    
    cartCountElements.forEach(el => {
        el.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    });
}