import { Injectable } from '@angular/core';

export interface MenuItem {
  link: string,
  fragment?: string,
  title: string,
  isExternal?: boolean,
  children?: MenuItem[]
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  items: MenuItem[] = [];

  constructor() {
    this.initItems();
  }

  private initItems() {
    this.items = [
      {
        link: '/',
        fragment: 'home-section',
        title: 'menu.home'
      },
      {
        link: '/',
        fragment: 'services-section',
        title: 'menu.services',
        children: [
          {
            link: '/',
            fragment: 'specialization-section',
            title: 'menu.specialization',
            children: [
              {
                link: '/field/gastro',
                title: 'section.specialization.gastro.h'
              },
              {
                link: '/field/ecommerce',
                title: 'section.specialization.ecommerce.h'
              }
            ]
          },
          {
            link: '/expansion',
            title: 'menu.expansionCZ'
          },
          {
            link: '/how-it-works',
            fragment: 'pricelist-section',
            title: 'menu.priceList'
          }
        ]
      },
      {
        link: '/',
        fragment: 'about-section',
        title: 'menu.aboutUs',
        children: [
          {
            link: '/how-it-works',
            title: 'menu.howItWorks'
          },
          {
            link: '/for-dealers',
            title: 'menu.forDealers'
          },
          {
            link: '/code-of-ethics',
            title: 'menu.codeOfEthics'
          },
          {
            link: '/',
            fragment: 'blog-section',
            title: 'menu.blog'
          }
        ]
      },
      {
        link: '/',
        fragment: 'contact-section',
        title: 'menu.contact',
        children: [
          {
            link: '/',
            title: 'menu.faq',
            fragment: 'faq-section'
          },
          {
            link: 'https://forms.gle/ee4Sf7qhWj3FqzoX8',
            title: 'menu.questionnaire',
            isExternal: true
          }
        ]
      }
    ];
  }

}
