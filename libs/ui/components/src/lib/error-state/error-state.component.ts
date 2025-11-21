import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'rb-error-state',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './error-state.component.html',
})
export class ErrorStateComponent {
  title = input<string>('Oops! Something went wrong');
  message = input<string>('We encountered an issue loading the content. Please try again.');
  showRetry = input<boolean>(true);
  retry = output<void>();
}

