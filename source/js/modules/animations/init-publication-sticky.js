import {resizeObserver} from '../../utils/observers';
import {pageScroller} from '../scroll-smoother/init-scroll-trigger';

const parent = document.querySelector('.publication-sticky');

let st = null;

const maxProgress = 7.5;
let maxSteps = 5;
let step = (maxProgress / maxSteps) / maxProgress;

let firstStepProg = 0;
let secondStepProg = step;
let thirdStepProg = step * 2;
let fourthStepProg = step * 3;
let fifthStepProg = step * 4;

export const initPublicationSticky = () => {
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
      parent.classList.add('is-state-2');
    }

    if (progress >= thirdStepProg && progress < fourthStepProg) {
      parent.classList.remove('is-state-1');
      parent.classList.remove('is-state-2');
      parent.classList.remove('is-state-2-1');
      parent.classList.remove('is-state-4');
      parent.classList.add('is-state-3');
    }

    if (progress >= fourthStepProg && progress < fifthStepProg) {
      parent.classList.remove('is-state-1');
      parent.classList.remove('is-state-3');
      parent.classList.remove('is-state-5');
      parent.classList.add('is-state-4');
    }

    if (progress >= fifthStepProg && progress < 1) {
      parent.classList.remove('is-state-1');
      parent.classList.remove('is-state-4');
      parent.classList.add('is-state-5');
    }
  };

  const killST = () => {
    st.update();
    parent.classList.remove('is-state-1');
    parent.classList.remove('is-state-2');
    parent.classList.remove('is-state-3');
    parent.classList.remove('is-state-4');
    parent.classList.remove('is-state-5');
    st.kill();
  };

  const init = () => {
    if (st) {
      killST();
    }

    st = ScrollTrigger.create({
      trigger: '#publication-sticky',
      scroller: pageScroller,
      start: 'top top',
      end: 'bottom center',
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
