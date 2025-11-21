import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rb-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating.component.html',
})
export class RatingComponent {
  rating = input.required<number>();
  showValue = input<boolean>(true);

  stars() {
    const stars: ('full' | 'half' | 'empty')[] = [];
    const fullStars = Math.floor(this.rating());
    const hasHalfStar = this.rating() % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push('full');
      } else if (i === fullStars && hasHalfStar) {
        stars.push('half');
      } else {
        stars.push('empty');
      }
    }
    
    return stars;
  }
}

