import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { FacebookModule } from 'ngx-facebook';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { CodeOfEthicsPageComponent } from './pages/code-of-ethics-page/code-of-ethics-page.component';
import { ExpansionPageComponent } from './pages/expansion-page/expansion-page.component';
import { ForDealersPageComponent } from './pages/for-dealers-page/for-dealers-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { FooterPartComponent } from './parts/footer-part/footer-part.component';
import { HeaderPartComponent } from './parts/header-part/header-part.component';
import { AboutUsSectionComponent } from './section/about-us-section/about-us-section.component';
import { BlogPostsSectionComponent } from './section/blog-posts-section/blog-posts-section.component';
import { ContactUsSectionComponent } from './section/contact-us-section/contact-us-section.component';
import { CoverOutsourcingSectionComponent } from './section/cover-outsourcing-section/cover-outsourcing-section.component';
import { FaqSectionComponent } from './section/faq-section/faq-section.component';
import { ForDealersSectionComponent } from './section/for-dealers-section/for-dealers-section.component';
import { PricelistSectionComponent } from './section/pricelist-section/pricelist-section.component';
import { ServicesSectionComponent } from './section/services-section/services-section.component';
import { ServicesStepsSectionComponent } from './section/services-steps-section/services-steps-section.component';
import { TranslateWrapperService } from './services/translate-wrapper.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function appInitializerFactory(translateWrapperService: TranslateWrapperService) {
  return () => translateWrapperService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    ContactUsSectionComponent,
    AboutUsSectionComponent,
    ServicesSectionComponent,
    ServicesStepsSectionComponent,
    ForDealersSectionComponent,
    FaqSectionComponent,
    CoverOutsourcingSectionComponent,
    BlogPostsSectionComponent,
    BlogPageComponent,
    CodeOfEthicsPageComponent,
    ExpansionPageComponent,
    HomePageComponent,
    SignInPageComponent,
    PricelistSectionComponent,
    HeaderPartComponent,
    ForDealersPageComponent,
    FooterPartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    ScullyLibModule,
    FontAwesomeModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FacebookModule.forRoot(),
    NgxSpinnerModule
  ],
  bootstrap: [AppComponent],
  exports: [
    HeaderPartComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateWrapperService],
      multi: true
    }
  ]
})
export class AppModule {
}
