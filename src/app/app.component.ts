import { Component, HostBinding, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceComponent } from './maintenance.component';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';

declare var AOS: any; // Declare AOS as a global variable

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule,MaintenanceComponent,RouterModule],
})
export class AppComponent implements OnInit {
  isDark = false;
  isUnderMaintenance = environment.underMaintenance;;
  activeLink: string = 'home';
  hijriDate: string = '';
  hijriFullDate: string = '';
  navLinks = ['home', 'about', 'courses', 'contact', 'portal'];
  hoveredPortal = false;
  showMemberBanner = true;
  @HostBinding('class.dark') get darkMode() {
    return this.isDark;
  }

  ngOnInit() {
    if (typeof AOS !== 'undefined') {
      AOS.init({ 
        duration: 1200, 
        once: true 
      });
    }
    const today = new Date();

    const hijriFormatter = new Intl.DateTimeFormat('en-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  
    this.hijriFullDate = hijriFormatter.format(today);
  
    // Short version for navbar
    this.hijriDate = this.hijriFullDate.replace(' AH', '');
  }

  setActive(link: string) {
    this.activeLink = link;
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark-mode', this.isDark);
  }
  
  
}
