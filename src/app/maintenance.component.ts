// maintenance.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="maintenance-container">
      <div class="maintenance-content">
        <!-- Logo -->
        <div class="logo-wrapper">
          <img src="assets/logo.png" alt="Madrasatul Muflihaat Logo" class="logo">
        </div>
        
        <!-- Main Icon -->
        <div class="icon-wrapper">
          <svg class="maintenance-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
        </div>
        
        <h1>Coming Soon</h1>
        <p class="subtitle">Our website is under construction</p>
        
        <div class="message-box">
          <p>We're working hard to bring you an amazing experience.</p>
          <p>Stay tuned for the launch of Madrasatul Muflihaat's new website!</p>
        </div>
        
        <div class="info">
          <p class="estimated-time">🌙 Launching Very Soon, In Sha Allah</p>
        </div>

        <!-- Decorative Islamic Pattern -->
        <div class="decorative-pattern">
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .maintenance-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #f4e4c1 0%, #e8c468 50%, #d4a650 100%);
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      position: relative;
      overflow: hidden;
    }

    .maintenance-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        radial-gradient(circle at 20% 50%, rgba(212, 166, 80, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(232, 196, 104, 0.1) 0%, transparent 50%);
      pointer-events: none;
    }

    .maintenance-content {
      background: linear-gradient(135deg, #fffef7 0%, #fef9e7 100%);
      border-radius: 20px;
      padding: 30px 30px;
      max-width: 500px;
      width: 100%;
      box-shadow: 
        0 20px 60px rgba(212, 166, 80, 0.3),
        0 0 0 1px rgba(212, 166, 80, 0.1);
      text-align: center;
      position: relative;
      border: 2px solid rgba(212, 166, 80, 0.2);
    }

    .logo-wrapper {
      margin-bottom: 15px;
    }

    .logo {
      width: 120px;
      height: 120px;
      object-fit: contain;
      filter: drop-shadow(0 4px 8px rgba(212, 166, 80, 0.2));
    }

    .icon-wrapper {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
    }

    .maintenance-icon {
      width: 40px;
      height: 40px;
      color: #d4a650;
      animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { 
        transform: scale(1);
        opacity: 1;
      }
      50% { 
        transform: scale(1.1);
        opacity: 0.8;
      }
    }

    h1 {
      font-size: 32px;
      color: #8b6914;
      margin-bottom: 6px;
      font-weight: 700;
      text-shadow: 2px 2px 4px rgba(212, 166, 80, 0.1);
    }

    .subtitle {
      font-size: 14px;
      color: #a67c00;
      margin-bottom: 15px;
      font-weight: 500;
    }

    .message-box {
      background: linear-gradient(135deg, #fff9e6 0%, #fef5d4 100%);
      border-left: 5px solid #d4a650;
      border-right: 5px solid #d4a650;
      padding: 15px;
      border-radius: 10px;
      margin-bottom: 15px;
      box-shadow: inset 0 2px 4px rgba(212, 166, 80, 0.1);
    }

    .message-box p {
      color: #6b5504;
      line-height: 1.5;
      margin-bottom: 8px;
      font-size: 13px;
    }

    .message-box p:last-child {
      margin-bottom: 0;
      font-weight: 600;
    }

    .info {
      padding-top: 15px;
      border-top: 2px solid rgba(212, 166, 80, 0.3);
    }

    .estimated-time {
      font-size: 13px;
      color: #d4a650;
      font-weight: 700;
      margin-bottom: 0;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .contact {
      font-size: 13px;
      color: #8b6914;
    }

    .contact a {
      color: #d4a650;
      text-decoration: none;
      font-weight: 700;
      border-bottom: 2px solid transparent;
      transition: border-color 0.3s ease;
    }

    .contact a:hover {
      border-bottom-color: #d4a650;
    }

    .decorative-pattern {
      margin-top: 15px;
      display: flex;
      justify-content: center;
      gap: 15px;
    }

    .decorative-pattern span {
      color: #e8c468;
      font-size: 14px;
      animation: twinkle 2s ease-in-out infinite;
    }

    .decorative-pattern span:nth-child(2) {
      animation-delay: 0.5s;
    }

    .decorative-pattern span:nth-child(3) {
      animation-delay: 1s;
    }

    @keyframes twinkle {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 1; }
    }

    @media (max-width: 600px) {
      .maintenance-content {
        padding: 40px 25px;
      }

      .logo {
        width: 100px;
        height: 100px;
      }

      h1 {
        font-size: 32px;
      }

      .subtitle {
        font-size: 18px;
      }

      .message-box p {
        font-size: 15px;
      }
    }
  `]
})
export class MaintenanceComponent {}