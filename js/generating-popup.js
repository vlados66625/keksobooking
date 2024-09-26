const popup = document.querySelector('#card')
  .content
  .querySelector('.popup');

const typeAccoommodation = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const generatingPopup = (data) => {
  const fragment = document.createDocumentFragment();

  for (const itemData of data) {
    const popupClone = popup.cloneNode(true);
    popupClone.querySelector('.popup__avatar').src = itemData.author.avatar;
    popupClone.querySelector('.popup__title').textContent = itemData.offer.title;
    popupClone.querySelector('.popup__text--address').textContent = itemData.offer.address;
    popupClone.querySelector('.popup__text--price').textContent = `${itemData.offer.price} ₽/ночь`;
    popupClone.querySelector('.popup__type').textContent = typeAccoommodation[itemData.offer.type];
    popupClone.querySelector('.popup__text--capacity').textContent = `${itemData.offer.rooms} комнаты для ${itemData.offer.guests} гостей`;
    popupClone.querySelector('.popup__text--time').textContent = `Заезд после ${itemData.offer.checkin}, выезд до ${itemData.offer.checkout}`;

    const popupFeatures = popupClone.querySelectorAll('.popup__feature');
    const features = itemData.offer.features;

    for (const popupFeature of popupFeatures) {
      const isPresent = features.some((feature) => popupFeature.classList.contains(`popup__feature--${feature}`));
      if (!isPresent) {
        popupFeature.remove();
      }
    }

    popupClone.querySelector('.popup__description').textContent = itemData.offer.description;
    let popupPhoto = popupClone.querySelector('.popup__photo');
    itemData.offer.photos.forEach((photo, index) => {
      if (index >= 1) {
        popupPhoto = popupPhoto.cloneNode(true);
        popupPhoto.src = photo;
        popupClone.querySelector('.popup__photos').append(popupPhoto);
      } else {
        popupPhoto.src = photo;
      }
    });

    fragment.append(popupClone);
  }

  return (fragment);
};

export { generatingPopup };
