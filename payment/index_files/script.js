"use strict";
// Copy to clip board
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
    }
    catch (err) {
        // Handle any errors that might occur
        // alert('Failed to copy text!');
    }
    // Remove the textarea element from the DOM
    document.body.removeChild(textarea);
    // Scroll the page back to the original position to prevent scrolling
    window.scrollTo(0, scrollPosition);
}
(async () => {
    // Initialing document elements
    const raastCopy = document.getElementById('raastCopy'), jazzCashCopy = document.getElementById('jazzCashCopy'), raastIdText = document.getElementById('raastIdText'), jazzCashText = document.getElementById('jazzCashText');
    const raastId = 'PRIVATE - NOT PUBLIC', jazzCashId = 'PRIVATE - NOT PUBLIC';
    if (!raastCopy || !jazzCashCopy || !raastIdText || !jazzCashText)
        throw new Error('HTML is incomplete!');
    // Setting up details on html side
    raastCopy.onclick = () => {
        copyToClipboard(raastId);
        // Sending success msg
        alert('Copied to the clipboard');
    };
    // Event for jazzcash copy button
    jazzCashCopy.onclick = () => {
        copyToClipboard(jazzCashId);
        // Sending success msg
        alert('Copied to the clipboard');
    };
    // Setting up ids to the html side
    raastIdText.innerText = raastId;
    jazzCashText.innerText = jazzCashId;
})();
