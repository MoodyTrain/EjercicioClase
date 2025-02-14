document.addEventListener("DOMContentLoaded", function() {
let titulo2 = document.querySelector("h2");
  titulo2.addEventListener("click", function() {
    alert("¡Click en H2!");
    console.log(titulo2)
  });

});