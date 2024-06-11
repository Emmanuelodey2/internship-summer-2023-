const button = (input) =>{
    document.getElementById("input").value += input;
};

const evaluate = () =>{
    document.getElementById("input").value = eval(document.getElementById("input").value)
};


