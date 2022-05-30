import {Injectable} from '@angular/core';
import {AbstractRepositoryService} from '../abstract-repository.service';
import {AuthorModel} from './author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorRepositoryService extends AbstractRepositoryService<AuthorModel> {

  constructor() {
    super();
    this.items = [];
  }

}
