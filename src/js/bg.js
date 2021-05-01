const body = document.querySelector('body'),
    background = body.querySelector('.background');

const NUMBER_OF_IMG = 4;
const BG_IMGS = [
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1616927366799-d4cab1b7e545?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1618590837297-dfa199c850ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1402&q=80",
    "https://images.unsplash.com/photo-1618711103795-a20af977b6e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1527&q=80"];

function paintBg(imgNumber){
    body.style.backgroundImage = `url(${BG_IMGS[imgNumber]})`;
}

function genRandom(){
    const random = Math.floor(Math.random() * NUMBER_OF_IMG);
    return random;
}

function init(){
    paintBg(genRandom());
}

init();