import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rb-message-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-box.component.html',
})
export class MessageBoxComponent {
  message = input.required<string>();
  type = input<'success' | 'error'>('success');
}

