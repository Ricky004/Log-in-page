const password = document.querySelector('.password')
const eyeOpen = document.querySelector('.eye_open')
const strength = document.querySelector('.strength')
const str = document.querySelector('.str')
const form = document.querySelector('.form')
const email = document.querySelector('.email')
const error = document.querySelector('.error')
const eField = document.querySelector('.email')
const pField = document.querySelector('.password')


eyeOpen.addEventListener('click', () => {
     if(password.type === "password") {
        password.setAttribute('type','text')
        eyeOpen.classList.add('eye_close')
     } else {
        password.setAttribute('type','password')
        eyeOpen.classList.remove('eye_close')
     }
})

password.addEventListener('input', () => {
    if(password.value.length > 0) {
        strength.style.display = "block"
    } else {
        strength.style.display = "none"
    }
    if(password.value.length < 4) {
        str.innerText = "weak"
        str.style.color = "red"
    }
    if(password.value.length > 4 && password.value.length < 7) {
        str.innerText = "medium"
        str.style.color = "orange"
    }
    if(password.value.length > 7 && password.value.length < 20) {
        str.innerText = "strong"
        str.style.color = "green"
    }
})

form.addEventListener('submit', (e) => {
    let msg = []
    if(email.value == '' || email.value == null) {
        msg.push("Fillup the email pls")
        error.style.display = "block"
        eField.classList.add("shake")
    }
    if(password.value == '' || password.value == null) {
        msg.push("Password is requierd")
        pField.classList.add("shake")
    }
    if(password.value.length <= 7) {
        msg.push("Minimum 8 character is required")
    }
    if(password.value == "password" || password.value == "PASSWORD") {
        msg.push("password or PASSWORD as password is not valid")
        pField.classList.add("shake")
    }
    if(msg.length > 0) {
        e.preventDefault() 
        error.innerText = msg.join(', ')
    }

})


