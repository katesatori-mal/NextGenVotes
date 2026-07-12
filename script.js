// ============================================================
// DONATE LINKS - paste URLs here when ready (leave empty until then)
// Example: oneTime: 'https://donate.example.com/once',
// ============================================================
var DONATE_LINKS = {
  oneTime: '',           // One time donation
  monthly: '',           // Monthly donation
  sponsorChapter: '',    // Sponsor a chapter
  sponsorMaterials: '',  // Sponsor education materials
};

(function () {
  var header = document.getElementById('site-header');
  var menuBtn = document.getElementById('menu-btn');
  var menuIcon = document.getElementById('menu-icon');
  var nav = document.getElementById('main-nav');
  var navLinks = document.querySelectorAll('.header__nav-link, .header__cta');

  function setScrolled() {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  }

  function closeMenu() {
    if (!nav || !menuBtn || !menuIcon) return;
    nav.classList.remove('header__nav--open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Open menu');
    menuIcon.setAttribute('data-open', 'false');
    document.body.classList.remove('menu-open');
  }

  function toggleMenu() {
    if (!nav || !menuBtn || !menuIcon) return;
    var open = !nav.classList.contains('header__nav--open');
    nav.classList.toggle('header__nav--open', open);
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menuIcon.setAttribute('data-open', open ? 'true' : 'false');
    document.body.classList.toggle('menu-open', open);
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', toggleMenu);
  }

  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', closeMenu);
  }

  window.addEventListener('scroll', setScrolled, { passive: true });
  setScrolled();

  var yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Wire donate buttons from DONATE_LINKS above
  var donateBtns = document.querySelectorAll('[data-donate]');
  for (var d = 0; d < donateBtns.length; d++) {
    (function (btn) {
      var key = btn.getAttribute('data-donate');
      var url = DONATE_LINKS[key];
      if (url) {
        btn.setAttribute('href', url);
        btn.setAttribute('target', '_blank');
        btn.setAttribute('rel', 'noopener noreferrer');
      } else {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          alert('Donation links will be available soon. Thank you for your support!');
        });
      }
    })(donateBtns[d]);
  }
})();
