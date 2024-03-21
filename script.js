let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll('.box2 .mySlides'); // Select only the slides within box2
    let dots = document.querySelectorAll('.box2 .dot'); // Select only the dots within box2
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}
let indexSlide = 1;

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        indexSlide = 1;
    } 
    if (n < 1) {
        indexSlide = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[indexSlide - 1].style.display = "block";  
    dots[indexSlide - 1].className += " active";
}

function nextSlide() {
    showSlide(indexSlide += 1);
}

function previousSlide() {
    showSlide(indexSlide -= 1);
}

function currentSlide(n) {
    showSlide(indexSlide = n);
}

// Auto slide change every 3 seconds
setInterval(function() {
    nextSlide();
}, 3000);

// Initial slide display
showSlide(indexSlide);

