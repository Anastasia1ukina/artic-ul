import {locomotive} from '../../scroll-smoother/init-locomotive';
import {pageScroller} from '../../scroll-smoother/init-scroll-trigger';
import {AnimationInstance} from '../animation-instance';
import {MatterWorld} from './matter-world';

export class Moderation extends AnimationInstance {
  constructor(container) {
    super(container);
    if (!container) {
      return;
    }

    this.state = false;
    this.btn = {
      wrapper: this.container.querySelector('[data-switch-btn]'),
      circle: this.container.querySelector('[data-btn-circle]'),
      on: this.container.querySelector('[data-btn-on]'),
      off: this.container.querySelector('[data-btn-off]'),
    };
    this.text = {
      start: this.container.querySelector('[data-animation-text-start]'),
      end: this.container.querySelector('[data-animation-text-end]'),
      wrapper: this.container.querySelector('[data-animation-text-wrapper]'),
    };
    this.matterWorld = new MatterWorld();

    this.setBtnAnimation = this.setBtnAnimation.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);

    this.setClickBtnEvent();
  }

  handleBtnClick() {
    let scrollOffset = this.state ? 0 : window.innerHeight + 1;
    this.state = !this.state;

    if (document.documentElement.classList.contains('has-scroll-smooth')) { // если активен локомотив, то
      locomotive.scrollTo(this.container, {
        duration: 500, // в локо время указывается в миллисекундах
        offset: scrollOffset,
      });
    } else {
      gsap.to(window, 1.5, {
        scrollTo: {
          y: this.container,
          offsetY: -scrollOffset,
        },
        ease: 'power1.out',
      });
    }
  }

  setClickBtnEvent() {
    this.btn.wrapper.addEventListener('click', this.handleBtnClick);
  }

  setBtnAnimation() {
    const circleRect = this.btn.circle.getBoundingClientRect();
    const wrapperRect = this.btn.wrapper.getBoundingClientRect();
    this.timeline.to(this.btn.circle, {
      x: wrapperRect.width - circleRect.width - (circleRect.left - wrapperRect.left) * 2,
    });
    this.timeline.to(this.btn.wrapper, {backgroundColor: '#a4dd49'}, 0);
    this.timeline.to(this.btn.on, {scale: 1}, 0);
    this.timeline.to(this.btn.off, {scale: 0.8}, 0);
  }

  setTimelines() {
    this.timeline = gsap.timeline({paused: false});
    // btn on => off
    this.setBtnAnimation();

    // main scrollTrigger
    ScrollTrigger.create({
      scroller: pageScroller,
      trigger: this.container,
      start: 'top -20%',
      end: 'bottom 150%',
      scrub: true,
      animation: this.timeline,
      onLeave: () => {
        this.matterWorld.setSleeping(false);
        this.matterWorld.down();
        this.text.wrapper.classList.add('is-active');
        this.state = true;
      },
      onEnterBack: () => {
        this.matterWorld.setSleeping(false);
        this.matterWorld.up();
        this.text.wrapper.classList.remove('is-active');
        this.state = false;
      },
    });
    this.timelines.push(this.timeline);
  }
}
