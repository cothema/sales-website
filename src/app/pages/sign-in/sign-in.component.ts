import { Component, OnInit } from "@angular/core";
import { faGoogle } from "@fortawesome/free-brands-svg-icons/faGoogle";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons/faSignOutAlt";
import { AuthService } from "../../services/auth.service";

declare var $: any;

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit {
  faSignOutAlt = faSignOutAlt;
  faGoogle = faGoogle;

  constructor(
    public authService: AuthService
  ) {
  }

  ngOnInit(): void {
    $(".loader").fadeOut("slow");
    $("#overlayer").fadeOut("slow");
  }

}
