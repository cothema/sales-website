import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {

  @Input() image: string;
  @Input() subtitle: string;
  @Input() tags: string[] = [];
  @Input() title: string;
  @Input() scrollToFragment: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
