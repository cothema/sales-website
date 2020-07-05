import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-code-of-ethics-page',
  templateUrl: './code-of-ethics-page.component.html',
  styleUrls: ['./code-of-ethics-page.component.scss']
})
export class CodeOfEthicsPageComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    $('.loader').fadeOut('slow');
    $('#overlayer').fadeOut('slow');
  }
}
