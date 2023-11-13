import {VP767} from '../../../utils/constants';
import {pageScroller} from '../../scroll-smoother/init-scroll-trigger';
import {AnimationInstance} from '../animation-instance';

export class MagicLoop extends AnimationInstance {
  setDesktopAnimation() {
    gsap.set(['.magic-loop__cloud', '.magic-loop__icon--cat'], {
      opacity: 0,
    });

    // ==================================== path 1
    this.timeline.to('.magic-loop__icon--star', {
      motionPath: {
        path: '.magic-loop__svg--desktop .magic-loop__path--1',
        align: '.magic-loop__svg--desktop .magic-loop__path--1',
        alignOrigin: [0.5, 0.5],
        start: 0.719,
        end: 1.719,
      },
    }, '<');
    this.timeline.to('.magic-loop__icon--frog', {
      motionPath: {
        path: '.magic-loop__svg--desktop .magic-loop__path--1',
        align: '.magic-loop__svg--desktop .magic-loop__path--1',
        alignOrigin: [0.5, 0.5],
        start: 0.355,
        end: 1.355,
      },
    }, '<');
    this.timeline.to('.magic-loop__dot--11', {
      motionPath: {
        path: '.magic-loop__svg--desktop .magic-loop__path--1',
        align: '.magic-loop__svg--desktop .magic-loop__path--1',
        alignOrigin: [0.5, 0.5],
        start: 0.079,
        end: 1.079,
      },
    }, '<');
    this.timeline.to('.magic-loop__dot--12', {
      motionPath: {
        path: '.magic-loop__svg--desktop .magic-loop__path--1',
        align: '.magic-loop__svg--desktop .magic-loop__path--1',
        alignOrigin: [0.5, 0.5],
        start: 0.886,
        end: 1.886,
      },
    }, '<');

    // ==================================== path 2
    this.timeline.to('.magic-loop__icon--dog', {
      motionPath: {
        path: '.magic-loop__svg--desktop .magic-loop__path--2',
        align: '.magic-loop__svg--desktop .magic-loop__path--2',
        alignOrigin: [0.5, 0.5],
        start: 0.565,
        end: 1.565,
      },
    }, '<');
    this.timeline.to('.magic-loop__dot--21', {
      motionPath: {
        path: '.magic-loop__svg--desktop .magic-loop__path--2',
        align: '.magic-loop__svg--desktop .magic-loop__path--2',
        alignOrigin: [0.5, 0.5],
        start: 0.099,
        end: 1.099,
      },
    }, '<');
    this.timeline.to('.magic-loop__dot--22', {
      motionPath: {
        path: '.magic-loop__svg--desktop .magic-loop__path--2',
        align: '.magic-loop__svg--desktop .magic-loop__path--2',
        alignOrigin: [0.5, 0.5],
        start: 0.886,
        end: 1.886,
      },
    }, '<');

    // ==================================== path 3
    this.timeline.to('.magic-loop__dot--31', {
      motionPath: {
        path: '.magic-loop__svg--desktop .magic-loop__path--3',
        align: '.magic-loop__svg--desktop .magic-loop__path--3',
        alignOrigin: [0.5, 0.5],
        start: 0.172,
        end: 1.172,
      },
    }, '<');
    this.timeline.to('.magic-loop__dot--32', {
      motionPath: {
        path: '.magic-loop__svg--desktop .magic-loop__path--3',
        align: '.magic-loop__svg--desktop .magic-loop__path--3',
        alignOrigin: [0.5, 0.5],
        start: 0.325,
        end: 1.325,
      },
    }, '<');
    this.timeline.to('.magic-loop__dot--33', {
      motionPath: {
        path: '.magic-loop__svg--desktop .magic-loop__path--3',
        align: '.magic-loop__svg--desktop .magic-loop__path--3',
        alignOrigin: [0.5, 0.5],
        start: 0.649,
        end: 1.649,
      },
    }, '<');

    // ==================================== path 4
    this.timelineCat.to('.magic-loop__icon--cat', {
      opacity: 1,
      duration: 0.6,
      ease: 'ease-in',
      motionPath: {
        path: '.magic-loop__svg--desktop .magic-loop__path--4',
        align: '.magic-loop__svg--desktop .magic-loop__path--4',
        alignOrigin: [0.5, 0.5],
        start: 0.6,
        end: 0.767,
      },
    }, '<');
    this.timelineCat.to('.magic-loop__cloud', {
      duration: 0.3,
      ease: 'ease',
      opacity: 1,
    }, '>');
    this.timeline.to('.magic-loop__icon--diamond', {
      motionPath: {
        path: '.magic-loop__svg--desktop .magic-loop__path--4',
        align: '.magic-loop__svg--desktop .magic-loop__path--4',
        alignOrigin: [0.5, 0.5],
        start: 0.289,
        end: 1.289,
      },
    }, '<');
    this.timeline.to('.magic-loop__dot--41', {
      motionPath: {
        path: '.magic-loop__svg--desktop .magic-loop__path--4',
        align: '.magic-loop__svg--desktop .magic-loop__path--4',
        alignOrigin: [0.5, 0.5],
        start: 0.893,
        end: 1.893,
      },
    }, '<');
    this.timeline.to('.magic-loop__dot--42', {
      motionPath: {
        path: '.magic-loop__svg--desktop .magic-loop__path--4',
        align: '.magic-loop__svg--desktop .magic-loop__path--4',
        alignOrigin: [0.5, 0.5],
        start: 0.095,
        end: 1.095,
      },
    }, '<');

    // ==================================== path 5
    this.timeline.to('.magic-loop__icon--monkey', {
      motionPath: {
        path: '.magic-loop__svg--desktop .magic-loop__path--5',
        align: '.magic-loop__svg--desktop .magic-loop__path--5',
        alignOrigin: [0.5, 0.5],
        start: 0.124,
        end: 1.124,
      },
    }, '<');
    this.timeline.to('.magic-loop__icon--heart', {
      motionPath: {
        path: '.magic-loop__svg--desktop .magic-loop__path--5',
        align: '.magic-loop__svg--desktop .magic-loop__path--5',
        alignOrigin: [0.5, 0.5],
        start: 0.932,
        end: 1.932,
      },
    }, '<');
    this.timeline.to('.magic-loop__dot--51', {
      motionPath: {
        path: '.magic-loop__svg--desktop .magic-loop__path--5',
        align: '.magic-loop__svg--desktop .magic-loop__path--5',
        alignOrigin: [0.5, 0.5],
        start: 0.656,
        end: 1.656,
      },
    }, '<');
  }

  setMobileAnimation() {
    gsap.set(['.magic-loop__cloud', '.magic-loop__icon--cat'], {
      opacity: 0,
    });

    // ==================================== path 1
    this.timeline.to('.magic-loop__icon--star', {
      motionPath: {
        path: '.magic-loop__svg--mobile .magic-loop__path--1',
        align: '.magic-loop__svg--mobile .magic-loop__path--1',
        alignOrigin: [0.5, 0.5],
        start: 0.761,
        end: 1.761,
      },
    }, '<');
    this.timelineCat.to('.magic-loop__icon--cat', {
      opacity: 1,
      duration: 0.6,
      ease: 'ease-in',
      motionPath: {
        path: '.magic-loop__svg--mobile .magic-loop__path--1',
        align: '.magic-loop__svg--mobile .magic-loop__path--1',
        alignOrigin: [0.5, 0.5],
        start: 0.6,
        end: 0.885,
      },
    }, '<');
    this.timelineCat.to('.magic-loop__cloud', {
      duration: 0.3,
      ease: 'ease',
      opacity: 1,
    }, '>');
    this.timeline.to('.magic-loop__icon--heart', {
      motionPath: {
        path: '.magic-loop__svg--mobile .magic-loop__path--1',
        align: '.magic-loop__svg--mobile .magic-loop__path--1',
        alignOrigin: [0.5, 0.5],
        start: 0.232,
        end: 1.232,
      },
    }, '<');
    this.timeline.to('.magic-loop__dot--11', {
      motionPath: {
        path: '.magic-loop__svg--mobile .magic-loop__path--1',
        align: '.magic-loop__svg--mobile .magic-loop__path--1',
        alignOrigin: [0.5, 0.5],
        start: 0.079,
        end: 1.079,
      },
    }, '<');
    this.timeline.to('.magic-loop__dot--12', {
      motionPath: {
        path: '.magic-loop__svg--mobile .magic-loop__path--1',
        align: '.magic-loop__svg--mobile .magic-loop__path--1',
        alignOrigin: [0.5, 0.5],
        start: 0.5,
        end: 1.5,
      },
    }, '<');

    // ==================================== path 2
    this.timeline.to('.magic-loop__dot--21', {
      motionPath: {
        path: '.magic-loop__svg--mobile .magic-loop__path--2',
        align: '.magic-loop__svg--mobile .magic-loop__path--2',
        alignOrigin: [0.5, 0.5],
        start: 0.3,
        end: 0.3 - 1,
      },
    }, '<');
    this.timeline.to('.magic-loop__dot--22', {
      motionPath: {
        path: '.magic-loop__svg--mobile .magic-loop__path--2',
        align: '.magic-loop__svg--mobile .magic-loop__path--2',
        alignOrigin: [0.5, 0.5],
        start: 0.786,
        end: 0.786 - 1,
      },
    }, '<');

    // ==================================== path 3
    this.timeline.to('.magic-loop__dot--31', {
      motionPath: {
        path: '.magic-loop__svg--mobile .magic-loop__path--3',
        align: '.magic-loop__svg--mobile .magic-loop__path--3',
        alignOrigin: [0.5, 0.5],
        start: 0.172,
        end: 0.172 - 1,
      },
    }, '<');
    this.timeline.to('.magic-loop__dot--32', {
      motionPath: {
        path: '.magic-loop__svg--mobile .magic-loop__path--3',
        align: '.magic-loop__svg--mobile .magic-loop__path--3',
        alignOrigin: [0.5, 0.5],
        start: 0.325,
        end: 0.325 - 1,
      },
    }, '<');
    this.timeline.to('.magic-loop__dot--33', {
      motionPath: {
        path: '.magic-loop__svg--mobile .magic-loop__path--3',
        align: '.magic-loop__svg--mobile .magic-loop__path--3',
        alignOrigin: [0.5, 0.5],
        start: 0.649,
        end: 0.649 - 1,
      },
    }, '<');

    // ==================================== path 4
    this.timeline.to('.magic-loop__icon--dog', {
      motionPath: {
        path: '.magic-loop__svg--mobile .magic-loop__path--4',
        align: '.magic-loop__svg--mobile .magic-loop__path--4',
        alignOrigin: [0.5, 0.5],
        start: 0.328,
        end: 1.328,
      },
    }, '<');
    this.timeline.to('.magic-loop__icon--monkey', {
      motionPath: {
        path: '.magic-loop__svg--mobile .magic-loop__path--4',
        align: '.magic-loop__svg--mobile .magic-loop__path--4',
        alignOrigin: [0.5, 0.5],
        start: 0.64,
        end: 1.64,
      },
    }, '<');
    this.timeline.to('.magic-loop__dot--41', {
      motionPath: {
        path: '.magic-loop__svg--mobile .magic-loop__path--4',
        align: '.magic-loop__svg--mobile .magic-loop__path--4',
        alignOrigin: [0.5, 0.5],
        start: 0.893,
        end: 1.893,
      },
    }, '<');
    this.timeline.to('.magic-loop__dot--42', {
      motionPath: {
        path: '.magic-loop__svg--mobile .magic-loop__path--4',
        align: '.magic-loop__svg--mobile .magic-loop__path--4',
        alignOrigin: [0.5, 0.5],
        start: 0.095,
        end: 1.095,
      },
    }, '<');

    // ==================================== path 5
    this.timeline.to('.magic-loop__icon--diamond', {
      motionPath: {
        path: '.magic-loop__svg--mobile .magic-loop__path--5',
        align: '.magic-loop__svg--mobile .magic-loop__path--5',
        alignOrigin: [0.5, 0.5],
        start: 0.468,
        end: 0.468 - 1,
      },
    }, '<');
    this.timeline.to('.magic-loop__icon--frog', {
      motionPath: {
        path: '.magic-loop__svg--mobile .magic-loop__path--5',
        align: '.magic-loop__svg--mobile .magic-loop__path--5',
        alignOrigin: [0.5, 0.5],
        start: 0.1,
        end: 0.1 - 1,
      },
    }, '<');
    this.timeline.to('.magic-loop__dot--51', {
      motionPath: {
        path: '.magic-loop__svg--mobile .magic-loop__path--5',
        align: '.magic-loop__svg--mobile .magic-loop__path--5',
        alignOrigin: [0.5, 0.5],
        start: 0.656,
        end: 0.656 - 1,
      },
    }, '<');
  }

  breakpointChecker() {
    if (VP767.matches) {
      this.setMobileAnimation();
    } else {
      this.setDesktopAnimation();
    }
  }

  setTimelines() {
    this.timeline = gsap.timeline({paused: true, repeat: -1, defaults: {duration: 10, ease: 'linear'}});
    this.timelineCat = gsap.timeline({paused: true});

    ScrollTrigger.create({
      scroller: pageScroller,
      trigger: this.container,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      onEnter: () => {
        this.timelineCat.play();
      },
    });

    ScrollTrigger.create({
      scroller: pageScroller,
      trigger: this.container,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      onEnter: () => {
        this.timeline.play();
      },
      onLeave: () => {
        this.timeline.pause();
      },
      onEnterBack: () => {
        this.timeline.play();
      },
      onLeaveBack: () => {
        this.timeline.pause();
      },
    });

    this.breakpointChecker();
    this.timelines.push(this.timeline);
    this.timelines.push(this.timelineCat);
  }
}
