var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 300
});

var scrollToTopBtn = document.querySelector("#backToUp");
var rootElement = document.documentElement;
var navbar = document.querySelector('nav');
var menuBtn = document.querySelector(".menu-btn");
var ul = document.querySelector("nav ul");
var shape = document.querySelector(".shape");
var li = document.querySelectorAll("nav ul li");
var careerContainer = document.querySelectorAll(".career-container");
var bx = document.querySelectorAll(".bx-plus");

let clicked = false;

function handleScroll() {
  if (rootElement.scrollTop >50) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function navbarStatus() {
  if (window.pageYOffset > window.innerHeight) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}

function navigation(){
  if(clicked != true){
    ul.classList.add("active");
    shape.classList.add("active");
    menuBtn.classList.add('open');
    clicked = true;
  }else{
    ul.classList.remove("active");
    shape.classList.remove("active");
    menuBtn.classList.remove('open');
    clicked = false;
  }
}
function job(bxindex){
  careerContainer.forEach((element,index) => {
    if(bxindex == index){
      element.classList.add("active-job");
    }else{
      element.classList.remove("active-job");
    }
  });
  bx.forEach((element,index) => {
    if(bxindex == index){
      element.classList.add("bx-spin");
      element.classList.add("bx-rotate-180");
    }else{
      element.classList.remove("bx-spin");
      element.classList.remove("bx-rotate-180");
    }
  });
}
li.forEach(element => {
  element.addEventListener("click",navigation);
});
bx.forEach((element,index) => {
  element.addEventListener("click",function(){
    job(index)
  });
});
menuBtn.addEventListener("click",navigation);
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);
document.addEventListener("scroll", navbarStatus);
//carousel
let slidePosition = 0;
const slides = document.getElementsByClassName('carousel-item');
const totalSlides = slides.length;

document.
  getElementById('carousel__button--next')
  .addEventListener("click", function() {
    moveToNextSlide();
  });
document.
  getElementById('carousel__button--prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

function updateSlidePosition(direction) {
  for (let slide of slides) {
    slide.classList.remove('visible');
    slide.classList.remove('right-direction');
    slide.classList.remove('left-direction');
    slide.classList.add('hidden');
  }
  if(direction == "left"){
    slides[slidePosition].classList.add('left-direction');
  }
  else{
    slides[slidePosition].classList.add('right-direction');
  }
  slides[slidePosition].classList.add('visible');
  slides[slidePosition].classList.remove('hidden');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition("right");
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition("left");
}
//animation

//animation
setTimeout(() => {logoPics.style.removeProperty("height")},3600);
const logoPics= document.querySelector(".logo-pics");
const Logoname = document.querySelector(".name");
const typewriter = document.querySelector(".typewriter");


var tl1 = new TimelineMax();
var tl = new TimelineMax({onUpdate:updatePercentage});
var t2 = new TimelineMax({onUpdate:updatePercentage});
var t3 = new TimelineMax({onUpdate:updatePercentage});
var t4 = new TimelineMax({onUpdate:updatePercentage});
var t5 = new TimelineMax({onUpdate:updatePercentage});
var t6 = new TimelineMax({onUpdate:updatePercentage});

const controller = new ScrollMagic.Controller();

tl1.from(logoPics, 1.5, {height: "150vh" }, {height:"100vh", ease: Power4.easeInOut})
.fromTo(Logoname , 1, {opacity: "0" }, {opacity:"1"})
.fromTo(typewriter , 1, {opacity: "0" }, {opacity:"1"})
.fromTo(navbar , 1,{opacity: "0" }, {opacity:"1"})


tl.from('#why-us', .5, { opacity: 0 , x:-200});
//tl.from('.right', 0.5, { opacity: 0, x:200});

t2.from('.feedback-container', .5, { opacity: 0 , x:-200});
t2.from('.carousel', 0.5, { opacity: 0, x:200});

t3.from('.treatment-h1', .5, { opacity: 0 , x:-200});
t3.from('.treatment', 0.5, { opacity: 0, x:200});

t4.from('.team-h1', .5, { opacity: 0 , x:-200});
t4.from('.card-container', 0.5, { opacity: 0, x:200});

t5.from('.price-h1', .5, { opacity: 0 , x:-200});
t5.from('.table', 0.5, { opacity: 0, x:200});

t6.from('.career-h1', .5, { opacity: 0 , x:-200});
t6.from('.career-container', 0.5, { opacity: 0, x:200});

const scene = new ScrollMagic.Scene({
  triggerElement: "#why-us",
})
  .setPin(navbar)
  .setTween(tl)
		.addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: "#feedback"
})
  .setTween(t2)
		.addTo(controller);

const scene3 = new ScrollMagic.Scene({
      triggerElement: "#treatment"
    })
      .setTween(t3)
        .addTo(controller);

const scene4 = new ScrollMagic.Scene({
  triggerElement: "#team"
})
  .setTween(t4)
    .addTo(controller);
const scene5 = new ScrollMagic.Scene({
  triggerElement: "#price"
})
  .setTween(t5)
    .addTo(controller);

const scene6 = new ScrollMagic.Scene({
      triggerElement: "#career"
    })
      .setTween(t6)
        .addTo(controller);
     
function updatePercentage() {
  tl.progress();
  //console.log(tl.progress());
}
//nav
const sections = document.querySelectorAll("section");
let observer = new IntersectionObserver(navCheck);

function navCheck(entries){
  entries.forEach(entry => {
    const idName = entry.target.id;
    activeAnchor = document.querySelector('[data-page='+idName+']');
    if(entry.isIntersecting){
      const id = document.querySelector("#"+idName);
      const className = document.querySelector(".class-"+idName);
      if (className != null){
        className.classList.add("activeATag");
      }
    }else{
      const classNames = document.querySelector(".class-"+idName);
      if (classNames != null){
        classNames.classList.remove("activeATag");
      }
    }

  });
}

sections.forEach(section => {
  observer.observe(section);
});
