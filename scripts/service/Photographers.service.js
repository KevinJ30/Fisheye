/**
 * @returns Promise<{photographers}> : Liste des photograph
 **/
async function getPhotographers() {
    try {
        const photographersDataUrl = "./data/photographers.json"
        const response = await fetch(photographersDataUrl);

        return await response.json();
    } catch (error) {
        console.error(error);
        return { photographers: [] };
    }
}

/**
 * @param id
 * @returns any
 */
async function getPhotographerById(id) {
    const response = await getPhotographers();

    return response.photographers.find((photograph) => id === photograph.id);
}
