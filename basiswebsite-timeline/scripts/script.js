// JavaScript Document

var deEersteButton = document.querySelector("ol li:nth-of-type(1) button");
var deEersteMario = document.querySelector("ol li:nth-of-type(1) img");

deEersteButton.addEventListener("click", eersteHoopla);

function eersteHoopla() {
    deEersteMario.classList.toggle("ikBenEr");
    document.body.classList.remove("J1990", "J1996", "J2001", "J2008");
    document.body.classList.toggle("J1988");
}

var deTweedeButton = document.querySelector("ol li:nth-of-type(2) button");
var deTweedeMario = document.querySelector("ol li:nth-of-type(2) img");

deTweedeButton.addEventListener("click", tweedeHoopla);


function tweedeHoopla() {
    deTweedeMario.classList.toggle("ikBenEr"); 
    document.body.classList.remove("J1988", "J1996", "J2001", "J2008");
    document.body.classList.toggle("J1990");
}


var deDerdeButton = document.querySelector("ol li:nth-of-type(3) button");
var deDerdeMario = document.querySelector("ol li:nth-of-type(3) img");

deDerdeButton.addEventListener("click", derdeHoopla);

function derdeHoopla() {
    deDerdeMario.classList.toggle("ikBenEr");
    document.body.classList.toggle("J1996");
    document.body.classList.remove("J1988", "1900", "J2001", "J2008");
}


var deVierdeButton = document.querySelector("ol li:nth-of-type(4) button");
var deVierdeMario = document.querySelector("ol li:nth-of-type(4) img");

deVierdeButton.addEventListener("click", vierdeHoopla);

function vierdeHoopla() {
    deVierdeMario.classList.toggle("ikBenEr");
    document.body.classList.remove("J1988", "1900", "J1996", "J2008");
    document.body.classList.toggle("J2001");
}



var deVijfdeButton = document.querySelector("ol li:nth-of-type(5) button");
var deVijfdeMario = document.querySelector("ol li:nth-of-type(5) img");

deVijfdeButton.addEventListener("click", vijfdeHoopla);

function vijfdeHoopla() {
    deVijfdeMario.classList.toggle("ikBenEr");
    document.body.classList.remove("J1988", "1900", "J1996", "J2001");
    document.body.classList.toggle("J2008");
}