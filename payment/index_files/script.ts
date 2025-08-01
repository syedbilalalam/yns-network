// Copy to clip board
function copyToClipboard(text: string): void {
    // Store the current scroll position
    const scrollPosition: number = window.scrollY;

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

(async () => {
    // Initialing document elements
    const raastCopy: HTMLElement | null = document.getElementById('raastCopy'),
        jazzCashCopy: HTMLElement | null = document.getElementById('jazzCashCopy'),
        raastIdText: HTMLElement | null = document.getElementById('raastIdText'),
        jazzCashText: HTMLElement | null = document.getElementById('jazzCashText');
    const raastId: string = 'PRIVATE - NOT PUBLIC',
        jazzCashId: string = 'PRIVATE - NOT PUBLIC';

    if (!raastCopy || !jazzCashCopy || !raastIdText || !jazzCashText || !raastId || !jazzCashId) throw new Error('Incomplete HTML!');


    // Setting up details on html side
    raastCopy.onclick = () => {
        copyToClipboard(raastId);
        // Sending success msg
        alert('Copied to the clipboard');
    }

    // Event for jazzcash copy button
    jazzCashCopy.onclick = () => {
        copyToClipboard(jazzCashId);
        // Sending success msg
        alert('Copied to the clipboard');
    }

    // Setting up ids to the html side
    raastIdText.innerText = raastId;
    jazzCashText.innerText = jazzCashId;
})();

