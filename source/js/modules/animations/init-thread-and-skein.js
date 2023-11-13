import {VP767} from '../../utils/constants';
import {pageScroller} from '../scroll-smoother/init-scroll-trigger';
import {AnimationInstance} from './animation-instance';
import {CustomEase} from './../../vendor/custom-ease.min';

export class ThreadAndSkein extends AnimationInstance {
  createPathTl(tl, options) {
    tl.to(options.skein, {
      ease: options.ease,
      rotate: 360 * -25,
      transformOrigin: '50% 50%',
      motionPath: {
        path: options.path,
        align: options.path,
        alignOrigin: [0.25, 0.75],
        start: 0,
      },
    }, '<');
    tl.to(options.path, {
      ease: options.ease,
      strokeDashoffset: 0,
    }, '<');
  }

  createPathSt(tl, options) {
    ScrollTrigger.create({
      animation: tl,
      scroller: pageScroller,
      trigger: options.trigger,
      start: options.start,
      end: options.end,
      scrub: 0.1,
      onUpdate: (self) => {
        if (options.knots.length && options.words.length) {
          if (self.progress > 0.47 || self.progress < 0.24) {
            return;
          }

          if (self.progress > 0.340657) {
            options.knots[3].classList.add('visible');
            options.words[3].classList.add('visible');
          } else {
            options.knots[3].classList.remove('visible');
            options.words[3].classList.remove('visible');
          }

          if (self.progress > 0.317) {
            options.knots[2].classList.add('visible');
            options.words[2].classList.add('visible');
          } else {
            options.knots[2].classList.remove('visible');
            options.words[2].classList.remove('visible');
          }

          if (self.progress > 0.297) {
            options.knots[1].classList.add('visible');
            options.words[1].classList.add('visible');
          } else {
            options.knots[1].classList.remove('visible');
            options.words[1].classList.remove('visible');
          }

          if (self.progress > 0.27) {
            options.knots[0].classList.add('visible');
            options.words[0].classList.add('visible');
          } else {
            options.knots[0].classList.remove('visible');
            options.words[0].classList.remove('visible');
          }
        }
      },
      // scrub: pageScroller === 'body' ? 0.1 : true,
    });
  }

  addPart(container) {
    const part = container.querySelector('.thread-and-skein__thread');
    const path = container.querySelector('.thread-and-skein__thread path:not(.nothread)');
    const skein = container.querySelector('.thread-and-skein__skein');
    const knots = [];
    const words = [];
    for (let i = 0; i < 4; i++) {
      const knot = container.querySelector(`.thread-and-skein__thread path.knot${i + 1}`);
      if (knot) {
        knots.push(knot);
      }
      const text = container.querySelector(`.thread-and-skein__thread path.text${i + 1}`);
      if (text) {
        words.push(text);
      }
    }

    if (!path || !skein) {
      return;
    }

    const timeline = gsap.timeline();
    const wrapperOverFlowOffset = part.getBoundingClientRect().y - container.getBoundingClientRect().y;

    container.style.height = part.offsetHeight + wrapperOverFlowOffset + 'px';
    path.style.strokeDasharray = path.getTotalLength();
    path.style.strokeDashoffset = path.getTotalLength();
    path.style.opacity = 1;

    this.createPathTl(timeline, {path, skein, ease: container.dataset.ease ? CustomEase.create('custom', container.dataset.ease) : 'linear'});
    this.createPathSt(timeline, {trigger: path, start: container.dataset.stStart, end: container.dataset.stEnd, skein, knots, words});

    this.timelines.push(timeline);

    // -- скрытие клубка в двери
    gsap.set('.thread-and-skein--4 .thread-and-skein__skein', {transformOrigin: 'left left'});
    const hideTimeline = gsap.timeline({paused: true});
    hideTimeline.to('.thread-and-skein--4 .thread-and-skein__skein', {opacity: 0, scale: 0.35});
    hideTimeline.to('.thread-and-skein--4 .thread-and-skein__skein svg', {x: '-50%', y: '-100%', rotate: -280}, 0);
    ScrollTrigger.create({
      trigger: '.thread-and-skein--4',
      scroller: pageScroller,
      scrub: true,
      animation: hideTimeline,
      start: 'bottom 80%',
      end: 'bottom 55%',
    });

    this.timelines.push(hideTimeline);
  }

  breakpointChecker() {
    if (VP767.matches) {
      this.removeTimelines();
    } else {
      this.container.forEach((element) => {
        this.addPart(element);
      });
      ScrollTrigger.refresh();
    }
  }

  setTimelines() {
    this.breakpointChecker();
  }
}
