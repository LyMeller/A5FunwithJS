const btn = document.querySelector("button");
const radfbtn = document.getElementById("fancyShmancyButton");
const radbbtn = document.getElementById("boringBettyButton");
const mbtn = document.getElementById("moo");
const suffix = "-Moo";

function changeFontSize() {
    document.getElementById("userInput").style.fontSize = "24px";
}

function changeFontStyle() {
    document.getElementById("userInput").style.fontWeight = "bold";
    document.getElementById("userInput").style.color = "blue"
    document.getElementById("userInput").style.textDecorationLine = "underline";
}

function backToNormal() {
    document.getElementById("userInput").style.fontWeight = "normal";
    document.getElementById("userInput").style.color = "black"
    document.getElementById("userInput").style.textDecorationLine = "none";
}

function moo() {
    let text = document.getElementById("userInput").value.toUpperCase().split(".").join(".-Moo");
    document.getElementById("userInput").value = text;
}

btn.addEventListener("click", changeFontSize);
radfbtn.addEventListener("click", changeFontStyle);
radbbtn.addEventListener("click", backToNormal);
mbtn.addEventListener("click", moo);
