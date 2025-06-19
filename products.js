// Product Data
const products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        category: "electronics",
        price: 99.99,
        originalPrice: 129.99,
        rating: 4.5,
        reviews: 24,
        description: "High-quality wireless headphones with noise cancellation and 20-hour battery life.",
        fullDescription: "<p>Experience crystal-clear sound with these premium wireless Bluetooth headphones. Featuring active noise cancellation technology, these headphones allow you to immerse yourself in your music without any distractions. With a comfortable over-ear design and soft memory foam ear cushions, you can enjoy extended listening sessions without discomfort.</p><p>The built-in microphone lets you take calls hands-free, and the intuitive touch controls make it easy to adjust volume, skip tracks, and activate your voice assistant. The headphones offer up to 20 hours of playtime on a single charge, and quick charge functionality gives you 5 hours of playback from just a 15-minute charge.</p>",
        specifications: {
            material: "Plastic and metal",
            dimensions: "7.5 x 6.7 x 3.2 inches",
            weight: "0.55 lbs",
            warranty: "1 year"
        },
        images: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1545127398-5aae47194b22?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1546435770-a3e426bf472f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        colors: ["black", "white", "blue"],
        sizes: []
    },
    {
        id: 2,
        name: "Smart Watch Fitness Tracker",
        category: "electronics",
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.2,
        reviews: 18,
        description: "Track your fitness goals with this smartwatch featuring heart rate monitoring and GPS.",
        fullDescription: "<p>Stay on top of your fitness goals with this advanced smartwatch. It features 24/7 heart rate monitoring, sleep tracking, and built-in GPS to accurately track your outdoor activities. With water resistance up to 50 meters, you can wear it while swimming or in the shower.</p><p>The smartwatch connects to your smartphone to display notifications for calls, texts, and apps. It supports multiple sports modes including running, cycling, swimming, and more. The long-lasting battery provides up to 7 days of use on a single charge, and the customizable watch faces let you personalize your look.</p>",
        specifications: {
            material: "Silicone and aluminum",
            dimensions: "1.7 inch display",
            weight: "1.2 oz",
            warranty: "1 year"
        },
        images: [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1558126319-c9feecbf57ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        colors: ["black", "silver", "rose gold"],
        sizes: []
    },
    {
        id: 3,
        name: "Men's Casual T-Shirt",
        category: "clothing",
        price: 24.99,
        originalPrice: 29.99,
        rating: 4.7,
        reviews: 36,
        description: "Comfortable and stylish cotton t-shirt available in multiple colors.",
        fullDescription: "<p>This classic crewneck t-shirt is made from 100% premium cotton for exceptional softness and comfort. The regular fit provides a relaxed silhouette that's perfect for everyday wear. The fabric is pre-shrunk to maintain its shape wash after wash.</p><p>With a seamless collar and double-stitched sleeves and hem, this t-shirt is designed for durability. The versatile style pairs well with jeans, shorts, or layered under jackets. Available in a range of colors to suit any wardrobe.</p>",
        specifications: {
            material: "100% cotton",
            dimensions: "",
            weight: "6 oz",
            warranty: ""
        },
        images: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        colors: ["white", "black", "gray", "navy", "green"],
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 4,
        name: "Women's Running Shoes",
        category: "clothing",
        price: 89.99,
        originalPrice: 119.99,
        rating: 4.8,
        reviews: 42,
        description: "Lightweight and breathable running shoes with cushioned soles for maximum comfort.",
        fullDescription: "<p>Designed for serious runners, these shoes feature responsive cushioning that absorbs impact and returns energy with every step. The breathable mesh upper keeps your feet cool and comfortable during long runs, while the reinforced toe cap provides durability.</p><p>The ergonomic design supports natural foot movement, and the rubber outsole offers excellent traction on both wet and dry surfaces. The removable insole allows for custom orthotics if needed. These shoes are perfect for road running, treadmill workouts, or everyday wear.</p>",
        specifications: {
            material: "Mesh and synthetic",
            dimensions: "",
            weight: "8.8 oz",
            warranty: ""
        },
        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        colors: ["black", "white", "pink", "blue"],
        sizes: ["US 5", "US 6", "US 7", "US 8", "US 9", "US 10"]
    },
    {
        id: 5,
        name: "Stainless Steel Water Bottle",
        category: "home",
        price: 24.99,
        originalPrice: 34.99,
        rating: 4.9,
        reviews: 58,
        description: "Keep your drinks cold for 24 hours or hot for 12 hours with this insulated bottle.",
        fullDescription: "<p>This premium stainless steel water bottle features double-wall vacuum insulation that keeps beverages cold for up to 24 hours or hot for up to 12 hours. The durable 18/8 food-grade stainless steel construction is resistant to rust and won't retain flavors or odors.</p><p>The leak-proof design features a screw-on lid with a convenient carrying loop. The powder-coated exterior provides a comfortable grip and comes in a variety of colors. With a capacity of 32oz, this bottle is perfect for staying hydrated throughout the day at work, the gym, or on outdoor adventures.</p>",
        specifications: {
            material: "Stainless steel",
            dimensions: "10.5 x 3 inches",
            weight: "1.1 lbs",
            warranty: "Lifetime"
        },
        images: [
            "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1587353162958-881f6b0bf740?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        colors: ["black", "white", "blue", "green", "pink"],
        sizes: []
    },
    {
        id: 6,
        name: "Ceramic Coffee Mug Set",
        category: "home",
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.6,
        reviews: 31,
        description: "Set of 4 premium ceramic mugs with comfortable handles and elegant design.",
        fullDescription: "<p>This set includes four beautifully crafted ceramic mugs, each with a 12oz capacity - perfect for your morning coffee or tea. The mugs feature a classic shape with comfortable handles and a smooth glaze finish that's both microwave and dishwasher safe.</p><p>The durable stoneware construction retains heat well while remaining comfortable to hold. The minimalist design complements any kitchen decor, making these mugs ideal for both everyday use and entertaining guests. Each mug is individually boxed for protection.</p>",
        specifications: {
            material: "Ceramic",
            dimensions: "4.5 x 3.5 inches",
            weight: "2.2 lbs (set)",
            warranty: ""
        },
        images: [
            "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1590013336061-618a8f5cff46?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        colors: ["white", "black"],
        sizes: []
    },
    {
        id: 7,
        name: "Wireless Charging Pad",
        category: "electronics",
        price: 19.99,
        originalPrice: 29.99,
        rating: 4.3,
        reviews: 15,
        description: "Qi-certified wireless charging pad compatible with most smartphones.",
        fullDescription: "<p>This Qi-certified wireless charger provides fast and efficient charging for all Qi-enabled devices. Simply place your compatible smartphone or earbuds case on the pad to start charging - no cables needed. The sleek, compact design fits perfectly on your nightstand, desk, or coffee table.</p><p>Built-in safeguards protect your device from overcharging, overheating, and short-circuiting. The non-slip surface keeps your device securely in place while charging. Includes a 5V/2A adapter for optimal charging speed (adapter may vary by region).</p>",
        specifications: {
            material: "Plastic and silicone",
            dimensions: "4 x 4 x 0.5 inches",
            weight: "0.3 lbs",
            warranty: "1 year"
        },
        images: [
            "https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1600003263720-95b45a4035d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1600003263720-95b45a4035d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        colors: ["white", "black"],
        sizes: []
    },
    {
        id: 8,
        name: "Yoga Mat",
        category: "home",
        price: 39.99,
        originalPrice: 49.99,
        rating: 4.7,
        reviews: 27,
        description: "Eco-friendly yoga mat with superior grip and cushioning for all types of yoga.",
        fullDescription: "<p>This premium yoga mat is made from eco-friendly TPE material that's free from harmful chemicals like PVC and latex. The textured surface provides excellent grip to prevent slipping during even the most intense yoga sessions, while the 6mm thickness offers optimal cushioning for joint support.</p><p>The mat measures 72 inches long and 24 inches wide, providing ample space for various poses. Lightweight yet durable, it includes a carrying strap for easy transport to and from the studio. The mat is easy to clean and resists odor buildup.</p>",
        specifications: {
            material: "TPE (Thermoplastic Elastomer)",
            dimensions: "72 x 24 x 0.24 inches",
            weight: "2.2 lbs",
            warranty: ""
        },
        images: [
            "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        colors: ["purple", "blue", "green", "pink"],
        sizes: []
    }
];

// Get featured products (first 4 products)
function getFeaturedProducts() {
    return products.slice(0, 4);
}

// Get product by ID
function getProductById(id) {
    return products.find(product => product.id === id);
}

// Get products by category
function getProductsByCategory(category) {
    if (category === 'all') return products;
    return products.filter(product => product.category === category);
}

// Get related products (exclude current product)
function getRelatedProducts(currentProductId, count = 4) {
    const currentProduct = getProductById(currentProductId);
    const related = products.filter(product => 
        product.category === currentProduct.category && 
        product.id !== currentProductId
    );
    return related.slice(0, count);
}

// Sort products
function sortProducts(products, sortBy) {
    switch(sortBy) {
        case 'price-low':
            return [...products].sort((a, b) => a.price - b.price);
        case 'price-high':
            return [...products].sort((a, b) => b.price - a.price);
        case 'name-asc':
            return [...products].sort((a, b) => a.name.localeCompare(b.name));
        case 'name-desc':
            return [...products].sort((a, b) => b.name.localeCompare(a.name));
        default:
            return products;
    }
}

// Render product card
function renderProductCard(product) {
    const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    
    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.images[0]}" alt="${product.name}">
                ${product.originalPrice ? `<span class="product-badge">Save ${discountPercent}%</span>` : ''}
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                <div class="product-rating">
                    ${renderRatingStars(product.rating)} (${product.reviews})
                </div>
                <div class="product-actions">
                    <button class="btn add-to-cart">Add to Cart</button>
                    <button class="btn btn-outline">View Details</button>
                </div>
            </div>
        </div>
    `;
}

// Render rating stars
function renderRatingStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Render product details
function renderProductDetails(product) {
    const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    
    // Render color options
    let colorOptions = '';
    if (product.colors && product.colors.length > 0) {
        colorOptions = product.colors.map(color => 
            `<option value="${color}">${color.charAt(0).toUpperCase() + color.slice(1)}</option>`
        ).join('');
    }
    
    // Render size options
    let sizeOptions = '';
    if (product.sizes && product.sizes.length > 0) {
        sizeOptions = product.sizes.map(size => 
            `<option value="${size}">${size}</option>`
        ).join('');
    }
    
    // Render thumbnails
    let thumbnails = '';
    if (product.images && product.images.length > 0) {
        thumbnails = product.images.map((image, index) => 
            `<div class="thumbnail ${index === 0 ? 'active' : ''}" data-image="${image}">
                <img src="${image}" alt="${product.name}">
            </div>`
        ).join('');
    }
    
    return `
        <div class="breadcrumb">
            <a href="index.html">Home</a> / <a href="products.html">Products</a> / <span>${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span> / <span>${product.name}</span>
        </div>
        
        <div class="product-detail-container">
            <div class="product-images">
                <div class="main-image">
                    <img id="main-product-image" src="${product.images[0]}" alt="${product.name}">
                </div>
                <div class="thumbnail-images" id="thumbnail-images">
                    ${thumbnails}
                </div>
            </div>
            
            <div class="product-info">
                <h1 id="product-name">${product.name}</h1>
                <div class="product-meta">
                    <span class="product-sku">SKU: <span id="product-sku">${product.id.toString().padStart(5, '0')}</span></span>
                    <span class="product-rating">
                        ${renderRatingStars(product.rating)}
                        <span>(${product.reviews} reviews)</span>
                    </span>
                </div>
                
                <div class="product-price">
                    <span class="current-price" id="product-price">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="original-price" id="product-original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                    ${product.originalPrice ? `<span class="discount-badge">Save ${discountPercent}%</span>` : ''}
                </div>
                
                <div class="product-description" id="product-description">
                    <p>${product.description}</p>
                </div>
                
                <div class="product-options">
                    ${product.colors && product.colors.length > 0 ? `
                    <div class="option">
                        <label for="product-color">Color:</label>
                        <select id="product-color">
                            ${colorOptions}
                        </select>
                    </div>` : ''}
                    
                    ${product.sizes && product.sizes.length > 0 ? `
                    <div class="option">
                        <label for="product-size">Size:</label>
                        <select id="product-size">
                            ${sizeOptions}
                        </select>
                    </div>` : ''}
                    
                    <div class="option">
                        <label for="product-quantity">Quantity:</label>
                        <div class="quantity-selector">
                            <button class="quantity-btn minus">-</button>
                            <input type="number" id="product-quantity" value="1" min="1">
                            <button class="quantity-btn plus">+</button>
                        </div>
                    </div>
                </div>
                
                <div class="product-actions">
                    <button class="btn add-to-cart" id="add-to-cart">Add to Cart</button>
                    <button class="btn btn-outline">Add to Wishlist</button>
                </div>
                
                <div class="product-share">
                    <span>Share:</span>
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-pinterest"></i></a>
                </div>
            </div>
        </div>
        
        <div class="product-tabs">
            <div class="tabs-header">
                <button class="tab-btn active" data-tab="description">Description</button>
                <button class="tab-btn" data-tab="specifications">Specifications</button>
                <button class="tab-btn" data-tab="reviews">Reviews</button>
            </div>
            <div class="tabs-content">
                <div class="tab-pane active" id="description-tab">
                    <h3>Product Description</h3>
                    <div id="full-description">
                        ${product.fullDescription}
                    </div>
                </div>
                <div class="tab-pane" id="specifications-tab">
                    <h3>Product Specifications</h3>
                    <table>
                        ${product.specifications.material ? `
                        <tr>
                            <th>Material</th>
                            <td id="spec-material">${product.specifications.material}</td>
                        </tr>` : ''}
                        
                        ${product.specifications.dimensions ? `
                        <tr>
                            <th>Dimensions</th>
                            <td id="spec-dimensions">${product.specifications.dimensions}</td>
                        </tr>` : ''}
                        
                        ${product.specifications.weight ? `
                        <tr>
                            <th>Weight</th>
                            <td id="spec-weight">${product.specifications.weight}</td>
                        </tr>` : ''}
                        
                        ${product.specifications.warranty ? `
                        <tr>
                            <th>Warranty</th>
                            <td id="spec-warranty">${product.specifications.warranty}</td>
                        </tr>` : ''}
                    </table>
                </div>
                <div class="tab-pane" id="reviews-tab">
                    <h3>Customer Reviews</h3>
                    <div class="review-form">
                        <h4>Write a Review</h4>
                        <form id="review-form">
                            <div class="form-group">
                                <label for="review-name">Your Name</label>
                                <input type="text" id="review-name" required>
                            </div>
                            <div class="form-group">
                                <label for="review-rating">Rating</label>
                                <select id="review-rating" required>
                                    <option value="">Select Rating</option>
                                    <option value="5">5 Stars</option>
                                    <option value="4">4 Stars</option>
                                    <option value="3">3 Stars</option>
                                    <option value="2">2 Stars</option>
                                    <option value="1">1 Star</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="review-text">Your Review</label>
                                <textarea id="review-text" rows="5" required></textarea>
                            </div>
                            <button type="submit" class="btn">Submit Review</button>
                        </form>
                    </div>
                    <div class="reviews-list" id="reviews-list">
                        <!-- Reviews will be loaded here -->
                    </div>
                </div>
            </div>
        </div>
        
        <div class="related-products">
            <h3>You May Also Like</h3>
            <div class="products-grid" id="related-products">
                <!-- Related products will be loaded via JavaScript -->
            </div>
        </div>
    `;
}

// Render cart item
function renderCartItem(item, product) {
    return `
        <div class="cart-item" data-id="${item.id}" data-color="${item.color || ''}" data-size="${item.size || ''}">
            <div class="cart-item-details">
                <div class="cart-item-image">
                    <img src="${product.images[0]}" alt="${product.name}">
                </div>
                <div>
                    <div class="cart-item-title">${product.name}</div>
                    ${item.color ? `<div class="cart-item-option">Color: ${item.color.charAt(0).toUpperCase() + item.color.slice(1)}</div>` : ''}
                    ${item.size ? `<div class="cart-item-option">Size: ${item.size}</div>` : ''}
                </div>
            </div>
            <div class="cart-item-price">$${product.price.toFixed(2)}</div>
            <div class="cart-item-quantity">
                <button class="quantity-btn minus">-</button>
                <input type="number" value="${item.quantity}" min="1">
                <button class="quantity-btn plus">+</button>
            </div>
            <div class="cart-item-total">$${(product.price * item.quantity).toFixed(2)}</div>
            <div class="cart-item-remove"><i class="fas fa-times"></i></div>
        </div>
    `;
}

// Render order summary item
function renderOrderSummaryItem(item, product) {
    return `
        <div class="order-item">
            <div class="order-item-image">
                <img src="${product.images[0]}" alt="${product.name}">
            </div>
            <div class="order-item-details">
                <div class="order-item-title">${product.name}</div>
                ${item.color ? `<div class="order-item-option">Color: ${item.color.charAt(0).toUpperCase() + item.color.slice(1)}</div>` : ''}
                ${item.size ? `<div class="order-item-option">Size: ${item.size}</div>` : ''}
            </div>
            <div class="order-item-price">$${(product.price * item.quantity).toFixed(2)}</div>
        </div>
    `;
}