const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const rounds = document.getElementById("rounds");
const comp_answer = document.getElementById("comp_answer");
const grade =  document.getElementById("grade");
const score = document.getElementById("score");
let userScore = 0
let compScore = 0
let roundNum = 0
let names = "";


    

rock.addEventListener("click",() =>{
    let name = "Rock"
    const array = ["Rock", "Paper","Scissors"]
    let random = Math.floor(Math.random() * 3)
    console.log(array[random])
    if(name === array[random])
      {  userScore+=1
        roundNum +=1
        console.log(`${userScore} ${roundNum}`)
    }else{
        compScore+=1
        roundNum+=1
        console.log(`${userScore} ${compScore} ${roundNum}`)

    }
})
paper.addEventListener("click",() =>{
    let name = "Paper"
    const array = ["Rock", "Paper","Scissors"]
    let random = Math.floor(Math.random() * 3)
    console.log(array[random])
    if(name === array[random])
        {  userScore+=1
          roundNum +=1
          console.log(`${userScore} ${compScore} ${roundNum}`)
      }else{
          compScore+=1
          roundNum+=1
          console.log(`${userScore} ${compScore} ${roundNum}`)
  
      }
})
scissors.addEventListener("click",() =>{
    let name = "Scissors"
    const array = ["Rock", "Paper","Scissors"]
    let random = Math.floor(Math.random() * 3)
    console.log(array[random])
    if(name === array[random])
        {  userScore+=1
          roundNum +=1
          console.log(`${userScore} ${roundNum}`)
      }else{
          compScore+=1
          roundNum+=1
          console.log(`${userScore} ${compScore} ${roundNum}`)
  
      }
})

