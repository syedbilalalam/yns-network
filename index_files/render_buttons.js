
function getCookie(name) {
    // Get all cookies as a single string and split them into an array
    let cookies = document.cookie.split("; ");

    // Loop through the cookies
    for (let cookie of cookies) {
        let [key, value] = cookie.split("=");

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
    redirectingButtons.forEach(element => {
        element.onclick = () => {
            window.location.replace(element.dataset.href);
        }
    });
}
renderButtons();

