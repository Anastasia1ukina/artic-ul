import {ScrollToPlugin} from './../../vendor/ScrollToPlugin.min';
import {locomotive} from './init-locomotive.js';

const header = document.querySelector('.header');

const setOffset = (offset) => {
  if (offset === 'header') {
    if (!header) {
      return 0; // если нет шапки на странице, то отступ = 0
    }
    return -header.getBoundingClientRect().height; // отступ = высота шапки
  }

  return offset;
};

const scrollToHandler = (e) => {
  e.preventDefault();
  const btn = e.target.closest('[data-move-to]');
  const target = document.querySelector(`#${btn.dataset.moveTo}`);

  const options = {
    duration: Math.abs(btn.getBoundingClientRect().top - target.getBoundingClientRect().top) / (window.innerHeight * 7.0),
    offset: btn.dataset.offset ? setOffset(btn.dataset.offset) : 0,
  };

  if (document.documentElement.classList.contains('has-scroll-smooth')) { // если активен локомотив, то
    locomotive.scrollTo(target, {
      duration: options.duration * 1000, // в локо время указывается в миллисекундах
      offset: options.offset,
    });
  } else {
    gsap.to(window, options.duration, {
      scrollTo: {
        y: target,
        offsetY: options.offset,
      },
      ease: 'power4.out',
    });
  }
};

export const initScrollTo = () => {
  gsap.registerPlugin(ScrollToPlugin);
  const scrollToButtons = document.querySelectorAll('[data-move-to]');

  scrollToButtons.forEach((btn) => {
    btn.addEventListener('click', scrollToHandler);
  });
};
