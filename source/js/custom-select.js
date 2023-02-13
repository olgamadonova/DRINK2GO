document.querySelectorAll('.custom-select').forEach(customSelect => {
  if(!customSelect) {
    return;
  }
  const customSelectDropdown = customSelect.querySelector('.custom-select__dropdown');
  const customSelectDropdownList = customSelect.querySelector('.custom-select__dropdown-list');
  const selectInput = customSelect.querySelector('.custom-select__input');
  const onCustomSelectDropdownListClick = (evt) => {
    const item = evt.target.closest('.custom-select__dropdown-item');
    if (!item) {
      return;
    }
    evt.stopPropagation();
    selectInput.value = item.dataset.value;
    customSelectDropdown.textContent = item.textContent
    customSelectDropdown.focus();
    customSelectDropdownList.classList.toggle('custom-select__dropdown-list--visible', false);
    customSelectDropdown.classList.toggle('custom-select__dropdown--active', false);
  }
  function onWindowClickCloseSelect (evt)  {
    if (!evt.target.closest('.custom-select__dropdown') && !evt.target.closest('.custom-select__dropdown-item')) {
      customSelectDropdownList.classList.toggle('custom-select__dropdown-list--visible', false);
      customSelectDropdown.classList.toggle('custom-select__dropdown--active', false);
      customSelectDropdown.blur();
    }
  }
  function onSelectExitEsc (evt) {
    evt.preventDefault();
    if ((evt.key === 'Escape'|| evt.key ==='Tab') && customSelectDropdownList.classList.contains('custom-select__dropdown-list--visible')) {
      customSelectDropdownList.classList.toggle('custom-select__dropdown-list--visible', false);
      customSelectDropdown.classList.toggle('custom-select__dropdown--active', false);
      customSelectDropdown.blur();
    }
    document.removeEventListener('keydown', onSelectExitEsc);
  }

  const onCustomSelectDropdownOpen = (evt) => {
    const select = evt.target.closest('.custom-select__dropdown');
    if (!select) {
      return;
    }
    customSelectDropdownList.classList.toggle('custom-select__dropdown-list--visible');
    customSelectDropdown.classList.toggle('custom-select__dropdown--active');
    customSelectDropdownList.addEventListener('click', onCustomSelectDropdownListClick);
    document.addEventListener('keydown', onSelectExitEsc);
    document.addEventListener('click', onWindowClickCloseSelect);
  };

  customSelect.querySelector('.custom-select__dropdown').addEventListener('click', onCustomSelectDropdownOpen);
});
