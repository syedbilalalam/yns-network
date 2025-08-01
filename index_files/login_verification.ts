/// <reference path="./sha256.d.ts"/>

const loginLocation: string | undefined = document.getElementById('loginPageLocation')?.dataset.content;
if(!loginLocation) throw new Error('Some issue with html document!');

// Verification for login
const loginData: string | null = sessionStorage.getItem('sidwsk');
if (!loginData || sha256.hex(loginData) !== NetworkUser.key)
        window.location.replace(loginLocation);