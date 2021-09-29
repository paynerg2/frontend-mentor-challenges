/* Adapted from W3 Schools */
console.log('Hello world');

var accordions = document.getElementsByClassName('accordion');

for (i = 0; i < accordions.length; i++) {
    accordions[i].setAttribute('name', i.toString());
    accordions[i].addEventListener('click', function () {
        toggleActive(this);
        clearOtherActiveStates(this.getAttribute('name'));
    });
}

function hidePanel(accordion) {
    accordion.nextElementSibling.style.display = 'none';
}

function toggleActive(x) {
    /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
    x.classList.toggle('active');

    /* Toggle between hiding and showing the active panel */
    var panel = x.nextElementSibling;
    if (panel.style.display === 'block') {
        panel.style.display = 'none';
    } else {
        panel.style.display = 'block';
    }
}

function clearOtherActiveStates(name) {
    for (i = 0; i < accordions.length; i++) {
        console.log(accordions[i].getAttribute('name'));
        var currentElementName = accordions[i].getAttribute('name');
        console.log(currentElementName === name);
        if (accordions[i].getAttribute('name') !== name) {
            accordions[i].classList.remove('active');
            hidePanel(accordions[i]);
        }
    }
}
