"use strict";
function setCookie(name, value) {
    sessionStorage.setItem(name, value);
}
const loginElement = document.getElementById('login');
if (!loginElement)
    throw new Error('HTML is incomplete!');
loginElement.onclick = () => {
    const userPasswordElem = document.getElementById('pass'), userNameElem = document.getElementById('user');
    if (!userPasswordElem || !userNameElem)
        throw new Error('HTML is incomplete!');
    const userPassword = userPasswordElem.value;
    if (userNameElem.value.toLowerCase() === NetworkUser.name && sha256.hex(userPassword) === NetworkUser.key) {
        setCookie('sidwsk', userPassword);
        window.location.replace('../');
    }
    else {
        alert('Wrong information entered!');
    }
};
// Performing logout 
sessionStorage.removeItem('sidwsk');
