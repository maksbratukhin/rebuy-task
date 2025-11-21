import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rb-back-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './back-button.component.html',
})
export class BackButtonComponent {
  clicked = output<void>();
}

