(()=>{"use strict";const e=document.querySelector(".bars-btn"),n=document.querySelector(".responsive"),t=document.querySelector(".close-btn");e.addEventListener("click",(function(){n.style.display="flex",n.style.justifyContent="center",n.style.flexDirection="column",t.style.display="block",e.style.display="none"}));const i=document.querySelector(".bars-btn"),l=document.querySelector(".responsive"),o=document.querySelector(".close-btn"),s=document.querySelector(".line");o.addEventListener("click",(function(){l.style.display="none",i.style.display="flex",o.style.display="none",s.style.display="none"})),new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".next",prevEl:".prev"},breakpoints:{300:{slidesPerView:1},768:{slidesPerView:2},1200:{slidesPerView:4},1400:{slidesPerView:4}}}),new Swiper(".swiperReview",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".next",prevEl:".prev"},breakpoints:{300:{slidesPerView:1}}})})();