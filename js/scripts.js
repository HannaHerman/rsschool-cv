'use strict';

let checkJs = document.querySelector('.projects__buttons-js');
checkJs.addEventListener('click', filterJs);

function filterJs() {
  document.querySelector('.html').style.display = 'none';
  document.querySelector('.js').style.display = 'block';
  document.querySelector('.projects__buttons-js').style.background = '#e5e5e5';
  document.querySelector('.projects__buttons-html').style.background = '#fff';
  document.querySelector('.projects__buttons-all').style.background = '#fff';
}

let checkHtml = document.querySelector('.projects__buttons-html');
checkHtml.addEventListener('click', filterHtml);

function filterHtml() {
  document.querySelector('.js').style.display = 'none';
  document.querySelector('.html').style.display = 'block';
  document.querySelector('.projects__buttons-html').style.background = '#e5e5e5';
  document.querySelector('.projects__buttons-js').style.background = '#fff';
  document.querySelector('.projects__buttons-all').style.background = '#fff';
}

let checkAll = document.querySelector('.projects__buttons-all');
checkAll.addEventListener('click', filterAll);

function filterAll() {
  document.querySelector('.js').style.display = 'block';
  document.querySelector('.html').style.display = 'block';
  document.querySelector('.projects__buttons-all').style.background = '#e5e5e5';
  document.querySelector('.projects__buttons-js').style.background = '#fff';
  document.querySelector('.projects__buttons-html').style.background = '#fff';
}

// scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

let goTopBtn = document.querySelector('.back_to_top');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);

function trackScroll() {
  let scrolled = window.pageYOffset;
  let coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    goTopBtn.classList.add('back_to_top-show');
  }
  if (scrolled < coords) {
    goTopBtn.classList.remove('back_to_top-show');
  }
}

function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}