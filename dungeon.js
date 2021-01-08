const dungeon = document.querySelector('.dungeon')
const DTF = document.querySelector('.dungeon-text-field')
const dungeonDecision = document.querySelector('.dungeon-decision')
console.log(dungeonDecision)
loadDungeon()
function loadDungeon() {
    dungeon.classList.toggle('hidden')
    dungeonGameIntro()
}
function dungeonGameIntro(){
    DTF.classList.add('intro-text-in-long')
    DTF.textContent = "During an unpropitious and brisk morning in the bustling world of Eindor. A childs project would start its journey to save the world."
    setTimeout(() => { DTF.classList.replace('intro-text-in-long','intro-text-out')}, 9000);
    setTimeout(() => { run2ndPassage()}, 13000);
}

function run2ndPassage(){
    DTF.classList.replace('intro-text-out','intro-text-in-short')
    DTF.textContent = "The child tinkering with the first magical construct gave it a command."
    setTimeout(() => { DTF.classList.replace('intro-text-in-short','intro-text-out')}, 4000);
    setTimeout(() => { run3rdPassage()}, 9000);
}

function run3rdPassage() {
    DTF.classList.replace('intro-text-out','intro-text-in-short')
    DTF.textContent = "Do the best you can!"
    setTimeout(() => { DTF.classList.replace('intro-text-in-short','intro-text-out')}, 4000);
    setTimeout(() => { run4thPassage()}, 9000);
}
function run4thPassage() {
    DTF.classList.replace('intro-text-out','intro-text-in-short')
    DTF.textContent = "They were the most inspiring words you've ever heard."
    setTimeout(() => { MainMenu()}, 9000);
}

function MainMenu() {
    DTF.textContent = "Start Your adventure?"
    let createCharacter= document.createElement('div')
    createCharacter.classList.add('create-char')
    createCharacter.classList.add('main-menu')
    createCharacter.classList.add('selected')
    createCharacter.value = 'create-char'
    createCharacter.textContent = 'Create Character'

    let exitDiv = document.createElement('div')
    exitDiv.classList.add('exit')
    exitDiv.classList.add('main-menu')
    exitDiv.value = 'exit'
    exitDiv.textContent = "Exit"

    dungeonDecision.append(createCharacter, exitDiv)
}

document.addEventListener('keydown', (event)=>{
    switch (event.key){
        case "ArrowUp":
            moveSelectedUp()
            break
        case "ArrowDown":
            moveSelectedDown()
            break
        case "Enter":
            select()
            break
    }
})

function moveSelectedUp(){
    let currentSelection = document.querySelector('.selected')
    if (currentSelection.previousElementSibling != null){
        currentSelection.classList.remove('selected')
        currentSelection.previousElementSibling.classList.add('selected')
    }
}

function moveSelectedDown() {
    let currentSelection = document.querySelector('.selected')
    if (currentSelection.nextElementSibling != null){
        currentSelection.classList.remove('selected')
        currentSelection.nextElementSibling.classList.add('selected')
    }
}
function select() {
    let currentSelection = document.querySelector('.selected')
    switch (currentSelection.classList[0]){
        case "exit":
            dungeon.remove()
            let arcade= document.querySelector('.arcade ')
            arcade.classList.toggle('hidden')
            break
    }
}