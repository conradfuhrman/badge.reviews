import Shuffle from "shufflejs"

console.log('shuffle');

var element = document.querySelector('.my-shuffle-container');
var sizer = element.querySelector('.my-sizer-element');

var shuffleInstance = new Shuffle(element, {
    itemSelector: '.picture-item',
    sizer: sizer,
});