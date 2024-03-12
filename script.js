// offer bar
let offer_bar = document.querySelector(".offer-bar");
let x_mark = document.getElementById("x-mark");

x_mark.addEventListener("click", function () {
    offer_bar.style.display = "none";
})

// selecting icons
let menu = document.querySelector(".menu-bar");
let xmark = document.querySelector(".xmark");

let side_nav = document.querySelector(".side-nav");


menu.addEventListener("click", function () {
    side_nav.style.left = "0%"
})

xmark.addEventListener("click", function () {
    side_nav.style.left = "-60%"
})

// slider

let sliderLeftButton = document.querySelector(".slider-left-button");
let sliderRightButton = document.querySelector(".slider-right-button");
let sliderImg = document.querySelector(".slider-image-container");
let sliderMargin = 0;

sliderRightButton.addEventListener("click", function () {
    sliderMargin = sliderMargin + 100;
    if (sliderMargin > 200) {
        sliderMargin = 0;
    }
    sliderImg.style.marginLeft = "-" + sliderMargin + "vw";
    
})

sliderLeftButton.addEventListener("click", function () {
    sliderMargin = sliderMargin - 100;
    if (sliderMargin < 0) {
        sliderMargin = 200;
    }
    sliderImg.style.marginLeft = "-" + sliderMargin + "vw";
});

let likeButton = document.querySelectorAll(".like-button");
likeButton.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        if(e.target.src.indexOf("blackheart")>0){
            e.target.src="./assets/icons/redheart.png"
        }
        else{
            e.target.src="./assets/icons/blackheart.png"
        }

    })
})
