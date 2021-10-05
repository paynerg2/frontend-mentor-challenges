/*
 * Adapted from (https://web-crunch.com/posts/vanilla-javascript-form-validation)
 */

class FormValidator {
    constructor(form, field) {
        this.form = form;
        this.field = field;
        this.errorMessage = 'Please provide a valid email address';
        this.state = {
            error: 'error',
            success: 'success',
        };
    }

    initialize() {
        this.validateOnSubmit();
    }

    validateOnSubmit() {
        let self = this;

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            self.validateFields(this.field);
        });
    }

    validateFields(field) {
        // Check for nonempty
        if (field.value.trim() === '') {
            this.setStatus(field, this.state.error);
        } else {
            this.setStatus(field, this.state.success);
        }

        // Check for valid email address
        if (field.type === 'email') {
            const re = /\S+@\S+\.\S+/;
            if (re.test(field.value)) {
                this.setStatus(field, this.state.success);
            } else {
                this.setStatus(field, this.state.error);
            }
        }
    }

    setStatus(field, status) {
        const errorIcon = field.parentElement.querySelector('.icon-error');
        const errorMessageSpan = field.parentElement.parentElement.querySelector('.error-message');

        if (status === this.state.success) {
            if (errorIcon) {
                errorIcon.classList.add('hidden');
            }
            if (errorMessageSpan) {
                errorMessageSpan.innerText = '';
            }
        }

        if (status === this.state.error) {
            errorMessageSpan.innerText = this.errorMessage;
            errorIcon.classList.remove('hidden');
        }
    }
}

const form = document.querySelector('.submit');
const field = document.querySelector('#email_address');

const validator = new FormValidator(form, field);
validator.initialize();
