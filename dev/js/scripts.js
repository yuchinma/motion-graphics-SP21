import { gsap } from "gsap";

// gsap.to("#red-box", { duration: 4, x: 1000, ease: "bounce" });

// gsap.to("#blue-box", { duration: 4, x: 1000 });

// gsap.to("#yellow-box", { keyframes: [{ x: 1000 }, { y: 200 }, { x: 800 }, { y: 300 }], duration: 10, ease: "power4.out" });

gsap.timeline({duration: 2})
    .to("#red-box", {x:1150})
    .to("#red-box", {y:100})
    .to("#red-box", {x:420})
    .to("#red-box", {y:520});

gsap.timeline({duration: 2})
    .to("#blue-box", {x:1050})
    .to("#blue-box", {y:100})
    .to("#blue-box", {x:530})
    .to("#blue-box", {y:410});

gsap.timeline({duration: 2})
    .to("#yellow-box", {x:950})
    .to("#yellow-box", {y:100})
    .to("#yellow-box", {x:640})
    .to("#yellow-box", {y:300});

// gsap.to("#green-box", {duration: 2, x: 1100, ease: "bounce"});
gsap.fromTo("#green-box", {x:0, scale: 0.5, opacity: 0}, {x:1150, scale: 1, opacity: 1, ease: "bounce", duration: 3})
gsap.timeline({duration: 4})
    .to("#green-box", {y:190})
    .to("#green-box", {x:750});