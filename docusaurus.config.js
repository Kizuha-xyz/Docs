module.exports = {
  title: 'GWorks Docs',
  tagline: 'The Place for help',
  url: 'https://docs.g-works.eu',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://cdn.g-works.eu/img/gworks/logo.png',
  organizationName: 'GWorks',
  projectName: 'Docs',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      de: {
        label: 'Deutsch',
      },
    },
  },
  plugins: [
    [
        require.resolve('@cmfcmf/docusaurus-search-local'),
      {
          indexPages: true,
          language: "de",
      }
    ],
    [
      '@docusaurus/plugin-sitemap',
      {
        id: 'sitemap',
        changefreq: 'weekly',
        priority: 0.5,
        trailingSlash: false,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
          'mobile',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/puhhosting.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(134, 37, 194)',
          },
        ],
      },
    ],
  ],
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-159552747-6',
      anonymizeIP: true,
    },
    gtag: {
      trackingID: 'UA-159552747-6',
      anonymizeIP: true,
    },
    navbar: {
      title: 'GWorks Docs',
      logo: {
        alt: 'GWorks Logo',
        src: 'https://cdn.g-works.eu/img/gworks/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'FAQ',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://g-works.eu',
          label: 'Website',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Socialmedia',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/w8Syn43',
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GWorks, made with ❤  in Germany and build with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
              "https://github.com/GWorks-eu/Docs/edit/master/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ],
};