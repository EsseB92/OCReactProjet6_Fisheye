const SEARCHPARAMS = new URLSearchParams(location.search);
const PHOTOGRAPHERID = SEARCHPARAMS.get('id');
var photographer, medias;
var idOfAlreadyAdded = [];

/* Async Get */

async function getData(path) {
    try {
        const response = await fetch(path);
        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e);
    }
}

async function getPhotographer() {
    const data = await getData('./data/photographers.json');
    photographer = data.photographers.find((photographer) => photographer.id == PHOTOGRAPHERID);
    return photographer;
    
}

async function getMedias() {
    const data = await getData('./data/photographers.json');
    medias = data.media.filter((media) => media.photographerId == PHOTOGRAPHERID);
    return medias;
}

/* Display */

function displayPhotographer() {
    const photographerSection = document.querySelector(".photographer");
    const sidebarSection = document.querySelector(".sidebar__rates");
    const titleModal = document.querySelector(".modal__title");

    const photographerModel = photographerFactory(photographer);
    const userHeaderDOM = photographerModel.getUserHeaderDOM();
    const [header, button, image, rate] = userHeaderDOM;
    photographerSection.appendChild(header);
    photographerSection.appendChild(button);
    photographerSection.appendChild(image);
    
    sidebarSection.appendChild(rate);
    console.log(photographerModel);
    titleModal.textContent = "Contacter " + photographerModel.name;
};

function displayMedias() {
    const mediasSection = document.querySelector(".medias");
    const sidebarSection = document.querySelector(".sidebar__like");

    mediasSection.innerHTML = "";
    let countMedia = 0;
    
    medias.forEach((media) => {
        let mediaCardDOM;
        if(media.image){
            mediaCardDOM = mediaFactory(media).getImageCardDOM();
        }else if(media.video){
            mediaCardDOM = mediaFactory(media).getVideoCardDOM();
        }else{
            console.log("Erreur d'extension de fichier !");
            return;
        }
        mediasSection.appendChild(mediaCardDOM);
        countMedia += media.likes;
    });
    
    sidebarSection.textContent = countMedia;
};

function addOneLike(id) {

    const article = document.getElementById(id);
    const like = article.querySelector('.media__like');
    const allLikes = document.querySelector('.sidebar__like');

    const media = medias.find(element => element.id === parseInt(id));

    if(!idOfAlreadyAdded.includes(id)){
        like.textContent = media.likes + 1;
        allLikes.textContent = parseInt(allLikes.innerText) + 1;

        idOfAlreadyAdded.push(id);
    } else {
        console.log("Vous avez déjà liké !");
    }
}

/* Sort */

function orderMedias() {
    const valueSelected = document.getElementById("sort-selection").value;
    switch (valueSelected) {
        case 'popularity':
            medias.sort((a, b) => b.likes - a.likes);
            break;
        case 'date':
            medias.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'title':
            medias.sort((a, b) => ('' + a.title).localeCompare(b.title));
            break;
        default :
            break;
    }
    displayMedias(medias);
}

/* Lightbox */

function displayMediaByLightBox(id) {
    const mediaDOM = document.querySelectorAll('.media__image,.media__video');
    const lightboxDOM = document.getElementById('lightbox');
    
    medias.forEach((media) => {
        if(media.id === id){
            let mediaLightboxDOM;
            if(media.image){
                mediaLightboxDOM = mediaFactory(media).getImageLightBoxDOM();
            }else if(media.video){
                mediaLightboxDOM = mediaFactory(media).getVideoLightBoxDOM();
            }else{
                console.log("Erreur d'extension de fichier !");
            }

            const [prev, next, close, div] = mediaLightboxDOM;
            lightboxDOM.innerText = "";
            
            lightboxDOM.append(prev);
            lightboxDOM.appendChild(next);
            lightboxDOM.appendChild(close);
            lightboxDOM.appendChild(div);
        }
    })
}

function nextMedia(id){
    const currentIndex = medias.findIndex(media => media.id === id);
    // If the media is the last, then return to first, else do +1
    const nextIndex = currentIndex === medias.length-1 ? 0 : currentIndex + 1;
    const nextMedia = medias[nextIndex];
    displayMediaByLightBox(nextMedia.id);
}

function prevMedia(id){
    const currentIndex = medias.findIndex(media => media.id === id);
    // If the media is the first, then return to last, else do -1
    const prevIndex = currentIndex === 0 ? medias.length-1 : currentIndex - 1;
    const prevMedia = medias[prevIndex];
    displayMediaByLightBox(prevMedia.id);
}

/* INIT */

async function init() {
    
    [photographer, medias] = await Promise.all([getPhotographer(), getMedias()]);
    
    displayPhotographer();
    orderMedias();
    displayMedias();
};
    
init();