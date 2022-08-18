let inpt = document.querySelector("#unit-el")
let btn = document.querySelector("#convert")
let len = document.querySelector("#len")
let vol = document.querySelector("#vol")
let mss = document.querySelector("#mss")

btn.addEventListener("click", function () {
    let num = Number(inpt.value)
    let feet = (3.281 * num).toFixed(2);
    let galons = (0.263 * num).toFixed(2);
    let pounds = (2.204 * num).toFixed(2);
    let meter = (num / 3.281).toFixed(2);
    let kilo = (num / 2.204).toFixed(2);
    let liter = (num / 0.263).toFixed(2);
    console.log(typeof inpt.value)
    console.log(feet)

    render(num, feet, kilo, liter,meter,  galons, pounds);
})

function render(num, feet, kilo, liter, meter, galons, pounds) {
    let lenVal = `${num} meters = ${feet} feet | ${num} feet = ${meter} meters`
    let volVal =  `${num} liters = ${galons} galons | ${num} galons = ${liter} litres`
    let massVal =  `${num} kg = ${pounds} pounds | ${num} pounds = ${kilo} kg`

    len.innerHTML = "" + lenVal;
    vol.innerHTML = "" + volVal;
    mss.innerHTML = "" + massVal;
    console.log(lenVal)
}


