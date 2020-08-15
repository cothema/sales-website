import { Component, Input, OnInit } from '@angular/core';
import { faTag } from '@fortawesome/free-solid-svg-icons/faTag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  faTag = faTag;
  @Input() title: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
