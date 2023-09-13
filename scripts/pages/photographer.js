/**
 * @param {Media} media
 * @returns {Promise<void>} Affiche les données dans la page
 **/
async function displayMedias(media) {
    const mediaSection = document.querySelector(".photographer_media_section");
    const mediaModel = mediaTemplate(media).getMediaDom;
    const mediaDOM = mediaModel();

    mediaSection.appendChild(mediaDOM);
}

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

    const medias = await getMediaByPhotograph(photographId);
    await displayPhotograph(photograph);

    medias.forEach((media) => {
        displayMedias(media).then();
    });
}

init()
