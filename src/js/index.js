/*eslint-env browser*/
document.getElementById("show-popup-form").addEventListener("click", showPopup);
document.getElementById("closeButton").addEventListener("click", closePopup);
function showPopup(){
    document.getElementById("login").style.display = 'block';
}
function closePopup(){
    document.getElementById("login").style.display = 'none';
}
