function setCookie(name, value, days) {
    let expires = "";
    
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Convert days to milliseconds
        expires = "; expires=" + date.toUTCString();
    }
    
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}
document.getElementById('login').onclick = ()=>{
    if(document.getElementById('user').value.toLowerCase() == 'yns640' && document.getElementById('pass').value.toLowerCase() == 'admin62'){
        setCookie('sessionid','yns640', 1);
        window.location.replace('../');
    }else{
        alert('Wrong information entered!');
    }
        
}

// Performing logout 
document.cookie = "sessionid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";