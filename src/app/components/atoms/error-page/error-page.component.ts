import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css'],
  standalone: true
})
export class ErrorPageComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }
}