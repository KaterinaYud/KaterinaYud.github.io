const menuItems = [
    {
        category: "Піца",
        items: [
            { name: "Маргарита", description: "Сир, томатний соус, базилік.", price: "245 ₴", img: "img/margarita.jpg" },
            { name: "Пепероні", description: "Пепероні, моцарела, соус томатний.", price: "280 ₴", img: "img/peperoni.jpg" },
            { name: "Гавайська", description: "Шинка, ананас, моцарела, соус томатний.", price: "250 ₴", img: "img/gavai.png" },
            { name: "4 сири", description: "Моцарела, горгонзола, пармезан, дорблю.", price: "260 ₴", img: "img/cheese.jpg" },
            { name: "Карбонара", description: "Вершковий соус, шинка, бекон, пармезан.", price: "290 ₴", img: "img/carbonara.jpg" }
        ]
    },
    {
        category: "Суші",
        items: [
            { name: "Філадельфія", description: "Лосось, вершковий сир, рис.", price: "220 ₴", img: "img/sushi-filad.jpg" },
            { name: "Каліфорнія", description: "Краб, авокадо, огірок, рис, норі.", price: "200 ₴", img: "img/sushi-califor.jpg" },
            { name: "Суші з креветкою", description: "Лосось, креветка, рис, соус унагі.", price: "230 ₴", img: "img/sushi-krevetka.jpg" },
            { name: "Гарячі Суші", description: "Рис, норі, філадельфія, креветка, сухарі Панко.", price: "250 ₴", img: "img/sushi-gariachi.jpg" },
            { name: "Сет Макі", description: "Лосось, спайсі соус, креветки, рис, норі.", price: "240 ₴", img: "img/sushi-maki.jpg" }
        ]
    },
    {
        category: "Салати",
        items: [
            { name: "Грецький", description: "Сир фета, томат, огірок, паприка, маслини, оливки, мікс салату, лимонно-оливковий соус.", price: "180 ₴", img: "img/salat-grets.jpg" },
            { name: "Цезар", description: "Салат, перепелині яйця, куряче м'ясо, бекон, помідори черрі, пармезан.", price: "200 ₴", img: "img/salat-tsezar.jpg" },
            { name: "Салат Свіжий", description: "Синя капуста, морква, заправка за смаком.", price: "150 ₴", img: "img/salat-cab.jpg" },
            { name: "Літній", description: "Помідори, селера, червона цибуля, петрушка, лимонний сік.", price: "190 ₴", img: "img/salat-litniy.jpg" }
        ]
    },
    {
        category: "Десерти",
        items: [
            { name: "Капкейки", description: "Маленькі тортики, які вразять своєю різноманітністю смаків і текстур, чудово поєднуючи солодкий крем з м’якою основою.", price: "65 ₴", img: "img/desert-capcake.jpg" },
            { name: "Чизкейк", description: "Ніжний кремовий пиріг на хрусткому коржі, який дарує ідеальне поєднання солодкості та легкості.", price: "80 ₴", img: "img/desert-cheesecake.jpg" },
            { name: "Наполеон", description: "Слоїстий, легкий та тортик, де кожен шматочок дарує насолоду.", price: "85 ₴", img: "img/desert-napoleon.jpg" },
            { name: "Сирники", description: "М’які та повітряні сирні пиріжки, смажені до золотистої скоринки, з ніжним смаком і ароматом.", price: "100 ₴", img: "img/desert-syrnyk.jpeg" },
            { name: "Тирамісу", description: "На основі сиру маскарпоне, як наповнювач додається печиво «савоярді», кава та какао.", price: "90 ₴", img: "img/desert-tiram.jpg" }
        ]
    },
    {
        category: "Напої",
        items: [
            { name: "Чай", description: "Чорний, зелений чай, ягідний, імбирний.", price: "45 ₴", img: "img/napoi-tea.jpg" },
            { name: "Американо", description: "Класична кава з насиченим смаком і ароматом, яка підкорює своєю простотою та елегантністю.", price: "60 ₴", img: "img/napoi-americano.jpg" },
            { name: "Лате", description: "М’яка кава з вершковою текстурою, що створює ідеальний баланс між кавовою гіркотою і молочною ніжністю.", price: "75 ₴", img: "img/napoi-late.avif" },
            { name: "Лимонад", description: "Яскраво-цитрусовий напій з природною кислинкою, що втамує спрагу і додасть енергії.", price: "55 ₴", img: "img/napoi-limaad.jpg" },
            { name: "Мохіто", description: "Освіжаючий коктейль з лайму, м’яти та содової води, який приносить відчуття літньої прохолоди навіть у найспекотніші дні.", price: "55 ₴", img: "img/napoi-moxito.jpg" }
        ]
    }
];

const categoriesContainer = document.querySelector(".categories");
categoriesContainer.innerHTML = "";

for (let category of menuItems) {
    let categoryHTML = `<div class="category">
                            <h2 class="name__category">${category.category}</h2>
                            <div class="container">`;
    for (let item of category.items) {
        categoryHTML += `<div class="card">
                            <img src="${item.img}" alt="${item.name}">
                            <h2>${item.name}</h2>
                            <p class="description" style="display: none;">${item.description}</p>
                            <button class="toggle-description">Переглянути деталі</button>
                            <div class="price">${item.price} </div>
                            <button class="add-to-cart" data-name="${item.name}" data-price="${item.price}" data-img="${item.img}">Додати в кошик</button>
                        </div>`;
    }
    categoryHTML += `</div></div>`;
    categoriesContainer.innerHTML += categoryHTML;
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];
document.body.addEventListener("click", function (event) {
    if (event.target.classList.contains("add-to-cart")) {
        const button = event.target;
        const name = button.dataset.name;
        const price = parseInt(button.dataset.price);
        const img = button.dataset.img;
        let item = cart.find(item => item.name === name);
        if (item) {
            item.quantity++;
        } else {
            cart.push({ name, price, img, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        button.style.backgroundColor = "white";
        button.textContent = "Додано";
        setTimeout(() => {
            button.style.backgroundColor = "";
            button.textContent = "Додати в кошик";
        }, 1000);
    }
});

document.querySelectorAll(".toggle-description").forEach(button => {
    button.addEventListener("click", function () {
        const description = this.previousElementSibling;
        if (description.style.display === "none") {
            description.style.display = "block";
            this.textContent = "Сховати опис";
        } else {
            description.style.display = "none";
            this.textContent = "Переглянути деталі";
        }
    });
});

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.05)";
        this.style.transition = "transform 0.3s";
    });
    card.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    });
});

