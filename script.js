document.getElementById('registrationForm').addEventListener(
    'submit',function (e) {
        e.preventDefault();
        validateForm();
    }
);
function validateForm(){
    let isValid = true;

    // Error massage
    document.getElementById('nameError').innerText='';
    document.getElementById('emailError').innerText='';
    document.getElementById('passwordError').innerText='';


    // Name
    const name = document.getElementById('name').value;
    if(!name.match(/^[A-Za-z]+$/)){
        document.getElementById('nameError').innerText = 'Name must contain only letter'
        isValid=false;
    }

    //Email
    const email = document.getElementById('email').value;
    let emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
    if(!emailPattern.test(email)){
        document.getElementById('nameError').innerText = 'Name must contain only valid email'
        isValid=false;
    }

    const password = document.getElementById('password').value;
    if(password.length<8){
        document.getElementById('passwordError').innerText = 'your password contain at leat 8 characters long'
        isValid=false;
    }
    if(isValid){
        alert('Form submittc successfully!')
    }
}