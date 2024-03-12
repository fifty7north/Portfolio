const cursor = document.getElementById("cursor");
const coords = { x: 0, y: 0 };

cursor.style.left = "0";
cursor.style.left = "0";

window.addEventListener("mousemove", (e) => {
  coords.x = e.clientX;
  coords.y = e.clientY;

  cursor.style.left = coords.x - 16 + "px";
  cursor.style.top = coords.y - 16 + "px";
});

window.addEventListener("mouseover", () => {
  cursor.style.opacity = "1";
});

window.addEventListener("mouseout", () => {
  cursor.style.opacity = "0";
});
