function show() {
  alert("Hola!");
}

window.onload = function () {
  const input = document.getElementById("input");
  //   input.onclick = show;
  input.addEventListener("click", show, false);
};
