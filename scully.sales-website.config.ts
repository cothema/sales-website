import { getHttp404Plugin } from '@gammastream/scully-plugin-http404';
import { getSitemapPlugin } from '@gammastream/scully-plugin-sitemap';
import { registerNgxTranslateRouter } from '@gilsdav/ngx-translate-router-scully-plugin';
import { ScullyConfig, setPluginConfig } from '@scullyio/scully';

const Http404Plugin = getHttp404Plugin();

const SitemapPlugin = getSitemapPlugin();
setPluginConfig(SitemapPlugin, {
  urlPrefix: 'https://cothema.com',
  sitemapFilename: 'sitemap.xml',
  changeFreq: 'monthly',
  ignoredRoutes: ['/404']
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
        folder: './blog'
      }
    }
  }
};
