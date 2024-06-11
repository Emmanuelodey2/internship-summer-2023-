//How to write into the console and to create an alert 
// console.log(`Hello`);
// console.log(`i hate pizza`)

//this
// window.alert(`hello`);
//or
// alert(`${x}rice`)

//this is a comment
/* 
comment
*/

//Declaring a variable
// let x = 100
// let v; 
// v = 100
// let student = true;
// let enrolled = false;

// while (student) {
//     if (!enrolled){
//         document.getElementById("myp2").textContent = "You are enrolled"
//         break;
//     } else{
//         //How to change what was written into a html tag
//         document.getElementById("myh1").textContent = `${x} Smart`;
//         document.getElementById("myp").textContent = `${v} smart choice`;
//     }
// }

// Arithmetic Operators
// let students = 30;
// let student = students + 1;
// let minus = students - 1;
// let division = students / 2;
// let multi = students * 2;
// let expo = students ** 2;
// let mod = students % 2;
// increment 
// students++;
// students+=2;
// console.log(mod);
// console.log(student);
// console.log(minus);
// console.log(division);
// console.log(multi);
// console.log(students);


//Operator Presedence 

// let result = 4 - 12 + 16;
// console.log(result);

//How to accept a user inputs

// window prompt
// let username;

// username = window.prompt("what is your username");

// document.getElementById("myh1").textContent = username;
// console.log(username);

//Create an input box
// first method
// let username
// document.getElementById("mysub").onclick = function(){
// username = document.getElementById("text").value;
// console.log(username)
// }
//second method
// function button (username) {
//     username = document.getElementById("text").value;
//     console.log(username);
// }


// type conversion

// let age = window.prompt("How old are you")
// age = Number(age)

// age+=1;

// console.log(age);

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";
// x = Number(x);
// y = String(y);
// z = Boolean(z);


// console.log(y);
// console.log(z);
// console.log(x,y,z);

// function circumference(radius, circumference){
//     const PI = 22 / 7;
//     radius =  document.getElementById("cir").value;
//     radius = Number(radius);
//     circumference = radius * 2 * PI;
//     document.getElementById("answer ").textContent= "The circumference of the circle is " + circumference;


// }


// radius = prompt("What is the radius");
// radius = Number(radius)
// circumference = 2 * PI * radius;
// console.log(circumference);

// console.log(PI)


// conditions 
// if (age > = 18) {
//     console.log("you are eligible")
// }let age = 18;


// ARRAYS

//  let fruits = ["apple", "orange", "banana"]
// //  fruits.push("coconut") //adds to the back of the array
// //  fruits.shift(); // removes from the last part of an array
// //  fruits.unshift("kiwi"); //adds to the front of the array
// //  fruits.pop();  //removes value from the top of an array

// fruits.sort().reverse();


// //  console.log(fruits[0]);
// //  console.log(fruits[1]);
// //  console.log(fruits[2]);
// //  console.log(fruits[3]);

// let index = fruits.indexOf("apple")
// console.log(index)
// for (i =0 ; i < fruits.length; i++){
//     console.log(fruits[i])
// } // te print the array from the first to last
// for ( i = fruits.length - 1; i>= 0; i--){
//     console.log(fruits[i])
// } // to print the array backwards

// for ( let fruit of fruits){
//     console.log(fruit)
// } //prints all elements in the array in descending order

// spread oper


// let number = [1,3,2,4,5];
// let maximum = Math.max(...number);
// let minimum = Math.min(...number);
// console.log(maximum)
// console.log(minimum)

// let username = "Bro Code"
// let myh = username.replaceAll(" ","");
// let letters = [...myh]
// console.log(letters)

// let fruits = ["apple", "banana", "coconut"]
// let vege = ["tomatoes", "carrots"]
// let food = [...fruits, ...vege]
// console.log(food);
// const person = {
//     fisrtnmae: "amy",
//     lastname: "anath",
//     gender: "Male",
//     state: "crossriver"
// }

// const {firstname,last,...otherpersonalinfo} = person

// console.log(`the name ${firstname} and last name ${last} the gender ${otherpersonalinfo.gender} `)


// const food1 = "pizza"
// const food2 = "hamburger"
// function open(...foods){
//     console.log(foods)
// }
// open(food1,food2)
// function spilll (...foods){
//     let array = foods.split("")
//     console.log(array)
// }
// spilll(food1,food2)

// Call back = function tat is passsed as an arguement to another function

                    // interacting with database network request reading a file

                    // function hello(callback){
                    //     setTimeout(function () {
                    //         console.log("hello")
                    //    }, 10000)
                    //     callback();

                    // }
                    // function goodbye(){
                    //     console.log("Goodbye")
                    // }
                    // hello(goodbye);
                    // 
                    
// For Each() = array.ForEach(function) 

// let numbers = [1,2,3,4,5]
// numbers.forEach(display);
// const num = numbers.findIndex(element => element === 3);
// console.log(num)
// function display(numbers){
//     dad = numbers*2
//     console.log(dad)

// }
// String methods 
//endsWith() checks if it ends with the parameter
//startWith() checks if the string starts with the parameter
//pop() and push() removes and adds to the end of an array respectively
//includes() checks if the parameter is in the string
// replaceAll() takes what you wnat to replace and you input the replacement 
//charAt() function that gets the any element of a given index
// padEnd() padStart() takes the lengt and what to fill the gap spaces with at the end and star trepectively
// let username = "  Emmnauel"
// console.log(username.charAt(0))
// //indexOf finds the index of the first occurence of the string
// console.log(username.indexOf("m"))
// //lastIndex finds the index of teh last occurence of the pased value
// console.log(username.lastIndexOf("m"))
// //trim() to remove white spaces after or before the string
// console.log(username.trim())

//map() =accept a callback that applies the function to each element of the aaray, then returns a new array

// const numbers = [1,2,3,4,5]
// console.log(numbers)
// const square = numbers.map(call)
// console.log(numbers)
// console.log(square)
// function call(element){
//    return Math.pow(element, 2)
    
// }
//  const students = ["spongebob-1" ,"patrick-1", "squidbward-1","sandy-1"]
//  const dates = students.map(uppercase)
//  console.log(dates)

//  function uppercase(element){
//     const parts = element.slice(0,1).toUpperCase() + element.slice(1,10)
//     return parts

    
//  }

//filter() = creates a new array by filtering out elements true or false 

// let numbers = [1,2,3,4,5,6]
// let evens = numbers.filter((element) => element % 2 === 0)

// console.log(evens)


//reduce() = reduce the elements in an array to a single value the syntax array.reduce(callback, initialValue);
//toFixed()= to add decimal places variable.toFixed(how many decimal places)

// const princes = [5,13,23,45,6,7]
// const maxi = princes.reduce((accumulator , element) => Math.max(accumulator, element))
// console.log(maxi)


//objects= {key:value,
            // methods: function()}
// let person = {
//     firtname: "Emmanuel",
//     lastname: "Odey",
//     sayHello: function() {console.log("hello")},
//     age: 20,
//     isEmployed: true
// }

// const display = function(){console.log(person.sayHello)};
// display();

// this = a reference to the object in the object 
            // doesnt work with arrow functions 
            // works with fnction expressions

// const person = {
//     name: "Emmanule",
//     food: "Rice",
//     sayHello: function(){console.log(`Hi i am ${this.name} and i like ${this.food}`)}
// }
// person.sayHello();

// constructors = a special method for defining the properties and methods of objects

// function Car(make, model,year,color){
//     this.make = make,
//     this.model = model,
//     this.color= color,
//     this.year = year,
//     this.drive = function(){console.log(`You drive a ${this.model}`)}
// }
// let car = []
// const car1 = new Car("Ford","Mustang", 2024, "red");
// const car2 = new Car("Dodge","Charger", 2026, "silver");
// car.push(car1)
// car.push(car2)
// let cars = []
// for (let i in car){
//     for (j in car[i]){
//           cars.push(car[i][j])
//         }
        
// }


//class

// class product{
//     constructor(name,price){
//         this.name = name;
//         this.price = price;
//     }

//     displayProduct(){
//         console.log(`Product: ${this.name}`)
//         console.log(`Price: $${this.price.toFixed(2)}`)
//     }
//     caculateTotal(){
//         const salestax = 0.05;
//        const total = this.price + (this.price*salestax)
//        console.log(`The total is: $${total.toFixed(2)}`)
//     }
// }

// let obj = new product("shirt",19.99)
// obj.displayProduct();
// obj.caculateTotal();

//static

// class matUtility{
//     static PI = 3.1456
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     AreaOfCircle(){
        
//     }
// }
// console.log(mathUtility.PI)

//inheritance it allows a new class inherit methods in another class 
                //it takes care of repitition

// class Anima{
//     alive = true;
//     eat(){
//         console.log(`this ${this.name} is eating`)
//     }
//     sleep(){
//         console.log(`this ${this.name} is sleeping`)
//     }
// }

// class rabbi extends Anima{
//     name = "rabbit";
// }

// const rabbits = new rabbi()
// console.log(rabbits.eat());
// console.log(rabbits.sleep());

//super a keyword used in classes to call the constructor or access the properties and methods of a parent (superclass)

// class Animal{
//     constructor(name,age){
//         this.name=name;
//         this.age=age
//     }
//     move(speed){
//         console.log(`This ${this.name} runs at a speed of ${speed}km/h`)
//     }
// }

// class rabbit extends Animal{
//     constructor(name,age,runspeed){
//         super(name,age);
//         this.runspeed=runspeed;
//     }
//     run(){
//         console.log(`this ${this.name} can run`)
//         super.move(this.runspeed)
//     }
// }

// const rabbite = new rabbit("rabbit",1,50)
// console.log(`Name: ${rabbite.name}\nAge:${rabbite.age}\nSpeed:${rabbite.runspeed}km/h`)
// rabbite.run();


// getters = special methods that make a property readable
//seeters = special methods that make a propert writeable
//validate and modify a value when reading =/writing a property

// class Rectangle{
//     constructor(width,height){
//         this.width= width
//         this.height = height
//     }
//     set width(newwidth){
//         if (newwidth > 0){
//             this._width = newwidth
//         }
//         else{
//             console.error("Width must be a positive number")
//         }
//     }
//     set height(newheight){
//         if (newheight > 0){
//             this._height = newheight
//         }
//         else{
//             console.error("Height must be a positive number")
//         }
//     }  
//     get width(){
//         return this._width;
//     }
//     get height(){
//         return this._height;
//     }
//     get area(){
//         return this._height**2 * this._width
//     }
// }

// const rectangle = new Rectangle(6, 7)
// console.log(`${rectangle.width} and ${rectangle.height} and th earea is ${rectangle.area}`)

// let array = [
//             {Category: "Rice and Pasta",
//                 name: ["eba","jollof rice","Fried rice","chicken","egg"],
//                 price: [150,250,350,560,200]
//             },
//             {Category: "Drinks",
//             name: ["yoyo","Monster","Nutri-milk","Chapman","Berry Blast"],
//             price: [350,500,600,700,1000]
//             }
//         ];

//     for(x in array){
//         console.log(`\n${array[x].Category}\n`)
//         for (y=0; y<array[x].name.length; y++){
//            while(array[x].name[0] === "yoyo"){
//             console.log(`${array[x].name[y]} - $${array[x].price[y]}`)
//             break;
//            }
//         }
//         }

// closure : it works like a classs making declard variables in the function private
//              A function defined in another function
// function outer(){
//     let message = "Hello";

//     function inner(){
//         console.log(message)
//     }

//     inner();
// }

// outer();

// function increment(){
//     let count = 0;

//     function counter(){
//         count++
//         console.log(`Count increased to ${count}`)
// }
//     function getcount(){
//         return count;
//     }
// return{counter,getcount};
// }
// const counter = increment();

// counter.counter();

// console.log(`Count increased to ${counter.getcount()} and the `)

// // OR

// function increment(){
//     let count = 0;

//     function counter(){
//         count++
//         console.log(`Count increased to ${count}`)
// }
// counter();
// }
// increment();

// SetTimeout = setTimeout(callback, delay(ms))
// clearTimeout = clearTimeout(variable)
// setInterval = setTimeout(callback,loop-delay(ms))
// clearIntrval = clearInterval(variable)

// asynchronous
// function func1(callback){
//     setTimeout(() => {console.log("Task 1")
//                     callback();
//     },3000)
// }
// function func2(){
//    setTimeout (() => 
//     {console.log("task 2")
//     console.log("task 3")
//     console.log("task 4"),2000})

// }
// func1(func2);

// console.log("hello")
// console.log("u are have met the end"
// )

// Error Handling - try{}&catch(error){} or finally{}
// used with conditionals e.g (if else) throw new Error(string)
// try{
//     // NETWORKS ERROR
//     //SECURITY ERROS 
//     //PROMISE ERRORS
//     console.log(x)
// }
// catch(error){
//     console.error(error)
// }
// finally{
//     //CLOSE FILES
//     // CLOSE CONNECTIONS
//     // RELEASE RESOURCES
//     console.log("This code always executes")
// }
// console.log("You have reached the end ")

// Element Selectors 
// document.getElementById();           Element or null
// document.getElementsByClassName();   HTML collection
// document.getElementsByTagName();     HTML collection
// document.querySelector();            First Element or null
// document.querySelectorAll();         NODELIST (has the ForEach()) the rest dont and to use that function use the Array.from()
// Array.from() returns an array


// DOM Navigation
// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// Create an Element
// document.createElement("")

// Append Element to DOM
// document.body.append(document.createElement("")) adds it to te last of the seleced DOM
// prepend() adds to  the first
// insertBefore(newElement,currentElement) appends in teh middle of the target

// Remove HTML Element
// select the parent of that element then the removeChild();
// document.body.removeChild(newelement)

// .addEventListener("event",callback) mouseout,mouseover, click

// key Events : keydown, keyup
// document.addEventListener("keydown") 


// Hide /Show in HTML

const btn = document.getElementById("btn");
const text =  document.getElementById("goat");
btn.addEventListener("click",() => {
    if(text.style.visibility == "hidden"){
        text.style.visibility = "visible";
        btn.textContent = "Hide"
    }else{
        text.style.visibility = "hidden";
        btn.textContent = "show"
        }
    })

