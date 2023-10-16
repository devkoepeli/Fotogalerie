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
    // Hole das HTML-Element mit der ID 'container'
    const container = document.getElementById('container');

    // Überprüfe, ob das 'container'-Element existiert
    if (container) {
        // Verwende .innerHTML, um den HTML-Inhalt des 'container'-Elements zu setzen
        container.innerHTML = '';

        // Iteriere durch das 'images'-Array und füge jedes Bild dem HTML-Inhalt hinzu
        images.forEach(image => {
            container.innerHTML += `<img src="${image}" alt="Bild">`;
        });
    } else {
        console.error("Das 'container'-Element wurde nicht gefunden.");
    }
}