function validate() {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const NAME_REGEXP = /^[a-zA-Zа-яА-ЯёЁ\s]+$/iu;

    const form = document.querySelector('.form__form');
    const inputEmail = document.querySelector('.form__input-email');
    const inputName = document.querySelector('.form__input-name');
    const inputCheckbox = document.querySelector('.form__input-checkbox');
    const button = document.querySelector('.form__input-button');

    function isEmailValid(value) {
        return EMAIL_REGEXP.test(value);
    }

    function isNameValid(value) {
        return NAME_REGEXP.test(value);
    }

    inputEmail.addEventListener('input', onInputEmail);
    inputName.addEventListener('input', onInputName);

    function onInputEmail() {
        if (isEmailValid(inputEmail.value)) {
            inputEmail.style.borderColor = '#BEDB39';
        }
        else if (!EMAIL_REGEXP.test(inputEmail.value)) {
            inputEmail.style.borderColor = 'red';
        }
        else if (inputEmail.value === '') {
            inputEmail.style.borderColor = '#d6d6d6';
        }
    }
    function onInputName() {
        if (isNameValid(inputName.value) && inputName.value.length >= 2) {
            inputName.style.borderColor = '#BEDB39';
        }
        else if (inputName.value.length < 2 || inputName.value.length === 1 || !NAME_REGEXP.test(inputName.value)) {
            inputName.style.borderColor = 'red';
        }
        else if (inputName.value === '') {
            inputName.style.borderColor = '#d6d6d6';
        }
        return
    }


    function startValidation() {
        toggleButton();

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            if (inputName.value.length < 2 || !NAME_REGEXP.test(inputName.value)) {
                inputName.classList.add('form__input-name--error');
                // inputName.value = '';
            } else {
                inputName.classList.remove('form__input-name--error');
            }

            if (!EMAIL_REGEXP.test(inputEmail.value)) {
                inputEmail.classList.add('form__input-email--error');
                // inputEmail.value = '';
            } else {
                inputEmail.classList.remove('form__input-email--error');
            }

            if (!inputCheckbox.checked) {
                inputCheckbox.classList.add('form__input-checkbox-custom--error');
            } else {
                inputCheckbox.classList.remove('form__input-checkbox-custom--error');
            }

            if (inputName.value.length >= 2 && EMAIL_REGEXP.test(inputEmail.value) && inputCheckbox.checked) {
                alert('Form is valid');
                form.reset();
            }
        });

        inputName.addEventListener('input', () => {
            if (inputName.value.length < 2 || !NAME_REGEXP.test(inputName.value)) {
                inputName.classList.add('form__input-name--error');
            } else {
                inputName.classList.remove('form__input-name--error');
            }
            toggleButton();
        });

        inputEmail.addEventListener('input', () => {
            if (!EMAIL_REGEXP.test(inputEmail.value)) {
                inputEmail.classList.add('form__input-email--error');
            } else {
                inputEmail.classList.remove('form__input-email--error');
            }
            toggleButton();
        });

        inputCheckbox.addEventListener('change', () => {
            if (!inputCheckbox.checked) {
                inputCheckbox.classList.add('form__input-checkbox-custom--error');
            } else {
                inputCheckbox.classList.remove('form__input-checkbox-custom--error');
            }
            toggleButton();
        });

        function toggleButton() {
            if (inputName.value.length >= 2 && EMAIL_REGEXP.test(inputEmail.value) && inputCheckbox.checked) {
                button.diable = false;
            } else {
                button.diable = true;
            }
        }
    }

    if (form) {

        startValidation();

        form.addEventListener('reset', () => {
            if (inputName.classList.contains('form__input-name--error')) {
                inputName.classList.remove('form__input-name--error');
            }
        })

        form.addEventListener('reset', () => {
            if (inputEmail.classList.contains('form__input-email--error')) {
                inputEmail.classList.remove('form__input-email--error');
            }
        })

        form.addEventListener('reset', () => {
            if (inputCheckbox.classList.contains('form__input-checkbox-custom--error')) {
                inputCheckbox.classList.remove('form__input-checkbox-custom--error');
            }
        })
    }
}

export default validate;