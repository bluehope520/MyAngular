import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-box',
  imports: [],
  templateUrl: './message-box.html',
  styleUrl: './message-box.css',
})
export class MessageBox {
  private router = inject(Router);
  closePopup() {
    this.router.navigate([{ outlets: { popup: null } }]);
  }
}
