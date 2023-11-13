import {initMainNav} from './main-mav/init-main-nav';
import {initPublicationSticky} from './init-publication-sticky';
import {Moderation} from './moderation/init-moderation';
import {MagicLoop} from './moderation/init-magic-loop';
import {ThreadAndSkein} from './init-thread-and-skein';
import {initGlobs} from './init-globs';
import {initPublicationIntro} from './init-publication-intro';
import {initScrollDownArrow} from './init-scroll-down-arrow';

export const initAnimationModule = () => {
  initMainNav();
  initScrollDownArrow();
  initPublicationSticky();
  initGlobs();
  const moderationAnimation = new Moderation(document.querySelector('[data-animation="moderation"]'));
  moderationAnimation.init();
  const MagicLoopAnimation = new MagicLoop(document.querySelector('[data-animate="magic-loop"]'));
  MagicLoopAnimation.init();
  const ThreadAndSkeinAnimation = new ThreadAndSkein(document.querySelectorAll('[data-animate="thread-and-skein"]'));
  ThreadAndSkeinAnimation.init();
  initPublicationIntro();
};
