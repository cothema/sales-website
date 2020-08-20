import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FacebookModule } from 'ngx-facebook';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { JsonLdModule } from 'ngx-seo';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { NgxSpinnerModule } from 'ngx-spinner';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesUniversityBannerComponent } from './banners/sales-university-banner/sales-university-banner.component';
import { CardComponent } from './components/card/card.component';
import { CoverComponent } from './components/cover/cover.component';
import { ScheduleCallBtnComponent } from './components/schedule-call-btn/schedule-call-btn.component';
import { ScrollDownBtnComponent } from './components/scroll-down-btn/scroll-down-btn.component';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { TagComponent } from './components/tag/tag.component';
import { EcommerceFieldPageComponent } from './pages/consulting/fields/ecommerce-field-page/ecommerce-field-page.component';
import { GastroFieldPageComponent } from './pages/consulting/fields/gastro-field-page/gastro-field-page.component';
import { ManufacturingAndIndustryPageComponent } from './pages/consulting/fields/manufacturing-and-industry-page/manufacturing-and-industry-page.component';
import { SalespeopleAndConsultantsPageComponent } from './pages/consulting/fields/salespeople-and-consultants-page/salespeople-and-consultants-page.component';
import { HomePageComponent } from './pages/consulting/home-page/home-page.component';
import { ExpansionPageComponent } from './pages/expansion/expansion-page/expansion-page.component';
import { BlogListPageComponent } from './pages/general/blog-page/blog-list-page/blog-list-page.component';
import { BlogPageComponent } from './pages/general/blog-page/blog-page.component';
import { CareerPageComponent } from './pages/general/career-page/career-page.component';
import { CodeOfEthicsPageComponent } from './pages/general/code-of-ethics-page/code-of-ethics-page.component';
import { ContactPageComponent } from './pages/general/contact-page/contact-page.component';
import { NotFoundPageComponent } from './pages/general/not-found-page/not-found-page.component';
import { PartnershipPageComponent } from './pages/general/partnership-page/partnership-page.component';
import { SignInPageComponent } from './pages/general/sign-in-page/sign-in-page.component';
import { TermsPageComponent } from './pages/general/terms-page/terms-page.component';
import { HowItWorksPageComponent } from './pages/sales/how-it-works-page/how-it-works-page.component';
import { SalesOutsourcingPageComponent } from './pages/sales/sales-outsourcing-page/sales-outsourcing-page.component';
import { FooterPartComponent } from './parts/footer-part/footer-part.component';
import { HeaderPartComponent } from './parts/header-part/header-part.component';
import { MenuItemsComponent } from './parts/menu-items/menu-items.component';
import { CoverConsultationSectionComponent } from './sections/consulting/cover-consultation-section/cover-consultation-section.component';
import { FieldReasonsSectionComponent } from './sections/consulting/field-reasons-section/field-reasons-section.component';
import { ServicesConsultingSectionComponent } from './sections/consulting/services-consulting-section/services-consulting-section.component';
import { SpecializationSectionComponent } from './sections/consulting/specialization-section/specialization-section.component';
import { CoverExpansionSectionComponent } from './sections/expansion/cover-expansion-section/cover-expansion-section.component';
import { AboutUsSectionComponent } from './sections/general/about-us-section/about-us-section.component';
import { BlogPostsSectionComponent } from './sections/general/blog-posts-section/blog-posts-section.component';
import { ContactUsSectionComponent } from './sections/general/contact-us-section/contact-us-section.component';
import { ForDealersSectionComponent } from './sections/general/for-dealers-section/for-dealers-section.component';
import { PageNotFoundComponent } from './sections/general/page-not-found/page-not-found.component';
import { CoverSalesOutsourcingSectionComponent } from './sections/sales/cover-sales-outsourcing-section/cover-sales-outsourcing-section.component';
import { FaqSectionComponent } from './sections/sales/faq-section/faq-section.component';
import { PricelistSectionComponent } from './sections/sales/pricelist-section/pricelist-section.component';
import { ServicesSectionComponent } from './sections/sales/services-section/services-section.component';
import { ServicesStepsSectionComponent } from './sections/sales/services-steps-section/services-steps-section.component';
import { TranslateWrapperService } from './services/translate-wrapper.service';
import { FieldLogosComponent } from './components/field-logos/field-logos.component';
import { CoverTitleComponent } from './components/cover-title/cover-title.component';
import { FieldDetailComponent } from './components/field-detail/field-detail.component';
import { OtherFieldsComponent } from './components/other-fields/other-fields.component';
import { FieldIntroComponent } from './components/field-intro/field-intro.component';
import { SolutionsLogosListComponent } from './components/solutions-logos-list/solutions-logos-list.component';

// https://netbasal.com/strategies-for-cache-busting-translation-files-in-angular-86143ee14c3c
declare const VERSION: string;

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/locales/', `.json?v=${VERSION}`);
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
    CoverConsultationSectionComponent,
    BlogPostsSectionComponent,
    BlogPageComponent,
    CodeOfEthicsPageComponent,
    ExpansionPageComponent,
    HomePageComponent,
    SignInPageComponent,
    PricelistSectionComponent,
    HeaderPartComponent,
    CareerPageComponent,
    FooterPartComponent,
    CoverExpansionSectionComponent,
    MenuItemsComponent,
    SpecializationSectionComponent,
    GastroFieldPageComponent,
    EcommerceFieldPageComponent,
    HowItWorksPageComponent,
    ScheduleCallBtnComponent,
    FieldReasonsSectionComponent,
    SalesUniversityBannerComponent,
    NotFoundPageComponent,
    PageNotFoundComponent,
    TermsPageComponent,
    SalesOutsourcingPageComponent,
    CoverSalesOutsourcingSectionComponent,
    BlogListPageComponent,
    TagComponent,
    TagListComponent,
    CoverComponent,
    PartnershipPageComponent,
    ContactPageComponent,
    ServicesConsultingSectionComponent,
    ManufacturingAndIndustryPageComponent,
    SalespeopleAndConsultantsPageComponent,
    ScrollDownBtnComponent,
    CardComponent,
    FieldLogosComponent,
    CoverTitleComponent,
    FieldDetailComponent,
    OtherFieldsComponent,
    FieldIntroComponent,
    SolutionsLogosListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    NgxSpinnerModule,
    LocalizeRouterModule,
    TooltipModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ShareButtonsModule,
    ShareIconsModule,
    JsonLdModule,
    MatSnackBarModule
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
