const turnOnOff = document.getElementById("turnOnOff");
const lamp = document.getElementById("lamp");
const turnRecharge = document.getElementById("recharge");

function isLampBroken() {
    return lamp.src.indexOf("quebrada") > -1
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = "img/ligada.jpg";
        turnOnOff.textContent = "Desligar"
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = "img/desligada.jpg";
        turnOnOff.textContent = "Ligar"
    }
}

function lampBroken() {
    lamp.src = "img/quebrada.jpg";
}

function lampOnOff() {
    if(turnOnOff.textContent == "Ligar") {
        lampOn();
        turnOnOff.textContent = "Desligar";
    } else {
        lampOff();
        turnOnOff.textContent = "Ligar"
    }
}

function recharge() {
    location.reload()
}

turnOnOff.addEventListener("click", lampOnOff);
turnRecharge.addEventListener("click", recharge);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseout", lampOff);
lamp.addEventListener("dblclick", lampBroken);