const dungeon = document.querySelector('.dungeon')
const DTF = document.querySelector('.dungeon-text-field')
loadDungeon()
function loadDungeon() {
    dungeon.classList.toggle('hidden')
    loadMainMenu()
    console.log(DTF)
}

function loadMainMenu(){
    DTF.textContent = "During an unpropitious and brisk morning in the bustling world of Eindor. When, of all things, a childs project would start its journey to save the world."
}