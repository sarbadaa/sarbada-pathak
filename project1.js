// Project 1 JS

// Button alert
const btn = document.getElementById("alertBtn");
btn.addEventListener("click", () => {
    alert("Hello! You clicked the button in Project 1!");
});

// Create floating stars
const starCount = 100;

for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // Random position
    star.style.top = Math.random() * window.innerHeight + "px";
    star.style.left = Math.random() * window.innerWidth + "px";

    // Random animation duration
    star.style.animationDuration = 2 + Math.random() * 3 + "s";

    document.body.appendChild(star);
}
