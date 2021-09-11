const scrolled = () => {
  document.scroll(function () {
    const navbar = document.createElement('mainNavbar');
    navbar.toggleClass('scrolled', this.scrollTop() > navbar.height());
  });
};
