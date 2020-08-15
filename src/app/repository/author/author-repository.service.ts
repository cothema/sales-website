import { Injectable } from '@angular/core';
import { AbstractRepositoryService } from '../abstract-repository.service';
import { AuthorModel } from './author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorRepositoryService extends AbstractRepositoryService<AuthorModel> {

  constructor() {
    super();
    this.items = [
      {
        abbrev: 'mh',
        fullName: 'Miloš Havlíček',
        position: 'Founder, Cothema s.r.o.',
        img: 'mh.jpg',
        linkedIn: 'https://www.linkedin.com/in/miloshavlicek/',
        email: 'havlicek@cothema.com'
      }
    ];
  }

}
