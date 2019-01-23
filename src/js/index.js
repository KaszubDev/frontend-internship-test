/*eslint-env browser*/
document.getElementById("show-popup-form").addEventListener("click", showPopup);
document.getElementById("closeButton").addEventListener("click", closePopup);
document.getElementById("submitBtn").addEventListener("click", disappearOnTime);

var check_checkbox = false;
var email_ok = false;
var passwd_ok = false;
document.getElementById("checkbox_1").addEventListener("click", change);

function change(){
    check_checkbox = !check_checkbox;
    if((check_checkbox === true) && (email_ok === true) && (document.getElementById("passw").value.length != 0) && (document.getElementById("email").value.length != 0) && (passwd_ok === true)){
        document.getElementById("submitBtn").disabled = false;
    }
    else document.getElementById("submitBtn").disabled = true;
}

function showPopup(){
    document.getElementById("login").style.display = 'block';
}
function closePopup(){
    document.getElementById("login").style.display = 'none';
}
function disappear() {
    closePopup();
    document.getElementById("show-popup-form").style.display = "none";
    document.getElementById("message").style.display = "block";
    window.stop();
}

function disappearOnTime(){
    if(check_checkbox === true){
    setTimeout(disappear, 3000);
    }
    else return false;
}

document.querySelector("#email").addEventListener('change', function() {
    var reg = new RegExp('^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$', 'i');
    if (!reg.test(this.value)) {
        this.classList.add("error");
        alert("Podaj adres e-mail w prawidłowym formacie np. john.smith@example.com");
        this.select();
    } else {
        this.classList.remove("error");
        email_ok = true;
    }
});

document.querySelector("#passw").addEventListener('change', function() {
    if(this.value.length < 6) {
        this.classList.add("error");
        alert("Podaj prawidłowe hasło. Hasło musi mieć przynajmniej 6 znaków.");
        this.select();
    }
    else {
        this.classList.remove("error");
        passwd_ok = true;
    }
});
