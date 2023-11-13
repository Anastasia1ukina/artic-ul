import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {CustomSelect} from './modules/select/custom-select';
import {initLocomotiveScroll, locomotive} from './modules/scroll-smoother/init-locomotive';
import {initScrollTrigger} from './modules/scroll-smoother/init-scroll-trigger';
import {ScrollLock} from './utils/scroll-lock';
import {CanvasNoise} from './modules/init-noise';
import {initAnimationModule} from './modules/animations';
import {initScrollObserver} from './utils/observers';
import {initScrollTo} from './modules/scroll-smoother/init-move-to';
import {initAccordions} from './modules/accordion/init-accordion';

// ---------------------------------
const vpTouch = window.matchMedia('(pointer: coarse)');

window.addEventListener('DOMContentLoaded', () => {
  if (!vpTouch.matches) {
    window.scrollTo(0, 0);
  }
  const loaderScrollLock = new ScrollLock();
  loaderScrollLock.disableScrolling();

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------
  new CanvasNoise(document.querySelector('#noise')).init();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    loaderScrollLock.enableScrolling();
    const select = new CustomSelect();
    select.init();
    const form = new Form();
    window.form = form;
    form.init();

    // инициализируем скролл после полной загрузки страницы и контента
    initLocomotiveScroll();
    initScrollTrigger();
    initScrollTo();
    // анимации инициализируем после локомотива и СТ
    initScrollObserver();
    initAnimationModule();
    initAccordions();

    // фиксит различные глюки логомотива
    // setTimeout(() => {
    //   locomotive.update();
    // }, 10);
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
