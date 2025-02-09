document.addEventListener("DOMContentLoaded", function () {
    const hearts = document.querySelector(".floating-hearts");
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("span");
        heart.innerHTML = "💙";
        heart.classList.add("heart");
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${3 + Math.random() * 2}s`;
        hearts.appendChild(heart);
    }
});
