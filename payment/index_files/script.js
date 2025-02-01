
// Verification for login
const loginData = sessionStorage.getItem('sidwsk');
if (loginData) {
    if (sha256.hex(loginData) != '53930d2f21256b7a0180d4e203cdaa1976cc84d6bb1b4ab16631df1ffeea3d79')
        window.location.replace('../login');
} else
    window.location.replace('../login');

// Copy to clip board
const raastIdH = { c: 'JXBKIXSnXQsLvq5gTvPdYz1inxCaihnKJFgT1RPpaUJ4uGaDDljmgg==', iv: '1xUr6ne+Cze9YDdb' },
    jazzCashIdH = { c: 'mcyQMqTRAXCudgTjuksf3VFsOqMeDTYGevYY', iv: 'YZkCG1a5RLHC1JbL' };


// Decoded information
function base64ToArrayBuffer(base64) {
    const binaryString = window.atob(base64);  // Decode Base64 to binary string
    const length = binaryString.length;
    const buffer = new ArrayBuffer(length);
    const view = new Uint8Array(buffer);
    for (let i = 0; i < length; i++) {
        view[i] = binaryString.charCodeAt(i);
    }
    return buffer;  // Return the ArrayBuffer
}
async function decryptString(encryptedData, secretKey, iv) {
    const decoder = new TextDecoder();
    const encoder = new TextEncoder();

    // Ensure the key is either 128 or 256 bits long (16 or 32 bytes)
    const keyBytes = new TextEncoder().encode(secretKey);
    const keyLength = keyBytes.length;

    let finalKey;
    if (keyLength === 16 || keyLength === 32) {
        finalKey = keyBytes;
    } else if (keyLength < 16) {
        finalKey = new Uint8Array(16);
        finalKey.set(keyBytes);
    } else if (keyLength > 32) {
        finalKey = new Uint8Array(32);
        finalKey.set(keyBytes.slice(0, 32));
    } else {
        finalKey = keyBytes;
    }

    // Import the key for decryption
    const keyMaterial = await window.crypto.subtle.importKey(
        "raw",
        finalKey,
        { name: "AES-GCM" },
        false,
        ["decrypt"]
    );

    try {
        // Decrypt the data
        const decryptedData = await window.crypto.subtle.decrypt(
            {
                name: "AES-GCM",
                iv: iv,
            },
            keyMaterial,
            encryptedData
        );

        // Decode the decrypted data back to a string
        return decoder.decode(decryptedData);
    } catch (e) {
        console.error("Decryption failed", e);
        return null;
    }
}
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

(async () => {
    const raastId = await decryptString(base64ToArrayBuffer(raastIdH.c), loginData, base64ToArrayBuffer(raastIdH.iv)),
        jazzCashId = await decryptString(base64ToArrayBuffer(jazzCashIdH.c), loginData, base64ToArrayBuffer(jazzCashIdH.iv));

    // Setting up details on html side
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

    // Setting up ids to the html side
    document.getElementById('raastIdText').innerText = raastId;
    document.getElementById('jazzCashText').innerText = jazzCashId;
})();

