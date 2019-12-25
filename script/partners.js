let stock2 = [
    'img/clients1.png',
    'img/clients2.png',
    'img/clients3.png',
    'img/clients4.png',
]

let d = 0;

let buttonLeftChecker2 = document.querySelector('#partnersButtonLeft');
buttonLeftChecker2.addEventListener('click', goLeft2);

let buttonRightChecker2 = document.querySelector('#partnersButtonRight');
buttonRightChecker2.addEventListener('click', goRight2);

let partnersBack = document.getElementById('partnersContent');
partnersBack.style.backgroundImage = `url('${stock2[d]}')`;

let partnersDotted = document.getElementById(`partnersDotted${d + 1}`);
partnersDotted.style.backgroundColor = 'white';

function goLeft2() {
    if (d == 0) {
        d = 3;
    } else {
        d = d - 1;
    }
    partnersBack.style.backgroundImage = `url('${stock2[d]}')`;
    partnersDotted.style.backgroundColor = 'grey';
    partnersDotted = document.getElementById(`partnersDotted${d + 1}`);
    partnersDotted.style.backgroundColor = 'white';

}

function goRight2() {
    if (d == 3) {
        d = 0;
    } else {
        d = d + 1;
    }
    partnersBack.style.backgroundImage = `url('${stock2[d]}')`;
    partnersDotted.style.backgroundColor = 'grey';
    partnersDotted = document.getElementById(`partnersDotted${d + 1}`);
    partnersDotted.style.backgroundColor = 'white';
}