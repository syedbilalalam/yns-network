interface FormInputHTMLElement extends HTMLElement {
    value: string;
}

function setCookie(name: string, value: string): void {
    sessionStorage.setItem(name, value);
}

const loginElement: HTMLElement | null = document.getElementById('login');
if(!loginElement) throw new Error('HTML is incomplete!');
loginElement.onclick = () => {
    
    const userPasswordElem: FormInputHTMLElement | null = (document.getElementById('pass') as (FormInputHTMLElement | null)),
        userNameElem: FormInputHTMLElement | null = (document.getElementById('user') as (FormInputHTMLElement | null));
    if(!userPasswordElem || !userNameElem) throw new Error('HTML is incomplete!');

    const userPassword: string = userPasswordElem.value;
    if (userNameElem.value.toLowerCase() === NetworkUser.name && sha256.hex(userPassword) === NetworkUser.key) {
        setCookie('sidwsk', userPassword);
        window.location.replace('../');
    } else {
        alert('Wrong information entered!');
    }

}

// Performing logout 
sessionStorage.removeItem('sidwsk');
