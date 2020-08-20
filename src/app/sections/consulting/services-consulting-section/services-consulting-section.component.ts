import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-consultations-section',
  templateUrl: './services-consulting-section.component.html',
  styleUrls: ['./services-consulting-section.component.scss']
})
export class ServicesConsultingSectionComponent implements OnInit {

  @Input() ctaBtn = true;

  constructor() { }

  ngOnInit(): void {
  }

}
