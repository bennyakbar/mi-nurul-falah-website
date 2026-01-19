/**
 * Form JavaScript - MI Nurul Falah
 * Handles contact form validation and submission
 */

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.form');
    
    if (contactForm) {
        initContactForm();
    }

    function initContactForm() {
        const submitBtn = contactForm.querySelector('.submit-button');
        const requiredFields = contactForm.querySelectorAll('[required]');
        
        // Form validation and submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset previous error states
            clearErrors();
            
            // Validate form
            const isValid = validateForm();
            
            if (isValid) {
                // Show loading state
                setButtonLoading(submitBtn, true);
                
                // Simulate form submission (since there's no backend)
                setTimeout(() => {
                    submitFormData();
                }, 1500);
            } else {
                // Show error message
                showFormMessage('Mohon lengkapi semua field yang wajib diisi.', 'error');
            }
        });

        // Real-time validation
        requiredFields.forEach(field => {
            field.addEventListener('blur', function() {
                validateField(this);
            });

            field.addEventListener('input', function() {
                clearFieldError(this);
            });
        });

        // Email validation
        const emailField = contactForm.querySelector('#email');
        if (emailField) {
            emailField.addEventListener('blur', function() {
                if (this.value && !Utils.isValidEmail(this.value)) {
                    showFieldError(this, 'Format email tidak valid');
                }
            });
        }

        // Phone validation
        const phoneField = contactForm.querySelector('#phone');
        if (phoneField) {
            phoneField.addEventListener('input', function() {
                // Only allow numbers, spaces, +, -, and parentheses
                this.value = this.value.replace(/[^0-9\s+\-\(\)]/g, '');
            });
        }
    }

    function validateForm() {
        let isValid = true;
        const requiredFields = contactForm.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });

        return isValid;
    }

    function validateField(field) {
        const value = field.value.trim();
        const fieldName = field.getAttribute('name') || field.getAttribute('id');
        
        // Check if field is empty
        if (!value) {
            showFieldError(field, 'Field ini wajib diisi');
            return false;
        }

        // Specific validations
        switch (fieldName) {
            case 'email':
                if (!Utils.isValidEmail(value)) {
                    showFieldError(field, 'Format email tidak valid');
                    return false;
                }
                break;
            
            case 'phone':
                if (value && value.length < 10) {
                    showFieldError(field, 'Nomor telepon minimal 10 digit');
                    return false;
                }
                break;
            
            case 'name':
                if (value.length < 3) {
                    showFieldError(field, 'Nama minimal 3 karakter');
                    return false;
                }
                break;
            
            case 'subject':
                if (value === '') {
                    showFieldError(field, 'Pilih salah satu subjek');
                    return false;
                }
                break;
            
            case 'message':
                if (value.length < 10) {
                    showFieldError(field, 'Pesan minimal 10 karakter');
                    return false;
                }
                break;
        }

        return true;
    }

    function showFieldError(field, message) {
        clearFieldError(field);
        
        field.classList.add('error');
        
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        
        field.parentNode.appendChild(errorElement);
    }

    function clearFieldError(field) {
        field.classList.remove('error');
        const errorMessage = field.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }

    function clearErrors() {
        const errorFields = contactForm.querySelectorAll('.error');
        const errorMessages = contactForm.querySelectorAll('.error-message');
        
        errorFields.forEach(field => field.classList.remove('error'));
        errorMessages.forEach(msg => msg.remove());
    }

    function setButtonLoading(button, isLoading) {
        if (isLoading) {
            button.disabled = true;
            button.textContent = 'Mengirim...';
            button.classList.add('loading');
        } else {
            button.disabled = false;
            button.textContent = 'Kirim Pesan';
            button.classList.remove('loading');
        }
    }

    function submitFormData() {
        const submitBtn = contactForm.querySelector('.submit-button');
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Since there's no backend, we'll show a success message
        // and log the data (in production, this would be sent to a server)
        console.log('Form Data Submitted:', data);
        
        // Show success message
        showFormMessage('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.', 'success');
        
        // Reset form
        contactForm.reset();
        
        // Reset button state
        setButtonLoading(submitBtn, false);
        
        // In a real implementation, you would send the data to a server:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     showFormMessage('Pesan berhasil dikirim!', 'success');
        //     contactForm.reset();
        // })
        // .catch(error => {
        //     showFormMessage('Terjadi kesalahan. Silakan coba lagi.', 'error');
        // })
        // .finally(() => {
        //     setButtonLoading(submitBtn, false);
        // });
    }

    function showFormMessage(message, type) {
        // Remove existing messages
        const existingMessage = contactForm.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create message element
        const messageElement = document.createElement('div');
        messageElement.className = `form-message ${type}`;
        messageElement.textContent = message;

        // Insert message before form
        contactForm.parentNode.insertBefore(messageElement, contactForm);

        // Auto-hide message after 5 seconds
        setTimeout(() => {
            messageElement.remove();
        }, 5000);
    }
});

// Utility functions
const Utils = {
    isValidEmail: function(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
};