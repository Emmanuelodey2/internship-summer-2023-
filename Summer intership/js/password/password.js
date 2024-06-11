const generatePassword= (length) => {
    let lowercase = "qwertyuioplkjhgfdsazxcvbnm";
    let uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM"
    let numbers = "013456789"
    let symbols = "!@#$%^&*()_+={}[]|\:<>?.,"

    const allchars = [...lowercase,...uppercase,...numbers,...symbols]

    let password = ""

    for (i = 0; i< length ; i++){
        const randomindex = Math.floor(Math.random()*allchars.length)
        password += allchars[randomindex];
        
    }

    console.log(password)

}
generatePassword(12);

const generatePassword2= (length) => {
    let lowercase = "qwertyuioplkjhgfdsazxcvbnm";
    let uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM"
    let numbers = "013456789"
    let symbols = "!@#$%^&*()_+={}[]|\:<>?.,"

    let password = ""
    for (i = 0; i< length ; i++){
    const randomlower = Math.floor(Math.random()*lowercase.length)
    const randomupper = Math.floor(Math.random()*uppercase.length)
    const randomnumbers = Math.floor(Math.random()*numbers.length)
    const randomsymbols = Math.floor(Math.random()*symbols.length)

    password += lowercase[randomlower]
    password +=uppercase[randomupper]
    password += numbers[randomnumbers]
    password += symbols[randomsymbols]

    }
    let a = true
   
    while  (a == true){
        for(j= 0; j < 5; j++ ){
            let new_password =""
        for ( i = 0; i< length ; i++){
            let index = Math.floor(Math.random()*password.length)
            new_password += password[index] 

        }
    console.log(new_password)
    a = false
        }
    }

   
}
    generatePassword2(12);