import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full',
  },
  {
    path: 'en',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'expansion',
    redirectTo: 'en/expansion',
  },
  {
    path: 'en/expansion',
    loadChildren: () => import('./pages/expansion/expansion.module').then((m) => m.ExpansionModule),
    data: { lang: 'en' },
  },
  {
    path: 'en/for-dealers',
    loadChildren: () => import('./pages/for-dealers/for-dealers.module').then((m) => m.ForDealersModule),
    data: { lang: 'en' },
  },
  {
    path: 'cz/expanze',
    loadChildren: () => import('./pages/expansion/expansion.module').then((m) => m.ExpansionModule),
    data: { lang: 'cz' },
  },
  {
    path: 'cz/pro-obchodniky',
    loadChildren: () => import('./pages/for-dealers/for-dealers.module').then((m) => m.ForDealersModule),
    data: { lang: 'cz' },
  },
  {
    path: 'cz/blog',
    loadChildren: () => import('./pages/blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'cz/eticky-kodex',
    loadChildren: () => import('./pages/code-of-ethics/code-of-ethics.module').then((m) => m.CodeOfEthicsModule),
  },
  {
    path: 'en/code-of-ethics',
    loadChildren: () => import('./pages/code-of-ethics/code-of-ethics.module').then((m) => m.CodeOfEthicsModule),
  },
  {
    path: 'cz/prihlaseni',
    loadChildren: () => import('./pages/sign-in/sign-in.module').then((m) => m.SignInModule),
  },
  {
    path: 'en/sign-in',
    loadChildren: () => import('./pages/sign-in/sign-in.module').then((m) => m.SignInModule),
  },
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
