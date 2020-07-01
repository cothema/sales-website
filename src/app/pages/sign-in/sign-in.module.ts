import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { SignInComponent } from "./sign-in.component";

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: "",
        component: SignInComponent,
      },
    ]),
  ]
})
export class SignInModule {
}
