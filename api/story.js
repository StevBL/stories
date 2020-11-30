window.onload = function () {
    // Variables
    const IMAGES = [
        "./img/001.jpg",
        "./img/002.png",
        "./img/003.jpg",
        "./img/004.png"
    ];

    const TIME_INTERVAL = 2000;
    const btnBack = document.querySelector('#retroceder');
    const btnNext = document.querySelector('#avanzar');
    const img = document.querySelector('#chargeIMG');
    let current = 0;
    let interval;

    // Functions

    function renderImg() {
        img.src= `${IMAGES[current]}`;
    }

    function playInterval() {
        renderImg();
        interval = setInterval(nextImg, TIME_INTERVAL);
    }

    function stopInterval() {
        clearInterval(interval);
    }

    function nextImg() {
        if(current >= IMAGES.length - 1) {
            current = 0;
        } else {
            current++;
        }
        renderImg();
    }

    function prevImg() {
        if(current <= 0) {
            current = IMAGES.length - 1;
        } else {
            current--;
        }
        renderImg();
    }

    // Events
    btnNext.addEventListener('click', nextImg);
    btnBack.addEventListener('click', prevImg);
    btnNext.addEventListener('mousedown', stopInterval);
    btnBack.addEventListener('mousedown', stopInterval);
    btnNext.addEventListener('mouseup', playInterval);
    btnBack.addEventListener('mouseup', playInterval);


    // Iniciar
    playInterval();
} 