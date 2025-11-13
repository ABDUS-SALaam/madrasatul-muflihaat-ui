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
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    this.isDark = savedTheme === 'dark';
    document.body.classList.toggle('dark', this.isDark);

    // Initialize AOS animations
    import('aos').then((AOS) => AOS.init({ duration: 1200, once: true }));
  }

toggleTheme() {
  this.isDark = !this.isDark;

  const body = document.body;
  if (this.isDark) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
}
}
