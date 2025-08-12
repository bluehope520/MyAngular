import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [RouterModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  canDeactivate() {
    console.log('admin-canDeactivate');
    return window.confirm('Are you sure you want to leave?');
  }
}
