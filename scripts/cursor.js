const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".cursor-circle");
const cursor = document.querySelector(".cursor");

circles.forEach((circle) => {
  circle.x = "0";
  circle.y = "0";
});

window.addEventListener("mousemove", (e) => {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  cursor.style.left = x;
  cursor.style.top = y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

window.addEventListener("mouseover", (e) => {
  cursor.style.opacity = "1";
});

window.addEventListener("mouseout", (e) => {
  cursor.style.opacity = "0";
});
