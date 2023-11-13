import {pageScroller} from '../../scroll-smoother/init-scroll-trigger';

// Изменение цвета меню в зависимости от цвета блока
// Цвет должен быть указан в data-header-color блока,
// он используется как модификатор класса шапки

const colorBlocks = [...document.querySelectorAll('[data-header-color]')];
const header = document.querySelector('.header:not(.header-ui)');

const onSTEnter = (newClass) => {
  const classes = header.classList;
  const oldClasses = [...classes].filter((str) => /header--/.test(str));
  oldClasses.forEach((item) => header.classList.remove(item));
  header.classList.add(newClass);
};

const initColorChanger = () => {
  if (colorBlocks.length > 0 && header) {
    colorBlocks.forEach((item, index) => {
      ScrollTrigger.create({
        id: `color${index}`,
        trigger: item,
        scroller: pageScroller,
        start: () => `top top+=${header.offsetHeight * 0.75}`,
        end: () => `bottom top+=${header.offsetHeight * 0.75}`,
        toggleClass: {targets: header, className: 'header--' + item.dataset.headerColor},
        scrub: true,
        // markers: true,
        onEnter: () => onSTEnter('header--' + item.dataset.headerColor),
        onEnterBack: () => onSTEnter('header--' + item.dataset.headerColor),
      });
    });
  }
};

export {initColorChanger};
