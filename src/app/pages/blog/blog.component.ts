import { Component, OnInit, ViewEncapsulation } from "@angular/core";

declare var $: any;

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class BlogComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    $(".loader").fadeOut("slow");
    $("#overlayer").fadeOut("slow");
  }
}
