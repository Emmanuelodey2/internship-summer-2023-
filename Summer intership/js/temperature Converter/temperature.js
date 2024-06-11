 submit= () => {
    let user = document.getElementById("myinput").value;
    user = Number(user);
    
   let celsius = document.getElementById("tocelsius");
   let fahrenheit = document.getElementById("toFahrenheit");
    let running = true;
    while(running){
        if(celsius.checked){
            let formula1 = (user - 273);
            document.getElementById("change").textContent = `${formula1} C`;
            break;
        }else if(fahrenheit.checked){
            let formula2 = user + 273;
            document.getElementById("change").textContent = `${formula2} F`;
            break;
        }else {
            document.getElementById("change").textContent = "Please Select Either Celsius Or Fahrenheit";
            running = false
        }
    }
    


}