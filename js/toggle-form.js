const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const deactivatedForm = [adForm, mapFilters];

const toggleForms = (forms, isDisabled) => {
  forms.forEach((form) => {
    form.classList.toggle('ad-form--disabled', isDisabled);
    const formElements = form.querySelectorAll('fieldset, select');
    formElements.forEach((element) => {
      element.disabled = isDisabled;
    });
  });
};

export { toggleForms, deactivatedForm };
