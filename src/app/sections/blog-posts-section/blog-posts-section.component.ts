import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-blog-posts-section',
  templateUrl: './blog-posts-section.component.html',
  styleUrls: ['./blog-posts-section.component.scss']
})
export class BlogPostsSectionComponent implements OnInit {
  posts;

  constructor(
    private scully: ScullyRoutesService,
    private translateService: TranslateService
  ) {
  }

  async ngOnInit(): Promise<void> {
    let allRoutes = await this.getAllRoutes();
    this.posts = allRoutes.filter((route) => {
      return route.published && route.lang === this.translateService.currentLang;
    });
  }

  private async getAllRoutes(): Promise<ScullyRoute[]> {
    return new Promise((resolve) => {
      this.scully.available$.subscribe((routes) => {
        return resolve(routes);
      });
    });
  }
}
