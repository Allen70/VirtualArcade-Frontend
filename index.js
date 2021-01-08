baseURL = 'http://localhost:3000/'
usersURL = `${baseURL}users/`
loginURL = `${baseURL}login/`

const testDiv = document.querySelector('.test')
const characterInfoContainer = document.querySelector('.character-info-container')
let avatar = document.querySelector('#avatar')
function loadArcadeGame(){
    const arcade = document.querySelector('.arcade')
    arcade.classList.toggle('hidden')
        loadCharacterInfo()
        let script = document.createElement('script')
            script.src = "avatarmovement.js"
            document.body.append(script)
        loadTooltips()
    }

function loadCharacterInfo(){
    const userName = window.localStorage.getItem("user")
    var userCoin = window.localStorage.getItem("coin")
    const userNameShow = document.createElement('p')
    userNameShow.textContent = 'User: ' + userName
    userNameShow.classList.add('char-name')
    const userCoinShow = document.createElement('p')
    userCoinShow.textContent = `Coin: ${userCoin}`
    userCoinShow.classList.add('char-coin')
    characterInfoContainer.append(userNameShow, userCoinShow)
}

function loadTooltips(){
    const tooltipContainer = document.querySelector('.tooltip')
    let instructions = document.createElement('p')
    instructions.classList.add('startinginstructions')
    instructions.innerHTML = 'To move your Avatar around the arcade use the WASD keys.<br>To interact with a game move your Avatar close and press the Enter key'
    tooltipContainer.append(instructions)
    setTimeout(() => { tooltipContainer.remove()}, 9000);
}