import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

declare var bootstrap: any;

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: ContactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  validationErrors: ValidationErrors = {};

  touched = {
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false
  };

  isSubmitting = false;

  constructor() {}

  ngOnInit(): void {}

  // ===== VALIDATION METHODS =====
  validateName(name: string): string | null {
    if (!name || name.trim().length === 0) {
      return 'Name is required';
    }
    if (name.trim().length < 3) {
      return 'Name must be at least 3 characters';
    }
    return null;
  }

  validateEmail(email: string): string | null {
    if (!email || email.trim().length === 0) {
      return 'Email is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return null;
  }

  validatePhone(phone: string): string | null {
    if (!phone || phone.trim().length === 0) {
      return 'Phone number is required';
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
      return 'Please enter a valid 10-digit phone number';
    }
    return null;
  }

  validateSubject(subject: string): string | null {
    if (!subject || subject.trim().length === 0) {
      return 'Please select a subject';
    }
    return null;
  }

  validateMessage(message: string): string | null {
    if (!message || message.trim().length === 0) {
      return 'Message is required';
    }
    if (message.trim().length < 10) {
      return 'Message must be at least 10 characters';
    }
    return null;
  }

  validateField(field: 'name' | 'email' | 'phone' | 'subject' | 'message'): void {
    this.touched[field] = true;

    switch(field) {
      case 'name':
        const nameError = this.validateName(this.contactForm.name);
        if (nameError) {
          this.validationErrors.name = nameError;
        } else {
          delete this.validationErrors.name;
        }
        break;
      case 'email':
        const emailError = this.validateEmail(this.contactForm.email);
        if (emailError) {
          this.validationErrors.email = emailError;
        } else {
          delete this.validationErrors.email;
        }
        break;
      case 'phone':
        const phoneError = this.validatePhone(this.contactForm.phone);
        if (phoneError) {
          this.validationErrors.phone = phoneError;
        } else {
          delete this.validationErrors.phone;
        }
        break;
      case 'subject':
        const subjectError = this.validateSubject(this.contactForm.subject);
        if (subjectError) {
          this.validationErrors.subject = subjectError;
        } else {
          delete this.validationErrors.subject;
        }
        break;
      case 'message':
        const messageError = this.validateMessage(this.contactForm.message);
        if (messageError) {
          this.validationErrors.message = messageError;
        } else {
          delete this.validationErrors.message;
        }
        break;
    }
  }

  isFormValid(): boolean {
    return !this.validationErrors.name && 
           !this.validationErrors.email && 
           !this.validationErrors.phone &&
           !this.validationErrors.subject &&
           !this.validationErrors.message &&
           this.contactForm.name.trim().length > 0 &&
           this.contactForm.email.trim().length > 0 &&
           this.contactForm.phone.trim().length > 0 &&
           this.contactForm.subject.trim().length > 0 &&
           this.contactForm.message.trim().length > 0;
  }

  // ===== TOAST METHOD =====
  showToast(message: string, type: 'success' | 'error' | 'info'): void {
    const toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) return;

    const toastId = 'toast-' + Date.now();
    const iconClass = type === 'success' ? 'bi-check-circle-fill' : 
                      type === 'error' ? 'bi-x-circle-fill' : 'bi-info-circle-fill';
    const bgClass = type === 'success' ? 'bg-success' : 
                    type === 'error' ? 'bg-danger' : 'bg-info';

    const toastHTML = `
      <div id="${toastId}" class="toast align-items-center text-white ${bgClass} border-0 shadow-lg" role="alert">
        <div class="d-flex">
          <div class="toast-body d-flex align-items-center">
            <i class="bi ${iconClass} me-2 fs-5"></i>
            <span>${message}</span>
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
      </div>
    `;

    toastContainer.insertAdjacentHTML('beforeend', toastHTML);
    
    const toastElement = document.getElementById(toastId);
    if (toastElement) {
      const toast = new bootstrap.Toast(toastElement, { delay: 4000 });
      toast.show();
      
      toastElement.addEventListener('hidden.bs.toast', () => {
        toastElement.remove();
      });
    }
  }

  // ===== SUBMIT FORM =====
  submitForm(): void {
    // Mark all fields as touched
    this.touched = { 
      name: true, 
      email: true, 
      phone: true, 
      subject: true, 
      message: true 
    };

    // Validate all fields
    this.validateField('name');
    this.validateField('email');
    this.validateField('phone');
    this.validateField('subject');
    this.validateField('message');

    if (!this.isFormValid()) {
      this.showToast('Please fix the errors before submitting', 'error');
      return;
    }

    this.isSubmitting = true;

    // Replace with your Google Apps Script URL or API endpoint
    const url = 'YOUR_GOOGLE_SCRIPT_URL_HERE';

    const formData = new FormData();
    formData.append('name', this.contactForm.name);
    formData.append('email', this.contactForm.email);
    formData.append('phone', this.contactForm.phone);
    formData.append('subject', this.contactForm.subject);
    formData.append('message', this.contactForm.message);

    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    })
      .then(() => {
        this.isSubmitting = false;
        this.showToast('Message sent successfully! We will get back to you soon.', 'success');
        this.resetForm();
      })
      .catch(err => {
        console.error(err);
        this.isSubmitting = false;
        this.showToast('Failed to send message. Please try again.', 'error');
      });
  }

  // ===== RESET FORM =====
  resetForm(): void {
    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
    this.validationErrors = {};
    this.touched = {
      name: false,
      email: false,
      phone: false,
      subject: false,
      message: false
    };
  }
}