import { Injectable } from '@angular/core';
import { faIndustry } from '@fortawesome/free-solid-svg-icons/faIndustry';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons/faSuitcase';
import { faUtensils } from '@fortawesome/free-solid-svg-icons/faUtensils';
import { AbstractRepositoryService } from '../abstract-repository.service';
import { FieldModel } from './field.model';

@Injectable({
  providedIn: 'root'
})
export class FieldRepositoryService extends AbstractRepositoryService<FieldModel> {

  constructor() {
    super();
    this.items = [
      {
        id: 'manufacturingAndIndustry',
        urlAlias: 'manufacturing-and-industry',
        title_: 'section.specialization.manufacturingAndIndustry.h',
        description_: 'section.specialization.manufacturingAndIndustry.p1',
        icon: faIndustry,
        tags: ['consulting', 'innovations'],
        color: '#333333',
        image: '/assets/photos/field/industry.jpg',
        imageCaption: 'Photo by <a href="https://unsplash.com/@rozetsky?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Ant Rozetsky</a> on <a href="https://unsplash.com/s/photos/industry?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>',
        partners: []
      },
      {
        id: 'ecommerce',
        urlAlias: 'ecommerce',
        title_: 'section.specialization.ecommerce.h',
        description_: 'section.specialization.ecommerce.p1',
        icon: faShoppingCart,
        tags: ['consulting', 'innovations'],
        color: '#007bff',
        image: '/assets/photos/field/eshop.jpg',
        imageCaption: 'Photo by <a href="https://unsplash.com/@olloweb?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Agence Olloweb</a> on <a href="https://unsplash.com/s/photos/website?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>',
        partners: []
      },
      {
        id: 'salespeopleAndConsultants',
        urlAlias: 'salespeople-and-consultants',
        title_: 'section.specialization.salespeopleAndConsultants.h',
        description_: 'section.specialization.salespeopleAndConsultants.p1',
        icon: faSuitcase,
        tags: ['consulting', 'innovations'],
        color: '#d85d06',
        image: '/assets/photos/field/sales.jpg',
        imageCaption: 'Photo by <a href="https://unsplash.com/@linkedinsalesnavigator?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">LinkedIn Sales Navigator</a> on <a href="https://unsplash.com/s/photos/salespeople?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>',
        partners: []
      },
      {
        id: 'gastro',
        urlAlias: 'gastro',
        title_: 'section.specialization.gastro.h',
        description_: 'section.specialization.gastro.p1',
        icon: faUtensils,
        tags: ['consulting', 'innovations'],
        color: '#23863a',
        image: '/assets/photos/field/gastro.jpg',
        imageCaption: 'Photo by <a href="https://unsplash.com/@jaywennington?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jay Wennington</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>',
        partners: []
      }
    ];
  }

  async getById(id: string): Promise<FieldModel> {
    return (await this.getAll()).find(item => item.id === id);
  }
}
