gsap.from("#jade", {
    x :10,
    duration :1,
    opactiy :0,
})
gsap.from(".nav-part1" ,{
    x :-200,
    opacity :0,
    duration :1,
    scrollTrigger :{
        trigger : ".nav-part1",
        scroller : "body",
        // markers : true,
        start : "top 80%",
        end : "top 30%",
        scrub : true,
    }
})
gsap.from(".nav-part2" ,{
    y:-20,
    opacity :0,
    duration :1,
    scrollTrigger :{
        trigger : ".nav-part2",
        scroller : "body",
        // markers : true,
        start : "top 80%",
        end : "top 30%",
        scrub : true,
    }
})
gsap.from(".nav-part3 img",{
    x :200,
    opacity :0,
    duration :1,
    scrollTrigger :{
        trigger : ".nav-part3 img",
        scroller : "body",
        // markers : true,
        start : "top 80%",
        end : "top 30%",
        scrub : "ture",
    }
})
gsap.from(".p2-left" ,{
    opacity :0,
    x : 10,
    scale : 0.5,
    // rotate :360,
    duration:2,
    scrollTrigger :{
        trigger : ".p2-left",
        scroller : "body",
        // markers : true,
        start : "top 90%",
        end : "top 20%",
        scrub : 2,
    }
})
gsap.from(".p2-right" ,{
    opacity :0,
    x : 200,
    // scale : 0.5,
    // rotate :360,
    duration:2,
    scrollTrigger :{
        trigger : ".p2-right",
        scroller : "body",
        // markers : true,
        start : "top 90%",
        end : "top 20%",
        scrub : 2,
    }
})
gsap.from(".p3-top" ,{
    opacity :0,
    y : 10,
    scale :0,
    // rotate :360,
    duration:2,
    scrollTrigger :{
        trigger : ".p3-top",
        scroller : "body",
        // markers : true,
        start : "top 90%",
        end : "top 20%",
        scrub : 4,
    }
})
gsap.from(".p3b-left",{
    opacity :0,
    x : 10,
    duration:2,
    scrollTrigger :{
        trigger : ".p3b-left",
        scroller : "body",
        // markers : true,
        start : "top 90%",
        end : "top 20%",
        scrub : 2,
    }
})
gsap.from(".p3b-right",{
    opacity :0,
    x : 10,
    duration:2,
    scrollTrigger :{
        trigger : ".p3b-right",
        scroller : "body",
        // markers : true,
        start : "top 90%",
        end : "top 20%",
        scrub : 2,
    }
})
gsap.from(".p4l-img",{
    opacity :0,
    x : -100,
    scale: 0.5,
    duration:2,
    scrollTrigger :{
        trigger : ".p4l-img",
        scroller : "body",
        // markers : true,
        start : "top 90%",
        end : "top 20%",
        scrub : 4,
    }
})
gsap.from(".p4-right h1",{
    opacity :0,
    x : 100,
    // scale: 0.5,
    duration:2,
    scrollTrigger :{
        trigger : ".p4-right h1",
        scroller : "body",
        // markers : true,
        start : "top 90%",
        end : "top 20%",
        scrub : true,
    }
})
gsap.from(".p4-right h3",{
    opacity :0,
    x : -100,
    // scale: 0.5,
    duration:2,
    scrollTrigger :{
        trigger : ".p4-right h3",
        scroller : "body",
        // markers : true,
        start : "top 90%",
        end : "top 20%",
        scrub : true,
    }
})

gsap.from(".page5 input",{
    opacity :0,
    x : -100,
    scale: 0.5,
    duration:2,
    scrollTrigger :{
        trigger : ".page5 input",
        scroller : "body",
        // markers : true,
        start : "top 90%",
        end : "top 20%",
        scrub : true,
    }
})
gsap.from(".page5 button",{
    opacity :0,
    x : 100,
    scale: 0.5,
    duration:2,
    scrollTrigger :{
        trigger : ".page5 button",
        scroller : "body",
        // markers : true,
        start : "top 90%",
        end : "top 20%",
        scrub : true,
    }
})
gsap.from(".page6",{
    opacity :0,
    y : -100,
    scale: 0.5,
    duration:2,
    scrollTrigger :{
        trigger : ".page6",
        scroller : "body",
        // markers : true,
        start : "top 90%",
        end : "top 20%",
        scrub : 3,
    }
})



































var page3 = document.querySelector(".page3");
var crsr = document.querySelector(".cursor");
var h1 = document.querySelector("#play")

page3.addEventListener("mousemove" , function(dets){
    crsr.style.left = dets.x +"px";
    crsr.style.top = dets.y  + "px";
})
h1.addEventListener("mouseenter" , function(){
    crsr.style.scale = 3
    h1.style.letterSpacing = "5vmax";
})

h1.addEventListener("mouseleave" , function(){
    crsr.style.scale = 1
    h1.style.letterSpacing = "0.5vmax";
})

// =========================================================================
    var navbar = document.querySelector("#navbar");
    var page1Height = document.querySelector(".page1").offsetHeight;
    window.addEventListener("scroll" ,function(){
    
    if(window.pageYOffset >= page1Height){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }
});
// ============================================================================

var slideshowImages = ['img1.webp' , 'img2.webp' ,'img3.webp' , 'img4.webp' , 'img5.webp' , 'img6.webp'];
var index = 0;
var imageElement = document.querySelector('.page1');

function changeBackgroundImage() {
    imageElement.style.backgroundImage = 'url("' + slideshowImages[index] + '")';
    index = (index + 1) % slideshowImages.length;
  }
  setInterval(changeBackgroundImage, 1000);
