
let cont = document.documentElement.innerHTML


const regex = /[jJ][oO][eE]\s*[Bb][iI][Dd][eE][Nn]|[Bb][iI][Dd][eE][Nn]/g

const brandonStr = "Lets go Brandon!"

document.documentElement.innerHTML = cont.replace(regex, brandonStr)