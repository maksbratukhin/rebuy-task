import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteButtonComponent } from '../vote-button/vote-button.component';

@Component({
  selector: 'rb-vote-buttons',
  standalone: true,
  imports: [CommonModule, VoteButtonComponent],
  templateUrl: './vote-buttons.component.html',
})
export class VoteButtonsComponent {
  votes = input.required<number>();
  size = input<'sm' | 'lg'>('sm');
  
  voteUp = output<void>();
  voteDown = output<void>();
}

