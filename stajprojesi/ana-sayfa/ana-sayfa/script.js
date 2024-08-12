
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const scrollY = window.scrollY;
    const opacity = Math.max(1 - scrollY / 200, 0);
    header.style.opacity = opacity;
});

/*class ları yakalayıp değişkene attık artık bunalr üstünden işlem yapacağız*/
const login = document.querySelector(".log-in");
const basket = document.querySelector(".sepetim");
const loginItem = document.querySelector(".card-component");
const basketItem = document.querySelector(".card-component2");
const vitrin=document.querySelector(".vitrin")
login.addEventListener("click", run);
basket.addEventListener("click", basketGoster);

function run() {
    toggleVisibility(loginItem, basketItem);
}

function basketGoster() {
    toggleVisibility(basketItem, loginItem);
}

function toggleVisibility(targetItem, otherItem) {
    if (otherItem.classList.contains("openAndClose")) {
        otherItem.classList.remove("openAndClose");
        otherItem.style.maxHeight = "0"; // Kapatıldığında gizle
        setTimeout(() => {
            otherItem.style.display = "none"; // Tamamen gizle
        }, 1000); // 1 saniye geçiş süresine eşit
    }

    if (!targetItem.classList.contains("openAndClose")) {
        targetItem.style.display = "block"; // Açıldığında göster
        targetItem.style.maxHeight = targetItem.scrollHeight + "px"; // İçeriğe göre yükseklik ayarla
    } else {
        targetItem.style.maxHeight = "0"; // Kapatıldığında gizle
        setTimeout(() => {
            targetItem.style.display = "none"; // Tamamen gizle
        }, 1000); // 1 saniye geçiş süresine eşit
    }

    targetItem.classList.toggle("openAndClose");
}

document.addEventListener("DOMContentLoaded",getProducts)
let BaseURL="https://fakestoreapi.com/products" 
async function getProducts(){
const data= await fetch(BaseURL)
const products=await data.json()
console.log(products);

products.forEach(product => {
    writeUI(product)
    
});

}

function writeUI(product){
    const {image,title,description,price}=product
    vitrin.innerHTML+=`
    
     <div class="card-product">
                    <div class="card-img"><img class="img2" src=${image} alt=""></div>
                    <div class="card-title">${title}</div>
                    <div class="card-description">${description}</div>
                    <div class="card-rating">⭐⭐⭐⭐⭐</div>
                    <div class="basket-and-price">
                        <span class="price"> ${price} ₺ </span>
                        <button class="add-to-basket">Sepete Ekle</button>
                    </div>
                </div>
    
    
    
    `
}

/*sig in ekranı geçiş  */

document.getElementById('show-register').onclick = function() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'flex';
};

document.getElementById('show-login').onclick = function() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'flex';
};