const scrolled = () => {
  document.scroll(function () {
    const navbar = document.createElement('mainNavbar');
    navbar.toggleClass('scrolled', this.scrollTop() > navbar.height());
  });
};

// document.cookie = 'cookie1=cookie1; SameSite=Strict; Secure';
// const switchButton = document.querySelector('.switch');
// switchButton.addEventListener('click', () => {
//   document.body.classList.toggle('dark');
// });
