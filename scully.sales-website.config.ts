import { getSitemapPlugin } from "@gammastream/scully-plugin-sitemap";
import { ScullyConfig, setPluginConfig } from "@scullyio/scully";

const SitemapPlugin = getSitemapPlugin();
setPluginConfig(SitemapPlugin, {
  urlPrefix: "https://cotema.com",
  sitemapFilename: "sitemap.xml",
  changeFreq: "monthly",
  ignoredRoutes: ["/404"]
});

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "sales-website",
  outDir: "./dist/static",
  routes: {
    "/cz/blog/:slug": {
      type: "contentFolder",
      slug: {
        folder: "./blog/cz"
      }
    },
  }
};