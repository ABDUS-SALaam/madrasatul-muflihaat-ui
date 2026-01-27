import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [CommonModule]
})
export class AboutComponent {
  
  founderMessage = `
  "Bismillah-ir-Rahman-ir-Rahim. At Madrasatul Muflihaat, we believe true success 
  lies in illuminating hearts with sacred knowledge. 
  Our purpose is to guide seekers toward sincerity, excellence, 
  and a life aligned with the Qur’an and Sunnah. 
  May Allah make this journey a means of light for all who walk it."
`;

facultyGroups: any[] = [];
  impactStats = [
    { number: '4+', label: 'Years of Service', icon: 'bi bi-calendar' },
    { number: '1000+', label: 'Students', icon: 'fa-users' },
    { number: '5+', label: 'Courses Designed', icon: 'fa-book-open' },
    { number: '16+', label: 'Team Members', icon: 'fa-user-graduate' },
  ];

  faculty = [
    { name: 'Muallimah Nazneen Mohammad', title: 'Founder & Principal'},
    { name: 'Muallimah Rahmatunnisa', title: 'Aalimah'},
    { name: 'Muallimah Nafisa', title: 'Aalimah'},
    { name: 'Muallimah Saba', title: 'Aalimah & Faazilah'},
    { name: 'Muallimah Sameena', title: 'Hafizah, Faazilah & Aalimah'},
    { name: 'Muallimah Afnan', title: 'Aalimah & Hafizah'},
    { name: 'Muallimah Hajira', title: 'Aalimah'}
  ];

  admins = [
    { name: 'Zahurunissa', title: 'Admin'},
    { name: 'Ameerunissa', title: 'Admin'},
    { name: 'Mohammed Zubair', title: 'Video editor'}
  ];
  
}
