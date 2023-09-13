/**
 * @param photographer Données du photograph
 * @returns {Promise<void>} Affiche les données dans la page
 **/
async function displayPhotograph(photographer) {
    const photographersSection = document.querySelector(".photographer_section");
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();

    photographersSection.appendChild(userCardDOM);
}

/**
 * @returns {Promise<void>} Fonction d'initialisation
 **/
async function init() {
    const queryParams = new URLSearchParams(window.location.search);
    const photographId = Number(queryParams.get('id'));

    const photograph = await getPhotographerById(Number(photographId));
    if(undefined === photograph) {
        window.location.href = './404.html'
    }

    await displayPhotograph(photograph);
}

init()

