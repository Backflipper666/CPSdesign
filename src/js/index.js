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
//Здесь должен быть ещё один ряд блоков
if (window.matchMedia("screen and (min-width: 767px) and (max-width:1439px)").matches) {  
    let btn2 = document.querySelector(".btn-container")
    let logos = document.querySelectorAll(".labels__logo-hidden");
    let expandReplica = document.querySelector("span.btn__expand-replica");
    let textReplica = document.querySelector("span.btn__text-replica");
    let vsReplicas = document.querySelectorAll(".labels__view-sonic-replica");
    btn2.addEventListener("click", ()=>{
        if(textReplica.textContent == "Скрыть"){
            for(let logo of logos){
                logo.classList.add("labels__logo-hidden")
            }
            for(let elem of vsReplicas){
                elem.classList.remove("labels__view-sonic-show")
            }
            expandReplica.setAttribute("style", "transform:rotate(180deg);")
            textReplica.textContent = "Показать все";
        }
        else{
            for(let logo of logos){
                logo.classList.remove('labels__logo-hidden')
            }
            for(let elem of vsReplicas){
                elem.classList.add("labels__view-sonic-show")
            }
            expandReplica.setAttribute("style", "transform:rotate(360deg);")
            textReplica.textContent = "Скрыть";
        }
    })
}
else if (window.matchMedia('screen and (min-width: 1440px)').matches){
    let btn2 = document.querySelector(".btn-container")
    let logos = document.querySelectorAll(".labels__logo-hidden");
    let expandReplica = document.querySelector("span.btn__expand-replica");
    let textReplica = document.querySelector("span.btn__text-replica");
    btn2.addEventListener("click", ()=>{
        if(textReplica.textContent == "Скрыть"){
            for(let logo of logos){
                logo.classList.add("labels__logo-hidden")
            }
            expandReplica.setAttribute("style", "transform:rotate(180deg);")
            textReplica.textContent = "Показать все";
        }
        else{
            for(let logo of logos){
                logo.classList.remove('labels__logo-hidden')
            }
            expandReplica.setAttribute("style", "transform:rotate(360deg);")
            textReplica.textContent = "Скрыть";
        }
    })
    
}
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

    //change feedback content on call button

    let fields = document.querySelectorAll(".feedback__name, .feedback__mail, .feedback__message");
    let title = document.querySelector(".feedback__title")

    chat.addEventListener("click", ()=>{
    title.textContent = "Обратная связь"
    feedbackDiv.classList.remove("hide-feedback")
    sidebar.classList.add("blur-main-sidebar")
    main.classList.add("blur-main-sidebar")
    for(let elem of fields){
        elem.classList.remove("hide-feedback")
    }
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
        title.textContent = "Заказать звонок"
        for(let elem of fields){
            elem.classList.add("hide-feedback")
        }

        closeFeedback.addEventListener("click", ()=>{
            feedbackDiv.classList.add("hide-feedback")
            sidebar.classList.remove("blur-main-sidebar")
            main.classList.remove("blur-main-sidebar")
        }) 
        
    })
} 


if (window.matchMedia('screen and (max-width: 359px)').matches) {
    let chat = document.querySelector(".btm-menu__chat");
    let feedbackDiv = document.querySelector(".feedback");
    let closeFeedback = document.querySelector(".feedback__close");
    let call = document.querySelector(".btm-menu__call")

    //change feedback content on call button

    let fields = document.querySelectorAll(".feedback__name, .feedback__mail, .feedback__message");
    let title = document.querySelector(".feedback__title")

    chat.addEventListener("click", ()=>{
        feedbackDiv.classList.remove("hide-feedback")
        sidebar.classList.add("hide-sidebar")

        
    })
    call.addEventListener("click", ()=>{
        feedbackDiv.classList.remove("hide-feedback")
        sidebar.classList.add("hide-sidebar")
    })

    closeFeedback.addEventListener("click", ()=>{
        feedbackDiv.classList.add("hide-feedback")
        sidebar.classList.remove("hide-sidebar")
    })

    call.addEventListener("click", ()=>{
        title.textContent = "Заказать звонок"
        for(let elem of fields){
            elem.classList.add("hide-feedback")
        }
    })
    chat.addEventListener("click", ()=>{
        title.textContent = "Обратная связь"
        for(let elem of fields){
            elem.classList.remove("hide-feedback")
        }
    })
    

} 

if (window.matchMedia('screen and (min-width: 360px) and (max-width:767px)').matches) {
    let chat = document.querySelector(".btm-menu__chat");
    let feedbackDiv = document.querySelector(".feedback");
    let closeFeedback = document.querySelector(".feedback__close");
    let call = document.querySelector(".btm-menu__call")

    //change feedback content on call button

    let fields = document.querySelectorAll(".feedback__name, .feedback__mail, .feedback__message");
    let title = document.querySelector(".feedback__title")

    chat.addEventListener("click", ()=>{
        feedbackDiv.classList.remove("hide-feedback")
        sidebar.classList.add("hide-sidebar")

        
    })
    call.addEventListener("click", ()=>{
        feedbackDiv.classList.remove("hide-feedback")
        sidebar.classList.add("hide-sidebar")
    })

    closeFeedback.addEventListener("click", ()=>{
        feedbackDiv.classList.add("hide-feedback")
        sidebar.classList.remove("hide-sidebar")
    })

    call.addEventListener("click", ()=>{
        title.textContent = "Заказать звонок"
        for(let elem of fields){
            elem.classList.add("hide-feedback")
        }
    })
    chat.addEventListener("click", ()=>{
        title.textContent = "Обратная связь"
        for(let elem of fields){
            elem.classList.remove("hide-feedback")
        }
    })
    

} 
if (window.matchMedia('screen and (min-width: 768px) and (max-width:1439px)').matches) {
    let chat = document.querySelector(".btm-menu__chat");
    let feedbackDiv = document.querySelector(".feedback");
    let closeFeedback = document.querySelector(".feedback__close");
    let call = document.querySelector(".btm-menu__call")

    //change feedback content on call button

    let fields = document.querySelectorAll(".feedback__name, .feedback__mail, .feedback__message");
    let title = document.querySelector(".feedback__title")

    chat.addEventListener("click", ()=>{
        feedbackDiv.classList.remove("hide-feedback")
        sidebar.classList.add("hide-sidebar")

        
    })
    call.addEventListener("click", ()=>{
        feedbackDiv.classList.remove("hide-feedback")
        sidebar.classList.add("hide-sidebar")
    })

    closeFeedback.addEventListener("click", ()=>{
        feedbackDiv.classList.add("hide-feedback")
        sidebar.classList.remove("hide-sidebar")
    })

    call.addEventListener("click", ()=>{
        title.textContent = "Заказать звонок"
        for(let elem of fields){
            elem.classList.add("hide-feedback")
        }
    })
    chat.addEventListener("click", ()=>{
        title.textContent = "Обратная связь"
        for(let elem of fields){
            elem.classList.remove("hide-feedback")
        }
    })
    

} 
    
