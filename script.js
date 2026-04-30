// 平滑滾動
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});


// 💬 留言功能 + 過濾
function addMessage() {
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !message) return;

  // 🚫 禁止「我是奶龍」
  if (message.includes("我是奶龍")) {

    const warnText = `${name}不是奶龍`;

    alert(warnText);

    createFloatingText(warnText);

    return;
  }

  // 正常留言
  const div = document.createElement("div");
  div.classList.add("message");
  div.innerHTML = `<strong>${name}</strong><br>${message}`;

  document.getElementById("messages").appendChild(div);

  document.getElementById("name").value = "";
  document.getElementById("message").value = "";
}


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