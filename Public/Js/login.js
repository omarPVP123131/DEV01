document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;

    // Guardar el nombre de usuario en el almacenamiento local del navegador.
    localStorage.setItem("username", username);

    // Redirigir al usuario a la página "index.html".
    window.location.href = "/Public/Html/calculadora.html";
});

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function changeBackgroundColor() {
    var body = document.body;
    var currentColor = body.style.backgroundColor;
    var newColor = getRandomColor();
  
    body.style.backgroundColor = newColor;
    setTimeout(function() {
      body.style.backgroundColor = currentColor;
      changeBackgroundColor();
    }, 100);
  }
  
  window.addEventListener("load", function() {
    changeBackgroundColor();
  });
