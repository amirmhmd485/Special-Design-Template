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

// start about
    // no logic Yet
// end about

// start Skills
let skillsSection = document.getElementById("skills");
let alltrans = document.querySelectorAll(".trans")
window.addEventListener("scroll" , function(e){
    if(this.scrollY >= skillsSection.offsetTop - 200){
        alltrans.forEach((trans) => {
            trans.style.width = trans.getAttribute("data-progress");
        })
    }
    else{
        alltrans.forEach((trans) => {
            trans.style.width = 0;
        })
    }
})
// end Skills
// start gallery
let allimgs = document.querySelectorAll(".image img");
let popup = document.querySelector(".popup")
let image = document.querySelector(".popup .image img")
allimgs.forEach((image) => {
    image.addEventListener("click" , function(e){
        popup.classList.add("show")
        img.setAttribute("src" , e.target.getAttribute("src"));
    })
})
popup.addEventListener("dblclick" , function(e){
    popup.classList.remove("show");
})
// End gallery
// start testmonials
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");
let p = document.querySelector(".shortcut")
let h = document.querySelector(".name")
let allLis = document.querySelectorAll(".bullets li")
let counter = 0;
let testArray = [
    {
        name:"amir mhmd",
        text:"DevOps",
        src:"images/ele.jpg"
    },
    {
        name:"abdo rady",
        text:"backend",
        src:"images/five.jpg"
    },
    {
        name:"basel mancy",
        text:"Ui&UX",
        src:"images/nine.jpg"
    },
    {
        name:"Kareem Esam",
        text:"frontEnd",
        src:"images/seven.jpg"
    },
    {
        name:"Ahmed Fawzy",
        text:"FrontEnd",
        src:"images/ten.jpg"
    },
    {
        name:"sayed sayko",
        text:"full stack",
        src:"images/thr.jpg"
    },
    {
        name:"abdo elbtbsy",
        text:"team leader",
        src:"images/three.jpg"
    }
]
function nextCarosel(e){
    ++counter;
    if(counter == testArray.length){
        counter = 0
    }
    h.innerHTML = testArray[counter]["name"];
    p.innerHTML = testArray[counter]["text"];
    checkBullet(counter)
}
function previousCarosel(e){
    --counter;
    if(counter == -1) {
        counter = testArray.length - 1;
    }
    p.innerHTML = testArray[counter]["text"];
    h.innerHTML = testArray[counter]["name"];
    img.src = testArray[counter].src;
    checkBullet(counter)
}
function checkBullet(counter){
    allLis.forEach((li) => {
        if(li.getAttribute("data-index") == counter){
            allLis.forEach((l) => {
                l.classList.remove("active");
            })
            li.classList.add("active");
        }
    })
}
nextBtn.addEventListener("click" , nextCarosel);
prevBtn.addEventListener("click" , previousCarosel);

// end testmonials