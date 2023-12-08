var i = 0;
var txt1 = "Point of Sales";
const speed = 75;

function Write() {
    if(i < txt1.length) {
        document.getElementById("typer").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(Write, speed);
    }
}

var e = 0;
var txt2 = "A Point of Sales Management web application for culinary.";
var speed2 = 80;

function Write2() {
    if(e < txt2.length) {
        document.getElementById("typer2").innerHTML += txt2.charAt(e);
        e++;
        setTimeout(Write2, speed2);
    }
}

window.onload = function () {
    Write();
    Write2();
}