import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { LocalizeRouterHttpLoader } from '@gilsdav/ngx-translate-router-http-loader';
import { TranslateService } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home-page/home-page.module').then((m) => m.HomePageModule),
    pathMatch: 'full'
  },
  {
    path: 'for-dealers',
    loadChildren: () => import('./pages/for-dealers-page/for-dealers-page.module').then((m) => m.ForDealersPageModule)
  },
  {
    path: 'expansion',
    loadChildren: () => import('./pages/expansion-page/expansion-page.module').then((m) => m.ExpansionPageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./pages/blog-page/blog-page.module').then((m) => m.BlogPageModule)
  },
  {
    path: 'code-of-ethics',
    loadChildren: () => import('./pages/code-of-ethics-page/code-of-ethics-page.module').then((m) => m.CodeOfEthicsPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in-page/sign-in-page.module').then((m) => m.SignInPageModule)
  },
  {
    path: 'how-it-works',
    loadChildren: () => import('./pages/how-it-works-page/how-it-works-page.module').then((m) => m.HowItWorksPageModule)
  },
  {
    path: 'field',
    children: [
      {
        path: 'gastro',
        loadChildren: () => import('./pages/fields/gastro-field-page/gastro-field-page.module').then((m) => m.GastroFieldPageModule)
      },
      {
        path: 'ecommerce',
        loadChildren: () => import('./pages/fields/ecommerce-field-page/ecommerce-field-page.module').then((m) => m.EcommerceFieldPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    }),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: (translate, location, settings, http) =>
          new LocalizeRouterHttpLoader(translate, location, settings, http),
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient]
      }
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
