import {locomotive} from '../scroll-smoother/init-locomotive';
import {pageScroller} from '../scroll-smoother/init-scroll-trigger';
import {AnimationInstance} from './animation-instance';


export class PublicationIntro extends AnimationInstance {
  constructor(container) {
    super(container);
    if (!container) {
      return;
    }

    this.globs = [...document.querySelectorAll('[data-animate="publication-intro"] [data-glob]:not([data-stay])')];
    this.globsLeft = this.globs.length ? this.globs.length : null;

    this.st = null;

    this.scrollToEnd = this.scrollToEnd.bind(this);
    this.checkGlobsCount = this.checkGlobsCount.bind(this);
  }

  checkGlobsCount() {
    this.globsLeft--;

    if (this.globsLeft === 0) {
      this.scrollToEnd();
    }
  }

  scrollToEnd() {
    if (this.st.progress < 1) {
      if (document.documentElement.classList.contains('has-scroll-smooth')) { // если активен локомотив, то
        locomotive.scrollTo(this.container, {
          duration: 500, // в локо время указывается в миллисекундах
          offset: window.innerHeight,
        });
      } else {
        gsap.to(window, 0.5, {
          scrollTo: {
            y: this.container,
            offsetY: -window.innerHeight,
          },
          ease: 'power4.out',
        });
      }
    }
  }

  setTimelines() {
    this.timeline = gsap.timeline({paused: false});

    this.timeline.to('[data-animate="publication-intro"] [data-background]',
        {backgroundColor: 'transparent', ease: 'power4.in'}, 0);
    // для ::before
    this.timeline.to('[data-animate="publication-intro"] [data-background]',
        {color: 'transparent', ease: 'power3.in'}, 0);
    this.timeline.to('[data-animate="publication-intro"] [data-animate-text]',
        {color: '#242424', ease: 'power4.in'}, 0);
    this.timeline.to(this.globs, {opacity: 0, ease: 'power4.in'}, 0);
    this.timeline.set(this.globs, {pointerEvents: 'none'});

    this.st = ScrollTrigger.create({
      scroller: pageScroller,
      trigger: this.container,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      animation: this.timeline,
    });

    this.timelines.push(this.timeline);
  }
}
