import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/home/home.module").then(m => m.HomeModule),
  },
  {
    path: ":lang",
    loadChildren: () =>
      import("./pages/home/home.module").then(m => m.HomeModule),
  },
  {
    path: "expansion",
    redirectTo: "en/expansion",
  },
  {
    path: "en/expansion",
    loadChildren: () =>
      import("./pages/expansion/expansion.module").then(m => m.ExpansionModule),
    data: {lang: 'en'}
  },
  {
    path: "cz/expanze",
    loadChildren: () =>
      import("./pages/expansion/expansion.module").then(m => m.ExpansionModule),
    data: {lang: 'cz'}
  },
  {
    path: "cz/blog",
    loadChildren: () => import("./pages/blog/blog.module").then(m => m.BlogModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
