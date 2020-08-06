import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-blog-posts-section',
  templateUrl: './blog-posts-section.component.html',
  styleUrls: ['./blog-posts-section.component.scss']
})
export class BlogPostsSectionComponent implements OnInit, OnChanges {
  posts;
  @Input('exclude') exclude: string[] = []; // routes to articles to exclude

  constructor(
    private scully: ScullyRoutesService,
    private translateService: TranslateService
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.loadContent();
  }

  async ngOnChanges(): Promise<void> {
    this.loadContent();
  }

  private async loadContent(): Promise<void> {
    let allRoutes = await this.getAllRoutes();
    this.posts = allRoutes.filter((route) => {
      return route.published && route.lang === this.translateService.currentLang && !this.exclude.includes(route.route);
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
