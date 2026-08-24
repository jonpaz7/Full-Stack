fetch('navbar.html')
    .then((response) => response.text())
    .then((data) => {
        const navbarContainer = document.getElementById('navbar');
        if (navbarContainer) {
            navbarContainer.innerHTML = data;
        }
    })
    .catch((error) => console.error('Error loading navbar:', error));




function addtocart() {
    document.getElementById("message").textContent = "Added to cart";
}

function showPicture1() {
    const thumbs = document.querySelectorAll('.smallImage');
    const mainImg = document.getElementById('mainImage');
    if (thumbs[0] && mainImg) {
        mainImg.src = thumbs[0].src;
    }
}

function showPicture2() {
    const thumbs = document.querySelectorAll('.smallImage');
    const mainImg = document.getElementById('mainImage');
    if (thumbs[1] && mainImg) {
        mainImg.src = thumbs[1].src;
    }
}

function showPicture3() {
    const thumbs = document.querySelectorAll('.smallImage');
    const mainImg = document.getElementById('mainImage');
    if (thumbs[2] && mainImg) {
        mainImg.src = thumbs[2].src;
    }
}

// Dynamically inject the AI credit footer to all pages of the electronics store
document.addEventListener("DOMContentLoaded", () => {
    const footer = document.createElement("footer");
    footer.className = "ai-credit-footer";
    footer.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
        </svg>
        <span>"Hand-coded by Eliav • Finishes enhanced by AI"</span>
    `;
    document.body.appendChild(footer);
});