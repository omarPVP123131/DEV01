document.addEventListener("DOMContentLoaded", function() {
    // Obtener el nombre de usuario almacenado en el almacenamiento local.
    const username = localStorage.getItem("username");

    // Mostrar el nombre de usuario en la página "index".
    if (username) {
        document.getElementById("username").textContent = username;
    } else {
        document.getElementById("username").textContent = "Usuario no identificado";
    }
});

let input = "";

function addToInput(value) {
    input += value;
    document.getElementById("input").value = input;
}

function clearInput() {
    input = "";
    document.getElementById("input").value = "";
}

function calculateResult() {
    try {
        const result = eval(input);
        document.getElementById("input").value = result;
        input = result.toString();
    } catch (error) {
        document.getElementById("input").value = "Error";
        input = "";
    }
}

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