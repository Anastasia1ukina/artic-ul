import {updateSectionsLength, updateHeaderColors} from './animations/update-menu-st';

// Обновелние заполнения меню и покраски шапки из-за изменения
// высоты страницы в связи с открытием/закрытием аккордеона

const buttons = [...document.querySelectorAll('[data-accordion="button"]')];


const onButtonClick = (evt) => {
  const button = evt.target.closest('[data-accordion="button"]');

  if (button) {
    // обновить пункты меню для закрашивания, начиная с текущего блока
    const currentBlockId = button.closest('main > section[id]').getAttribute('id');
    updateSectionsLength({from: currentBlockId, delay: 600});

    // обновить скроллтриггеры на смену цвета шапки по цвету блока
    const currentBlock = button.closest('[data-header-color]');
    updateHeaderColors({from: currentBlock, delay: 600});
  }
};


const initAccordionBtn = () => {
  if (buttons.length > 0) {
    // у нас аккордеон один, поэтому событие прямо на кнопку
    buttons.forEach((button) => {
      button.addEventListener('click', onButtonClick);
    });
  }
};

export {initAccordionBtn};
