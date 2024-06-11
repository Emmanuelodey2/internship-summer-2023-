const time = () => {
    const date =  new Date();
    const days =["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday", "Saturday"]
    const months =["January", "Febuary", "March", "April","May","June", "July", "August","Semptember","October","November","December"]
    let hours = date.getHours();
    const meridian = hours >= 12 ? "PM" : "AM";
    hours = hours === 0 ? 24 :  hours
    hours = hours.toString().padStart(2,"0");
    let minutes = date.getMinutes().toString().padStart(2,"0");
    let seconds = date.getSeconds().toString().padStart(2,"0");
    let month = date.getMonth().toString();
    let day = date.getDay()
    let year = date.getFullYear()
    let times = date.getDate().toString().padStart(2,"0");
    let text = times.endsWith("1") ? "st" : times.endsWith("2") ? "nd" : times.endsWith("3") ? "rd" : "th";
    document.getElementById("Date").textContent= `${days[day]} ${times + text} ${months[month]} ${year}`
    document.getElementById("time").textContent= `${hours} : ${minutes} : ${seconds}- ${meridian}`
    console.log(`${hours} : ${minutes} : ${seconds} s.${meridian}`);
}
time();
setInterval(time,1000);



