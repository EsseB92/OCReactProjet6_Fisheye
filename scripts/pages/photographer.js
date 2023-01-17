//Mettre le code JavaScript lié à la page photographer.html

let searchParams = new URLSearchParams(location.search);
let photographerId = searchParams.get('id');
let photographer
let medias

async function getPhotographer() {
    try {
        const response = await fetch('./data/photographers.json')
        const data = await response.json();
        photographer = data.photographers.find((photographer) => photographer.id == photographerId)
        return photographer
    }
    catch (e) {
        console.log
    }
}

async function getMedias() {
    try {
        const response = await fetch('./data/photographers.json')
        const data = await response.json();
        medias = data.media.filter((media) => media.photographerId == photographerId)
        return medias
    }
    catch (e) {
        console.log(e);
    }
}


function displayPhotographer(photographer) {
    const photographerSection = document.querySelector(".photographer");

    const photographerModel = photographerFactory(photographer);
    const userHeaderDOM = photographerModel.getUserHeaderDOM();
    const [header, button, image] = userHeaderDOM;
    photographerSection.appendChild(header);
    photographerSection.appendChild(button);
    photographerSection.appendChild(image);

//     medias.forEach((media) => {
//         const mediaModel = mediaFactory(media);
//         const mediaCardDOM = mediaModel.getMediaCardDOM();
//         mediasSection.appendChild(mediaCardDOM);
//     });
};

function displayMedias(medias) {
    const mediasSection = document.querySelector(".medias");
    

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
    });
};

function getTypeOfMedia(media) {
    if(media.image !== undefined){
        console.log("image")
        return "image"
    } else if(media.video !== undefined){
        console.log("video")
        return "video"
    }else return 0
}



async function init() {
    // Récupère les datas du photographe
    const [photographer, medias] = await Promise.all([getPhotographer(), getMedias()])
    //const [photographer, medias] = await getPhotographer();
    //const { medias } = await getMedias();
    console.log(medias)
    displayPhotographer(photographer); 
    displayMedias(medias)
};
    
init();