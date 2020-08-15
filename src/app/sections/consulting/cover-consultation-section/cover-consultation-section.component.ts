import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

@Component({
  selector: 'app-cover-consultation-section',
  templateUrl: './cover-consultation-section.component.html',
  styleUrls: ['./cover-consultation-section.component.scss']
})
export class CoverConsultationSectionComponent implements OnInit {
  faCheck = faCheck;
  tags = ['consulting', 'innovations', 'automation', 'processes', 'digitization', 'it', 'saas'];

  constructor() {
  }

  ngOnInit(): void {
  }
}
