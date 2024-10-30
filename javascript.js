let currentLight = "green"; // Começamos com o verde ligado

function changeTrafficLight() {
    if (currentLight === "green") {
        document.getElementById("green").className = "light light-off";
        document.getElementById("yellow").className = "light yellow-light";
        currentLight = "yellow";
    } else if (currentLight === "yellow") {
        document.getElementById("yellow").className = "light light-off";
        document.getElementById("red").className = "light red-light";
        currentLight = "red";
    } else if (currentLight === "red") {
        document.getElementById("red").className = "light light-off";
        document.getElementById("green").className = "light green-light";
        currentLight = "green";
    }
}