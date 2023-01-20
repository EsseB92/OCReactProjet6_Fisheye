const SEARCHPARAMS = new URLSearchParams(location.search);
const PHOTOGRAPHERID = SEARCHPARAMS.get('id');
var p, m;
var idOfAlreadyAdded = [];

/* Async Get */

async function getData(path) {
    try {
        const response = await fetch(path);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
}

async function getPhotographer() {
    const data = await getData('./data/photographers.json');
    const photographer = data.photographers.find((photographer) => photographer.id == PHOTOGRAPHERID);
    return photographer;
    
}

async function getMedias() {
    const data = await getData('./data/photographers.json');
    const medias = data.media.filter((media) => media.photographerId == PHOTOGRAPHERID);
    return medias;
}

/* Get type of media */

function getTypeOfMedia(media) {
    if(media.image !== undefined){
        return "image"
    } else if(media.video !== undefined){
        return "video"
    }else return 0
}

/* Display */

function displayPhotographer(photographer) {
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
    titleModal.textContent = "Contacter " + photographerModel.name
};

function displayMedias(medias) {
    const mediasSection = document.querySelector(".medias");
    const sidebarSection = document.querySelector(".sidebar__like");
    mediasSection.innerHTML = "";

    let countMedia = 0;
    
    medias.forEach((media) => {
        let mediaCardDOM;
        const mediaModel = mediaFactory(media);
        const type = getTypeOfMedia(media)
        if(type === "image"){
            mediaCardDOM = mediaModel.getImageCardDOM();
        }else if(type === "video"){
            mediaCardDOM = mediaModel.getVideoCardDOM();
        }else{
            console.log("Erreur d'extension de fichier !")
        }
        mediasSection.appendChild(mediaCardDOM);
        countMedia += media.likes
    });
    
    sidebarSection.textContent = countMedia;
};

function addOneLike(id) {

    const article = document.getElementById(id);
    const like = article.querySelector('.media__like')
    const allLikes = document.querySelector('.sidebar__like')

    const media = m.find(element => element.id === parseInt(id))

    if(!idOfAlreadyAdded.includes(id)){
        like.textContent = media.likes + 1
        allLikes.textContent = parseInt(allLikes.innerText)+1

        idOfAlreadyAdded.push(id)
    } else {
        console.log("Vous avez déjà liké !")
    }
}

/* Sort */

function orderMedias() {
    const valueSelected = document.getElementById("sort-selection").value;
    switch (valueSelected) {
        case 'popularity':
            m.sort((a, b) => b.likes - a.likes);
            break;
        case 'date':
            m.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'title':
            m.sort((a, b) => ('' + a.title).localeCompare(b.title));
            break;
        default :
            break;
    }
    displayMedias(m);
}

/* Lightbox */

function displayMediaByLightBox(id) {
    const mediaDOM = document.querySelectorAll('.media__image,.media__video')
    const lightboxDOM = document.getElementById('lightbox')
    
    m.forEach((media) => {
        if(media.id === id){
            let mediaLightboxDOM;
            const mediaModel = mediaFactory(media);
            const type = getTypeOfMedia(media)
            if(type === "image"){
                mediaLightboxDOM = mediaModel.getImageLightBoxDOM();
            }else if(type === "video"){
                mediaLightboxDOM = mediaModel.getVideoLightBoxDOM();
            }else{
                console.log("Erreur d'extension de fichier !")
            }

            const [prev, next, close, div] = mediaLightboxDOM
            lightboxDOM.innerText = "";
            
            lightboxDOM.append(prev)
            lightboxDOM.appendChild(next)
            lightboxDOM.appendChild(close)
            lightboxDOM.appendChild(div)
        }
    })
}

function nextMedia(id){
    var count = 0;

    if(m.slice(-1)[0].id === id){
        displayMediaByLightBox(m.slice(0)[0].id)
    }

    m.forEach((media) => {
        if(count === 1){
            count = 0;

            displayMediaByLightBox(media.id);
        }else if(media.id === id){
            count = 1;
        }
    })
}

function prevMedia(id){
    var count = -1;

    if(m.slice(0)[0].id === id){
        displayMediaByLightBox(m.slice(-1)[0].id)
    }

    m.forEach((media) => {
        count++;
        if(media.id === id){
            displayMediaByLightBox(m.slice(count-1)[0].id)
        }
    })
}

/* INIT */

async function init() {
    
    [p, m] = await Promise.all([getPhotographer(), getMedias()])
    
    displayPhotographer(p);
    orderMedias();
    displayMedias(m);
};
    
init();