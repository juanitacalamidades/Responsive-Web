gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin);

let tl = gsap.timeline();
tl.fromTo(".logo", { x: 900, y: -800, duration: 0.5 }, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back"
    })
    .to(".logo", { rotation: -360 })
    .from(".shadow", {
        // opacity: 0
        x: -1000,
        duration: 0.5,
        ease: "elastic"
    })



// let logo = document.querySelector(".logo");
// logo.addEventListener("mouseenter", () => {

//     gsap.to(".logo", {
//         rotate: 360,
//         duration: 1,
//         toggleActions: "restart pause resume pause",

//     })
// })

//===Ham

let ham = document.querySelector(".hamburger-lines");
let fwmenu = document.querySelector(".full-width-menu");
let white = "rgba(255, 248, 225, 0.7)"
const changeColor = () => {
    gsap.to(".salutation", {
        color: white,

    })
    gsap.to(".line", {
        backgroundColor: white
    })
}
const rollIn = () => {
    console.log(ham)

    fwmenu.classList.toggle("active");
    changeColor();
}

ham.addEventListener('click', () => {
    rollIn();
})