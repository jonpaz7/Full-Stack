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