async function getPhotographers() {
    // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
    // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
    try{
        const response = await fetch('./data/photographers.json')
        const data = await response.json();
        console.log(data);
        return data
    }
    catch (e) {
        console.log(e);
    }
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".cards");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};
    
init();

    
