"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// --- Dummy Data ---
// This points to the image you copied
const SAMPLE_IMAGE_PATH = './sample.png';
const DUMMY_FPS = 15;
const DUMMY_RESOLUTION = "640x480"; // Or whatever your image size is
// --- Main Function ---
function loadData() {
    // Use '!' to tell TypeScript we know these exist
    const imageElement = document.getElementById('processed-image');
    const fpsElement = document.getElementById('fps-value');
    const resElement = document.getElementById('res-value');
    // Update the HTML elements
    imageElement.src = SAMPLE_IMAGE_PATH;
    fpsElement.textContent = DUMMY_FPS.toString();
    resElement.textContent = DUMMY_RESOLUTION;
}
// Run when the page loads
window.onload = loadData;
//# sourceMappingURL=main.js.map