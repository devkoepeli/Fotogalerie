let images = [
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
];


let slideIndex = 0;


function render() {
    let gallery = document.getElementById('gallery-item');

    // Überprüfe, ob das 'gallery-container'-Element existiert
    if (gallery) {
        gallery.innerHTML = '';

        // Iteriere durch das 'images'-Array und füge jedes Bild dem HTML-Inhalt hinzu
        for (let i = 0; i < images.length; i++) {
            const image = images[i];
            gallery.innerHTML += `<img onclick="openModal(${i})" class="gallery-item-img" src="${image}" alt="Bild">`;
        }
    } else {
        console.error("Das 'gallery-item'-Element wurde nicht gefunden.");
    }
}


function openModal(index) {
    slideIndex = index;
    document.getElementById('myModal').style.display = 'block';
    showSlides();
}


function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}


function plusSlides(n) {
    slideIndex += n;
    showSlides();
}


function showSlides() {
    let expandedImage = document.getElementById('expandedImage');

    if (slideIndex >= images.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = images.length - 1;
    }

    expandedImage.src = images[slideIndex];
}