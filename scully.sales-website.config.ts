import { getSitemapPlugin } from '@gammastream/scully-plugin-sitemap';
import { registerNgxTranslateRouter } from '@gilsdav/ngx-translate-router-scully-plugin';
import { ScullyConfig, setPluginConfig } from '@scullyio/scully';

const SitemapPlugin = getSitemapPlugin();
setPluginConfig(SitemapPlugin, {
  urlPrefix: 'https://cotema.com',
  sitemapFilename: 'sitemap.xml',
  changeFreq: 'monthly',
  ignoredRoutes: ['/404']
});

registerNgxTranslateRouter({
  langs: {
    en: './src/assets/locales/en.json',
    cz: './src/assets/locales/cz.json'
  }
});

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'sales-website',
  outDir: './dist/static',
  routes: {
    '/cz/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog/cz'
      }
    }
  }
};
