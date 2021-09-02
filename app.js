const slides = document.getElementsByClassName("showSlide");
let slide_index = 1;
console.log('slides_length' + slides.length)


const nextSlide = (n) => {
    displaySlides(slide_index += n);
    console.log(slide_index += n)
}

const currentSlide = (n) => {
    displaySlides(slide_index = n)
}

const displaySlides = (n) => {
    
    if(n > slides.length){
        slide_index = 1
    }
    if(n < 1){
        slide_index = slides.length
    };
    for(let i = 0; i<slides.length; i++){
        slides[i].style.display = "none"
    }
    return slides[slide_index - 1].style.display = "block"
};

displaySlides(slide_index);


