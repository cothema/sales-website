import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faTag } from '@fortawesome/free-solid-svg-icons/faTag';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthorRepositoryService } from '../../../repository/author/author-repository.service';
import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class BlogPageComponent implements OnInit, OnDestroy {
  article$: Observable<ScullyRoute> = this.scully.getCurrent();
  article;
  articleFound: boolean = true;
  author;
  faLinkedinIn = faLinkedinIn;
  faTag = faTag;
  faEnvelope = faEnvelope;
  faCalendar = faCalendar;

  constructor(
    public seo: SeoService,
    private scully: ScullyRoutesService,
    private authorRepositoryService: AuthorRepositoryService
  ) {
  }

  async ngOnInit() {
    this.article$.subscribe((article) => {
      this.article = article;
      this.refreshContent();
    });
    await this.article$.pipe(take(1)).toPromise();
  }

  ngOnDestroy(): void {
    this.seo.setDefault();
  }

  encodeURIComponent(title: string): string {
    return encodeURIComponent(title);
  }

  private async refreshContent() {
    this.articleFound = !!this.article;

    if (this.article?.author) {
      let authors = await this.authorRepositoryService.getAll();
      this.author = authors.find(author => author.abbrev === this.article.author);
    } else {
      this.author = undefined;
    }

    this.solveSeo();
  }

  private solveSeo() {
    this.seo.setData({
      title: this.article?.title,
      image: this.article ? (this.seo.baseUrl + this.article.image) : undefined,
      description: this.article?.description,
      keywords: this.article?.keywords
    });
  }
}
