import '../scss/style.scss';
  // import Swiper and modules styles
// core version + navigation, pagination modules:
import Swiper, { Keyboard, Navigation, Pagination } from "swiper";
// import Swiper and modules styles
import 'swiper/swiper.min.css';
import "swiper/modules/navigation/navigation";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/keyboard/keyboard";
import "swiper/modules/keyboard/keyboard.min.css";

console.log('Works!');



//1.5 start
const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    // Optional parameters
    slidesPerView: 1.3,
    centeredSlides: false,
    spaceBetween: 1,
    
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    
    
    },
    hashNavigation: {
        watchState: true,
    },
    keyboard: {
        enabled: true ,
        onlyInViewport: true,

        pageUpDown: true,
    },
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    
    });

    let button = document.querySelector("button.btn");
    let expand = document.querySelector("span.btn__expand");
    let text = document.querySelector("span.btn__text");
    
    //query selector to hide logos for tablet 
    let tablet = document.querySelectorAll("img.tablet")
    //qs to hide for desktop
    let desktop = document.querySelectorAll("img.desktop")
    
    if (window.matchMedia("screen and (min-width: 767px) and (max-width:1439px)").matches) {  
    button.addEventListener("click", ()=>{
        if (text.textContent == "Скрыть"){
        for(let element of tablet){
            element.classList.remove("shower")
            element.classList.add("hider");
        }
        expand.setAttribute("style", "transform:rotate(180deg);")
        text.textContent = "Показать все";
        }
        else{
        for(let element of tablet){
            element.classList.remove("hider")
            element.classList.add("shower")
        }
        expand.setAttribute("style", "transform:rotate(360deg);")
        text.textContent = "Скрыть";
        }
    })
    
    } 
    
    else if (window.matchMedia('screen and (min-width: 1440px)').matches) {
    button.addEventListener("click", ()=>{
        if (text.textContent == "Скрыть"){
        for(let element of desktop){
            element.classList.remove("shower")
            element.classList.add("hider");
        }
        expand.setAttribute("style", "transform:rotate(180deg);")
        text.textContent = "Показать все";
        }
        else{
        for(let element of desktop){
            element.classList.remove("hider")
            element.classList.add("shower")
        }
        expand.setAttribute("style", "transform:rotate(360deg);")
        text.textContent = "Скрыть";
        }
    })
    } 
//1.5 end
//1.5 replica start

//1.5 replica end
{
    const swiper = new Swiper('.prices', {
        modules: [Navigation, Pagination, Keyboard],
        // Optional parameters
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 10,
        slideToClickedSlide:true,
        
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        

        },
        
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        hashNavigation: {
            watchState: true,
        },
        keyboard: {
            enabled: true ,
            onlyInViewport: true,

            pageUpDown: true,
        }
        
        
        });
}

//add hover effects on links__services

let links = document.querySelectorAll(".links__li")
let top = 75;

for(let i = 1; i < links.length; i++){
    let span = document.createElement("span");
    span.setAttribute("style", `background-image: url("../images/highlight.svg"); background-repeat: no-repeat;background-position: 50% 50%;position: absolute;left:-27px;top: ${top+=47}px;z-index: 2;height: 33px;width: 55px;`)
    links[i].addEventListener("mouseover", ()=>{
        links[i].before(span);
        links[i].addEventListener("mouseleave", ()=>{
            span.remove();
        })
    })
} 

let burger = document.querySelector(".upperMenu__burger");
let sidebar = document.querySelector(".wrapper-sidebar");
let close = document.querySelector(".upMenu__close");
let main = document.querySelector(".wrapper-main");

if (window.matchMedia("screen and (min-width: 768px) and (max-width:1439px)").matches) {  
    let shrek = document.createElement("img");
    shrek.src = '../images/shrek.jpg'
    document.body.append(shrek)
    const pageWidth  = document.documentElement.scrollWidth;
    const pageHeight = document.documentElement.scrollHeight;
    shrek.setAttribute('style', `position:absolute; right:0; top:0; width:${pageWidth-320}px; height:${pageHeight}px; opacity:0;`)
    shrek.classList.add("hide-shrek");


    burger.addEventListener("click", ()=>{
        sidebar.classList.add("show-sidebar");
        main.classList.add("blur-main");
        shrek.classList.remove("hide-shrek");
    close.addEventListener("click", ()=>{
        sidebar.classList.remove("show-sidebar");
        main.classList.remove("blur-main")
        shrek.classList.add("hide-shrek")
    })  
    shrek.addEventListener("click", ()=>{
        sidebar.classList.remove("show-sidebar");
        main.classList.remove("blur-main");
        shrek.classList.add("hide-shrek")
    })
    })}

else if (window.matchMedia("screen and (max-width: 359px)").matches) {  

    burger.addEventListener("click", ()=>{
        sidebar.classList.add("show-sidebar");
        main.classList.add("hide-main");
    close.addEventListener("click", ()=>{
        sidebar.classList.remove("show-sidebar");
        main.classList.remove("hide-main")
    })  
    })}

else if (window.matchMedia("screen and (min-width: 360px) and (max-width:767px)").matches) {  

    burger.addEventListener("click", ()=>{
        sidebar.classList.add("show-sidebar");
        main.classList.add("hide-main");
    close.addEventListener("click", ()=>{
        sidebar.classList.remove("show-sidebar");
        main.classList.remove("hide-main")
    })  
    })}

//feedback start


if (window.matchMedia('screen and (min-width: 1440px)').matches) {
    let chat = document.querySelector(".btm-menu__chat");
    let feedbackDiv = document.querySelector(".feedback");
    let closeFeedback = document.querySelector(".feedback__close");
    let call = document.querySelector(".btm-menu__call")

    chat.addEventListener("click", ()=>{
    feedbackDiv.classList.remove("hide-feedback")
    sidebar.classList.add("blur-main-sidebar")
    main.classList.add("blur-main-sidebar")



    closeFeedback.addEventListener("click", ()=>{
        feedbackDiv.classList.add("hide-feedback")
        sidebar.classList.remove("blur-main-sidebar")
        main.classList.remove("blur-main-sidebar")
    })
    })
    call.addEventListener("click", ()=>{
        feedbackDiv.classList.remove("hide-feedback")
        sidebar.classList.add("blur-main-sidebar")
        main.classList.add("blur-main-sidebar")
    })
    closeFeedback.addEventListener("click", ()=>{
        feedbackDiv.classList.add("hide-feedback")
        sidebar.classList.remove("blur-main-sidebar")
        main.classList.remove("blur-main-sidebar")
    }) 
    
} 
    