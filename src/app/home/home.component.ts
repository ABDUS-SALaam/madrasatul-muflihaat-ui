import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule,RouterLink]
})
export class HomeComponent {
    courses = [
        { title: { main: 'Aalimiyat', sub: '(for females)' }, icon: 'bi-mortarboard', desc: 'Comprehensive Islamic education.', bgImage: 'assets/aalimiyat.png' },
        { title: { main: 'Diploma in Shari’a', sub: '(for females)' }, icon: 'bi-file-earmark-text', desc: 'Learn the principles of Shari’a.', bgImage: 'assets/diploma.png' },
        { title: { main: 'Hifz ul Qur’an', sub: '(for females)' },  icon: 'bi-book-half', desc: 'Memorize the Holy Qur’an with proper Tajweed.', bgImage: 'assets/hifz.png' },
        { title: { main: 'Diploma in Shari’a', sub: '(Ages 5–15, boys & girls)' }, icon: 'bi-people', desc: 'Islamic education for children.', bgImage: 'assets/kids.png' },
        {  title: { main: 'Tajweed', sub: '(for females)' }, icon: 'bi-mic', desc: 'Master the correct recitation of the Qur’an.', bgImage: 'assets/tajweed.png' },
        {  title: { main: 'Short Term Courses', sub: '(for females)' }, icon: 'bi-stars', desc: 'Explore a variety of short courses.', bgImage: 'assets/shortcourse.png' }
      ];
    
      contacts = [
        { label: 'Email Us', value: 'info@madrasatulmuflihaat.com', icon: 'bi-envelope-fill', buttonText: 'Send Mail', link: 'mailto:info@madrasatulmuflihaat.com' },
        { label: 'Message Us', value: '+91 90000 00000', icon: 'bi-whatsapp', buttonText: 'Open WhatsApp', link: 'https://wa.me/919000000000' }
      ];
}
