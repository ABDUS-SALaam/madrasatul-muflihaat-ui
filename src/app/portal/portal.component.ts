import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="portal-container">
      <div class="portal-content">
        <!-- Logo -->
        <div class="logo-wrapper">
          <img src="assets/logo.png" alt="Madrasatul Muflihaat Logo" class="logo">
        </div>
        
        <h1>Educational Portal</h1>
        <p class="subtitle">For Students, Teachers & Admin</p>
        
        <div class="message-box">
          <p>Comprehensive portal with courses, quizzes, assignments, and progress tracking.</p>
          <p>Coming soon with advanced features for all users.</p>
        </div>
        
        <!-- Features Preview -->
        <div class="features-preview">
          <h3>What to Expect:</h3>
          <div class="features">
            <div class="feature">
              <span class="icon">📚</span>
              <span>Course Materials</span>
            </div>
            <div class="feature">
              <span class="icon">📊</span>
              <span>Grade Tracking</span>
            </div>
            <div class="feature">
              <span class="icon">📝</span>
              <span>Assignments</span>
            </div>
            <div class="feature">
              <span class="icon">🎯</span>
              <span>Quiz System</span>
            </div>
            <div class="feature">
              <span class="icon">👥</span>
              <span>Teacher Communication</span>
            </div>
            <div class="feature">
              <span class="icon">📅</span>
              <span>Schedule & Calendar</span>
            </div>
          </div>
        </div>
        
        <div class="info">
          <p class="estimated-time">🌙 Launching Very Soon, In Sha Allah</p>
        </div>

        <!-- Decorative Pattern -->
        <div class="decorative-pattern">
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100vh;
      margin: 0;
      padding: 0;
    }

    .portal-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #f4e4c1 0%, #e8c468 50%, #d4a650 100%);
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      position: relative;
      overflow: hidden;
      margin: 0;
      width: 100%;
    }

    .portal-container::before {
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

    .portal-content {
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
      margin: auto;
      flex-shrink: 0;
    }

    .logo-wrapper {
      margin-bottom: 10px;
    }

    .logo {
      width: 80px;
      height: 80px;
      object-fit: contain;
      filter: drop-shadow(0 4px 8px rgba(212, 166, 80, 0.2));
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
      padding: 12px;
      border-radius: 10px;
      margin-bottom: 12px;
      box-shadow: inset 0 2px 4px rgba(212, 166, 80, 0.1);
    }

    .message-box p {
      color: #6b5504;
      line-height: 1.5;
      margin-bottom: 8px;
      font-size: 12px;
    }

    .message-box p:last-child {
      margin-bottom: 0;
    }

    .features-preview {
      background: #f8f9fa;
      border-radius: 10px;
      padding: 15px;
      margin-bottom: 12px;
      border: 1px solid #e9ecef;
    }

    .features-preview h3 {
      color: #495057;
      margin-bottom: 12px;
      font-size: 14px;
      font-weight: 600;
      text-align: center;
    }

    .features {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }

    .feature {
      display: flex;
      align-items: center;
      gap: 6px;
      color: #6c757d;
      font-size: 11px;
    }

    .feature .icon {
      font-size: 14px;
    }

    .info {
      padding-top: 12px;
      border-top: 2px solid rgba(212, 166, 80, 0.3);
    }

    .estimated-time {
      font-size: 12px;
      color: #d4a650;
      font-weight: 700;
      margin-bottom: 0;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .decorative-pattern {
      margin-top: 12px;
      display: flex;
      justify-content: center;
      gap: 12px;
    }

    .decorative-pattern span {
      color: #e8c468;
      font-size: 12px;
      opacity: 0.6;
    }

    @media (max-width: 600px) {
      .portal-content {
        padding: 30px 20px;
      }

      .logo {
        width: 70px;
        height: 70px;
      }

      h1 {
        font-size: 28px;
      }

      .subtitle {
        font-size: 16px;
      }

      .message-box p {
        font-size: 13px;
      }

      .features {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class PortalComponent {
}
