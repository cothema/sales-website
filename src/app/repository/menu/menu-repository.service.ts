import { Injectable } from '@angular/core';
import { AbstractRepositoryService } from '../abstract-repository.service';
import { FieldRepositoryService } from '../field/field-repository.service';
import { MenuItemModel } from './menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuRepositoryService extends AbstractRepositoryService<MenuItemModel> {

  constructor(
    private fieldRepositoryService: FieldRepositoryService
  ) {
    super();
  }

  async getAll(): Promise<MenuItemModel[]> {
    return [
      {
        link: '/',
        fragment: 'services-section',
        title: 'menu.services',
        children: [
          {
            link: '/',
            title: 'menu.innovationConsultation',
            children: await this.getFieldItems()
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
        link: '/sales-outsourcing',
        fragment: 'about-section',
        title: 'menu.aboutUs',
        children: [
          {
            link: '/blog',
            title: 'menu.blog'
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

  private async getFieldItems(): Promise<MenuItemModel[]> {
    const fields = await this.fieldRepositoryService.getAll();

    return fields.map(x => {
      return {
        link: '/field/' + x.urlAlias,
        title: x.title_
      };
    });
  }
}
