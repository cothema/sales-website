import { Component, OnInit } from "@angular/core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  faUsers = faUsers;
  mapMarkerAlt = faMapMarkerAlt;
  faLink = faLink;
  faArrowRight = faArrowRight;

  constructor() {
  }

  ngOnInit(): void {
  }

}
