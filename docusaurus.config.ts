import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import dotenv from "dotenv";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

dotenv.config({ path: ".env.local" }); // by default, Docusaurus loads .env file in the root directory
const DEPLOY_URL = process.env.DEPLOY_URL || "https://info.pavethechange.org";

const config: Config = {
  title: "PaveTheChange.org",
  tagline: "Million Dreams",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improves compatibility with the upcoming Docusaurus v4
  },

  url: DEPLOY_URL,
  baseUrl: "/",

  // GitHub pages deployment config.
  organizationName: "PaveTheChange",
  projectName: "hub",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/PaveTheChange/hub/tree/open-drafts/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: "https://github.com/PaveTheChange/hub/tree/open-drafts/",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        hashed: true,
        language: ["en"],
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: "/",
      },
    ],
  ],
  themeConfig: {
    image: "img/ptc-social-card.jpg",
    navbar: {
      title: "PaveTheChange.org",
      logo: {
        alt: "PaveTheChange.org Logo",
        src: "img/logo.png",
      },
      items: [
        // {
        //   type: "docSidebar",
        //   sidebarId: "channelsSidebar",
        //   position: "left",
        //   label: "Channels",
        // },
        // {
        //   type: "docSidebar",
        //   sidebarId: "circlesSidebar",
        //   position: "left",
        //   label: "Circles",
        // },
        // { to: "/blog", label: "Blog", position: "right" },
        // { type: "search", position: "right" },
        // {
        //   href: "https://github.com/PaveTheChange/hub",
        //   label: "GitHub",
        //   position: "right",
        // },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          label: `Built with ❤️ by PaveTheChange.org`,
          to: "/",
        },
        {
          label: `©${new Date().getFullYear()} CC BY-NC 4.0`,
          to: "https://creativecommons.org/licenses/by-nc/4.0/",
        },
        {
          label: "Privacy",
          to: "/privacy",
        },
        {
          label: "Terms",
          to: "/terms",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
