async function getPhotographers() {
    try{
        const response = await fetch('./data/photographers.json');
        return await response.json();
    } catch (e) {
        console.error(e);
    }
}

function displayData(photographers) {
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

    
