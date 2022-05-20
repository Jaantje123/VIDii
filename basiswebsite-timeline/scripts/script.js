/////////// 1 /////////////

var deEersteButton = document.querySelector("ol li:nth-of-type(1) button");
var deEersteMario = document.querySelector("ol li:nth-of-type(1) img");
var deEersteTekst = document.querySelector("ol li:nth-of-type(1) a");

deEersteButton.addEventListener("click", eersteHoopla);

function eersteHoopla() {
    deEersteMario.classList.toggle("ikBenEr");
    document.body.classList.remove("J1990", "J1996", "J2001", "J2008");
    document.body.classList.toggle("J1988");
    deEersteTekst.classList.toggle ("tekstZichtbaar");
    
}

/////////// 2 /////////////

var deTweedeButton = document.querySelector("ol li:nth-of-type(2) button");
var deTweedeMario = document.querySelector("ol li:nth-of-type(2) img");
var deTweedeTekst = document.querySelector("ol li:nth-of-type(2) a");

deTweedeButton.addEventListener("click", tweedeHoopla);


function tweedeHoopla() {
    deTweedeMario.classList.toggle("ikBenEr"); 
    document.body.classList.remove("J1988", "J1996", "J2001", "J2008");
    document.body.classList.toggle("J1990");
    deTweedeTekst.classList.toggle ("tekst2Zichtbaar");
}

/////////// 3 /////////////

var deDerdeButton = document.querySelector("ol li:nth-of-type(3) button");
var deDerdeMario = document.querySelector("ol li:nth-of-type(3) img");
var deDerdeTekst = document.querySelector("ol li:nth-of-type(3) a");

deDerdeButton.addEventListener("click", derdeHoopla);

function derdeHoopla() {
    deDerdeMario.classList.toggle("ikBenEr");
    document.body.classList.toggle("J1996");
    document.body.classList.remove("J1988", "1900", "J2001", "J2008");
    deDerdeTekst.classList.toggle ("tekst3Zichtbaar");
}

/////////// 4 /////////////

var deVierdeButton = document.querySelector("ol li:nth-of-type(4) button");
var deVierdeMario = document.querySelector("ol li:nth-of-type(4) img");
var deVierdeTekst = document.querySelector("ol li:nth-of-type(4) a");

deVierdeButton.addEventListener("click", vierdeHoopla);

function vierdeHoopla() {
    deVierdeMario.classList.toggle("ikBenEr");
    document.body.classList.remove("J1988", "1900", "J1996", "J2008");
    document.body.classList.toggle("J2001");
    deVierdeTekst.classList.toggle ("tekst4Zichtbaar");
}

/////////// 5 /////////////

var deVijfdeButton = document.querySelector("ol li:nth-of-type(5) button");
var deVijfdeMario = document.querySelector("ol li:nth-of-type(5) img");
var deVijfdeTekst = document.querySelector("ol li:nth-of-type(5) a");

deVijfdeButton.addEventListener("click", vijfdeHoopla);

function vijfdeHoopla() {
    deVijfdeMario.classList.toggle("ikBenEr");
    document.body.classList.remove("J1988", "1900", "J1996", "J2001");
    document.body.classList.toggle("J2008");
    deVijfdeTekst.classList.toggle ("tekst5Zichtbaar");
}