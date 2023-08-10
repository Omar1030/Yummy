// Function to scroll to someWhere 
function scrollToSomeWhere(element) {
    element.forEach(ele => {
        ele.addEventListener("click", (e) => {
            document.querySelector(`#${e.target.textContent.toLowerCase()}`).scrollIntoView({behavior: "smooth"});
        })
    })
}

// -------------------------------------------------- // 

// Up Button : Scroll to up
let up = document.querySelector(".up");

window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight) {
        up.classList.add("show");
    } else {
        up.classList.remove("show");
    }
})

up.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth"})
})

// -------------------------------------------------- // 

// Navbar : Create menu 
let mainNavItems = document.querySelectorAll(".navbar ul li");
scrollToSomeWhere(mainNavItems)

let barIcon = document.getElementById("bar-icon");
barIcon.addEventListener("click", createMenu);


function createMenu() {

    /* Create Overlay */
    let navOverlay = document.createElement("div");
    navOverlay.className = "navOverlay";
    navOverlay.style.cssText = "position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; background-color: white; opacity: 0.5; z-index: 1000;";
    document.body.appendChild(navOverlay);
    
    /* Create Menu */
    let navMenu = document.createElement("div");
    navMenu.className = ("navMenu");
    navMenu.style.cssText = "position: fixed; right: 0px; top: 0px; width: 250px; height: 100%; background-color: white; z-index: 1001;";
    document.body.appendChild(navMenu);

    /* Close Button */
    let closeBtn = document.createElement("div");
    closeBtn.className = ("close");
    closeBtn.textContent = "X"
    closeBtn.style.cssText = "width: fill-content; text-align: right; padding: 10px 20px; font-size: 25px; cursor: pointer;";
    navMenu.appendChild(closeBtn);

    /* Handle click on close button */
    closeBtn.addEventListener("click", () => {
        navMenu.style.display = "none";
        navOverlay.style.display = "none";
    })

    /* Ul for items of menu */
    let ulMenu = document.createElement("ul");
    ulMenu.className = ("ulMenu");
    ulMenu.style.cssText = "list-style: none; margin: 10px 20px; padding: 0px";
    navMenu.appendChild(ulMenu);

    /* Li items in ul */
    let textLi = ["Home", "About", "Menu", "Events", "Chefs", "Gallery", "Contact"];

    for (let i = 0; i < 7; i++) {
        let li = document.createElement("li");
        li.className = "liItem";
        li.classList.add("first-font");
        li.textContent = textLi[i];
        li.style.cssText = "font-weight: 600; padding: 10px 0px; cursor: pointer; width: fit-content;";
        ulMenu.appendChild(li);
    }

    let liItems = document.querySelectorAll(".ulMenu .liItem");
    scrollToSomeWhere(liItems);
    
}

// -------------------------------------------------- //

// Stats Counter : Create Counter
let sectionCounter = document.querySelector(".stats-counter");
let span = document.querySelectorAll(".stats-counter .count span:nth-child(1)")
let start = false;

window.addEventListener("scroll", () => {
    if (window.scrollY > sectionCounter.offsetTop) {
        if (!start) {
            span.forEach((ele) => {
                increaseCount(ele)
            })
        }
        start = true;
    }
});

function increaseCount(span) {
    let num = span.dataset.num;
    let interval = setInterval(function () {
        span.textContent++;
        if (span.textContent == num) {
            clearInterval(interval);
        }
    }, 2000 / num)
};

// -------------------------------------------------- // 

// Menu : Selected Type Of Food
let foodType = document.querySelectorAll(".menu .items li");
let type = document.querySelector(".menu .selected .type");

foodType.forEach(ele => {
    ele.addEventListener("click", function() {
        type.textContent = `${this.textContent}`
    })
})

// -------------------------------------------------- // 

// Testimonials : Create slider
var swiper = new Swiper(".testimonials .mySwiper", {
    spaceBetween: 5,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

// -------------------------------------------------- // 

// Events : Create slider
var swiper = new Swiper(".events .mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30
        },
    }
});

// -------------------------------------------------- // 

// Gallary Section : Img slider
// let imgs = Array.from(document.querySelectorAll(".gallery .img-gallery img"));
// let ulBullets = document.querySelector(".img-controls .bullets ul");
// let nextBtn = document.querySelector(".img-controls .next");
// let prevBtn = document.querySelector(".img-controls .prev");

// let numOfSlides = imgs.length;
// let currentSlide = 1;

// nextBtn.addEventListener("click", nextSlide);
// prevBtn.addEventListener("click", prevSlide);

// /* Create Bullets */
// for (let i = 1; i <= numOfSlides; i++) {
//     let bulletItem = document.createElement("li");
//     bulletItem.className = "bullet-item";
//     bulletItem.setAttribute("index-bullet", i);
//     bulletItem.appendChild(document.createTextNode(i));
//     ulBullets.appendChild(bulletItem);
// };

// let ulBulletsItems = Array.from(document.querySelectorAll(".img-controls .bullets ul .bullet-item"));

// /* Click on button to change slide */
// ulBulletsItems.forEach(ele => {
//     ele.addEventListener("click", () => {
//         currentSlide = parseInt(ele.getAttribute("index-bullet"));
//         addActive()
//     })
// })

// addActive();

// /* Add class active to current bullet */
// function addActive() {

//     ulBulletsItems.forEach(bullet => {
//         bullet.classList.remove("active");
//         if (bullet.getAttribute("index-bullet") == currentSlide) {
//             bullet.classList.add("active");
//         }
//     })
    
//     imgs.forEach(img => {
//         img.classList.remove("active");
//         if (img.dataset.index == currentSlide) {
//             img.classList.add("active");
//         }
//     })
    
//     if (currentSlide == numOfSlides) {
//         nextBtn.classList.add("disable");
//     } else {
//         nextBtn.classList.remove("disable")
//     }
    
//     if (currentSlide == 1) {
//         prevBtn.classList.add("disable");
//     } else {
//         prevBtn.classList.remove("disable")
//     }
    
// }


// /* Change the slide from next & previous buttons */
// function nextSlide() {
//     if (nextBtn.classList.contains("disable")) {
//         return false;
//     } else {
//         currentSlide++;
//         addActive();
//     }
// }

// function prevSlide() {
//     if (prevBtn.classList.contains("disable")) {
//         return false;
//     } else {
//         currentSlide--;
//         addActive();
//     }
// };

// -------------------------------------------------- // 

// Gallary : Create Slider
var swiper = new Swiper(".gallery .mySwiper", {
    spaceBetween: 5,
    centeredSlides: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 40
        }
    }
});

// -------------------------------------------------- // 

