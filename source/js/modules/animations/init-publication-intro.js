import {PublicationIntro} from './publication-intro';

let publicationAnimation;

const initPublicationIntro = () => {
  publicationAnimation = new PublicationIntro(document.querySelector('[data-animate="publication-intro"]'));
  publicationAnimation.init();
};

export {publicationAnimation, initPublicationIntro};
