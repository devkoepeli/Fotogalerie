const images = [
    "/img/img1.jpg",
    "/img/img2.jpg",
    "/img/img3.jpg",
    "/img/img4.jpg",
    "/img/img5.jpg",
    "/img/img6.jpg",
    "/img/img7.jpg",
    "/img/img8.jpg",
    "/img/img9.jpg",
    "/img/img10.jpg",
    "/img/img11.jpg",
    "/img/img12.jpg",
    "/img/img13.jpg",
    "/img/img14.jpg",
    "/img/img15.jpg",
    "/img/img16.jpg"
];

function render() {
    // Hole das HTML-Element mit der ID 'gallery-container'
    const gallery = document.getElementById('gallery-item');

    // Überprüfe, ob das 'gallery-container'-Element existiert
    if (gallery) {
        // Verwende .innerHTML, um den HTML-Inhalt des 'gallery-container'-Elements zu setzen
        gallery.innerHTML = '';

        // Iteriere durch das 'images'-Array und füge jedes Bild dem HTML-Inhalt hinzu
        images.forEach(image => {
            gallery.innerHTML += `<img class="gallery-item-img" src="${image}" alt="Bild">`;
        });
    } else {
        console.error("Das 'gallery-item'-Element wurde nicht gefunden.");
    }
}