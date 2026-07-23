console.log("Javasript Loaded"):

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }, 700);

}); //LOADER 


const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    if(navLinks.classList.contains("show")){

        menuBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

    }else{

        menuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;

    }

});//MOBILE VIEW MENU

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("show");

        menuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;

    });

});


const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    }); //ACTIVE NAVBAR

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});//ACTIVE NAVBAR


const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 400){

        scrollTopBtn.classList.add("show");

    }else{

        scrollTopBtn.classList.remove("show");

    }

});//BACK TO TOP BUTTON

scrollTopBtn.onclick = ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


const typing = document.getElementById("typing");

const words = [

    "Frontend Developer",

    "Web Developer",

    "UI / UX Designer",

    "Web Designer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent = currentWord.substring(0,charIndex);

        charIndex++;

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }else{

        typing.textContent = currentWord.substring(0,charIndex);

        charIndex--;

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});//FADE

document.querySelectorAll(
".section-title,.skill-box,.service-card,.project-card,.timeline-item,.certificate-card,.contact-container"
).forEach(el=>{

    el.classList.add("fade-up");

    observer.observe(el);

});

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 8px 30px rgba(0,0,0,.35)";

    }else{

        header.style.boxShadow = "none";

    }

});//HEADER SHADOW



const heroImage = document.querySelector(".image-circle");

window.addEventListener("mousemove",(e)=>{

    const x = (window.innerWidth/2 - e.pageX)/35;
    const y = (window.innerHeight/2 - e.pageY)/35;

    heroImage.style.transform =
    `rotateY(${x}deg) rotateX(${-y}deg)`;

}); //PARALLAX HERO IMAGE



document.querySelectorAll(
".primary-btn,.hire-btn"
).forEach(button=>{

    button.addEventListener("click",function(e){

        const circle = document.createElement("span");

        const size = Math.max(
            this.clientWidth,
            this.clientHeight
        );

        circle.style.width = size+"px";
        circle.style.height = size+"px";

        circle.style.left =
        e.offsetX-size/2+"px";

        circle.style.top =
        e.offsetY-size/2+"px";

        circle.classList.add("ripple");

        this.appendChild(circle);

        setTimeout(()=>{

            circle.remove();

        },600);

    });

});//BUTTON RIPPLE



const filterButtons =
document.querySelectorAll(".filter-btn");

filterButtons.forEach(btn=>{

    btn.onclick = ()=>{

        filterButtons.forEach(b=>{

            b.classList.remove("active");

        });

        btn.classList.add("active");

        // Filtering logic can be added later.

    };

});//PROJECT FILTER

console.log("Portfolio Loaded Successfully.");
