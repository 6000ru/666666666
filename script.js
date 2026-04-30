// 平滑滾動
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});


// 🌫️ 背景漂浮字
function createFloatingText(text) {
  const layer = document.getElementById("bg-float-layer");

  const span = document.createElement("div");
  span.classList.add("float-text");

  span.innerText = text;

  span.style.left = Math.random() * window.innerWidth + "px";
  span.style.top = Math.random() * window.innerHeight + "px";
  span.style.fontSize = (20 + Math.random() * 30) + "px";

  layer.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 8000);
}
