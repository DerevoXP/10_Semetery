let stock = [
    'img/back1.jpg',
    'img/back2.jpg',
    'img/back3.jpg',
    'img/back4.jpg',
]

let c = 0;

let buttonLeftChecker = document.querySelector('#presentationRightLeftButton');
buttonLeftChecker.addEventListener('click', goLeft);

let buttonRightChecker = document.querySelector('#presentationRightRightButton');
buttonRightChecker.addEventListener('click', goRight);

let presentationBack = document.getElementById('presentation');
presentationBack.style.backgroundImage = `url('${stock[c]}')`;

let presentationDotted = document.getElementById(`presentationDotted${c + 1}`);
presentationDotted.style.backgroundColor = 'white';

function goLeft() {
    if (c == 0){
        c = 3;
    } else {
        c = c - 1;
    }
    presentationBack.style.backgroundImage = `url('${stock[c]}')`;
    presentationDotted.style.backgroundColor = 'grey';
    presentationDotted = document.getElementById(`presentationDotted${c + 1}`);
    presentationDotted.style.backgroundColor = 'white';
    
}

function goRight() {
    if (c == 3) {
        c = 0;
    } else {
        c = c + 1;
    }
    presentationBack.style.backgroundImage = `url('${stock[c]}')`;
    presentationDotted.style.backgroundColor = 'grey';
    presentationDotted = document.getElementById(`presentationDotted${c + 1}`);
    presentationDotted.style.backgroundColor = 'white';
}