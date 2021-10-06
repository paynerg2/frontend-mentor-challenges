/*
 * Adapted from (https://web-crunch.com/posts/vanilla-javascript-form-validation)
 */

class FormValidator {
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
        this.invalidEmailErrorMessage = 'Looks like this is not an email';
        this.state = {
            error: 'error',
            success: 'success',
        };
    }

    initialize() {
        console.log('initializing');
        this.validateOnSubmit();
    }

    validateOnSubmit() {
        let self = this;

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            self.fields.forEach((field) => {
                const input = document.querySelector(`#${field}`);
                self.validateFields(input);
            });
        });
    }

    validateFields(field) {
        let errorMessage = null;
        // Check for nonempty
        if (field.value.trim() === '') {
            errorMessage = `${field.name} should not be empty`;
            this.setStatus(field, errorMessage, this.state.error);
        } else {
            this.setStatus(field, errorMessage, this.state.success);
        }

        // Check for valid email address
        if (field.type === 'email') {
            const re = /\S+@\S+\.\S+/;
            if (re.test(field.value)) {
                errorMessage = this.invalidEmailErrorMessage;
                this.setStatus(field, errorMessage, this.state.success);
            } else {
                this.setStatus(field, errorMessage, this.state.error);
            }
        }
    }

    setStatus(field, message, status) {
        const errorIcon = field.parentElement.querySelector('.icon-error');
        const errorMessageClass = `.error-message__${field.id}`;
        const errorMessageSpan = field.parentElement.parentElement.querySelector(errorMessageClass);

        if (status === this.state.success) {
            if (errorIcon) {
                errorIcon.classList.add('hidden');
                field.parentElement.classList.remove('error');
            }
            if (errorMessageSpan) {
                errorMessageSpan.innerText = '';
            }
        }

        if (status === this.state.error) {
            field.parentElement.classList.add('error');
            errorMessageSpan.innerText = message;
            errorIcon.classList.remove('hidden');
        }
    }
}

const form = document.querySelector('#cta__form');
const fields = ['firstName', 'lastName', 'email', 'password'];

const validator = new FormValidator(form, fields);
validator.initialize();
