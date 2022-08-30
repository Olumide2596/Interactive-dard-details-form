'use strict';
const confirmBtn = document.querySelector('.submit');
const form = document.querySelector('form');
const completed = document.querySelector('.completed');
const inputFileds = document.querySelectorAll('input');

confirmBtn.addEventListener('click', function () {
	inputFileds.forEach(
		input => {
			if (input.value.trim() === '') {
				input.nextSibling.remove();
				input.style.borderColor = 'var(--error-red)';
				input.insertAdjacentHTML(
					'afterend',
					`<p style='color:red; font-size:12px;margin-top:5px;'>Can't be blank</p>`
				);
			} else {
				// form.classList.add('hidden');
				// completed.classList.remove('hidden');
				input.nextSibling.textContent = '';
			}
		}
		//
	);
});
