
function setCookie(name, value) {
    sessionStorage.setItem(name, value)
}
document.getElementById('login').onclick = () => {
    const userPassword = document.getElementById('pass').value.toLowerCase();
    if (document.getElementById('user').value.toLowerCase() == 'yns640' && sha256.hex(userPassword) == '53930d2f21256b7a0180d4e203cdaa1976cc84d6bb1b4ab16631df1ffeea3d79') {
        setCookie('sidwsk', userPassword);
        window.location.replace('../');
    } else {
        alert('Wrong information entered!');
    }

}

// Performing logout 
sessionStorage.removeItem('sidwsk');
