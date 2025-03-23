class HamburgerMenu {
  constructor() {
    this.header = document.getElementById('masthead');
    this.menu = document.querySelector('.menu-hamburger');
    this.nav = document.getElementById('primary-menu');
    this.overlay = document.querySelector('#masthead .overlay');
    this.events();
  }

  events() {
    this.menu.addEventListener('click', () => this.toggleMenu());
    window.addEventListener('resize', () => {
      if (window.innerWidth > 640) {
        this.closeMenu();
        this.fadeOut(this.overlay);
      }
    });

    window.addEventListener('click', (e) => {
      if (e.target.closest('.menu-hamburger') === null && e.target.closest('#primary-menu') === null) {
        this.closeMenu();
        this.fadeOut(this.overlay);
      }
    });
  }

  toggleMenu() {
    if (this.menu.getAttribute('aria-expanded') === 'true') {
      this.menu.setAttribute('aria-expanded', 'false');
      this.nav.dataset.visible = 'false';
      this.fadeOut(this.nav);
      this.fadeOut(this.overlay);

      setTimeout(() => {
        this.nav.classList.remove('fade-out');
      }, 1000);
    } else {
      this.menu.setAttribute('aria-expanded', 'true');
      this.nav.dataset.visible = 'true';
      this.fadeIn(this.nav);
      this.fadeIn(this.overlay);
    }
  }

  closeMenu() {
    this.menu.setAttribute('aria-expanded', 'false');
    this.nav.dataset.visible = 'false';
  }

  fadeOut = (element) => {
    element.classList.remove('fade-in');
    element.classList.add('fade-out');
  }

  fadeIn = (element) => {
    element.classList.remove('fade-out');
    element.classList.add('fade-in');
  }
}

export default HamburgerMenu;