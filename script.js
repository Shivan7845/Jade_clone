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