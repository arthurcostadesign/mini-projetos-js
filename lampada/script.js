const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");
const turnRecharge = document.getElementById("recharge");

function isLampBroken() {
    return lamp.src.indexOf("quebrada") > -1
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = "img/ligada.jpg";
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = "img/desligada.jpg";
    }
}

function lampBroken() {
    lamp.src = "img/quebrada.jpg";
}

function recharge() {
    location.reload()
}

turnOn.addEventListener("click", lampOn);
turnOff.addEventListener("click", lampOff);
turnRecharge.addEventListener("click", recharge);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseout", lampOff);
lamp.addEventListener("dblclick", lampBroken);