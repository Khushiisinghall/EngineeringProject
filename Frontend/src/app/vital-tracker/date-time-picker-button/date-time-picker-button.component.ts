import { Component, Inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DateTimePickerDialogComponent } from '../date-time-picker-dialog/date-time-picker-dialog.component';
import { LiveService } from '../services/liveservice/live.service';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-date-time-picker-button',
  templateUrl: './date-time-picker-button.component.html',
  styleUrls: ['./date-time-picker-button.component.css']
})
export class DateTimePickerButtonComponent {

  // we display buttonText[start]
  @Input() start: number;
  @Input() min: Date;
  @Input() max: Date;
  private graphSubscription: Subscription;
  private minSubscription: Subscription;
  private maxSubscription: Subscription;

  buttonText = ["Select start time", "Select end time"];

  constructor(private dialog: MatDialog, @Inject(LiveService) private liveService: LiveService,
  ) {
    this.minSubscription = this.liveService
      .onMinChange()
      .subscribe((value: Date) => {
        var dateTime = moment(value);
        const formattedDateTime = dateTime.format('MMMM Do YYYY, h:mm:ss a');   
        this.buttonText[0] = formattedDateTime;
      });

    this.maxSubscription = this.liveService
      .onMaxChange()
      .subscribe((value: Date) => {
        var dateTime = moment(value);
        const formattedDateTime = dateTime.format('MMMM Do YYYY, h:mm:ss a');   
        this.buttonText[1] = formattedDateTime;
      });
  }

  ngOnInit() {
    if (this.liveService.getMin() != undefined)
      this.buttonText[0] = this.liveService.getMin().toString();
      if (this.liveService.getMax() != undefined)
        this.buttonText[1] = this.liveService.getMax().toString();
  }

  openDateTimePicker(): void {
    const dialogRef = this.dialog.open(DateTimePickerDialogComponent, {
      width: '400px',
      disableClose: true,
      autoFocus: false,
      data: {
        start: this.start,
        min: this.min,
        max: this.max,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // if start = 0, we are on the start button, so we will display buttonText[0], otherwise buttonText[1]
      if (result != undefined && result != "Invalid date")
        this.buttonText = ["Start: " + result, "End: " + result];
      console.log("Result: " + this.buttonText);
      // do something with the selected date and time
    });
  }
}
