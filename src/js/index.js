/*eslint-env browser*/
document.getElementById("show-popup-form").addEventListener("click", showPopup);
document.getElementById("closeButton").addEventListener("click", closePopup);
function showPopup(){
    document.getElementById("login").style.display = 'block';
}
function closePopup(){
    document.getElementById("login").style.display = 'none';
}

document.querySelector("#email").addEventListener('change', function() {
    var reg = new RegExp('^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$', 'i');
    if (!reg.test(this.value)) {
        this.classList.add("error");
        alert("Podaj adres e-mail w prawidłowym formacie np. john.smith@example.com");
        this.select();
    } else {
        this.classList.remove("error");
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
    }
});
