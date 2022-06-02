import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { faTag } from '@fortawesome/free-solid-svg-icons/faTag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit, OnChanges {
  faTag = faTag;
  @Input() title: string;
  @Input() color = 'light';
  classes: any;

  constructor() {
  }

  ngOnInit(): void {
    this.setup();
  }

  ngOnChanges(): void {
    this.setup();
  }

  private setup() {
    const classes = {};

    classes.badge = true;
    classes['badge-' + this.color] = true;

    this.classes = classes;
  }

}
