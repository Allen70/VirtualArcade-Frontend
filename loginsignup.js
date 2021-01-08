baseURL = 'http://localhost:3000/'
usersURL = `${baseURL}users/`
loginURL = `${baseURL}login/`

const loginSignupFull = document.querySelector('.login-signup-full')
const signupForm = document.querySelector('.signup')
const signupFormContainer = document.querySelector('.signup-form')
const loginForm = document.querySelector('.login')
const loginFormContainer = document.querySelector('.login-form')
const loginSignupSelect = document.querySelector('.login-signup-selector')
const loginButton = document.querySelectorAll('.login-button')
loginButton[0].addEventListener('click', event => {
    loginSignupSelect.classList.toggle('hidden')
    loginFormContainer.classList.toggle('hidden')
})

const signupButton = document.querySelectorAll('.signup-button')
signupButton[0].addEventListener('click', () => {
    loginSignupSelect.classList.toggle('hidden')
    signupFormContainer.classList.toggle('hidden')
})
loginButton[1].addEventListener('click', () => {
    loginFormContainer.classList.toggle('hidden')
    signupFormContainer.classList.toggle('hidden')
})
signupButton[1].addEventListener('click', () =>{
   signupFormContainer.classList.toggle('hidden')
   loginFormContainer.classList.toggle('hidden')      
})

signupForm.addEventListener('submit', (event)=> {
    event.preventDefault()
    var signUpFormData = new FormData(event.target)
    var name = signUpFormData.get('name')
    var password = signUpFormData.get('password')
    var passwordConfirmation = signUpFormData.get('password-confirmation')
    var user = {
        name: name, 
        password: password,
        passwordConfirmation: passwordConfirmation,
        coins: 20
    }
    if (password === passwordConfirmation){
        fetch(usersURL,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user
            })
        })
        .then(response => response.json())
        .then(result => {
            if(result.message === "ok"){
                postUserToLogin(user)
            }

        })
    }
})

loginForm.addEventListener('submit', (event) => {
    event.preventDefault()
    var loginFormData = new FormData(event.target)
    var name = loginFormData.get('name')
    var password = loginFormData.get('password')
    var passwordConfirmation = loginFormData.get('password-confirmation')
    var user = {
        name: name, 
        password: password,
        passwordConfirmation: passwordConfirmation
    }
    postUserToLogin(user)

})

function postUserToLogin(user){
    if (user.password === user.passwordConfirmation){
        fetch(loginURL,{
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                user
            })
        })
        .then(response => response.json())
        .then(result => {
            if(result.token){
                window.localStorage.setItem("token", result.token)
                window.localStorage.setItem("user", result.user.name)
                window.localStorage.setItem("coin", result.user.coins)
                hidelogin()
                loadArcadeGame()
            }
        })
    }
}
function hidelogin(){
    loginSignupFull.remove()
}