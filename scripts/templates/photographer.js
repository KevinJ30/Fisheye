//fonction pour créer et afficher un photographe sur la page d'index
//function to create and display a phtographer on index page
function photographerTemplate(data) {
    const { name, id, city, portrait, country, tagline, price } = data; //Destructuration de l'objet data pour permettre de récupérer facilement la clé name, id, city...
    //Destructuring the data object to allow easy recovery of the name, id, city key.
    const picture = `./assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement("article");
        const anchor = document.createElement("a");

        //Permets de passer un lien cliqué vers la page photographer
        //Allows you to pass a clicked link to the photographer page
        anchor.href = "./photographer.html?id=" + id;

        anchor.ariaLabel = name;

        const img = document.createElement("img");

        img.setAttribute("src", picture);
        img.alt = "Photo du profil de " + name;

        const h2 = document.createElement("h2");

        h2.textContent = name;

        article.appendChild(anchor);
        anchor.appendChild(img);
        anchor.appendChild(h2);

        const div = document.createElement("div");
        const locationInfos = document.createElement("p");
        const taglineInfos = document.createElement("p");
        const priceInfos = document.createElement("p");

        locationInfos.textContent = city + ", " + country;
        taglineInfos.textContent = tagline;
        priceInfos.textContent = price + "€/jour";

        div.appendChild(locationInfos);
        div.appendChild(taglineInfos);
        div.appendChild(priceInfos);
        article.appendChild(div);

        return article;
    }

    return { getUserCardDOM };
}
