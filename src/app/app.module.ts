import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { ScullyLibModule } from "@scullyio/ng-lib";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ExpansionComponent } from "./pages/expansion/expansion.component";
import { HomeComponent } from "./pages/home/home.component";
import { ContactUsComponent } from './part/contact-us/contact-us.component';
import { AboutUsComponent } from './part/about-us/about-us.component';
import { ServicesComponent } from './part/services/services.component';
import { ServicesStepsComponent } from './part/services-steps/services-steps.component';
import { ForDealersComponent } from './part/for-dealers/for-dealers.component';
import { FaqComponent } from './part/faq/faq.component';
import { CoverOutsourcingComponent } from './part/cover-outsourcing/cover-outsourcing.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExpansionComponent,
    ContactUsComponent,
    AboutUsComponent,
    ServicesComponent,
    ServicesStepsComponent,
    ForDealersComponent,
    FaqComponent,
    CoverOutsourcingComponent
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
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
