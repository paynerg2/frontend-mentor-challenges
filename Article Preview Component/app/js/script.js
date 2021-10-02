var share_icons = [];
share_icons.push(document.querySelector('.share__icon'));
share_icons.push(document.querySelector('.share__icon__overlay'));
var overlay = document.querySelector('.share__overlay');

function toggleOverlayActiveState() {
    if (overlay.classList.contains('active')) {
        overlay.classList.remove('active');
    } else {
        overlay.classList.add('active');
    }
}

console.log(share_icons);

share_icons.forEach((icon) => {
    icon.addEventListener('click', function () {
        console.log('click');
        toggleOverlayActiveState();
    });
});
