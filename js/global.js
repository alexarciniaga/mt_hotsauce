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
$('div#greenanim').hover(function() {
    $('div#greenanim svg').show();
});

$('div#greenanim').mouseleave(function() {
    $('div#greenanim svg').hide();
});

$('div#redanim').hover(function() {
    $('div#redanim svg').show();
});

$('div#redanim').mouseleave(function() {
    $('div#redanim svg').hide();
});

window.addEventListener('DOMContentLoaded', function() {
    redanimate.setSpeed('0.2');
    greenanimate.setSpeed('0.2');
});
// // Load Green bottle animation

// $( window ).on( "load", function() {
        
//     var loadingBar1 = document.getElementById("loadingBar1");
//     var loadingContent1 = document.getElementById("loadingContent1");
//     var options = {
//         distID:  '1658',
//         solution3DName: 'green-true-mild-sauce',
//         projectName: 'hot-sauce-bottles',
//       solution3DID:  '652',
//       containerID: 'green-sauce',
//       onLoadingChanged: function(loading) {
//         loadingBar1.style.width = loading.progress + "%";
//       }
//     };
//     Unlimited3D.init(options, {},function(error, status){
//         loadingContent1.style.display = "none";
//         if (error || !status) {
//             console.log(error);
//             return;
//         }
//     });
// });
// // Load Red bottle animation 

// $( window ).on( "load", function() {
        
//     var loadingBar = document.getElementById("loadingBar2");
//     var loadingContent = document.getElementById("loadingContent2");
//     var options = {
//         distID:  '1659',
//         solution3DName: 'red-true-mild-sauce-v2',
//         projectName: 'hot-sauce-bottles',
//       solution3DID:  '674',
//       containerID: 'red-sauce',
//       onLoadingChanged: function(loading) {
//         loadingBar.style.width = loading.progress + "%";
//       }
//     };
//     Unlimited3D.init(options, {},function(error, status){
//         loadingContent.style.display = "none";
//         if (error || !status) {
//             console.log(error);
//             return;
//         }
//     });
// });