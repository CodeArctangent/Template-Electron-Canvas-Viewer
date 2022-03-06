const config = require('../config.json');
const { Vector, Euler, Color } = require('arctan.meridian');
const { Paper } = require('arctan.paper');
const util = require('arctan.autle');

let body;
let cv;

function saveNetworkState(state) {

}

function loadNetworkState() {

}

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('title').innerText = config.window.title;
    body = document.querySelector('body');
    cv = new Paper('.canvas', config.simulation.width, config.simulation.height);
    cv.yUp = true;
    document.addEventListener('contextmenu', () => {
        cv.canvas.toBlob((blob) => {
            navigator.clipboard.write([
                new ClipboardItem({ "image/png": blob })
            ]);
        }, "image/png");
    }); 
    cv.beginRenderLoop((time, dt, mouse) => {
    });
});