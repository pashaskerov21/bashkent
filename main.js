let hoverEffect = document.querySelectorAll(".hover-effect");
for(let i = 0; i < hoverEffect.length;i++){
    (function(index){
        hoverEffect[i].addEventListener("mouseover",function(){
            hoverEffect[index].classList.add("animation-active");
        });
        hoverEffect[i].addEventListener("mouseout",function(){
            hoverEffect[index].classList.remove("animation-active");
        })
    })(i);
}

let mobileSearchButton = document.querySelector(".mobile-search-button");
let mobileSearchPanel = document.querySelector(".mobile-search-panel");
let closeMobileSearchBtn = document.querySelector(".close-mobile-search");
mobileSearchButton.addEventListener("click",function(){
    mobileSearchPanel.classList.add("open");
});
closeMobileSearchBtn.addEventListener("click",function(){
    mobileSearchPanel.classList.remove("open");
})


let body = document.querySelector("body");
let navbarFixed = document.querySelector("header .navbar-fixed");
let pageUpScrollBtn = document.getElementById("page-up-scroll-btn");
body.onscroll = function(){
    if(scrollY > 280){
        navbarFixed.classList.add("show");
    }else{
        navbarFixed.classList.remove("show")
    }
    if(scrollY > 400){
        pageUpScrollBtn.classList.add("show");
    }else{
        pageUpScrollBtn.classList.remove("show");
    }
}


pageUpScrollBtn.onclick = function(){
    window.scrollTo(0,0);
}
