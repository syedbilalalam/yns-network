"use strict";
function getCookie(name) {
    // Get all cookies as a single string and split them into an array
    const cookies = document.cookie.split("; ");
    // Loop through the cookies
    for (const cookie of cookies) {
        const [key, value] = cookie.split("=");
        // If the cookie name matches, return its decoded value
        if (key === name) {
            return decodeURIComponent(value);
        }
    }
    // Return null if cookie is not found
    return null;
}
// Button clicks
function renderButtons() {
    const redirectingButtons = document.querySelectorAll('button[data-href]');
    redirectingButtons.forEach((unknowElement) => {
        const element = unknowElement;
        element.onclick = () => {
            window.location.replace(element.dataset.href);
        };
    });
}
renderButtons();
