import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { ScullyLibModule } from "@scullyio/ng-lib";
import { NgxPageScrollModule } from "ngx-page-scroll";
import { NgxPageScrollCoreModule } from "ngx-page-scroll-core";
import { environment } from "../environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { CodeOfEthicsComponent } from "./pages/code-of-ethics/code-of-ethics.component";
import { ExpansionComponent } from "./pages/expansion/expansion.component";
import { HomeComponent } from "./pages/home/home.component";
import { SignInComponent } from "./pages/sign-in/sign-in.component";
import { AboutUsComponent } from "./part/about-us/about-us.component";
import { BlogPostsComponent } from "./part/blog-posts/blog-posts.component";
import { ContactUsComponent } from "./part/contact-us/contact-us.component";
import { CoverOutsourcingComponent } from "./part/cover-outsourcing/cover-outsourcing.component";
import { FaqComponent } from "./part/faq/faq.component";
import { ForDealersComponent } from "./part/for-dealers/for-dealers.component";
import { HeaderComponent } from "./part/header/header.component";
import { ServicesStepsComponent } from "./part/services-steps/services-steps.component";
import { ServicesComponent } from "./part/services/services.component";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    AboutUsComponent,
    ServicesComponent,
    ServicesStepsComponent,
    ForDealersComponent,
    FaqComponent,
    CoverOutsourcingComponent,
    BlogPostsComponent,
    HeaderComponent,
    BlogComponent,
    CodeOfEthicsComponent,
    ExpansionComponent,
    HomeComponent,
    SignInComponent
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
