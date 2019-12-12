var greenanimate = bodymovin.loadAnimation({
    container: document.getElementById('greenanim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: greenPath
});
var redanimate = bodymovin.loadAnimation({
    container: document.getElementById('redanim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: redPath
});
$('div#greenanim .ay').hover(function() {
    $('div#greenanim svg').show();
});
$('div#greenanim .ay').click(function() {
    window.location = './greensauce.html';
});
$('div#redanim .ay').click(function() {
    window.location = './redsauce.html';
});

$('div#greenanim .ay').mouseleave(function() {
    $('div#greenanim svg').hide();
});

$('div#redanim .ay').hover(function() {
    $('div#redanim svg').show();
});

$('div#redanim .ay').mouseleave(function() {
    $('div#redanim svg').hide();
});

window.addEventListener('DOMContentLoaded', function() {
    redanimate.setSpeed('0.2');
    greenanimate.setSpeed('0.2');
});