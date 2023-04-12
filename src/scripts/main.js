'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  const label = document.createElement('label');
  const text = input.name.replace(/name/gi, ' name');

  input.style.textTransform = 'capitalize';
  input.placeholder = text;

  label.style.textTransform = 'uppercase';
  input.parentNode.prepend(label);
  label.classList.add('field-label');
  label.textContent = text;
});
