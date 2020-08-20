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
        color: '#333333'
      },
      {
        id: 'ecommerce',
        urlAlias: 'ecommerce',
        title_: 'section.specialization.ecommerce.h',
        description_: 'section.specialization.ecommerce.p1',
        icon: faShoppingCart,
        tags: ['consulting', 'innovations'],
        color: '#007bff',
        partners: [
          {
            title: 'The Pay',
            img: '/assets/logos/ecommerce/the-pay.png',
            imgHeight: 70,
            link: 'https://www.thepay.cz'
          },
          {
            title: 'Notifikuj.cz',
            img: '/assets/logos/ecommerce/notifikuj_cz.png',
            imgHeight: 80,
            link: 'https://notifikuj.cz/?utm_source=cothema&utm_medium=web&utm_campaign=content&a_box=rxhnkctt&a_cha=havlicek'
          },
          {
            title: 'SmartEmailing',
            img: '/assets/logos/ecommerce/smartemailing.png',
            imgHeight: 80,
            link: 'https://smartemailing.cz/zdarma?affiliateId=y8x9k'
          },
          {
            title: 'Caflou',
            img: '/assets/logos/digi/caflou.svg',
            imgHeight: 60,
            link: 'https://www.caflou.cz/a/d693f2'
          },
          {
            title: 'Integromat',
            img: '/assets/logos/digi/integromat.png',
            imgHeight: 80,
            link: 'https://www.integromat.com/?pc=cothema'
          }
        ]
      },
      {
        id: 'salespeopleAndConsultants',
        urlAlias: 'salespeople-and-consultants',
        title_: 'section.specialization.salespeopleAndConsultants.h',
        description_: 'section.specialization.salespeopleAndConsultants.p1',
        icon: faSuitcase,
        tags: ['consulting', 'innovations'],
        color: '#d85d06'
      },
      {
        id: 'gastro',
        urlAlias: 'gastro',
        title_: 'section.specialization.gastro.h',
        description_: 'section.specialization.gastro.p1',
        icon: faUtensils,
        tags: ['consulting', 'innovations'],
        color: '#23863a'
      }
    ];
  }

  async getById(id: string): Promise<FieldModel> {
    return (await this.getAll()).find(item => item.id === id);
  }
}
