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
        partners: [
          {
            title: 'ProcurementFlow',
            img: '/assets/logos/industry/procurementflow.svg',
            imgHeight: 70,
            link: 'https://www.procurementflow.com/'
          },
          {
            title: 'EASY FM (Facility management)',
            img: '/assets/logos/industry/easyfm.png',
            imgHeight: 80,
            link: 'https://easyfm.cz/'
          },
          {
            title: 'iSmlouva',
            img: '/assets/logos/digi/ismlouva.svg',
            imgHeight: 80,
            link: 'https://app.ismlouva.cz/register/?code=cothema'
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
        id: 'ecommerce',
        urlAlias: 'ecommerce',
        title_: 'section.specialization.ecommerce.h',
        description_: 'section.specialization.ecommerce.p1',
        icon: faShoppingCart,
        tags: ['consulting', 'innovations'],
        color: '#007bff',
        image: '/assets/photos/field/eshop.jpg',
        imageCaption: 'Photo by <a href="https://unsplash.com/@olloweb?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Agence Olloweb</a> on <a href="https://unsplash.com/s/photos/website?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>',
        partners: [
          {
            title: 'SupportBox',
            img: '/assets/logos/ecommerce/supportbox.png',
            imgHeight: 60,
            link: 'http://supportbox.cz/?a_box=6tupvjt4'
          },
          {
            title: 'Notifikuj.cz',
            img: '/assets/logos/ecommerce/notifikuj_cz.png',
            imgHeight: 80,
            link: 'https://notifikuj.cz/?utm_source=cothema&utm_medium=web&utm_campaign=content&a_box=rxhnkctt'
          },
          {
            title: 'The Pay',
            img: '/assets/logos/ecommerce/the-pay.png',
            imgHeight: 70,
            link: 'https://www.thepay.cz'
          },
          {
            title: 'zaslat.cz',
            img: '/assets/logos/ecommerce/zaslat.png',
            imgHeight: 60,
            link: 'https://www.zaslat.cz?a_box=db5yen2m'
          },
          {
            title: 'iSmlouva',
            img: '/assets/logos/digi/ismlouva.svg',
            imgHeight: 80,
            link: 'https://app.ismlouva.cz/register/?code=cothema'
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
        color: '#d85d06',
        image: '/assets/photos/field/sales.jpg',
        imageCaption: 'Photo by <a href="https://unsplash.com/@linkedinsalesnavigator?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">LinkedIn Sales Navigator</a> on <a href="https://unsplash.com/s/photos/salespeople?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>',
        partners: [
          {
            title: 'Pipedrive',
            img: '/assets/logos/digi/pipedrive.svg',
            imgHeight: 60,
            link: 'https://app.pipedrive.com/affiliate/pdp-COTHEMA?utm_content=copy_text&utm_medium=partners_program&utm_source=Cothema%20s.r.o.&utm_term=pdp-COTHEMA'
          },
          {
            title: 'iSmlouva',
            img: '/assets/logos/digi/ismlouva.svg',
            imgHeight: 80,
            link: 'https://app.ismlouva.cz/register/?code=cothema'
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
        id: 'gastro',
        urlAlias: 'gastro',
        title_: 'section.specialization.gastro.h',
        description_: 'section.specialization.gastro.p1',
        icon: faUtensils,
        tags: ['consulting', 'innovations'],
        color: '#23863a',
        image: '/assets/photos/field/gastro.jpg',
        imageCaption: 'Photo by <a href="https://unsplash.com/@jaywennington?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jay Wennington</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>',
        partners: [
          {
            title: 'SmartEmailing',
            img: '/assets/logos/ecommerce/smartemailing.png',
            imgHeight: 80,
            link: 'https://smartemailing.cz/zdarma?affiliateId=y8x9k'
          },
          {
            title: 'Integromat',
            img: '/assets/logos/digi/integromat.png',
            imgHeight: 80,
            link: 'https://www.integromat.com/?pc=cothema'
          },
          {
            title: 'iSmlouva',
            img: '/assets/logos/digi/ismlouva.svg',
            imgHeight: 80,
            link: 'https://app.ismlouva.cz/register/?code=cothema'
          }
        ]
      }
    ];
  }

  async getById(id: string): Promise<FieldModel> {
    return (await this.getAll()).find(item => item.id === id);
  }
}
