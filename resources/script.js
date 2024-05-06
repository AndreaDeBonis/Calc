let display = document.getElementById("display")

let a = "0"
let b = "0"
let operator
let state = false
let operations = {
    "+" : add,
    "*" : multiply,
    "/" : divide,
    "-" : subtract
}

document.addEventListener('click', e => {

    if (!isNaN(e.target.id)) {
        if (!state) {
            a = a + e.target.id
            display.innerHTML = a
        }
        else {
            b = b + e.target.id
            display.innerHTML = b
        }

        
    }
    if (e.target.id == "+" || e.target.id == "*" || e.target.id == "/" || e.target.id == "-") {
        state = !state
        operator = e.target.id
        display.innerHTML= "0"
    }

    else if (e.target.id == "="){
        let result = operations[operator](a,b)
        
        //    if (operator=="+") {
   //         result = add(a,b)
        display.innerHTML = result
    //    }
        a = result
        b = ""
        state = !state
    }
})

function add (a, b) {
    return parseInt(a)+parseInt(b)
}

function multiply (a, b) {
    return parseInt(a)*parseInt(b)
}

function divide (a,b) {
    return parseInt(a)/parseInt(b)
}

function subtract (a,b) {
    return parseInt(a)-parseInt(b)
}