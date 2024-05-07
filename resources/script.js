let display = document.getElementById("display")

let a = "0"
let b = "0"
let operator
let state = false
const operations = {
    "+" : add,
    "*" : multiply,
    "/" : divide,
    "-" : subtract
}

document.getElementById("button-container").addEventListener('click', e => {
    
    if (!isNaN(e.target.id)) {
        if (!state) {
            a = a + e.target.id
            display.innerHTML = parseFloat(a)
        }

        else {
            b = b + e.target.id
            display.innerHTML = parseInt(b)
        }        
    }

    else if (e.target.id == "+" || e.target.id == "*" || e.target.id == "/" || e.target.id == "-") {
        
        state = !state
        operator = e.target.id
        display.innerHTML= "0"
    }

    else if (e.target.id == "=") {
        getResult()
    }

    else if (e.target.id == "reset") {
        reset()
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

function reset () {
    a = "0"
    b = "0"
    state = false
    operator = "+"
    display.innerHTML = a
}

function getResult () {
    let result = operations[operator](a,b)
        if (isNaN(result) || (result == Infinity)) {
            alert("invalid operation")
        }
        else {
            display.innerHTML = result
            a = result
            b = ""
            state = !state
        }
}