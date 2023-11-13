import {pageScroller} from '../scroll-smoother/init-scroll-trigger';
import {publicationAnimation} from './init-publication-intro';

// Пульсация и лопание шариков в публикации

const globsPulse = [...document.querySelectorAll('[data-animate="publication-intro"] [data-animate="pulse-globs"] [data-glob]:not([data-stay])')];
const globs = [...document.querySelectorAll('[data-animate="publication-intro"] [data-glob]:not([data-stay])')];

const initGlobs = () => {
  if (globs.length > 0) {

    const tl = gsap.timeline({paused: true});
    tl.to(globsPulse, 0.8, {
      scale: 1.04,
      ease: 'power1.inOut',
      stagger: {
        repeat: -1,
        yoyo: true,
        each: 0.1,
        from: 'random',
      },
    });

    ScrollTrigger.create({
      animation: tl,
      scroller: pageScroller,
      trigger: document.querySelector('.publication-intro'),
      start: 'top bottom',
      end: 'bottom top',
      onEnter: () => tl.play(),
      onEnterBack: () => tl.play(),
      onLeave: () => tl.pause(),
      onLeaveBack: () => tl.pause(),
    });

    const onMouserOver = (evt) => {
      const animationDuration = 0.2;
      gsap.to(evt.target, {scale: 0, duration: animationDuration, ease: 'back.in(1.6)'})
          .then(() => {
            evt.target.remove();
            publicationAnimation.checkGlobsCount();
          });
    };

    globs.forEach((glob) => {
      glob.addEventListener('mouseenter', onMouserOver);
    });

  }
};

export {initGlobs};
