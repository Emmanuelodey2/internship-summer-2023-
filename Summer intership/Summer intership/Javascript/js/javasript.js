const capitalize = () => {
    let fruits = ["apple","banana"]
    let array= []
    for(i in fruits){
       let fruit = fruits[i].charAt(0).toUpperCase() + fruits[i].slice(1)
        array.push(fruit)
       
    }
    fruits.pop()
    console.log(array)
    console.log(fruits)
}
capitalize();

const students = ["spongebob-1" ,"patrick-1", "squidbward-1","sandy-1"]
 const dates = students.map((element) => {
    const parts = element.slice(0,1).toUpperCase() + element.slice(1,20).toUpperCase()
    return parts
    
 })
 console.log(dates)

