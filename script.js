gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero-title", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.to(".stat", {
  opacity: 1,
  y: 0,
  duration: 0.8,
  stagger: 0.3,
  delay: 0.5,
  ease: "power3.out"
});

gsap.to(".hero-right img", {
  y: -200,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});