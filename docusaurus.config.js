// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "geo-spatial.org",
  tagline: "An elegant place for sharing geoKnowledge & geoData",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  //url: "https://geospatialorg.github.io",
  url: "https://geo-spatial.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/nou/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "geo-spatial.org", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-68DEKWGBTM",
        anonymizeIP: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "geo-spatial.org",
        logo: {
          alt: "Logo geo-spatial.org",
          src: "img/logo-geo-spatialorg.svg",
        },
        items: [
          //  {
          //    type: "docSidebar",
          //    sidebarId: "tutorialSidebar",
          //    position: "left",
          //    label: "Tutoriale",
          //  },
          { to: "/blog/tags/articole", label: "Articole", position: "left" },
          { to: "/blog/tags/tutoriale", label: "Tutoriale", position: "left" },
          { to: "/blog/tags/evenimente", label: "Evenimente", position: "left" },
          //{ to: "/tutoriale", label: "Tutoriale", position: "left" },
          {
            href: "https://github.com/geospatialorg/geospatialorg.github.io",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Comunitatea",
            items: [
              {
                label: "Lista de discuții",
                href: "https://groups.io/g/geo-spatial",
              },
              {
                label: "Canal Slack",
                href: "https://geospatialorg-1.slack.com/join/shared_invite/zt-cle5seo4-u9Bbr_mSV8R_BiROSGWr2A",
              },
              {
                label: "YouTube",
                href: "https://www.facebook.com/geospatialorg",
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/geospatialorg",
              },
            ],
          },
          {
            title: "Proiect",
            items: [
              {
                label: "Despre",
                to: "/despre",
              },
              {
                label: "Situl vechi",
                href: "https://geo-spatial.org/vechi/",
              },
              {
                label: "Redirecționare 3.5%",
                href: "/redirectionare-impozit",
              },
              {
                label: "Privacy",
                href: "/privacy",
              },
            ],
          },
        ],
        copyright: `Copyright © 2006 - 2025 geo-spatial.org și autorii. CC BY-SA 4.0`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
