/**
 * @param {Media} media
 * @returns {{getMediaDom: (function(): HTMLElement)}}
 */
function mediaTemplate(media) {
    const pictureUrl = `./assets/images/${media.getPhotographerId()}/${media.getImage()}`;

    function getMediaDom() {
        const mediaContainer = document.createElement("div");
        const likesElement = document.createElement("p");
        const titleElement = document.createElement("p");
        const mediaImage = document.createElement("img");

        mediaImage.setAttribute("src", pictureUrl);
        likesElement.innerText = media.getLikes();
        titleElement.innerText = media.getTitle();

        mediaContainer.appendChild(mediaImage);
        mediaContainer.appendChild(likesElement);
        mediaContainer.appendChild(titleElement);

        return mediaContainer;
    }

    return { getMediaDom };
}
