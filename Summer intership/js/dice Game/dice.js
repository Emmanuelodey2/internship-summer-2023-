
function roll(){

    const images = []


    let random = Math.floor(Math.random() *6) + 1;
    document.getElementById("change").textContent = ` Dice: ${random}`;

    images.push(`<img src ="dice_images/${random}.png" alt = "Dice ${random}">`)
    document.getElementById("pictures").innerHTML = images

    console.log(random);
}