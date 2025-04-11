const menuItems = [
    {
        category: "Піца",
        items: [
            { name: "Маргарита", description: "Сир, томатний соус, базилік.", price: "245", img: "/assets/img/margarita.jpg" },
            { name: "Пепероні", description: "Пепероні, моцарела, соус томатний.", price: "280", img: "/assets/img/peperoni.jpg" },
            { name: "Гавайська", description: "Шинка, ананас, моцарела, соус томатний.", price: "250", img: "/assets/img/gavai.png" },
            { name: "4 сири", description: "Моцарела, горгонзола, пармезан, дорблю.", price: "260", img: "/assets/img/cheese.jpg" },
            { name: "Карбонара", description: "Вершковий соус, шинка, бекон, пармезан.", price: "290", img: "/assets/img/carbonara.jpg" }
        ]
    },
    {
        category: "Суші",
        items: [
            { name: "Філадельфія", description: "Лосось, вершковий сир, рис.", price: "220", img: "/assets/img/sushi-filad.jpg" },
            { name: "Каліфорнія", description: "Краб, авокадо, огірок, рис, норі.", price: "200", img: "/assets/img/sushi-califor.jpg" },
            { name: "Суші з креветкою", description: "Лосось, креветка, рис, соус унагі.", price: "230", img: "/assets/img/sushi-krevetka.jpg" },
            { name: "Гарячі Суші", description: "Рис, норі, філадельфія, креветка, сухарі Панко.", price: "250", img: "/assets/img/sushi-gariachi.jpg" },
            { name: "Сет Макі", description: "Лосось, спайсі соус, креветки, рис, норі.", price: "240", img: "/assets/img/sushi-maki.jpg" }
        ]
    },
    {
        category: "Салати",
        items: [
            { name: "Грецький", description: "Сир фета, томат, огірок, паприка, маслини, оливки, мікс салату, лимонно-оливковий соус.", price: "180", img: "/assets/img/salat-grets.jpg" },
            { name: "Цезар", description: "Салат, перепелині яйця, куряче м'ясо, бекон, помідори черрі, пармезан.", price: "200", img: "/assets/img/salat-tsezar.jpg" },
            { name: "Салат Свіжий", description: "Синя капуста, морква, заправка за смаком.", price: "150", img: "/assets/img/salat-cab.jpg" },
            { name: "Літній", description: "Помідори, селера, червона цибуля, петрушка, лимонний сік.", price: "190", img: "/assets/img/salat-litniy.jpg" }
        ]
    },
    {
        category: "Десерти",
        items: [
            { name: "Капкейки", description: "Маленькі тортики, які вразять своєю різноманітністю смаків і текстур, чудово поєднуючи солодкий крем з м’якою основою.", price: "65", img: "/assets/img/desert-capcake.jpg" },
            { name: "Чизкейк", description: "Ніжний кремовий пиріг на хрусткому коржі, який дарує ідеальне поєднання солодкості та легкості.", price: "80", img: "/assets/img/desert-cheesecake.jpg" },
            { name: "Наполеон", description: "Слоїстий, легкий та тортик, де кожен шматочок дарує насолоду.", price: "85", img: "/assets/img/desert-napoleon.jpg" },
            { name: "Сирники", description: "М’які та повітряні сирні пиріжки, смажені до золотистої скоринки, з ніжним смаком і ароматом.", price: "100", img: "/assets/img/desert-syrnyk.jpeg" },
            { name: "Тирамісу", description: "На основі сиру маскарпоне, як наповнювач додається печиво «савоярді», кава та какао.", price: "90", img: "/assets/img/desert-tiram.jpg" }
        ]
    },
    {
        category: "Напої",
        items: [
            { name: "Чай", description: "Чорний, зелений чай, ягідний, імбирний.", price: "45", img: "/assets/img/napoi-tea.jpg" },
            { name: "Американо", description: "Класична кава з насиченим смаком і ароматом, яка підкорює своєю простотою та елегантністю.", price: "60", img: "/assets/img/napoi-americano.jpg" },
            { name: "Лате", description: "М’яка кава з вершковою текстурою, що створює ідеальний баланс між кавовою гіркотою і молочною ніжністю.", price: "75", img: "/assets/img/napoi-late.avif" },
            { name: "Лимонад", description: "Яскраво-цитрусовий напій з природною кислинкою, що втамує спрагу і додасть енергії.", price: "55", img: "/assets/img/napoi-limaad.jpg" },
            { name: "Мохіто", description: "Освіжаючий коктейль з лайму, м’яти та содової води, який приносить відчуття літньої прохолоди навіть у найспекотніші дні.", price: "55", img: "/assets/img/napoi-moxito.jpg" }
        ]
    }
];
export default menuItems;
