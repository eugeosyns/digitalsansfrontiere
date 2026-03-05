const boutton1 = document.getElementById('premierbouton');
const boutton2 = document.getElementById('secondbouton');

const partie1 = document.getElementById('première');
const partie2 = document.getElementById('deuxieme');
const partie3 = document.getElementById('third');

const fond = document.getElementById('fond');


partie2.hidden = true;
partie3.hidden = true;


boutton1.addEventListener("click", (e) => {
    e.preventDefault();

    const inputs = partie1.querySelectorAll('input');
    let valide = true;

    for (let input of inputs) {
        if (input.value.trim() === '') {
            valide = false;
            input.classList.add('border-danger');
        } else {
            input.classList.remove('border-danger');
        }
    }

    if (valide) {
        partie1.hidden = true;
        partie2.hidden = false;
        fond.src = "images/login2.png"
    }
});

boutton2.addEventListener("click", (e) => {
    e.preventDefault();

    const inputs = partie2.querySelectorAll('input');
    let valide = true;

    for (let input of inputs) {
        if (input.value.trim() === '') {
            valide = false;
            input.classList.add('border-danger');
        } else {
            input.classList.remove('border-danger');
        }
    }

    if (valide) {
        partie2.hidden = true;
        partie3.hidden = false;
        fond.src = "images/login3.png"
    }
});
