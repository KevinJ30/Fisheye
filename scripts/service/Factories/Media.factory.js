function buildMediasFromJson(mediasJsonFormat) {
    return mediasJsonFormat.map(
        (mediaJsonFormat) => new Media(
            mediaJsonFormat.id,
            mediaJsonFormat.photographerId,
            mediaJsonFormat.title,
            mediaJsonFormat.image,
            mediaJsonFormat.likes,
            mediaJsonFormat.date,
            mediaJsonFormat.price,
        )
    );
}
