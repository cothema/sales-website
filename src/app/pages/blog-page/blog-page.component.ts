import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faTag } from '@fortawesome/free-solid-svg-icons/faTag';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { AuthorRepositoryService } from '../../repository/author-repository.service';
import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class BlogPageComponent implements OnInit, OnDestroy {
  public article$: Observable<ScullyRoute> = this.scully.getCurrent();
  public article;
  public author;
  faLinkedinIn = faLinkedinIn;
  faTag = faTag;
  faEnvelope = faEnvelope;

  constructor(
    public seo: SeoService,
    private scully: ScullyRoutesService,
    authorRepositoryService: AuthorRepositoryService
  ) {
    this.article$.subscribe((article) => {
      this.article = article;
      if (article?.author) {
        this.author = authorRepositoryService.authors.find(author => author.abbrev === article.author);
      } else {
        this.author = undefined;
      }
      this.solveSeo();
    });
  }

  ngOnInit() {
    this.solveSeo();
  }

  ngOnDestroy(): void {
    this.seo.setDefault();
  }

  encodeURIComponent(title: string): string {
    return encodeURIComponent(title);
  }

  private solveSeo() {
    this.seo.setData({
      title: this.article.title,
      image: this.seo.baseUrl + this.article.image,
      description: this.article.description,
      keywords: this.article.keywords
    });
  }
}
