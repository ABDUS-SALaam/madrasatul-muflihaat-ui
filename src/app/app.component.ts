import { Component, HostBinding, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var AOS: any; // Declare AOS as a global variable

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule],
})
export class AppComponent implements OnInit {
  isDark = false;

  @HostBinding('class.dark') get darkMode() {
    return this.isDark;
  }

  ngOnInit() {
    // Initialize AOS - it's loaded as a global script
    if (typeof AOS !== 'undefined') {
      AOS.init({ 
        duration: 1200, 
        once: true 
      });
    }
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark-mode', this.isDark);
  }
}
