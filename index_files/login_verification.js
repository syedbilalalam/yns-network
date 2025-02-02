(() => {
    const loginLocation = document.getElementById('loginPageLocation').dataset.content;

    // Verification for login
    const loginData = sessionStorage.getItem('sidwsk');
    if (loginData) {
        if (sha256.hex(loginData) != '53930d2f21256b7a0180d4e203cdaa1976cc84d6bb1b4ab16631df1ffeea3d79')
            window.location.replace(loginLocation);
    } else
        window.location.replace(loginLocation);
})();