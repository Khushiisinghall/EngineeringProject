import { Component } from '@angular/core';
import { LiveService } from '../services/liveservice/live.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor (private liveService:LiveService) {}

  changeDisplayGraph(i: number) {
    this.liveService.changeDisplayGraph(i);
  }
}
