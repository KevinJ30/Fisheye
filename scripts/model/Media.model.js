class Media {
    constructor(
        id,
        photographerId,
        title,
        image,
        likes,
        date,
        price
    ) {
        this._id = id;
        this._photographerId = photographerId;
        this._title = title;
        this._image = image;
        this._likes = likes;
        this._date = date;
        this._price = price;
    }

    getId() {
        return this._id;
    }

    getPhotographerId() {
        return this._photographerId;
    }

    getTitle() {
        return this._title;
    }

    getImage() {
        return this._image;
    }

    getLikes() {
        return this._likes;
    }

    getDate() {
        return this._date;
    }

    getPrice() {
        return this._price;
    }
}
