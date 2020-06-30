import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ScullyRoute, ScullyRoutesService } from "@scullyio/ng-lib";

@Component({
  selector: "app-blog-posts",
  templateUrl: "./blog-posts.component.html",
  styleUrls: ["./blog-posts.component.scss"]
})
export class BlogPostsComponent implements OnInit {

  posts;

  constructor(
    private scully: ScullyRoutesService,
    private translateService: TranslateService
  ) {
  }

  async ngOnInit(): Promise<void> {
    let allRoutes = await this.getAllRoutes();
    this.posts = allRoutes.filter((route) => {
      return route.published /* && route.lang === this.translateService.currentLang */
    });
  }

  private async getAllRoutes(): Promise<ScullyRoute[]> {
    return new Promise((resolve) => {
      this.scully.available$.subscribe(routes => {
        return resolve(routes);
      });
    });
  }

}
