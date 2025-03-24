document.addEventListener("DOMContentLoaded", function () {
    const cartContainer = document.querySelector(".cart");
    const cartWrapper = document.createElement("div");
    cartWrapper.classList.add("cart-wrapper");
    cartContainer.appendChild(cartWrapper);

    const totalPriceContainer = document.createElement("div");
    totalPriceContainer.classList.add("final-amount");
    totalPriceContainer.innerHTML = `<h3>До сплати:</h3> <span>0 ₴</span>`;
    
    const checkoutButton = document.createElement("button");
    checkoutButton.classList.add("checkout-button");
    checkoutButton.textContent = "Оформити замовлення";
    
    const timerContainer = document.createElement("div");
    timerContainer.classList.add("delivery-timer");
    timerContainer.innerHTML = `<h3>Час до доставки:</h3> <span id="timer">--:--</span>`;

    
    const totalContainer = document.createElement("div");
    totalContainer.classList.add("cart-summary");
    totalContainer.appendChild(totalPriceContainer);
    totalContainer.appendChild(checkoutButton);
    totalContainer.appendChild(timerContainer);
    cartContainer.appendChild(totalContainer);
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function renderCart() {
        cartWrapper.innerHTML = "";
        let totalPrice = 0;
    
        for (let index = 0; index < cart.length; index++) {
            let item = cart[index];
            let itemTotalPrice = item.price * item.quantity;
            totalPrice += itemTotalPrice;
    
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>Кількість: ${item.quantity}</p>
                    <span class="item-price">${itemTotalPrice} ₴</span>
                </div>
                <div class="item-actions">
                    <button class="decrease" data-index="${index}">-</button> 
                    <span class="quantity">${item.quantity}</span> 
                    <button class="increase" data-index="${index}">+</button>
                    <button class="remove-item" data-index="${index}">Видалити</button>
                </div>
            `;
            cartWrapper.appendChild(cartItem);
        }
        totalPriceContainer.querySelector("span").textContent = `${totalPrice} ₴`;
    }    
    document.body.addEventListener("click", function (event) {
        if (event.target.classList.contains("increase")) {
            let index = event.target.dataset.index;
            cart[index].quantity++;
        } else if (event.target.classList.contains("decrease")) {
            let index = event.target.dataset.index;
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
            }
        } else if (event.target.classList.contains("remove-item")) {
            let index = event.target.dataset.index;
            cart.splice(index, 1);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    });

    checkoutButton.addEventListener("click", function () {
        alert("Замовлення оформлено! Очікуваний час доставки: 1 хвилина.");
        localStorage.removeItem("cart");
        cart = [];
        renderCart();
        let deliveryEndTime = new Date().getTime() + 1 * 60 * 1000;
        localStorage.setItem("deliveryEndTime", deliveryEndTime);

        startTimer();
    });

    function startTimer() {
        let timerElement = document.getElementById("timer");
        let deliveryEndTime = localStorage.getItem("deliveryEndTime");

        if (!deliveryEndTime) {
            timerElement.textContent = "--:--";
            return;
        }
        function updateTimer() {
            let currentTime = new Date().getTime();
            let remainingTime = deliveryEndTime - currentTime;
            if (remainingTime <= 0) {
                timerElement.textContent = "Замовлення доставлено!";
                localStorage.removeItem("deliveryEndTime");
                return;
            }
            let minutes = Math.floor(remainingTime / (1000 * 60));
            let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
            timerElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

            setTimeout(updateTimer, 1000);
        }
        updateTimer();
    }
    startTimer(); 
    renderCart();
});