

function cleanAndParsePrice(priceString) {
    if (!priceString) return 0;
    let cleanedString = priceString.replace('₺', '').replace(/\s/g, '').replace(/\./g, '');
    let price = parseFloat(cleanedString);
    return isNaN(price) ? 0 : price;
}

function updateCartPreview() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartCountSpan = document.getElementById('cartCount');
    let cartPreviewDiv = document.getElementById('cartPreview');
    let cartTotalSpan = document.getElementById('cartTotal');
    
    if (cartCountSpan) cartCountSpan.textContent = cart.length;
    
    let previewHtml = '';
    let total = 0;
    
    cart.forEach((product, index) => {
        let price = cleanAndParsePrice(product.price); 
        
        total += price * product.quantity;
        
        previewHtml += `
        <div class="drop_1i1 clearfix">
          <div class="col-sm-8">
           <div class="drop_1i1l clearfix"><h6 class="mgt bold"><a href="#">${product.name}</a> <br> <span class="normal col_2">${product.quantity}x - ${product.price}</span></h6></div>
          </div>
          <div class="col-sm-4">
           <div class="drop_1i1r text-right clearfix"><img src="${product.image}" class="iw" alt="${product.name}" style="max-width: 60px;"></div>
          </div>
        </div>
        `;
    });
    
    if (cartPreviewDiv) cartPreviewDiv.innerHTML = previewHtml;
    if (cartTotalSpan) cartTotalSpan.textContent = '₺' + total.toFixed(2); 
}

function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsDiv = document.getElementById('cartItems');
    
    if (!cartItemsDiv) return; 
    
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p style="padding: 20px;">Sepete ürün eklemek için alışveriş yap.</p>';
        let totalDiv = document.getElementById('cartSubtotal');
        if (totalDiv) {
            totalDiv.textContent = '₺0.00';
        }
        return;
    }
    
    let html = '';
    let total = 0;
    
    cart.forEach((product, index) => {
        let price = cleanAndParsePrice(product.price); 
        
        let itemTotal = price * product.quantity;
        total += itemTotal;
        
        html += `
        <div class="cart_3l1 clearfix">
           <div class="col-sm-3 space_left">
            <div class="cart_3l1i clearfix">
             <img src="${product.image}" alt="${product.name}" class="iw" style="max-width: 100%; height: auto;">
            </div>
           </div>
           <div class="col-sm-9">
            <div class="cart_3l1i1 clearfix">
             <h5 class="mgt"><a href="#">${product.name}</a></h5>
             <h4>${product.price}</h4>
             <h5>Adet: ${product.quantity}</h5>
            </div>
            <div class="cart_3l1i2 clearfix">
             <h6 class="mgt"><a class="button_1 mgt" href="#" onclick="removeFromCart(${index}); return false;">KALDIR</a></h6>
            </div>
           </div>
          </div>
        `;
    });
	
	cartItemsDiv.innerHTML = html;
    
    let totalDiv = document.getElementById('cartSubtotal');
    if (totalDiv) {
        totalDiv.textContent = '₺' + total.toFixed(2); 
    }
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
    updateCartPreview();
}

function updateCheckoutTotals() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let subTotal = 0;
    const shippingCost = 80.00; 

    cart.forEach(product => {
        
        let price = cleanAndParsePrice(product.price); 

        if (!isNaN(price)) {
            subTotal += price * product.quantity;
        }
    });

    let grandTotal = subTotal + shippingCost;

    let subTotalSpan = document.getElementById('subTotal');
    let grandTotalSpan = document.getElementById('grandTotal');
    let shippingCostSpan = document.getElementById('shippingCost');

    if (subTotalSpan) {
        subTotalSpan.textContent = '₺' + subTotal.toFixed(2);
    }
    if (shippingCostSpan) {
        shippingCostSpan.textContent = '₺' + shippingCost.toFixed(2);
    }
    if (grandTotalSpan) {
        grandTotalSpan.textContent = '₺' + grandTotal.toFixed(2);
    }
}

window.addEventListener('load', function() {
    updateCartPreview();
    loadCart();
    
    if (document.getElementById('checkout')) { 
        updateCheckoutTotals();
    }
});

setInterval(function() {
    updateCartPreview();
    
    if (document.getElementById('checkout')) {
        updateCheckoutTotals();
    }
}, 1000);


