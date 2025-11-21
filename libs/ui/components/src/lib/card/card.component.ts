import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rb-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
})
export class CardComponent {
  hover = input<boolean>(true);
  padding = input<'none' | 'sm' | 'md' | 'lg'>('md');

  cardClasses() {
    const baseClasses = 'bg-white rounded-lg shadow-md overflow-hidden';
    const hoverClasses = this.hover() ? 'hover:shadow-xl transition-shadow duration-300 cursor-pointer' : '';
    
    const paddingClasses = {
      none: '',
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-6',
    };
    
    return `${baseClasses} ${hoverClasses} ${paddingClasses[this.padding()]}`;
  }
}

