let slide = document.getElementById('banner');
let imgs = [
    "url(../img/brand/brand-main.jpg)",
    "url(../img/brand/brand-second.jpeg)"
];

let i = 0;
slide.style.transition = " all 1.5s ease-in"
let animationSlide = setInterval(() => {
    if (i < imgs.length) {
        slide.style.backgroundImage = imgs[i];
        i++;
    } else {
        i = 0;
    }
    console.log(i);
},  2000);