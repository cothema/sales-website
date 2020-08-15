import { Injectable } from '@angular/core';
import { AbstractRepositoryService } from '../abstract-repository.service';
import { MenuItemModel } from './menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuRepositoryService extends AbstractRepositoryService<MenuItemModel> {

  constructor() {
    super();
    this.items = [
      {
        link: '/',
        fragment: 'services-section',
        title: 'menu.services',
        children: [
          {
            link: '/',
            title: 'menu.innovationConsultation',
            children: [
              {
                link: '/field/manufacturing-and-industry',
                title: 'section.specialization.manufacturingAndIndustry.h'
              },
              {
                link: '/field/ecommerce',
                title: 'section.specialization.ecommerce.h'
              },
              {
                link: '/field/salespeople-and-consultants',
                title: 'section.specialization.salespeopleAndConsultants.h'
              },
              {
                link: '/field/gastro',
                title: 'section.specialization.gastro.h'
              }
            ]
          },
          {
            link: '/sales-outsourcing',
            title: 'menu.salesOutsourcing',
            children: [
              {
                link: '/how-it-works',
                title: 'menu.howItWorks'
              },
              {
                link: '/how-it-works',
                fragment: 'pricelist-section',
                title: 'menu.priceList'
              },
              {
                link: '/sales-outsourcing',
                title: 'menu.faq',
                fragment: 'faq-section'
              },
              {
                link: 'https://forms.gle/ee4Sf7qhWj3FqzoX8',
                title: 'menu.questionnaire',
                isExternal: true
              }
            ]
          },
          {
            link: '/expansion',
            title: 'menu.expansionCZ'
          }
        ]
      },
      {
        link: '/',
        fragment: 'about-section',
        title: 'menu.aboutUs',
        children: [
          {
            link: '/blog',
            title: 'menu.blog'
          },
          {
            link: '/code-of-ethics',
            title: 'menu.codeOfEthics'
          }
        ]
      },
      {
        link: '/contact',
        title: 'menu.contact',
        children: [
          {
            link: '/partnership',
            title: 'menu.partnership'
          }
        ]
      },
      {
        link: '/career',
        title: 'menu.career'
      }
    ];
  }
}
