import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-code-of-ethics-page',
  templateUrl: './code-of-ethics.component.html',
  styleUrls: ['./code-of-ethics.component.scss']
})
export class CodeOfEthicsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".loader").fadeOut("slow");
    $("#overlayer").fadeOut("slow");
  }

}
