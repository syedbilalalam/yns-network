
// Verification for login
const loginData = getCookie('sessionid');
if (loginData) {
    console.log(loginData);
    if (loginData != 'yns640')
        window.location.replace('../login');
} else
    window.location.replace('../login');

// Copy to clip board
const raastId = 'PK69JCMA1702923343559949',
    jazzCashId = '03343559949';

// Setting up ids to the html side
document.getElementById('raastIdText').innerText = raastId;
document.getElementById('jazzCashText').innerText = jazzCashId;
function copyToClipboard(text) {
    // Store the current scroll position
    const scrollPosition = window.scrollY;

    // Create a temporary textarea element to hold the text
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);

    // Focus the textarea and select the text
    textarea.focus();
    textarea.select();

    try {
        // Try executing the copy command
        document.execCommand('copy');
        // alert('Text copied to clipboard!');
    } catch (err) {
        // Handle any errors that might occur
        // alert('Failed to copy text!');
    }

    // Remove the textarea element from the DOM
    document.body.removeChild(textarea);

    // Scroll the page back to the original position to prevent scrolling
    window.scrollTo(0, scrollPosition);
}

document.getElementById('raastCopy').onclick = () => {
    copyToClipboard(raastId);
    // Sending success msg
    alert('Copied to the clipboard');
}

// Event for jazzcash copy button
document.getElementById('jazzCashCopy').onclick = () => {
    copyToClipboard(jazzCashId);
    // Sending success msg
    alert('Copied to the clipboard');
}