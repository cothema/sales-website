import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-blog-posts-section',
  templateUrl: './blog-posts-section.component.html',
  styleUrls: ['./blog-posts-section.component.scss']
})
export class BlogPostsSectionComponent implements OnInit, OnChanges {
  posts: any[] = [];
  @Input() exclude: string[] = []; // routes to articles to exclude
  @Input() limit: number;
  @Input() showAllBtn: boolean = true;
  @Input() showBlank: boolean = true;

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
    if (this.limit) {
      this.posts.slice(0, this.limit);
    }
  }

  private async getAllRoutes(): Promise<ScullyRoute[]> {
    return new Promise((resolve) => {
      this.scully.available$.subscribe((routes) => {
        return resolve(routes);
      });
    });
  }
}
