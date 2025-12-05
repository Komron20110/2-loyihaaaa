document.getElementById("searchInput").addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();
    let cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();
        card.style.display = text.includes(filter) ? "block" : "none";
    });
});


document.getElementById("searchInput").addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();
    let cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();
        if (text.includes(filter)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
