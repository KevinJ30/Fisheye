/**
 * @returns Promise<array> : Liste des photographes
 **/
async function getMedias() {
    try {
        const photographersDataUrl = "./data/photographers.json"
        const response = await fetch(photographersDataUrl);
        const datas = await response.json();

        return datas.media;
    } catch (error) {
        console.error(error);
        return [];
    }
}

/**
 * @param photographerId id du photographe
 * @returns {Promise<Media[]>}
 **/
async function getMediaByPhotograph(photographerId) {
    const medias = await getMedias();

    return buildMediasFromJson(
        medias.filter(
            (media) => photographerId === media.photographerId
        )
    );
}
