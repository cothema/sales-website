import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class BlogPageComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    $('.loader').fadeOut('slow');
    $('#overlayer').fadeOut('slow');
  }
}
