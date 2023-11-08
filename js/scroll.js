const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1500,
  delay: 400,
});

sr.reveal(".inicio-text", { origin: "left" });
sr.reveal(".inicio-img", { origin: "right" });
sr.reveal(".container", {});
sr.reveal(".nosotros-img", {});
sr.reveal(".nosotros-text", { delay: 300 });
sr.reveal(".text-medio", {});
sr.reveal(".row-btn,.contenido-menu", { interval: 100 });
