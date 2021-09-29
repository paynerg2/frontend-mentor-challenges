/* Adapted from W3 Schools */
console.log('Hello world');

var accordions = document.getElementsByClassName('accordion');

for (i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function () {
        /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
        clearActiveStates();
        this.classList.toggle('active');

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
}

function clearActiveStates() {
    for (i = 0; i < accordions.length; i++) {
        const acc = accordions[i];
        acc.classList.remove('active');
        hidePanel(acc);
    }
}

function hidePanel(accordion) {
    accordion.nextElementSibling.style.display = 'none';
}
