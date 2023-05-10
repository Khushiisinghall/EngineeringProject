import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private router: Router) {}

  navigateToVitTrack(): void {
    const username = sessionStorage.getItem('username');

    if (username) {
      this.router.navigate(['/vit-track/Sensors']);
    } else {
      this.router.navigate(['/vit-track/login']);
    }
  }

  title = 'dashboard_KoPro';
  

}
