// global variables

const container = document.querySelector('#container');
const btnIni = container.querySelector('.btnBegin');

//style - bg Color
const body = document.querySelector('.bg');
body.style.backgroundColor = '#272c34';
body.style.overflow = 'hidden';
body.style.fontFamily = 'Verdana';

// btn changes
btnIni.textContent = "Stories";

btnIni.addEventListener('mouseout', (event) => {
    btnIni.textContent = 'Stories';
});

btnIni.addEventListener('mouseover', (event) =>  {
    btnIni.textContent = "Let's Go!";
});

btnIni.addEventListener('click', function (event) {
    loadStories();
});

function loadStories(){
    container.innerHTML='<object type="text/html" class="center" data="./api/story.html" ></object>';
}

