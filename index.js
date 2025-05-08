
let sumEl = document.getElementById("text-el")
let sumEl2 = document.getElementById("text-two")
console.log(sumEl)
let count = 0
let count2 = 0


function homebtnone(){
    count += 1
    sumEl.textContent = count 
    
    
}
btnone()

function homebtntwo(){
    count += 2
    sumEl.textContent = count 
}

function homebtnthree(){
    count += 3
    sumEl.textContent = count 
}

function guestbtnone(){
    count2 += 1
    sumEl2.textContent = count2 
}

function guestbtntwo(){
    count2 += 2
    sumEl2.textContent = count2
}

function guestbtnthree(){
    count2 += 3
    sumEl2.textContent = count2
}