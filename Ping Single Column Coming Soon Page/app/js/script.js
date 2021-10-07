/*
 * Adapted from (https://web-crunch.com/posts/vanilla-javascript-form-validation)
 */

class FormValidator {
    constructor(form, field) {
        this.form = form;
        this.field = field;
        this.errorMessages = {
            invalidEmail: 'Please provide a valid email address',
            emptyField: 'Whoops! It looks like you forgot to add your email',
        };
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
        let errorMessage = null;
        const isEmpty = field.value.trim() === '';

        // Check for nonempty
        if (isEmpty) {
            errorMessage = this.errorMessages.emptyField;
            this.setStatus(field, errorMessage, this.state.error);
        } else {
            // Check for valid email format
            const re = /\S+@\S+\.\S+/;
            if (re.test(field.value)) {
                this.setStatus(field, errorMessage, this.state.success);
            } else {
                errorMessage = this.errorMessages.invalidEmail;
                this.setStatus(field, errorMessage, this.state.error);
            }
        }
    }

    setStatus(field, message, status) {
        const errorMessageDiv = field.parentElement.querySelector('.error-message');

        if (status === this.state.success) {
            errorMessageDiv.innerText = '';
            field.classList.remove('error');
        }

        if (status === this.state.error) {
            errorMessageDiv.innerText = message;
            field.classList.add('error');
        }
    }
}

const form = document.querySelector('#email-form');
const field = document.querySelector('#email');

const validator = new FormValidator(form, field);
validator.initialize();
