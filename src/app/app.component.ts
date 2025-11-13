import { Component, HostBinding, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    // Remove localStorage - it doesn't work in Azure Static Web Apps
    // Initialize AOS animations
    import('aos').then((AOS) => AOS.init({ duration: 1200, once: true }));
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark-mode', this.isDark);
  }
}
