import * as LocomotiveScroll from '../../vendor/locomotive-scroll.js';

const vp767 = window.matchMedia('(max-width: 767px)');
const vpTouch = window.matchMedia('(pointer: coarse)');
const scrollContainer = document.querySelector('[data-scroll-container]');

let locomotive;

const resizeLocomotiveHandle = () => {
  if (document.documentElement.classList.contains('has-scroll-smooth') && !vpTouch.matches && !vp767.matches) {
    locomotive.update(); // если горизонтальный, не тач и локо инициализирован
    return;
  } else if (document.documentElement.classList.contains('has-scroll-smooth') && (vp767.matches || vpTouch.matches)) {
    locomotive.destroy(); // если мобилка или тач устройство и локо инициализирован - уничтожаем
    gsap.set([scrollContainer, '[data-scroll-sticky]'], {transform: 'none', duration: 0});
    return;
  } else if (!document.documentElement.classList.contains('has-scroll-smooth') && (vp767.matches || vpTouch.matches)) {
    return; // если мобилка или тач устройство и локо НЕ инициализирован
  }

  locomotive = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true,
    lerp: 0.08,
    getDirection: true,
    smoothMobile: false,
    tablet: {
      breakpoint: 1023,
    },
  });
};

const initLocomotiveScroll = () => {
  if (!scrollContainer) {
    return;
  }

  resizeLocomotiveHandle();
  const resizeObserver = new ResizeObserver(resizeLocomotiveHandle);
  resizeObserver.observe(document.documentElement);
};

export {initLocomotiveScroll, locomotive};
