window.onload = function () {
    // Variables

    const TIME_INTERVAL = 2000;
    const btnBack = document.querySelector('#retroceder');
    const btnNext = document.querySelector('#avanzar');
    const img = document.querySelector('#chargeIMG');
    let IMAGES = [];
    let current = 0;
    let interval;

    // GET IMGS API
    let API_KEY = '19224548-c145817650eb0d686142a63ed';
    let URL = 'https://pixabay.com/api/';
    let q = 'universe';
    let min_width =	'5000';
    let min_height = '5000';	
    let orientation = 'vertical';

    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };

    fetch(`${URL}?key=${API_KEY}&q=${q}&min_width=${min_width}&min_height=${min_height}&orientation=${orientation}`, requestOptions)
    .then(response => response.json().then(data => {
        for(let i = 0; i<(data.hits).length; i++){
            IMAGES[i] = data.hits[i].previewURL;
        }
    }))
    .catch(error => console.log('error', error));

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