
const SAMPLE_IMAGE_PATH = './sample.png'; 
const DUMMY_FPS = 15;
const DUMMY_RESOLUTION = "640x480"; 


function loadData() {

    const imageElement = document.getElementById('processed-image') as HTMLImageElement;
    const fpsElement = document.getElementById('fps-value') as HTMLSpanElement;
    const resElement = document.getElementById('res-value') as HTMLSpanElement;


    imageElement.src = SAMPLE_IMAGE_PATH;
    fpsElement.textContent = DUMMY_FPS.toString();
    resElement.textContent = DUMMY_RESOLUTION;
}


window.onload = loadData;