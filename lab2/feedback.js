document.addEventListener("DOMContentLoaded", function () {
    const defaultReviews = [
        { name: "Олена", text: "Смачна піца, швидка доставка!" },
        { name: "Андрій", text: "Чудові суші, рекомендую!" }
    ];

    function loadReviews() {
        let reviewsList = document.getElementById("reviewsList");
        reviewsList.innerHTML = "";
        defaultReviews.forEach(review => {
            let li = document.createElement("li");
            li.innerHTML = `<strong>${review.name}:</strong> ${review.text}`;
            reviewsList.appendChild(li);
        });
        let tempReviews = JSON.parse(sessionStorage.getItem("tempReviews")) || [];
        tempReviews.forEach(review => {
            let li = document.createElement("li");
            li.innerHTML = `<strong>${review.name}:</strong> ${review.text}`;
            reviewsList.appendChild(li);
        });
    }
    loadReviews();
    setInterval(loadReviews, 3000);
});
