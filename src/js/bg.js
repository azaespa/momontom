const body = document.querySelector('body'),
    background = body.querySelector('.background');

const NUMBER_OF_IMG = 4;
const BG_IMGS = [
    {
        image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
        color: "#454F20"
    },
    {
        image:"https://images.unsplash.com/photo-1616927366799-d4cab1b7e545?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
        color: "#18202B"
    },
    {
        image:"https://images.unsplash.com/photo-1618590837297-dfa199c850ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1402&q=80",
        color:"#303031"
    },
    {
        image:"https://images.unsplash.com/photo-1618711103795-a20af977b6e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1527&q=80",
        color:"#007B9C"
    }
    ];

function paintBg(imgNumber){
    body.style.backgroundColor = BG_IMGS[imgNumber].color;
    background.style.backgroundImage = `url(${BG_IMGS[imgNumber].image})`;
}

function genRandom(){
    const random = Math.floor(Math.random() * NUMBER_OF_IMG);
    return random;
}

function init(){
    paintBg(genRandom());
}

init();