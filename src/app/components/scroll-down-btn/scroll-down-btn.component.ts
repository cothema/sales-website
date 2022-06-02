import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scroll-down-btn',
  templateUrl: './scroll-down-btn.component.html',
  styleUrls: ['./scroll-down-btn.component.scss']
})
export class ScrollDownBtnComponent implements OnInit {

  url: string;
  @Input() fragment: string;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const urlTree = this.router.parseUrl(this.router.url);
    urlTree.fragment = undefined;
    this.url = urlTree.toString();
  }

}
