const lightbox = document.getElementById('lightbox')

document.addEventListener('keyup', (event) => {
    if(event.code === 'ArrowLeft') {
        prevMedia(parseInt(document.querySelector('.lightbox__media').getAttribute('id')))
    }
    if(event.code === 'ArrowRight') {
        nextMedia(parseInt(document.querySelector('.lightbox__media').getAttribute('id')))
    }
    if(event.code === 'Escape') {
        closeLightBox()
    }
})

function displayLightBox(id) {
    displayMediaByLightBox(id);
    const lightBox = document.getElementById("lightbox");
	lightBox.style.display = "block";
}

function onKeyUp(event, id) {
    if(event.key === "Enter"){
        console.log("entrée")
        displayLightBox(id);
    }
}

function closeLightBox() {
    const lightboxContainer = document.querySelector(".lightbox__container")
    const lightBox = document.getElementById("lightbox");

	lightBox.style.display = "none";
    lightboxContainer.innerHTML = "";

    const tabIndex = document.querySelectorAll('[tabindex]');
    for(let element of tabIndex) {
        element.setAttribute("tabindex", 0)
    };
}
