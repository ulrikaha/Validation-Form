
const form = document.querySelector('#validationForm'); 
const input = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const repeatPassword = document.querySelector('#repeatPassword');
const checkbox = document.querySelector('#checkbox')
const errorMessage = document.querySelector('#errorMessage')

const regEx2 = /^([^0-9]*)$/





    const validateText = (id) => { 
        const input = document.querySelector(id)

    if(input.value.trim() === '') {
        console.log('Name can not be empty')
            return setError(input)

        } else if (input.value.lenght < 2) {
            console.log('Name can not be less than 2 characters long')
        return setError(input)
        
        }
        else if (!regEx2.test(input.value)) {
            console.log('Name can not include numbers')
            return setError(input)
    }
    console.log('Name is ok')
    return setSuccess(input)
    }




    const validateEmail = (id) => {
        const email = document.querySelector(id)

    const regEx1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/      

            if(email.value.trim() === '') {
                console.log('Email can not be blank')
            return setError(email)
    }

        else if (!regEx1.test(email.value)) {
            console.log('This is not a valid email')
            return setError(email)
    }

        console.log('Email is ok')
        return setSuccess(email)
    }




    const validatePassword = (id) => {
        const password = document.querySelector(id)

        
        if(password.value.trim() === '') {
            console.log('Password can not be blank')
            return setError(password)

            
        } else if (password.value.lenght < 6) {
            console.log('Password must be at least 6 characters long')
            return setError(password)
        }
            console.log('Password is ok')
        return setSuccess(password)
    }



    const validateRepeatPassword = (id) => {
        const repeatPassword = document.querySelector(id)

        if(repeatPassword.value.trim() === '') {
            console.log('Repeat password can not be blank')
            return setError(repeatPassword)
    }
        else if(!repeatPassword === password) {
            console.log('The passwords no not match')
        return setError(repeatPassword)
        }
        console.log('Repeat password is ok')
    return setSuccess(repeatPassword)
    }





    const validateCheckBox = (id) => {
        const checkbox = document.querySelector(id)

        checkBox.addEventListener('submit', function (e) {
        if (!checkbox.checked) {
            return setError(checkbox)

        console.log('Checkbox must be checked')
        return setError(checkbox)

        } 
        console.log('Checkbox is ok')
        return setSuccess(checkbox)
    });

    
    
    
    const setSuccess = (input) => {
        return true;
        }
        
        
        const setError = (input) => {
            feedback.classList.add('d-none');
            form.focus();
            console.log('Something is wrong with' + input.id)
            return false;
        }


    form.addEventListener('submit' , e => {
        e.preventDefault();




        const errors = [];  



        for (let i = 0; i < form.lenght; i++) {

        const inputId = '#' + form[i].id

            if(form[i].type === 'text') {
            errors[i] = validateText(inputId) 
            }
                
            else if(form[i].type === 'email') {
                errors[i] =  validateEmail(inputId)

            } 
                else if(form[i].type === 'password') {
                    errors[i] = validatePassword(inputId)
                    
                }
                
                else if(form[i].type === 'repeatPassword') {
                    errors[i] =  validateRepeatPassword(inputId)

            }
            else if(form[i].type === 'checkbox') {
                errors[i] =   validateCheckBox(inputId)
    }
    }

    console.log(errors)



    if(errors.includes(false)) {
    errorMessage.classList.remove('d-none') 
    console.log('Something is wrong!')  
    }
    else  {
    errorMessage.classList.add('d-none'); 
    console.log('Success')
    const user = new user(firstName.value, lastName.value, email.value, password.value)
    console.log(user.userSum());
    }

    
    });


        class User {
            constructor (firstName, lastName, email, password) {
                this.firstName = firstName
                this.lastName = lastName
                this.email = email
                this.password = password
            }
              userSum(){
              return `Firstname: ${this.firstName}  Lastname: ${this.firstName}  email: ${this.email}  password: ${this.password}`
              }
            }
        }
