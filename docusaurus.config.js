// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "geo-spatial.org",
  tagline: "An elegant place for sharing geoKnowledge & geoData",
  favicon: "img/favicon.ico",

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "warn", // mutat aici conform Docusaurus v4+
    },
  },

  themes: ["@docusaurus/theme-mermaid"],

  url: "https://geo-spatial.org",
  baseUrl: "/",

  organizationName: "Asociația geo-spatial.org",
  projectName: "geo-spatial.org",

  onBrokenLinks: "throw", // rămâne aici

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.js",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
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
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "ghiduri",
        path: "ghiduri",
        routeBasePath: "ghiduri",
        sidebarPath: require.resolve("./sidebarsGhiduri.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "descarcare",
        path: "descarcare",
        routeBasePath: "descarcare",
        sidebarPath: require.resolve("./sidebarsDescarcare.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "noutati",
        routeBasePath: "noutati",
        path: "./noutati",
        blogTitle: "Noutăți",
        blogDescription: "Articole de tip știri și comunicate",
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "cunostinte",
        routeBasePath: "cunostinte",
        path: "./cunostinte",
        blogTitle: "Cunoștințe",
        blogDescription: "Articole de tip tutoriale și articole tehnice",
      },
    ],
  ],

  themeConfig: {
    image: "img/geo-spatialorg-social-card.jpg",
    metadata: [
      { name: "description", content: "An elegant place for sharing geoKnowledge & geoData" },
      {
        name: "keywords",
        content: "geo-spatial.org, GIS, teledetecție, date geospațiale, open data, cartografie, FOSS4G, OSGeo, seminarele geo-spatial.org",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "geo-spatial.org" },
      { property: "og:title", content: "An elegant place for sharing geoKnowledge & geoData" },
      {
        property: "og:description",
        content: "Comunitate care promovează soluții geospațiale open-source și acces liber la date geografice.",
      },
      { property: "og:image", content: "https://geo-spatial.org/img/geo-spatialorg-social-card.jpg" },
      { property: "og:url", content: "https://geo-spatial.org" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "An elegant place for sharing geoKnowledge & geoData" },
      {
        name: "twitter:description",
        content: "geo-spatial.org este o comunitate ce promovează soluții software geospațiale open source.",
      },
      { name: "twitter:image", content: "https://geo-spatial.org/img/geo-spatialorg-social-card.jpg" },
      { name: "twitter:site", content: "@geospatialorg" },

      { name: "discord:image", content: "https://geo-spatial.org/img/geo-spatialorg-social-card.jpg" },
      { name: "slack-app-id", content: "geo-spatial.org" },
    ],
    navbar: {
      title: "geo-spatial.org",
      logo: {
        alt: "Logo geo-spatial.org",
        src: "img/logo-geo-spatialorg.svg",
      },
      items: [
        {
          label: "Cunoștințe",
          position: "left",
          items: [
            { to: "/cunostinte/tags/articole", label: "Articole" },
            { to: "/cunostinte/tags/tutoriale", label: "Tutoriale" },
            { to: "/ghiduri", label: "Ghiduri" },
          ],
        },
        {
          label: "Date",
          position: "left",
          items: [
            { to: "https://services.geo-spatial.org/geonetwork/srv/eng/catalog.search#/search", label: "Catalog interactiv" },
            { to: "/descarcare", label: "Descarcare directă" },
          ],
        },
        {
          label: "Hărți",
          position: "left",
          items: [
            { to: "https://services.geo-spatial.org/maps/#/", label: "Hărți interactive" },
            { to: "https://geo-spatial.org/harti/#/", label: "Hărți interactive (versiunea veche)" },
          ],
        },
        { to: "/noutati/tags/noutati", label: "Noutăți", position: "left" },
        { to: "/noutati/tags/evenimente", label: "Evenimente", position: "left" },
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
          title: "Resurse",
          items: [
            { label: "GitHub", href: "https://github.com/geospatialorg" },
            { label: "YouTube", href: "https://www.youtube.com/@TheGeospatial" },
            { label: "Feed RSS", to: "https://geo-spatial.org/noutati/rss.xml" },
          ],
        },
        {
          title: "Comunicare",
          items: [
            { label: "Lista de discuții", href: "https://groups.io/g/geo-spatial" },
            { label: "Canal Slack", href: "https://geospatialorg-1.slack.com/join/shared_invite/zt-cle5seo4-u9Bbr_mSV8R_BiROSGWr2A" },
          ],
        },
        {
          title: "Social media",
          items: [
            { label: "LinkedIn", href: "https://www.linkedin.com/company/geo-spatial-org" },
            { label: "Facebook", href: "https://www.facebook.com/geospatialorg" },
            { label: "Mastodon", href: "https://mastodon.social/@geospatialorg" },
            { label: "BlueSky", href: "https://bsky.app/profile/geo-spatial-org.bsky.social" },
          ],
        },
        {
          title: "Proiect",
          items: [
            { label: "Despre", to: "/despre" },
            { label: "Situl vechi", to: "https://www.geo-spatial.org/vechi" },
            { label: "Redirecționare 3.5%", href: "/redirectionare-impozit" },
            { label: "Privacy", href: "/privacy" },
          ],
        },
      ],
      copyright: `Copyright © 2006 - 2026 geo-spatial.org și autorii. CC BY-SA 4.0`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash"],
    },
  },
};

export default config;