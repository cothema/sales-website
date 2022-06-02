import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover-title',
  templateUrl: './cover-title.component.html',
  styleUrls: ['./cover-title.component.scss']
})
export class CoverTitleComponent implements OnInit {
  @Input() faIcon: any;
  @Input() tags: string[];
  @Input() title: string;
  @Input() color = '#007bff';
  @Input() image: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
