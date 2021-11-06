if (window.screen.width >= 768) {
    document.getElementById('signInForm').classList.add('border', 'bg-white', 'shadow')
}

function validatetext(text) {
    const regEx = /^(?=.{2,})/;

    if (regEx.test(text))
        return true

    return false
}

function validatezip(zip) {
    const regEx = /^(?=.{5,})/;

    if (regEx.test(zip))
        return true

    return false
}

function validateEmailAddress(email) {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regEx.test(email))
        return true

    return false
}


function validatePassword(password) {
    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if (regEx.test(password))
        return true;

    return false;
}

/* function matchingpassword() {
    var pw1 = document.getElementById("password").value;
    var pw2 = document.getElementById("Confirmpassword").value;
    if (pw1 = pw2)
        return true;

    return false;
} */

function getAge(dob) {
    let today = new Date();
    let birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function onSubmit(event) {
    event.preventDefault()
    const errors = []

    for (let element of event.target) {
        switch (element.id) {

            case 'name':
                errors[0] = validatetext(element.value)
                if (errors[0] == false) { document.getElementById("namewrn").style.visibility = "visible"; }
                else { document.getElementById("namewrn").style.visibility = "hidden"; }
                break;

            case 'lname':
                errors[1] = validatetext(element.value)
                if (errors[1] == false) { document.getElementById("lnamewrn").style.visibility = "visible"; }
                else { document.getElementById("lnamewrn").style.visibility = "hidden"; }
                break;

            case 'email':
                errors[2] = validateEmailAddress(element.value)
                if (errors[2] == false) { document.getElementById("emailwrn").style.visibility = "visible"; }
                else { document.getElementById("emailwrn").style.visibility = "hidden"; }
                break;

            case 'country':
                errors[3] = validatetext(element.value)
                if (errors[3] == false) { document.getElementById("countrywrn").style.visibility = "visible"; }
                else { document.getElementById("countrywrn").style.visibility = "hidden"; }
                break;
            case 'city':
                errors[4] = validatetext(element.value)
                if (errors[4] == false) { document.getElementById("citywrn").style.visibility = "visible"; }
                else { document.getElementById("citywrn").style.visibility = "hidden"; }
                break;
            case 'zip':
                errors[5] = validatezip(element.value)
                if (errors[5] == false) { document.getElementById("zipwrn").style.visibility = "visible"; }
                else { document.getElementById("zipwrn").style.visibility = "hidden"; }
                break;

            case 'dob':
                errors[6] = getAge(element.value)
                if (errors[6] < '18') { alert("You are " + errors[6] + " years old!!! you must be over 18 years old"); }
                break;

            case 'password':
                errors[7] = validatePassword(element.value)
                if ( errors[7] == false) { alert("Wrong password... the password should contain at least 8 letters, uppercase letters: A-Z, lowercase letters: a-z, Numbers: 0-9  and at least one special character ! @ # ?  ")}
                break;

            case 'Confirmpassword':
                 /* errors[8] = matchingpassword()
                 if( errors[8] == false) {console.log ("Passwords did not match");} */

                var pw1 = document.getElementById("password").value;
                var pw2 = document.getElementById("Confirmpassword").value;
                if (pw1 != pw2) { alert ("Passwords did not match... try again"); }
                break;
        }
    }

    if (errors[0,1,2,3,4,5,6,7] == true && (pw1=pw2)) {
        document.getElementById("thank").style.visibility = "visible";
    }
}
