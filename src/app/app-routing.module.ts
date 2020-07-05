import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home-page/home-page.module').then((m) => m.HomePageModule),
    pathMatch: 'full'
  },
  {
    path: 'en',
    loadChildren: () => import('./pages/home-page/home-page.module').then((m) => m.HomePageModule)
  },
  {
    path: 'expansion',
    redirectTo: 'en/expansion-page'
  },
  {
    path: 'en/expansion-page',
    loadChildren: () => import('./pages/expansion-page/expansion-page.module').then((m) => m.ExpansionPageModule),
    data: { lang: 'en' }
  },
  {
    path: 'en/for-dealers-section-page',
    loadChildren: () => import('./pages/for-dealers-page/for-dealers-page.module').then((m) => m.ForDealersPageModule),
    data: { lang: 'en' }
  },
  {
    path: 'cz/expanze',
    loadChildren: () => import('./pages/expansion-page/expansion-page.module').then((m) => m.ExpansionPageModule),
    data: { lang: 'cz' }
  },
  {
    path: 'cz/pro-obchodniky',
    loadChildren: () => import('./pages/for-dealers-page/for-dealers-page.module').then((m) => m.ForDealersPageModule),
    data: { lang: 'cz' }
  },
  {
    path: 'cz/blog-page',
    loadChildren: () => import('./pages/blog-page/blog-page.module').then((m) => m.BlogPageModule)
  },
  {
    path: 'cz/eticky-kodex',
    loadChildren: () => import('./pages/code-of-ethics-page/code-of-ethics-page.module').then((m) => m.CodeOfEthicsPageModule)
  },
  {
    path: 'en/code-of-ethics-page',
    loadChildren: () => import('./pages/code-of-ethics-page/code-of-ethics-page.module').then((m) => m.CodeOfEthicsPageModule)
  },
  {
    path: 'cz/prihlaseni',
    loadChildren: () => import('./pages/sign-in-page/sign-in-page.module').then((m) => m.SignInPageModule)
  },
  {
    path: 'en/sign-in-page',
    loadChildren: () => import('./pages/sign-in-page/sign-in-page.module').then((m) => m.SignInPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
