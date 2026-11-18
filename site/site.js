// Mobile menu
(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();

// Footer year
(function () {
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();

// Calendly inline booking widget. Loads only when a real Calendly link is set.
(function () {
  var box = document.querySelector('.booking');
  if (!box) return;
  var url = box.getAttribute('data-calendly-url') || '';
  if (url.indexOf('https://calendly.com/') !== 0) return; // draft: keep the placeholder
  box.innerHTML = '';
  var widget = document.createElement('div');
  widget.className = 'calendly-inline-widget';
  widget.setAttribute('data-url', url);
  box.appendChild(widget);
  var s = document.createElement('script');
  s.src = 'https://assets.calendly.com/assets/external/widget.js';
  s.async = true;
  document.body.appendChild(s);
})();
