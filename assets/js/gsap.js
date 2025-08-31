window.addEventListener("load", () => {
  gsap.set([".intro", "#aldo", ".desc", ".buttons a"], { opacity: 0, y: 30 });

  const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

  tl.to(".intro", { opacity: 1, y: 0 })
    .to("#aldo", { opacity: 1, y: 0 }, "-=0.6")
    .to(".desc", { opacity: 1, y: 0 }, "-=0.6")
    .to(".buttons a", { opacity: 1, y: 0, stagger: 0.1 }, "-=1.5");
});
