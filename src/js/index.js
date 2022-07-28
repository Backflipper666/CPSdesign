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
    
    if (window.matchMedia("screen and (min-width: 767px) and (max-width:1119px)").matches) {  
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
    
    else if (window.matchMedia('screen and (min-width: 1120px)').matches) {
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
let second = document.querySelector(".links__second")
let third = document.querySelector(".links__third")
let top = 75;

/* second.addEventListener("mouseover", ()=>{
    addBlue();
})

third.addEventListener("mouseover", ()=>{
    addBlue();
}) */

/* for(let li of links){
    let span = document.createElement("span");
    span.setAttribute("style", `background-image: url("../images/highlight.svg"); background-repeat: no-repeat;background-position: 50% 50%;position: absolute;left:-27px;top: ${top+=20}px;z-index: 2;height: 33px;width: 55px;`)
    console.log(top);

    li.addEventListener("mouseover", ()=>{
        li.before(span);
        li.addEventListener("mouseleave", ()=>{
            span.remove();
        })
    })

} */


for(let i = 1; i < links.length; i++){
    let span = document.createElement("span");
    span.setAttribute("style", `background-image: url("../images/highlight.svg"); background-repeat: no-repeat;background-position: 50% 50%;position: absolute;left:-27px;top: ${top+=47}px;z-index: 2;height: 33px;width: 55px;`)
    console.log(top);

    links[i].addEventListener("mouseover", ()=>{
        links[i].before(span);
        links[i].addEventListener("mouseleave", ()=>{
            span.remove();
        })
    })
} 



function addBlue(){
    let span = document.createElement("span");
    span.setAttribute("style", `background-image: url("../images/highlight.svg"); background-repeat: no-repeat;background-position: 50% 50%;position: absolute;left:-27px; top:125px;z-index: 2;height: 33px;width: 55px;`)
    second.before(span);

    second.addEventListener("mouseleave", ()=>{
        span.remove();
    })
}
