import { Component, OnInit } from '@angular/core';
import { faUtensils } from '@fortawesome/free-solid-svg-icons/faUtensils';

@Component({
  selector: 'app-specialization-section',
  templateUrl: './specialization-section.component.html',
  styleUrls: ['./specialization-section.component.scss']
})
export class SpecializationSectionComponent implements OnInit {
  faUtensils = faUtensils;

  constructor() { }

  ngOnInit(): void {
  }

}
