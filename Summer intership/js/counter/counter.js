
let count = 0

const increase = () => {
    count++;
    document.getElementById("number").textContent= count;
}
const reset = () => {
    count = 0;
    document.getElementById("number").textContent= count;
    
}
const decrease = () => {
     if (count != 0){
        count--;
        document.getElementById("number").textContent= count;
    }
}
       
   
    
