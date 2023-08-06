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

// Menu Section : Selected Type Of Food
let foodType = document.querySelectorAll(".menu .items li");
let type = document.querySelector(".menu .selected .type");

foodType.forEach(ele => {
    ele.addEventListener("click", function() {
        type.textContent = `${this.textContent}`
    })
})

// -------------------------------------------------- // 

// Gallary Section : Img slider
let imgs = Array.from(document.querySelectorAll(".gallery .img-gallery img"));
let ulBullets = document.querySelector(".img-controls .bullets ul");
let nextBtn = document.querySelector(".img-controls .next");
let prevBtn = document.querySelector(".img-controls .prev");

let numOfSlides = imgs.length;
let currentSlide = 1;

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

/* Create Bullets */
for (let i = 1; i <= numOfSlides; i++) {
    let bulletItem = document.createElement("li");
    bulletItem.className = "bullet-item";
    bulletItem.setAttribute("index-bullet", i);
    bulletItem.appendChild(document.createTextNode(i));
    ulBullets.appendChild(bulletItem);
};

let ulBulletsItems = Array.from(document.querySelectorAll(".img-controls .bullets ul .bullet-item"));

/* Click on button to change slide */
ulBulletsItems.forEach(ele => {
    ele.addEventListener("click", () => {
        currentSlide = parseInt(ele.getAttribute("index-bullet"));
        addActive()
    })
})

addActive();

/* Add class active to current bullet */
function addActive() {

    ulBulletsItems.forEach(bullet => {
        bullet.classList.remove("active");
        if (bullet.getAttribute("index-bullet") == currentSlide) {
            bullet.classList.add("active");
        }
    })

    imgs.forEach(img => {
        img.classList.remove("active");
        if (img.dataset.index == currentSlide) {
            img.classList.add("active");
        }
    })

    if (currentSlide == numOfSlides) {
        nextBtn.classList.add("disable");
    } else {
        nextBtn.classList.remove("disable")
    }

    if (currentSlide == 1) {
        prevBtn.classList.add("disable");
    } else {
        prevBtn.classList.remove("disable")
    }
    
}


/* Change the slide from next & previous buttons */
function nextSlide() {
    if (nextBtn.classList.contains("disable")) {
        return false;
    } else {
        currentSlide++;
        addActive();
    }
}

function prevSlide() {
    if (prevBtn.classList.contains("disable")) {
        return false;
    } else {
        currentSlide--;
        addActive();
    }
}














