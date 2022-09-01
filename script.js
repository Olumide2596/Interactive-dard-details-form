'use strict';
const confirmBtn = document.querySelector('.submit');
const form = document.querySelector('form');
const completed = document.querySelector('.completed');
const inputFileds = document.querySelectorAll('input');
const inputNumber = document.querySelector('#number');
const cardNumber = document.querySelector('.card-number');
const inputName = document.querySelector('#name');
const cardName = document.querySelector('.card-name');
const inputMonth = document.querySelector('#month');
const inputYear = document.querySelector('#year');
const cardDate = document.querySelector('.card-date');
const inputCvc = document.querySelector('#cvc');
const cardcvc = document.querySelector('.card-cvc');

const validate = function () {
	inputFileds.forEach(input => {
		if (input.value.trim() === '') {
			input.nextSibling.remove();
			input.style.borderColor = 'var(--error-red)';
			input.insertAdjacentHTML(
				'afterend',
				`<p style='color:red; font-size:12px;margin-top:5px;'>Can't be blank</p>`
			);
		} else {
			input.nextSibling.textContent = '';
			input.style.borderColor = 'var(--light-grayish-violet)';
		}
	});
};
const value = inputNumber.value;
const check = [...value].map(v => Number(v)).includes(NaN);
const cardNumberFormat = function () {
	inputNumber.nextSibling.remove();
	check
		? inputNumber.insertAdjacentHTML(
				'afterend',
				`<p style='color:red; font-size:12px;margin-top:5px;'>Wrong format, numbers only</p>`
		  )
		: console.log(check);
};

const cardCreation = function () {
	inputNumber.value !== ''
		? (cardNumber.textContent = inputNumber.value)
		: (cardNumber.textContent = '0000 0000 0000 0000');
	inputName.value !== ''
		? (cardName.textContent = inputName.value.toUpperCase())
		: (cardName.textContent = 'Jane Appleseed');
	cardDate.textContent = `${inputMonth.value.padStart(
		2,
		'0'
	)}/${inputYear.value.padStart(2, '0')}`;
	cardcvc.textContent = inputCvc.value.padStart(3, '000');
};

confirmBtn.addEventListener('click', function (e) {
	e.preventDefault();
	validate();
	cardCreation();
	if ([...inputFileds].every(input => input.value.trim() !== '') && !check) {
		form.classList.add('hidden');
		completed.classList.remove('hidden');
	} else cardNumberFormat();
});
console.log(value, typeof value);
