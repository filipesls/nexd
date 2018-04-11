"use strict";
let $ = document.querySelector.bind(document);

function getRandomSize(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

var allImages = "";

for (var i = 0; i < 20; i++) {
    var width = getRandomSize(200, 400);
    var height = getRandomSize(200, 400);
    allImages += '<img src="https://picsum.photos/' + width + '/' + height + '/?random" alt="random images">';
}

$('#photos').innerHTML = allImages;