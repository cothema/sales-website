import { Component, OnInit } from '@angular/core';
import { faHeadset } from '@fortawesome/free-solid-svg-icons/faHeadset';

@Component({
  selector: 'app-schedule-call-btn',
  templateUrl: './schedule-call-btn.component.html',
  styleUrls: ['./schedule-call-btn.component.scss']
})
export class ScheduleCallBtnComponent implements OnInit {
  faHeadset = faHeadset;

  constructor() { }

  ngOnInit(): void {
  }

}
