import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rb-vote-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vote-button.component.html',
})
export class VoteButtonComponent {
  type = input.required<'up' | 'down'>();
  size = input<'sm' | 'lg'>('sm');
  clicked = output<void>();
}

