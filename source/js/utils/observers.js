import {pageScroller} from '../modules/scroll-smoother/init-scroll-trigger';
import {throttle} from './throttle-debounce';

class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((subscriber) => subscriber !== fn);
  }

  fire(data) {
    this.observers.forEach((subscriber) => subscriber(data));
  }
}

// Применение чекера для мобильного
// import {VP767} from './constants';

// const breakpointChecker = () => {
//   if (VP767.matches) {
//     console.log('mobile');
//   } else {
//     console.log('desktop');
//   }
// };

// breakpointChecker();
// resizeObserver.subscribe(breakpointChecker);

const resizeObserver = new EventObserver();
// const resizeObserverProto = new ResizeObserver(() => setTimeout(() => resizeObserver.fire('resize'), 10));
const resizeObserverProto = new ResizeObserver(throttle(() => resizeObserver.fire('resize'), 50));
resizeObserverProto.observe(document.documentElement);

export {resizeObserver};

let scrollObserver;
export const initScrollObserver = () => {
  scrollObserver = new EventObserver();
  gsap.timeline({
    scrollTrigger: {
      trigger: '[data-scroll-container]',
      scroller: pageScroller,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        scrollObserver.fire(self);
      },
    },
  });
};
// инициализирует обсервер скролла. работает с локо и тачем
// везде следует использовать его прим: scrollObserver.subscribe((self) => {console.log(self.progress)})
export {scrollObserver};
