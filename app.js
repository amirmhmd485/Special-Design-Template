// start offcanvas
let settingBtn = document.querySelector(".offcanvas .sun");
let offcanvas = document.querySelector(".offcanvas");
let isopen = false;
function toggleOffcanvas() {
    if(isopen){
        offcanvas.classList.remove("open");
        isopen = false;
    }
    else{
        offcanvas.classList.add("open");
        isopen = true;
    }
}
settingBtn.addEventListener("click", toggleOffcanvas);
// end offcanvas

// start BurgerIcon
let burgerIcon = document.querySelector(".burger-icon");
let Ul = document.querySelector(".navbar")
let open = false;
function toggleUl(){
    if(open){
        Ul.classList.remove("open");
        open = false;
    }
    else{
        Ul.classList.add("open");
        open = true;
    }
}
burgerIcon.addEventListener("click" , toggleUl);
// end BurgerIcon

// start random backGround image
let srcs = [
    "images/one.jpg",
    "images/two.jpg",
    "images/three.jpg",
    "images/four.jpg",
    "images/five.jpg",
    "images/six.jpg",
    "images/seven.jpg",
    "images/eight.jpg",
    "images/nine.jpg",
    "images/ten.jpg",
    "images/ele.jpg",
    "images/twe.jpg",
    "images/thr.jpg"
]

let landingPage = document.querySelector(".landing");
let randomBtn = document.querySelector(".offcanvas .buttons button.random")
let stopBtn = document.querySelector(".offcanvas .buttons button.stop")

function randomBackground(){
    let randomNumber = Math.floor(Math.random() * srcs.length);
    landingPage.style.backgroundImage = `url("${srcs[randomNumber]}")`;
}
let random = setInterval(randomBackground , 10000) 
randomBtn.addEventListener("click" , function(e){
    let random = setInterval(randomBackground , 10000) 
    randomBtn.disabled = true;
    stopBtn.disabled = false;
    stopBtn.classList.remove("disabled");
    this.classList.add("disabled");
})
stopBtn.addEventListener("click" , function(e){
    clearInterval(random);
    randomBtn.classList.remove("disabled");
    randomBtn.disabled = false;
    stopBtn.disabled = true;
    this.classList.add("disabled");
})
// end random backGround image