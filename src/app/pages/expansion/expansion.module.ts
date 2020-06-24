import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ExpansionComponent } from "./expansion.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: ExpansionComponent,
      },
    ]),
  ]
})
export class ExpansionModule {
}
