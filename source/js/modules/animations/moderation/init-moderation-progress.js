import {resizeObserver} from '../../../utils/observers';
import {pageScroller} from '../../scroll-smoother/init-scroll-trigger';

const mediaPoint = window.matchMedia('(min-width: 768px)');
const parent = document.querySelector('.moderation-progress');

let st = null;

const maxProgress = 1;
let maxSteps = 6;
let step = maxProgress / maxSteps;

let firstStepProg = step * 1;
let secondStepProg = step * 2;
let thirdStepProg = step * 3;
let fourthStepProg = step * 4;
let fifthStepProg = step * 5;

let secondStepMiddleProg = null;
let fourthMiddleStepProg = null;


const breakpointChecker = () => {
  if (mediaPoint.matches) {
    maxSteps = 6;
    step = maxProgress / maxSteps;

    firstStepProg = step * 1;
    secondStepProg = step * 2;
    thirdStepProg = step * 3;
    fourthStepProg = step * 4;
    fifthStepProg = step * 5;

    secondStepMiddleProg = null;
    fourthMiddleStepProg = null;
  } else {
    maxSteps = 10;
    step = maxProgress / maxSteps;

    firstStepProg = step * 1;
    secondStepProg = step * 2;
    thirdStepProg = step * 4.5;
    fourthStepProg = step * 6.5;
    fifthStepProg = step * 8;

    secondStepMiddleProg = step * 2.5;
    fourthMiddleStepProg = step * 9;
  }
};

export const initModerationProgress = () => {
  if (!parent) {
    return;
  }

  const onSTUpdate = ({progress}) => {
    if (progress >= firstStepProg && progress < secondStepProg) {
      parent.classList.remove('is-state-2');
      parent.classList.add('is-state-1');
    }

    if (progress >= secondStepProg && progress < thirdStepProg) {
      parent.classList.remove('is-state-1');
      parent.classList.remove('is-state-3');

      if (!mediaPoint.matches) {
        parent.classList.remove('is-state-2-1');
      }

      parent.classList.add('is-state-2');
    }

    if (progress >= secondStepMiddleProg && progress < thirdStepProg && !mediaPoint.matches) {
      parent.classList.add('is-state-2-1');
    }

    if (progress >= thirdStepProg && progress < fourthStepProg) {
      parent.classList.remove('is-state-2');
      parent.classList.remove('is-state-2-1');
      parent.classList.remove('is-state-4');
      parent.classList.add('is-state-3');
    }

    if (progress >= fourthStepProg && progress < fifthStepProg) {
      parent.classList.remove('is-state-3');
      parent.classList.remove('is-state-5');
      parent.classList.add('is-state-4');
    }

    if (progress >= fifthStepProg && progress < 1) {
      parent.classList.remove('is-state-4');

      if (!mediaPoint.matches) {
        parent.classList.remove('is-state-5-1');
      }

      parent.classList.add('is-state-5');
    }

    if (progress >= fourthMiddleStepProg && !mediaPoint.matches) {
      parent.classList.add('is-state-5-1');
    }
  };

  const killST = () => {
    st.update();
    parent.classList.remove('is-state-1');
    parent.classList.remove('is-state-2');
    parent.classList.remove('is-state-2-1');
    parent.classList.remove('is-state-3');
    parent.classList.remove('is-state-4');
    parent.classList.remove('is-state-5');
    parent.classList.remove('is-state-5-1');
    st.kill();
  };

  const init = () => {
    breakpointChecker();
    mediaPoint.addListener(breakpointChecker);

    if (st) {
      killST();
    }

    st = ScrollTrigger.create({
      trigger: '#moderation-progress-sticky',
      scroller: pageScroller,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: onSTUpdate,
      onLeaveBack: () => parent.classList.remove('is-state-1'),
      onEnter: () => parent.classList.add('is-state-1'),
    });
    st.update();
  };

  init();
  resizeObserver.subscribe(init);
};
