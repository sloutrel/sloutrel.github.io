// const magic = document.querySelector(".mtg");
// magic.addEventListener("click", function () {
//   window.open("https://sloutrel.github.io/magic", "_blank");
// });

const scrolled = () => {
  document.scroll(function () {
    const navbar = document.createElement("mainNavbar");
    navbar.toggleClass("scrolled", this.scrollTop() > navbar.height());
  });
};
