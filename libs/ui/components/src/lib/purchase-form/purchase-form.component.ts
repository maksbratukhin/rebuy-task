import { Component, input, output, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'rb-purchase-form',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent, ButtonComponent],
  template: `
    <rb-card [padding]="'md'" [hover]="false">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">Complete Purchase</h3>
      
      <div class="mb-4">
        <label for="quantity" class="block text-gray-700 font-medium mb-2">Quantity</label>
        <input
          id="quantity"
          type="number"
          [(ngModel)]="quantity"
          [min]="1"
          [max]="maxStock()"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div class="mb-4 p-4 bg-blue-50 rounded-lg">
        <div class="flex justify-between items-center">
          <span class="text-gray-700 font-medium">Total Price:</span>
          <span class="text-2xl font-bold text-blue-600">\${{ totalPrice() }}</span>
        </div>
      </div>

      @if (message()) {
        <div [class]="success() ? 'bg-green-50 border border-green-200 text-green-700' : 'bg-red-50 border border-red-200 text-red-700'" class="px-4 py-3 rounded mb-4">
          {{ message() }}
        </div>
      }

      <div class="flex gap-3">
        <rb-button 
          [variant]="'secondary'" 
          [size]="'lg'"
          (clicked)="cancelClicked.emit()"
        >
          Cancel
        </rb-button>
        <rb-button 
          [variant]="'success'" 
          [size]="'lg'"
          [fullWidth]="true"
          [disabled]="loading()"
          (clicked)="confirmClicked.emit(quantity())"
        >
          @if (loading()) {
            Processing...
          } @else {
            Confirm Purchase
          }
        </rb-button>
      </div>
    </rb-card>
  `,
  styles: ``
})
export class PurchaseFormComponent {
  price = input.required<number>();
  maxStock = input.required<number>();
  loading = input<boolean>(false);
  message = input<string>('');
  success = input<boolean>(false);
  
  quantity = signal(1);
  
  totalPrice = computed(() => this.price() * this.quantity());
  
  confirmClicked = output<number>();
  cancelClicked = output<void>();

  emitConfirm() {
    this.confirmClicked.emit(this.quantity());
  }
}

