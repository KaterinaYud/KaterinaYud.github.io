const orders = [
    {
        date: "1 березня 2025",
        items: [
            { name: "Цезар", price: 200, img: "img/salat-tsezar.jpg" },
            { name: "Лимонад", price: 55, img: "img/napoi-limaad.jpg" }
        ],
        totalPrice: 255
    },
    {
        date: "15 січня 2025",
        items: [
            { name: "Філадельфія", price: 220, img: "img/sushi-filad.jpg" }
        ],
        totalPrice: 220
    },
    {
        date: "3 грудня 2024",
        items: [
            { name: "Чизкейк", price: 160, img: "img/desert-cheesecake.jpg" },
            { name: "Лате", price: 75, img: "img/napoi-late.avif" },
            { name: "Американо", price: 60, img: "img/napoi-americano.jpg" }
        ],
        totalPrice: 295
    }
];

const orderListContainer = document.getElementById('order-list');
let i = 0;
while (i < orders.length) {
    const order = orders[i];

    const orderElement = document.createElement('div');
    orderElement.classList.add('order');

    const orderDate = document.createElement('div');
    orderDate.classList.add('order-date');
    orderDate.textContent = order.date;
    orderElement.appendChild(orderDate);

    const orderItems = document.createElement('div');
    orderItems.classList.add('order-items');

    let j = 0;
    while (j < order.items.length) {
        const item = order.items[j];

        const orderItem = document.createElement('div');
        orderItem.classList.add('order-item');

        const itemImage = document.createElement('img');
        itemImage.src = item.img;
        itemImage.classList.add('item-image');
        itemImage.alt = item.name;
        orderItem.appendChild(itemImage);

        const itemName = document.createElement('span');
        itemName.textContent = item.name;
        orderItem.appendChild(itemName);

        const itemPrice = document.createElement('span');
        itemPrice.classList.add('item-price');
        itemPrice.textContent = item.price + " ₴";
        orderItem.appendChild(itemPrice);

        orderItems.appendChild(orderItem);
        j++;
    }
    orderElement.appendChild(orderItems);
    const totalPrice = document.createElement('div');
    totalPrice.classList.add('total-price');
    totalPrice.innerHTML = `<span>Загальна сума: </span><span class="price">${order.totalPrice} ₴</span>`;
    orderElement.appendChild(totalPrice);
    orderListContainer.appendChild(orderElement);
    i++;
}

const allOrders = document.querySelectorAll('.order');
allOrders.forEach(order => {
    console.log("Замовлення знайдено:", order);
});
