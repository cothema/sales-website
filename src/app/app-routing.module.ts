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
    loadChildren: () => import('./pages/consulting/home-page/home-page.module').then((m) => m.HomePageModule),
    pathMatch: 'full'
  },
  {
    path: 'career',
    loadChildren: () => import('./pages/general/career-page/career-page.module').then((m) => m.CareerPageModule)
  },
  {
    path: 'sales-outsourcing',
    loadChildren: () => import('./pages/sales/sales-outsourcing-page/sales-outsourcing-page.module').then((m) => m.SalesOutsourcingPageModule)
  },
  {
    path: 'expansion',
    loadChildren: () => import('./pages/expansion/expansion-page/expansion-page.module').then((m) => m.ExpansionPageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./pages/general/blog-page/blog-page.module').then((m) => m.BlogPageModule)
  },
  {
    path: 'code-of-ethics',
    loadChildren: () => import('./pages/general/code-of-ethics-page/code-of-ethics-page.module').then((m) => m.CodeOfEthicsPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/general/sign-in-page/sign-in-page.module').then((m) => m.SignInPageModule)
  },
  {
    path: 'how-it-works',
    loadChildren: () => import('./pages/sales/how-it-works-page/how-it-works-page.module').then((m) => m.HowItWorksPageModule)
  },
  {
    path: 'field',
    children: [
      {
        path: 'gastro',
        loadChildren: () => import('./pages/consulting/fields/gastro-field-page/gastro-field-page.module').then((m) => m.GastroFieldPageModule)
      },
      {
        path: 'ecommerce',
        loadChildren: () => import('./pages/consulting/fields/ecommerce-field-page/ecommerce-field-page.module').then((m) => m.EcommerceFieldPageModule)
      },
      {
        path: 'manufacturing-and-industry',
        loadChildren: () => import('./pages/consulting/fields/manufacturing-and-industry-page/manufacturing-and-industry-page.module').then((m) => m.ManufacturingAndIndustryPageModule)
      },
      {
        path: 'salespeople-and-consultants',
        loadChildren: () => import('./pages/consulting/fields/salespeople-and-consultants-page/salespeople-and-consultants-page.module').then((m) => m.SalespeopleAndConsultantsPageModule)
      }
    ]
  },
  {
    path: 'partnership',
    loadChildren: () => import('./pages/general/partnership-page/partnership-page.module').then((m) => m.PartnershipPageModule)
  },
  {
    path: 'terms-and-conditions',
    loadChildren: () => import('./pages/general/terms-page/terms-page.module').then((m) => m.TermsPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/general/contact-page/contact-page.module').then((m) => m.ContactPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/general/not-found-page/not-found-page.module').then((m) => m.NotFoundPageModule)
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
