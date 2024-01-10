const txtProElement = document.getElementById("txt-pro");
const texts = ["Motion Design", "Front-End", "Design Gráfico"];
let index = 0;

function changeText() {
    txtProElement.innerHTML = texts[index];
    index = (index + 1) % texts.length;
}

setInterval(changeText, 5000);