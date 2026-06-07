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

let allColors = document.querySelectorAll(".colors ul li")
allColors.forEach((li) => {
    li.addEventListener("click" , function(e){
        allColors.forEach((l) => {
            l.classList.remove("active");
        })
        li.classList.add("active");
        changeColor(li);
        saveColor(li);
    })
})
let wordHome = document.querySelector(".word-home")
let aboutHeader = document.querySelector(".about h2");
let skillsHeader = document.querySelector(".skills h2");
let galleryHeader = document.querySelector(".gallery h2");
let timeHeader = document.querySelector(".time h2");
let featureHeader = document.querySelector(".feature h2");
let testmonialsHeader = document.querySelector(".testmonials h2");
let contactHeader = document.querySelector(".contact h2");
let arr = [wordHome , aboutHeader , skillsHeader , galleryHeader , timeHeader , featureHeader , testmonialsHeader , contactHeader];
function changeColor(li){
    arr.forEach((element) => {
        element.style.color = li.getAttribute("data-color");
    })
}
function saveColor(li){
    localStorage.setItem("color" , li.getAttribute("data-color"));
}
window.addEventListener("load" ,getColor)
function getColor(){
    arr.forEach((element) => {
        element.style.color = localStorage.getItem("color");
    })
}
let closeBtn = document.querySelector(".offcanvas button.close")
function closeOffCanvas(){
    offcanvas.classList.remove("open");
    isopen = false;
}
closeBtn.addEventListener("click" , closeOffCanvas);
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
let img = document.querySelector(".popup .image img")
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
let testImg = document.querySelector(".test img")
let allLis = document.querySelectorAll(".bullets li")
let counter = 0;
let testArray = [
    {
        name:"amir mhmd",
        text:"DevOps",
        src:"images/amir.png"
    },
    {
        name:"abdo rady",
        text:"backend",
        src:"images/abdo.png"
    },
    {
        name:"basel mancy",
        text:"Ui&UX",
        src:"images/basel2.png"
    },
    {
        name:"Kareem Esam",
        text:"frontEnd",
        src:"images/kareem.png"
    },
    {
        name:"Ahmed Fawzy",
        text:"FrontEnd",
        src:"images/fawzy.png"
    },
    {
        name:"sayed sayko",
        text:"full stack",
        src:"images/sayko.png"
    },
    {
        name:"abdo elbtbsy",
        text:"team leader",
        src:"images/sayko2.png"
    }
]
function nextCarosel(e){
    ++counter;
    if(counter == testArray.length){
        counter = 0
    }
    h.innerHTML = testArray[counter]["name"];
    p.innerHTML = testArray[counter]["text"];
    testImg.setAttribute("src" , `${testArray[counter]["src"]}`)
    checkBullet(counter)
}
function previousCarosel(e){
    --counter;
    if(counter == -1) {
        counter = testArray.length - 1;
    }
    p.innerHTML = testArray[counter]["text"];
    h.innerHTML = testArray[counter]["name"];
    testImg.setAttribute("src", testArray[counter].src);
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
let caroselSlide = setInterval(() => {
    nextCarosel();
} , 5000);
// end testmonials
// start contact
let nameField = document.getElementById("name")
let emailField = document.getElementById("email")
let phoneField = document.getElementById("phone")
let messageField = document.querySelector("textarea")
let submitBtn = document.querySelector(".ch")

let nameRegExp = /[a-zA-Z]/ig;
let PhoneRegExp = /\d/ig;

function checkkey(e , x){
    if(!e.key.match(x)){
        if(e.key == "Backspace"){
            return e;
        }
        else{
            e.preventDefault()
        }
    }
}
nameField.addEventListener("keydown" , function(e) {
    checkkey(e , nameRegExp);
});
phoneField.addEventListener("keydown" , function(e){
    checkkey(e , PhoneRegExp);
});
submitBtn.addEventListener("click" , function(e){
    if(nameField.value == "" || phoneField.value == ""  || emailField.value == ""  || messageField.value == "" ){
        e.preventDefault();
    }
    return e;
})
// End contact
// start scrolltop
let scTop = document.querySelector(".scrolltop");
scTop.addEventListener("click" , function(e){
    window.scrollTo({top:0,left:0,behavior:"smooth"})
})
window.addEventListener("scroll" , function(e){
    if(this.scrollY >= 100){
        scTop.classList.add("show");
    }
    else{
        scTop.classList.remove("show");
    }
})
// end scrolltop