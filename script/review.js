let stock3img = [
    'img/hoi.jpg',
    'img/tsoi.jpg',
    'img/letov.jpg',
    'img/prezik.jpg',
]

let stock3txt = [
    'Опять с нетерпением жду я конец октября, конец октября с нетерпением жду я не зря – опять с тридцать первого ночью ко мне ты придешь, смешается снова смертельно-любовная дрожь, ты придешь, из могилы придешь. Тела наши снова сольются под светом луны, любовь наша вечна, друг другу мы сильно нужны, твой череп оскаленный вновь улыбается мне, я буду ласкать тебя нежно при полной луне.',
    'И горел погребальным костром закат, и волками смотрели звезды из облаков. Как раскинув руки, лежали ушедшие в ночь, и как спали вповалку живые, не видя снов… А жизнь – только слово, есть лишь любовь и есть смерть. Эй! А кто будет петь, если все будут спать? Смерть стоит того, чтобы жить, а любовь стоит того, чтобы ждать.',
    'На каждой стене портрет великого вождя, а я иду по дороге и у меня нет стен! А люди ползут, гремя своими цепями, они гордятся золотыми цепями, а я разорвал все цепи и я иду легко! На каждом шагу подстерегает капкан, а мне насрать на капканы и я иду вперёд! А все вы ужасно боитесь умереть, а все вы ужасно боитесь помереть, а я открою вам тайну — вы все давно уже сдохли!',
    'Если цены станут неуправляемы, превысят текущие более чем в три-четыре раза, я сам лягу на рельсы.',
]

let stock3sign = [
    'Ю.Клинских',
    'В.Цой',
    'Е.Летов',
    'Е.Б.Н. aka Ельцин',
]

let stock3sign2 = [
    'Солист группы "Сектор Газа"',
    'Солист группы "Кино"',
    'Говорит, что тоже певец',
    'единственный покойный президент РФ',
]

let e = 0;

let buttonLeftChecker3 = document.querySelector('#reviewButtonLeft');
buttonLeftChecker3.addEventListener('click', goLeft3);

let buttonRightChecker3 = document.querySelector('#reviewButtonRight');
buttonRightChecker3.addEventListener('click', goRight3);

let reviewDotted = document.getElementById(`reviewDotted${e + 1}`);
reviewDotted.style.backgroundColor = 'white';

let reviewBlockText = document.getElementById('reviewBlockText');
let reviewBlockAvatarImg = document.getElementById('reviewBlockAvatarImg');
let reviewBlockAvatarH4 = document.getElementById('reviewBlockAvatarH4');
let reviewBlockAvatarP = document.getElementById('reviewBlockAvatarP');

reviewBlockAvatarImg.style.backgroundImage = `url('${stock3img[e]}')`;
reviewBlockText.innerText = `${stock3txt[e]}`;
reviewBlockAvatarH4.innerText = `${stock3sign[e]}`;
reviewBlockAvatarP.innerText = `${stock3sign2[e]}`;

function goLeft3() {
    if (e == 0) {
        e = 3;
    } else {
        e = e - 1;
    }
    reviewDotted.style.backgroundColor = 'grey';
    reviewDotted = document.getElementById(`reviewDotted${e + 1}`);
    reviewDotted.style.backgroundColor = 'white';
    reviewBlockAvatarImg.style.backgroundImage = `url('${stock3img[e]}')`;
    reviewBlockText.innerText = `${stock3txt[e]}`;
    reviewBlockAvatarH4.innerText = `${stock3sign[e]}`;
    reviewBlockAvatarP.innerText = `${stock3sign2[e]}`;
}

function goRight3() {
    if (e == 3) {
        e = 0;
    } else {
        e = e + 1;
    }
    reviewDotted.style.backgroundColor = 'grey';
    reviewDotted = document.getElementById(`reviewDotted${e + 1}`);
    reviewDotted.style.backgroundColor = 'white';
    reviewBlockAvatarImg.style.backgroundImage = `url('${stock3img[e]}')`;
    reviewBlockText.innerText = `${stock3txt[e]}`;
    reviewBlockAvatarH4.innerText = `${stock3sign[e]}`;
    reviewBlockAvatarP.innerText = `${stock3sign2[e]}`;
}