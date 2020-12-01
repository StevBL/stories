window.onload = function () {
    // letiables

    const TIME_INTERVAL = 2000;
    const btnBack = document.querySelector('#retroceder');
    const btnNext = document.querySelector('#avanzar');
    const img = document.querySelector('#chargeIMG');
    const progress = document.querySelector('.containerPB');
    let IMAGES = [];
    let current = 0;
    let totalIMG;
    let intervalIMGS;
    let intervalPB;

    // Functions

    function init(){
        getIMGS();
        playInterval();
    }

    // GET IMGS API
    function  getIMGS(){
        let API_KEY = '19224548-c145817650eb0d686142a63ed';
        let URL = 'https://pixabay.com/api/';
        let q = 'universe';
        let min_width =	'6000';
        let min_height = '4000';	
        let orientation = 'vertical';

        let requestOptions = {
        method: 'GET',
        redirect: 'follow'
        };

        fetch(`${URL}?key=${API_KEY}&q=${q}&min_width=${min_width}&min_height=${min_height}&orientation=${orientation}`, requestOptions)
        .then(response => response.json().then(data => {
            totalIMG = (data.hits).length-1;
            progBarGenerator(totalIMG);
            for(let i = 0; i<(data.hits).length; i++){
                IMAGES[i] = data.hits[i].webformatURL;
            }
        }))
        .catch(error => console.log('error', error));
    }

    function progBarGenerator(tot){
        let sal = '';
        //for(let i=0; i<=tot; i++){
            sal += '<div class="pb"><div id="progress"></div></div>';
        //}
        progress.innerHTML = sal;
    }

    function move() {
    let i =0;
        if (i == 0) {
            i = 1;
            let width = 1;
            intervalPB = setInterval(frame, 17);
            function frame() {
                if (width >= 100) {
                    clearInterval(intervalPB);
                    i = 0;
                } else {
                    width++;
                    document.querySelector('#progress').style.width = `${width}%`;
                }
            }
        }
    }

    function renderImg() {
        if(current != -1){
            img.src= `${IMAGES[current]}`;
        }
    }

    function playInterval() {
        renderImg();
        intervalIMGS = setInterval(nextImg, TIME_INTERVAL);
    }

    function stopInterval() {
        clearInterval(intervalIMGS);
    }

    function nextImg() {
        if(current >= IMAGES.length - 1) {
            current = -1;
        } else {
            current++;
        }
        renderImg();
        move();
    }

    function prevImg() {
        if(current <= 0) {
            current = IMAGES.length - 1;
        } else {
            current--;
        }
        renderImg();
        move();
    }

    // Events
    btnNext.addEventListener('click', nextImg);
    btnBack.addEventListener('click', prevImg);
    btnNext.addEventListener('mousedown', stopInterval);
    btnBack.addEventListener('mousedown', stopInterval);
    btnNext.addEventListener('mouseup', playInterval);
    btnBack.addEventListener('mouseup', playInterval);

    // Iniciar
    init();
    
} 