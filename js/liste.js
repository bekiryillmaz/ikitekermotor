
function addToWishlist(product) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const isAlreadyInList = wishlist.some(item => item.id === product.id);

    if (!isAlreadyInList) {
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        alert(product.name + ' istek listenize eklendi!');
    } else {
        alert(product.name + ' zaten istek listenizde bulunuyor.');
    }
}

function removeFromWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist = wishlist.filter(item => item.id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));

    loadWishlistItems(); 
    alert('Ürün başarıyla listeden kaldırıldı.');
}

function loadWishlistItems() {
    const listContainer = document.getElementById('wishlist-items');
    if (!listContainer) return;

    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    listContainer.innerHTML = '';

    if (wishlist.length === 0) {
        listContainer.innerHTML = `
            <div class="col-sm-12">
                <div class="well text-center" style="padding: 50px;">
                    <h4>İstek listeniz şu anda boş. Favori ürünlerinizi kalp ikonuna tıklayarak buraya ekleyebilirsiniz!</h4>
                </div>
            </div>
        `;
        return;
    }

    wishlist.forEach(product => {
        const itemHtml = `
            <div class="cart_table_row clearfix" style="border-bottom: 1px solid #eee; padding: 15px 0;">

                <div class="col-sm-2">
                    <div class="cart_table_1i clearfix">
                        <img src="${product.image}" alt="${product.name}" class="img-responsive" style="width: 80px; height: 80px;">
                    </div>
                </div>

                <div class="col-sm-6">
                    <h5 class="mgt bold"><a href="urun-detay.html?id=${product.id}">${product.name}</a></h5>
                    <p class="col_1">Fiyat: ${product.price}</p>
                </div>

                <div class="col-sm-4 text-right">
                    <button class="btn btn-danger btn-sm remove-from-list-btn" data-product-id="${product.id}">
                        <i class="fa fa-trash-o"></i> Kaldır 
                    </button>
                    <a href="urun-detay.html?id=${product.id}" class="btn btn-primary btn-sm" style="margin-left:10px;">
                        <i class="fa fa-shopping-cart"></i> Sepete Ekle
                    </a>
                </div>

            </div>
        `;

        listContainer.insertAdjacentHTML('beforeend', itemHtml);
    });

    document.querySelectorAll('.remove-from-list-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = e.currentTarget.getAttribute('data-product-id');
            removeFromWishlist(productId);
        });
    });
}


document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('wishlist-items')) {
        loadWishlistItems();
    }
    
}
);

