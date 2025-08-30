window.addEventListener("load", () => {
      let tl = gsap.timeline();

      // animasi loading icon (loop)
      gsap.to(".loading-icon", {
        rotation: 360,
        duration: 1.5,
        repeat: -1,
        ease: "linear"
      });

      // Setelah delay, jalankan animasi tirai
      tl.to(".loading-text", {opacity: 0, duration: 0.5})
        .to(".curtain.left", {x: "-100%", duration: 1, ease: "power4.inOut"}, "-=0.3")
        .to(".curtain.right", {x: "100%", duration: 1, ease: "power4.inOut"}, "-=1")
        .to(".loader", {opacity: 0, duration: 0.5, onComplete: () => {
          document.querySelector(".loader").style.display = "none";
          document.querySelector(".content").style.display = "block";
          document.body.style.overflow = "auto"; // aktifkan scroll lagi
        }});
    });