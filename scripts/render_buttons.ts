function getCookie(name: string): string | null {
    // Get all cookies as a single string and split them into an array
    const cookies: string[] = document.cookie.split("; ");

    // Loop through the cookies
    for (const cookie of cookies) {
        const [key, value]: string[] = cookie.split("=");

        // If the cookie name matches, return its decoded value
        if (key === name) {
            return decodeURIComponent(value);
        }
    }

    // Return null if cookie is not found
    return null;
}

// Button clicks
function renderButtons(): void {
    const redirectingButtons: NodeListOf<Element> = document.querySelectorAll('button[data-href]');
    redirectingButtons.forEach((element: Element): void => {
        if(!(element instanceof HTMLElement)) throw new Error('There is some issue in the HTML!');
        element.onclick = (): void => {
            window.location.replace(element.dataset.href!);
        }
    });
}
renderButtons();