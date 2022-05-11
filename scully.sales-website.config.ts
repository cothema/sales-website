import { getHttp404Plugin } from '@gammastream/scully-plugin-http404';
import { getSitemapPlugin } from '@gammastream/scully-plugin-sitemap';
import { registerNgxTranslateRouter } from '@gilsdav/ngx-translate-router-scully-plugin';
import { ScullyConfig, setPluginConfig } from '@scullyio/scully';

const Http404Plugin = getHttp404Plugin();

const SitemapPlugin = getSitemapPlugin();

// @see https://www.v9digital.com/insights/sitemap-xml-why-changefreq-priority-are-important/
setPluginConfig(SitemapPlugin, {
  urlPrefix: 'https://cothema.com',
  sitemapFilename: 'sitemap.xml',
  merge: false,
  trailingSlash: false,
  changeFreq: 'weekly',
  priority: '1.0',
  ignoredRoutes: [
    '/404',
    '/en/field',
    '/cz/obor',
    '/sk/obor'
  ],
  routes: {
    '/en/terms-and-conditions': {
      changeFreq: 'monthly',
      priority: '0.4',
      merge: true
    },
    '/cz/obchodni-podminky': {
      changeFreq: 'monthly',
      priority: '0.4',
      merge: true
    },
    '/sk/obchodne-podmienky': {
      changeFreq: 'monthly',
      priority: '0.4',
      merge: true
    },
  }
});

registerNgxTranslateRouter({
  langs: {
    en: './src/assets/locales/en.json',
    cz: './src/assets/locales/cz.json',
    sk: './src/assets/locales/sk.json'
  }
});

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'sales-website',
  outDir: './dist/static',
  defaultPostRenderers: [Http404Plugin],
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog/public'
      }
    }
  }
};
