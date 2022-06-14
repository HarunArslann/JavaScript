
const name = document.querySelector("#myName")
let myNAme = prompt("Lutfen adınızını giriniz : ").toUpperCase()
name.innerHTML = myNAme

const patika = document.querySelector("#title")
patika.innerHTML = "PATİKA"

const myClock = document.querySelector("#myClock");
myClock.classList.add("clock");

function showTime(){   
    let currentTime = new Date();  
    
    let hour = currentTime.getHours(); 
    let minute = currentTime.getMinutes(); 
    let second = currentTime.getSeconds(); 
    let day = currentTime.getDay();

    switch (day){
        case 1 :
            day = "Pazartesi"
            break;
        case 2 :
            day = "Salı"
            break;
        case 3 :
            day = "Çarşamba"
            break;
        case 4 :
            day = "Perşembe"
            break;
        case 5 :
            day = "Cuma"
            break;
        case 6 :
            day = "Cumartesi"
            break;
        case 7 :
            day = "Pazar"
            break;

    }

    setTimeout(showTime,1000);
    myClock.innerHTML = `${hour}:${minute}:${second} ${day}`;
}
showTime();




