const learnMoreButton = document.querySelector(".learn-more-button");

learnMoreButton.addEventListener("mouseenter", () => {
  learnMoreButton.classList.add("learn-more-button-hover");
});

learnMoreButton.addEventListener("mouseleave", () => {
  learnMoreButton.classList.remove("learn-more-button-hover");
});
