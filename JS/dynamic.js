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