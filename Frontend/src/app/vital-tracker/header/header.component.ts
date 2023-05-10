import { Component, Inject, DoCheck } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { LiveService } from '../services/liveservice/live.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck{

  title: string = 'Vital Tracker'
  showAddTask: boolean;
  subscription: Subscription;
  //Login page
  isadmin=false;
  isMenuVisible=false;

  constructor(@Inject(LiveService) private uiService:LiveService,
            private router: Router) {
    this.subscription = this.uiService
        .onToggle()
        .subscribe((value) => this.showAddTask = value);
    //Login page
    let role=sessionStorage.getItem('role');
      if(role=='admin'){
        this.isadmin=true;
      }
  }

  ngOnInit(): void {}
  ngDoCheck(): void {
    let currentroute = this.router.url;
    let role=sessionStorage.getItem('role');
    if (currentroute == '/login' || currentroute == '/register') {
      this.isMenuVisible = false
    } else {
      this.isMenuVisible = true
    }

    if (role == 'admin') {
      this.isadmin = true;
    }else{
      this.isadmin = false;
    }
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url == route;
  }
}
