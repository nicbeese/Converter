/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let enteredNumber = 0
const unit = document.getElementById("unit-el")
const convertBtn = document.getElementById("convert-btn")

let lengthInfo = document.getElementById("length-info")
let volumeInfo = document.getElementById("volume-info")
let massInfo = document.getElementById("mass-info")

/* lengthInfo.innerHTML += `0 meters = 0 feet | 0 feet = 0 meters`
volumeInfo.innerHTML = ` 0 liters = 0 gallons | 0 gallons = 0 liters`
massInfo.innerHTML = `0 kilos = 0 pounds | 0 pounds = 0 kilos`*/

convertBtn.addEventListener("click", function number() {
    let submittedNumber = unit.value
    console.log(submittedNumber)
    
    let feet = (unit.value * 3.281) 
    let meter = (unit.value / 3.281) 
    let liter = (unit.value * 0.264) 
    let gallon = (unit.value / 0.264) 
    let kilogram = (unit.value * 2.204) 
    let pound = (unit.value / 2.204)
    
    lengthInfo.innerHTML = `${submittedNumber} meters = ${feet.toFixed(3)} feet | ${submittedNumber} feet = ${meter.toFixed(3)} meters`
    
    volumeInfo.innerHTML = `${submittedNumber} liters = ${liter.toFixed(3)} gallons | ${submittedNumber} gallons = ${gallon.toFixed(3)} liters`
    
    massInfo.innerHTML = `${submittedNumber} kilos = ${kilogram.toFixed(3)} pounds | ${submittedNumber} pounds = ${pound.toFixed(3)} kilos`
})

