//GSAP Animations
//Author: Lyes MEDJAHED
//October 2025

// Ciblage précis : uniquement les spans dans le menu rotator
gsap.set(".rotator > span", { transformOrigin: "0 50%" });
gsap.set(".rotator :not(:first-of-type) span", { opacity: 0.2, scale: 0.8 });

const tl = gsap.timeline()
  .to(".rotator :not(:first-of-type) span", {
    opacity: 1,
    scale: 1,
    stagger: 0.5
  })
  .to(".rotator :not(:last-of-type) span", {
    opacity: 0.2,
    scale: 0.8,
    stagger: 0.5
  }, 0);

ScrollTrigger.create({
  trigger: ".menu h2", // on change "h2" pour cibler celui du menu
  start: "50% 50%",
  endTrigger: ".rotator:last-of-type",
  end: "center center",
  pin: true,
  // markers: true, // décommente si tu veux voir les repères
  animation: tl,
  scrub: true
});
