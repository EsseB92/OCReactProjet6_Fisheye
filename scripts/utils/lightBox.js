function displayLightBox(id) {
    displayMediaByLightBox(id);
    const lightBox = document.getElementById("lightbox");
	lightBox.style.display = "block";
}

function changeMedia(text) {
    if(text === 'prev'){
        console.log("Previous")
    }else if(text === 'next'){
        console.log("Next")
    }else {
        console.log("Erreur : click non reconnu")
    }

    
}

function closeLightBox() {
    const lightboxContainer = document.querySelector(".lightbox__container")
    const lightBox = document.getElementById("lightbox");

	lightBox.style.display = "none";
    lightboxContainer.innerHTML = "";
}