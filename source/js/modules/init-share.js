
const onButtonClick = (evt) => {
  const button = evt.target.closest('[data-share-btn]');

  if (button) {
    const block = document.querySelector('[data-share-project]');
    if (block) {
      block.classList.add('is-visible');
    }
  }
};

const onCopyBtnClick = (evt) => {
  const button = evt.target.closest('[data-copy-link]');

  if (button) {
    let url = document.location.href;

    // не работает без https
    navigator.clipboard
        .writeText(url)
        .then(function () {
          const popup = button.querySelector('[data-popup-timeout]');
          const popupTimeout = +popup.dataset.popupTimeout || 2500;

          if (popup) {
            popup.classList.add('is-visible');

            setTimeout(() => {
              popup.classList.remove('is-visible');
            }, popupTimeout);
          }

        }, function () {
          console.log('Ссылка не скопирована. Возможно, запрещено в браузере, сайт открыт в приватном режиме или включена защита от отслеживания.');
        });
  }
};

const initShare = () => {
  const button = document.querySelector('[data-share-btn]');

  if (button) {
    button.addEventListener('click', onButtonClick);

    const buttonCopyLink = document.querySelector('[data-copy-link]');

    if (buttonCopyLink) {
      buttonCopyLink.addEventListener('click', onCopyBtnClick);
    }
  }
};

export {initShare};
