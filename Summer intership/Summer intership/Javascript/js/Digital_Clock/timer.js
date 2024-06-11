let hours = 0;
let minutes = 0;
let seconds = 0;
let day = 0;
const text = document.getElementById("text");
const display_time = document.getElementById("display_time");

const timer = () =>{
        seconds = seconds += 1
    if (seconds === 60){
        seconds = 0
        minutes += 1;
    }if(minutes === 60){
        minutes = 0;
        hours += 1;
    } if (hours === 24){
        seconds= 0;
        minutes = 0;
        hours = 0;
        day += 1
    }else{
        display_time.textContent =`${hours.toString().padStart(2,"0")} : ${minutes.toString().padStart(2,"0")} : ${seconds.toString().padStart(2,"0")}`;
        console.log(`${hours.toString().padStart(2,"0")} : ${minutes.toString().padStart(2,"0")} : ${seconds.toString().padStart(2,"0")}`)
    }
}

display_time.textContent =`${hours.toString().padStart(2,"0")} : ${minutes.toString().padStart(2,"0")} : ${seconds.toString().padStart(2,"0")}`;
console.log(`${hours.toString().padStart(2,"0")} : ${minutes.toString().padStart(2,"0")} : ${seconds.toString().padStart(2,"0")}`)
