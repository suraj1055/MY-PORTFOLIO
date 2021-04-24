// Accessing all the elements

const Form = document.getElementById("form");
const Username = document.getElementById("name");
const Email = document.getElementById("email");
const Message = document.getElementById("message");

//Events

Form.addEventListener("submit", (event) => {
    const UsernameVal = Username.value.trim();
    const EmailVal = Email.value.trim();

    //Validate Username
    if (UsernameVal === "") {
        setErrorMsg(Username, 'username cannot be blank');
        event.preventDefault();
    }
    else if (UsernameVal.length <= 2) {
        setErrorMsg(Username, 'username should be min 3 characters');
        event.preventDefault();
    }
    else {
        setSuccessMsg(Username);
    }

    //Validate Email
    if (EmailVal === "") {
        setErrorMsg(Email, 'email cannot be blank');
        event.preventDefault();
    }
    else if (!isEmail(EmailVal)) {
        setErrorMsg(Email, 'email not valid');
        event.preventDefault();
    }
    else {
        setSuccessMsg(Email);
    }
})

//Defining the isEmail function

const isEmail = (EmailVal) => {
    var atSymbol = EmailVal.indexOf("@");
    if (atSymbol < 1) return false;
    var dot = EmailVal.lastIndexOf(".");
    if (dot <= atSymbol + 2) return false;
    if (dot === EmailVal.length - 1) return false;
    return true;
}

//Defining the Error function

function setErrorMsg(input, msg) {
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');
    small.innerText = msg;
    formcontrol.className = "form-control error"
}

//Defining the success function

function setSuccessMsg(input) {
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');
    formcontrol.className = "form-control success"
}