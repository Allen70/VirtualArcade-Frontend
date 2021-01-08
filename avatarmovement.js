const nopassingElement = document.querySelectorAll('.solid')
const textfield = document.querySelector('.text-field')
var objectArray = []

nopassingElement.forEach( object => {
    let left = object.offsetLeft 
    let right = (left + object.clientWidth)
    let top = object.offsetTop
    let bottom = (top + object.clientHeight)
    let game = object.classList[0]
    

        let solidObject = {
        left: left, 
        right: right,
        top: top, 
        bottom: bottom,
        game: game
    }
    objectArray.push(solidObject)
})

document.addEventListener("keydown", (event) => {
    let avatarLeft = avatar.offsetLeft
    let avatarTop = avatar.offsetTop
    let avatarRight = (avatar.offsetLeft + 16)
    let avatarBottom = (avatar.offsetTop + 16)
    switch (event.key){
        case ("a"):
            canAvatarMoveLeft(avatarTop, avatarBottom, avatarLeft)
            switch(value){
                case (true):
                    moveavatarLeft()
                case (false):
                    break
            }
            break
        case("d"):
            canAvatarMoveRight(avatarTop, avatarBottom, avatarRight)
            switch(value){
                    case (true):
                        moveavatarRight()
                    case (false):
                        break
            }
            break
        case("w"):
            canAvatarMoveup(avatarLeft, avatarRight, avatarTop)
            switch(value){
                    case (true):
                        moveavatarUp()
                    case (false):
                        break
            }
            break
        case("s"):
            canAvatarMoveDown(avatarLeft, avatarRight, avatarBottom)
            switch(value){
                case (true):
                    moveavatarDown()
                case (false):
                    break
            }
            break
        case("Enter"):
            avatarInteract(avatarLeft,avatarBottom,avatarRight,avatarTop)
    }
})

function avatarInteract(avatarLeft,avatarBottom,avatarRight,avatarTop){
    objectArray.forEach( object => {
      if (Math.abs(avatarBottom - object.top)<4 || Math.abs(avatarTop - object.bottom)<4 || Math.abs(avatarRight - object.left)<4 || Math.abs(avatarLeft - object.right)<4){
          switch (object.game) {
              case "game-one":
                    interactGameOne()
                  break;
              case "game-two":  
                    interactGameTwo()
              default:
                  break;
          }
      }
    })
}
function interactGameTwo(){
    textfield.innerHTML = `
    <div class="user-input">
        <h2> Game is out of order
        </h2>
        <button class="no">Okay</button>
    </div>
    `
    let noButton = document.querySelector('.no')
    noButton.addEventListener('click', (event)=>{
        let userInput = document.querySelector('.user-input')
        userInput.remove()
    })
}
function    canAvatarMoveDown(avatarLeft, avatarRight, avatarBottom){
    value = true
    objectArray.forEach(object => {
            if (Math.abs(avatarBottom - object.top)<4 && (avatarLeft > object.left && avatarLeft < object.right || avatarRight > object.left && avatarRight < object.right)){
                    value = false
                    return value
            }
            }
    )
    return value
}
function canAvatarMoveup(avatarLeft, avatarRight, avatarTop) {
    value = true
        objectArray.forEach(object => {
        if (Math.abs(avatarTop - object.bottom)<4 && (avatarLeft > object.left && avatarLeft < object.right || avatarRight < object.right && avatarRight > object.left)){
                value = false
                return value
            }
    })
    return value
}
function    canAvatarMoveRight(avatarTop, avatarBottom, avatarRight) {
    value = true
        objectArray.forEach(object => {
        if (Math.abs(avatarRight - object.left)<4 && (avatarTop < object.bottom && avatarTop > object.top || avatarBottom < object.bottom && avatarBottom > object.top )){
                value = false
                return value
            }
    })
    return value
}
function    canAvatarMoveLeft(avatarTop, avatarBottom, avatarLeft){
    value = true
    objectArray.forEach(object => {
        if (Math.abs(avatarLeft - object.right)<4 && (avatarTop < object.bottom && avatarTop > object.top || avatarBottom < object.bottom && avatarBottom > object.top )){
                value = false
                return value
            }
    })
    return value
}
function moveavatarUp() {
    let bottomNumbers = avatar.style.bottom.replace("px", "")
    let bottom = parseInt(bottomNumbers, 10)
    if (bottom <= 482) {
        avatar.style.bottom = `${bottom +4}px`
    }
}
function moveavatarDown() {
    let bottomNumbers = avatar.style.bottom.replace("px", "")
    let bottom = parseInt(bottomNumbers, 10)
    if (bottom > 0) {
        avatar.style.bottom = `${bottom -4}px`
    }
}
function moveavatarLeft() {
    let leftNumbers = avatar.style.left.replace("px", "")
    let left = parseInt(leftNumbers, 10)
    if (left > 0) {
        avatar.style.left = `${left -4}px`
    }
}
function moveavatarRight() {
    let leftNumbers = avatar.style.left.replace("px", "")
    let left = parseInt(leftNumbers, 10)
    if (left < 784) {
        avatar.style.left = `${left +4}px`
    }
}