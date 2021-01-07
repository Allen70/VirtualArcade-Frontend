baseURL = 'http://localhost:3000/'
coinsURL = `${baseURL}coins/`
usersURL = `${baseURL}users/`

function interactGameOne() {
    let currentBalance = parseInt(window.localStorage.getItem("coin"))
    let cost = 2 
    seekUserInput(currentBalance, cost)
}
function seekUserInput(currentBalance, cost) {
    textfield.innerHTML = `
    <div class="user-input">
        <h2> Your current balance is ${currentBalance}, playing this game costs ${cost} would you like to play?
        </h2>
        <button class="yes">Yes</button>
        <button class="no">No</button>
    </div>
    `
    let userInput = document.querySelector('.user-input')
    let yesButton = document.querySelector('.yes')
    let noButton = document.querySelector('.no')
        noButton.addEventListener('click', ()=>{
        userInput.remove()
        })
        yesButton.addEventListener('click', ()=>{
            let newBalance = currentBalance - cost 
            let coinShow = document.querySelector('.char-coin')
            coinShow.textContent = `Coin: ${newBalance}`
            localStorage.setItem("coin", newBalance)
            let user = {
                name: localStorage.user,
                coins: newBalance
                }
            fetch(usersURL, {
                method: 'PATCH',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    user
                })
            })
            userInput.remove()
            enterDungeon()
        })
}

function enterDungeon() {
    let arcade = document.querySelector('.arcade')
    arcade.classList.add('hidden')
    let script = document.createElement('script')
    script.src = "dungeon.js"
    document.body.append(script)

}