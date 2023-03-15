// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Swift pt-BR',
  tagline: 'Swift é uma linguagem de programação consistente e intuitiva, desenvolvida pela Apple para a criação de apps para iOS, Mac, Apple TV e Apple Watch.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://swift.zo.glass/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zo_glass', // Usually your GitHub org/user name.
  projectName: 'swift-ptbr', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'br',
    locales: ['br'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/zo-glass/swift-ptbr/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/swift-social-card.jpg',
      navbar: {
        title: 'Swift pt-BR',
        logo: {
          alt: 'Swift Logo',
          src: 'img/swift.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'bem-vindo-ao-swift/um-passeio-pelo-swift',
            position: 'left',
            label: 'Um passeio pelo Swift',
          },
          {
            type: 'doc',
            docId: 'guia-da-linguagem/o-basico',
            position: 'left',
            label: 'Guia da linguagem',
          },
          {
            type: 'doc',
            docId: 'referencia-da-linguagem/sobre-a-referencia-da-linguagem',
            position: 'left',
            label: 'Referência da Linguagem',
          },
          {
            href: 'https://github.com/zo-glass/swift-ptbr',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Documentação',
            items: [
              {
                label: 'Um passeio pelo Swift',
                to: '/docs/bem-vindo-ao-swift/um-passeio-pelo-swift',
              },
              {
                label: 'Guia da Linguagem',
                to: '/docs/guia-da-linguagem/o-basico',
              },
              {
                label: 'Referência da Linguagem',
                to: '/docs/referencia-da-linguagem/sobre-a-referencia-da-linguagem',
              },
            ],
          },
          {
            title: 'Comunidade',
            items: [
              {
                label: 'Swift.org',
                href: 'https://swift.org/',
              },
              {
                label: 'Swift Forums',
                href: 'https://forums.swift.org/',
              },
            ],
          },
          {
            title: 'Saiba mais',
            items: [
              {
                label: 'Desenvolvedor Apple',
                href: 'https://developer.apple.com/',
              },
              {
                label: 'Código fonte',
                href: 'https://github.com/apple',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Swift pt-BR from zo_glass`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['swift'],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
