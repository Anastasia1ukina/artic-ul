// Swiper 7.4.1
// import './vendor/swiper';
import './vendor/focus-visible-polyfill';
import {gsap} from './vendor/gsap.min.js';
import './vendor/path-seg-polyfill';
import {MotionPathPlugin} from './vendor/MotionPathPlugin.min.js';
import {ScrollToPlugin} from './vendor/ScrollToPlugin.min.js';
import {ScrollTrigger} from './vendor/ScrollTrigger.min.js';
import './vendor/sharer.min.js';
import {CustomEase} from './vendor/custom-ease.min.js';

gsap.registerPlugin(MotionPathPlugin, ScrollToPlugin, ScrollTrigger, CustomEase);
