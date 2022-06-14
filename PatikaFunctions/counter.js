let counter = 0
let counterDOM = document.querySelector('#counter')

let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')
let doubleDOM = document.querySelector('#double')
let zeroDOM = document.querySelector('#zero')

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)
doubleDOM.addEventListener("click", clickEvent)
zeroDOM.addEventListener("click", clickEvent)

function clickEvent(){

    switch(this.id){
        case "increase" :
            counterDOM.innerHTML = counter += 1 
            break;
        case "decrease" :
            counterDOM.innerHTML = counter -= 1
            break;
        case "double" :
            counterDOM.innerHTML = counter *= 2
            break;
        case "zero" : 
            counterDOM.innerHTML = counter = 0
            break;        
    }
}