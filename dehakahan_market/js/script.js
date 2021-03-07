
let myForm = document.getElementById('form_conactus')

myForm.addEventListener('submit', contactSubmit )


function contactSubmit(event) {
    
    event.preventDefault()

    let name = document.querySelector('#name');
    let phone = document.querySelector('#phone');
    let email = document.querySelector('#email');
    let message = document.querySelector('#message');

    let validName = false, validPhone = false, validEmail = false, validMessage = false;

    if (name.value.length <= 0) {
        name.classList.remove('is-valid')
        name.classList.add('is-invalid')
    } else {
        name.classList.remove('is-invalid')
        name.classList.add('is-valid')
        validName = true;
    }

    if (! /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone.value)) {
        phone.classList.remove('is-valid')
        phone.classList.add('is-invalid')
    } else {
        phone.classList.remove('is-invalid')
        phone.classList.add('is-valid')
        validPhone = true;
    }

    if (! /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value)) {
        email.classList.remove('is-valid')
        email.classList.add('is-invalid')
    } else {
        email.classList.remove('is-invalid')
        email.classList.add('is-valid')
        validEmail = true;
    }

    if (message.value.length <= 0) {
        message.classList.remove('is-valid')
        message.classList.add('is-invalid')
    } else {
        message.classList.remove('is-invalid')
        message.classList.add('is-valid')
        validMessage = true;
    }

    if(validName && validPhone && validEmail && validMessage){
        document.querySelector('.malert').style.display = 'block';       
    } else {
        document.querySelector('.malert').style.display = 'none'; 
    }
    
}
