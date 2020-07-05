import { Component, OnInit } from "@angular/core";
import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";

@Component({
  selector: "app-about-us-section",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.scss"]
})
export class AboutUsComponent implements OnInit {
  faLink = faLink;

  constructor() {
  }

  ngOnInit(): void {
  }

}
