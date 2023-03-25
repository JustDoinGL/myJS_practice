const text = document.getElementById("task32__p");
const link = document.getElementById("task32__a");

link.addEventListener("click", function (event) {
    event.preventDefault();
    const t = "Обновление страницы отключено!"
    text.innerHTML = t
})
