import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as XLSX from 'xlsx';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';

declare var bootstrap: any;

interface Course {
  title: { main: string; sub?: string };
  desc: string;
  icon: string;
  bgImage: string;
  category: string;
  admissionStatus:Boolean;
}

interface Enrollment {
  name: string;
  email: string;
  phone: string;
  course: string;
}

interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
}

@Component({
  selector: 'app-courses',
  standalone: true,
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule]
})
export class CoursesComponent implements OnInit {

  // ===== COURSES =====
  courses: Course[] = [];
  displayCount = 6;
  activeCategory = 'all';

  // ===== ENROLLMENT =====
  selectedCourse: Course | null = null;
  enrollments: Enrollment[] = [];

  enrollment: Enrollment = {
    name: '',
    email: '',
    phone: '',
    course: ''
  };

  // ===== VALIDATION =====
  validationErrors: ValidationErrors = {};
  touched = {
    name: false,
    email: false,
    phone: false
  };

  formProgress = 0;
  isSubmitting = false;
  submitButtonText = 'Complete Enrollment';
  submitButtonIcon = 'bi bi-arrow-right-circle-fill';

  constructor(private http: HttpClient) {} 

  ngOnInit(): void {
    this.courses = [
      {
        title: { main: 'Aalimiyat', sub: '(for females)' },
        desc: 'Comprehensive Islamic education.',
        icon: 'bi-mortarboard',
        bgImage: 'assets/aalimiyat.png',
        category: 'Advanced',
        admissionStatus: true
      },
      {
        title: { main: 'Diploma in Shari\'a', sub: '(for females)' },
        desc: 'Learn the principles of Shari\'a.',
        icon: 'bi-file-earmark-text',
        bgImage: 'assets/diploma.png',
        category: 'Diploma',
        admissionStatus: true
      },
      {
        title: { main: 'Hifz ul Qur\'an', sub: '(for females)' },
        desc: 'Memorize the Holy Qur\'an with proper Tajweed.',
        icon: 'bi-book-half',
        bgImage: 'assets/hifz.png',
        category: 'Quran',
        admissionStatus: true
      },
      {
        title: { main: 'Diploma in Shari\'a', sub: '(Ages 5–15, boys & girls)' },
        desc: 'Islamic education for children.',
        icon: 'bi-people',
        bgImage: 'assets/kids.png',
        category: 'Kids',
        admissionStatus: false
      },
      {
        title: { main: 'Tajweed', sub: '(for females)' },
        desc: 'Master the correct recitation of the Qur\'an.',
        icon: 'bi-mic',
        bgImage: 'assets/tajweed.png',
        category: 'Quran',
        admissionStatus: false
      },
      {
        title: { main: 'Short Term Courses', sub: '(for females)' },
        desc: 'Explore a variety of short courses.',
        icon: 'bi-stars',
        bgImage: 'assets/shortcourse.png',
        category: 'ShortTerm',
        admissionStatus: true
      }
    ];
  }

  // ===== VALIDATION METHODS =====
  validateName(name: string): string | null {
    if (!name || name.trim().length === 0) {
      return 'Name is required';
    }
    if (name.trim().length < 3) {
      return 'Name must be at least 3 characters';
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      return 'Name should only contain letters';
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

  validateField(field: 'name' | 'email' | 'phone',value:boolean): void {
    this.touched[field] = value;
    
    switch(field) {
      case 'name':
        const nameError = this.validateName(this.enrollment.name);
        if (nameError) {
          this.validationErrors.name = nameError;
        } else {
          delete this.validationErrors.name;
        }
        break;
      case 'email':
        const emailError = this.validateEmail(this.enrollment.email);
        if (emailError) {
          this.validationErrors.email = emailError;
        } else {
          delete this.validationErrors.email;
        }
        break;
      case 'phone':
        const phoneError = this.validatePhone(this.enrollment.phone);
        if (phoneError) {
          this.validationErrors.phone = phoneError;
        } else {
          delete this.validationErrors.phone;
        }
        break;
    }
    
    this.updateProgress();
  }

  isFormValid(): boolean {
    return !this.validationErrors.name && 
           !this.validationErrors.email && 
           !this.validationErrors.phone &&
           this.enrollment.name.trim().length > 0 &&
           this.enrollment.email.trim().length > 0 &&
           this.enrollment.phone.trim().length > 0;
  }

  // ===== OPEN MODAL =====
  openEnrollModal(course: Course): void {
    if (course.admissionStatus === false) {
      this.showToast('Admissions are currently closed for this course', 'info');
      return;
    }
    this.selectedCourse = course;
    this.enrollment.course = course.title.main;
    this.resetForm();

    const modal = new bootstrap.Modal(
      document.getElementById('enrollModal')
    );
    modal.show();
  }

  // ===== TOASTER METHOD =====
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

  submitEnrollment(): void {
    // Mark all fields as touched
    this.touched = { name: true, email: true, phone: true };
    
    // Validate all fields
    this.validateField('name',this.touched.name);
    this.validateField('email',this.touched.email);
    this.validateField('phone',this.touched.phone);

    if (!this.isFormValid()) {
      this.showToast('Please fix the errors before submitting', 'error');
      return;
    }

    this.isSubmitting = true;
    this.submitButtonText = 'Submitting...';
    this.submitButtonIcon = 'spinner-border spinner-border-sm';

    const url = 'https://script.google.com/macros/s/AKfycbyfKFtkL2-Jty4nlSKv8F9agxvE7jh0ecXjPweGe9LAKaXYEFAUSBru-hTxQbI1RAco/exec';

    const formData = new FormData();
    formData.append('name', this.enrollment.name);
    formData.append('email', this.enrollment.email);
    formData.append('phone', this.enrollment.phone);
    formData.append('course', this.enrollment.course);

    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    })
      .then(() => {
        this.isSubmitting = false;
        this.submitButtonText = 'Enrolled Successfully';
        this.submitButtonIcon = 'bi bi-check-circle-fill success-checkmark';

        setTimeout(() => {
          this.showToast('Enrollment submitted successfully! We will contact you soon.', 'success');
          this.closeEnrollModal();
          this.resetForm();
        }, 800);
      })
      .catch(err => {
        console.error(err);
        this.isSubmitting = false;
        this.submitButtonText = 'Complete Enrollment';
        this.submitButtonIcon = 'bi bi-arrow-right-circle-fill';
        this.showToast('Submission failed. Please try again.', 'error');
      });
  }

  closeEnrollModal(): void {
    const modalEl = document.getElementById('enrollModal');
    const modal = bootstrap.Modal.getInstance(modalEl);
    modal?.hide();
    
    setTimeout(() => this.resetForm(), 300);
  }

  resetForm(): void {
    this.enrollment = { 
      name: '', 
      email: '', 
      phone: '', 
      course: this.selectedCourse?.title.main || '' 
    };
    this.validationErrors = {};
    this.touched = { name: false, email: false, phone: false };
    this.formProgress = 0;
    this.submitButtonText = 'Complete Enrollment';
    this.submitButtonIcon = 'bi bi-arrow-right-circle-fill';
  }

  // ===== UPDATE PROGRESS BAR =====
  updateProgress(): void {
    let filled = 0;
    if (this.enrollment.name && !this.validationErrors.name) filled++;
    if (this.enrollment.email && !this.validationErrors.email) filled++;
    if (this.enrollment.phone && !this.validationErrors.phone) filled++;

    this.formProgress = Math.round((filled / 3) * 100);
  }

  // ===== EXPORT EXCEL =====
  exportToExcel(): void {
    const worksheet = XLSX.utils.json_to_sheet(this.enrollments);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Enrollments');

    XLSX.writeFile(workbook, 'course-enrollments.xlsx');
  }
}