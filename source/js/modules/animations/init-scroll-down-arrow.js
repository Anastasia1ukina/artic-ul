import {pageScroller} from '../scroll-smoother/init-scroll-trigger';

// Кнопка "крутить вниз" на первом экране

const initScrollDownArrow = () => {
  const hero = document.querySelector('.hero');
  const arrow = hero ? hero.querySelector('.hero__arrow svg') : false;

  if (arrow) {
    gsap.to(arrow, {
      duration: 0.9,
      yPercent: '-=50',
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      scrollTrigger: {
        scroller: pageScroller,
        trigger: hero,
        start: 'top bottom',
        end: 'bottom top',
        toggleActions: 'play pause play pause',
      },
    });

    ScrollTrigger.create({
      scroller: pageScroller,
      trigger: hero,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      pin: arrow,
    });
  }
};

export {initScrollDownArrow};
