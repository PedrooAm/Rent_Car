// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rent A Car',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  url: 'https://github.com/',
  baseUrl: '/Rent_Car',
  organizationName: 'PedrooAm',
  projectName: 'Rent_Car',
  deploymentBranch: 'gh-pages',
  trailingSlash:false,



  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
 
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // Usually your GitHub org/user name.
   // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
         blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'NOSSO Rent a Car',
        logo: {
          alt: 'Logo',
          src: 'img/n.png',
        },
        items: [
          //{
            //type: 'docSidebar',
            //sidebarId: 'tutorialSidebar',
            //position: 'left',
            //label: 'Tutorial',
          //},
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            label: 'Frota',
            to: '/docs/frota/carros-economicos',
            position: 'left',
          },
          {
            label: 'Promoções',
            to: '/docs/promocoes/desconto-corporativo',
            position: 'left',
          },
          {
            label: 'Informações',
            to: '/docs/info/precos',
            position: 'left',
          },
          {
            label: 'Contato',
            to: '/blog',  // ou um email
            position: 'right',
          },
          {
            href: 'https://github.com/PedrooAm/RentACar',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contactos',
            items: [
              { label: 'Telefone', href: 'tel:+3514567890545' },
              { label: 'WhatsApp', href: 'https://web.whatsapp.com/' },
              { label: 'Email', href: 'mailto:nosso@rent_acar.com' },
            ],
          },
          {
            title: 'Ajuda',
            items: [
              { label: 'FAQ', to: '/docs/faq' },
              { label: 'Perguntas Frequentes', href: 'docs/info/faq' },
            ],
          },
          {
            title: 'Mais',
            items: [
              { label: 'Blog', to: '/blog' },
              { label: 'GitHub', href: 'https://github.com/PedrooAm/Rent_Car' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NOSSO Rent a Car.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.githubDark,
      },
    }),
};

export default config;
