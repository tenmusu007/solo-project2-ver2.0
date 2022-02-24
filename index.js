"use strict"
let cards = []
let dcards =[]
let K = 13
let hands = cards.length
let psum = 0
let dsum = 0
let isAlive = true
let hasBlackJack = false
let drawCard = true
let nodrawCard = false
let dealerdrawCard = true
let dealernodrawCard = false
let tie = false
let message = " "
let dealerEl = document.getElementById("dealer-el")
let dsumEl = document.getElementById("dsum-el")
let playerEl = document.getElementById("player-el")
let resultEl = document.getElementById("result-el")
let psumEl = document.getElementById("psum-el")

function startCard(){
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards = [firstcard, secondcard]
    psum = firstcard + secondcard
    if (psum === 21){
        message = "You've got Black Jack"
    }
    resultEl.textContent = message
    renderGame()
}
function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 )+ 1
    if (randomNumber > 10){
        return 10
    }else{
        return randomNumber
    } 
}
function renderGame(){
    playerEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        playerEl.textContent +=cards[i] + " "
    }
    psumEl.textContent = "Sum: " + psum
    if(psum === 21){
        hasBlackJack = true
        message = "You've got Black Jack"
    }else if(psum > 21){
        nodrawCard = true
        message = "You Bust"
    }else{
        drawCard = true
        message = "Do you want draw a card?"
    }
    resultEl.textContent = message
}
function newCard(){
    if (drawCard === true && hasBlackJack === false){
        let card = getRandomCard()
        psum += card
        cards.push(card)
        renderGame()
    }

}
function dealerStart(){
    dealerdrawCard = true
    let dealercard1 = getRandomCard()
    dcards = [dealercard1]
    dsum = dealercard1
    godealaer()
}
function getRandomDealerCard() {
    let randomNumber = Math.floor( Math.random()*13 )+ 1
    if (randomNumber >10 ){
        return 10
    } else{
        return randomNumber
    } 
}
function godealaer(){
    dealerEl.textContent = "Cards: "
    for(let i  =0; i < dcards.length; i ++){
        dealerEl.textContent +=dcards[i] + " "
    }
    dsumEl.textContent = "Sum: " + dsum
    if(dsum < 17){
        dealerdrawCard = true
    }else if(dsum > 21){
        dealernodrawCard = true
    }else if(dsum === psum){
        tie = true
    }else if (dsum > psum){
        dealerdrawCard  = false
    }
}
function skipCard(){
    if(dealerdrawCard === true && dealernodrawCard === false){
        let dcard = getRandomDealerCard()
        dsum += dcard
        dcards.push(dcard)
        godealaer()
    }else if(dealernodrawCard === true){
        message = "You win"
    }else if(tie === true && dealerdrawCard === false ){
        message = "Tie"
    }else if(dealernodrawCard === false && dealernodrawCard ===false){
        message = "You Lose"
    }
    resultEl.textContent = message
}