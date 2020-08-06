import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorRepositoryService {

  authors = [
    {
      abbrev: 'mh',
      fullName: 'Miloš Havlíček',
      position: 'Founder, Cothema s.r.o.',
      img: 'mh.jpg',
      linkedIn: 'https://www.linkedin.com/in/miloshavlicek/',
      email: 'havlicek@cothema.com'
    }
  ];

  constructor() {
  }

}
