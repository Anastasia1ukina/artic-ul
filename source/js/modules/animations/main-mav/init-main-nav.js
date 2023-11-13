import {pageScroller} from '../../scroll-smoother/init-scroll-trigger';

// Заполнение пунктов меню по мере скролла страницы (progress-bar)
// На мобильной ширине виден только заполняющийся пункт текущего блока

const links = [...document.querySelectorAll('.main-nav__link[href]')];
const menuItems = [...document.querySelectorAll('.main-nav__item')];
const header = document.querySelector('.header');

const findSection = (link) => {
  const arr = link.href.split('#');
  const anchor = arr[arr.length - 1];
  return document.querySelector(`#${anchor}`);
};

const onSTEnter = (elem) => {
  if (menuItems.length > 0) {
    menuItems.forEach((item) => item.classList.remove('is-active'));
  }

  elem.classList.add('is-active');
};

const initMainNav = () => {
  if (links.length > 0) {
    const sections = links.map((link) => findSection(link)).filter((item) => item);
    const sectionsCount = sections.length;

    sections.forEach((section, index) => {
      const filler = document.querySelector(`[href="#${section.id}"] [data-filler]`);

      const tween = gsap.to(filler, {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', ease: 'none'});
      ScrollTrigger.create({
        id: section.id,
        animation: tween,
        trigger: section,
        scroller: pageScroller,
        start: (index === 0) ? 'top-=1 top' : `top top+=${header.offsetHeight / 2}`,
        end: (index === sectionsCount - 1) ? 'bottom bottom' : () => `+=${section.offsetHeight - header.offsetHeight / 2}`,
        // markers: true,
        scrub: true,
        onEnter: () => onSTEnter(filler.closest('.main-nav__item')),
        onEnterBack: () => onSTEnter(filler.closest('.main-nav__item')),
        // включить, если после выхода из блока пункт меню надо обнулять
        // onLeave: () => gsap.set(filler, {clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'}),
      });
    });
  }
};

export {initMainNav};
