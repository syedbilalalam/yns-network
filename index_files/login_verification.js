"use strict";
/// <reference path="./sha256.d.ts"/>
const loginLocation = document.getElementById('loginPageLocation')?.dataset.content;
if (!loginLocation)
    throw new Error('Some issue with html document!');
// Verification for login
const loginData = sessionStorage.getItem('sidwsk');
if (!loginData || sha256.hex(loginData) !== NetworkUser.key)
    window.location.replace(loginLocation);
