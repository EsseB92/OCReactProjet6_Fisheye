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
    const lightBox = document.getElementById("lightbox")
    const main = document.getElementById('main')
	lightBox.style.display = "block";
    lightBox.setAttribute("aria-hidden", "false")
    main.setAttribute("aria-hidden", "true")

    const tabIndex = document.querySelectorAll('[tabindex]');
    for(let element of tabIndex) {
        element.setAttribute("tabindex", -1)
    };
}

function onKeyUp(event, id) {
    if(event.key === "Enter"){
        console.log("entrée")
        displayLightBox(id);
    }
}

function closeLightBox() {
    const lightboxContainer = document.querySelector(".lightbox__container")
    const lightBox = document.getElementById("lightbox")
    const main = document.getElementById("main")

	lightBox.style.display = "none"
    lightBox.setAttribute("aria-hidden", "false")
    main.setAttribute("aria-hidden", "true")

    lightboxContainer.innerHTML = "";

    const tabIndex = document.querySelectorAll('[tabindex]')
    for(let element of tabIndex) {
        element.setAttribute("tabindex", 0)
    }       
}
