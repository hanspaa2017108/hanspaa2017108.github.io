document.addEventListener("DOMContentLoaded", function () {
  var el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();

  var toggle = document.getElementById("theme-toggle");
  var root = document.documentElement;

  if (toggle) {
    toggle.addEventListener("click", function () {
      var isDark = root.getAttribute("data-theme") === "dark";
      var next = isDark ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }
});
