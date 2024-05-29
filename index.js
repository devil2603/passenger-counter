
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment(){

    count = count + 1
    countEl.innerText = count
}



function save(){
    var countStr = count + ","
    saveEl.innerText += countStr 
    countEl.innerText = 0
    console.log(countStr)
    count = 0
  
}

function remove(){
    saveEl.innerText = "previous entries:" 
 
}
