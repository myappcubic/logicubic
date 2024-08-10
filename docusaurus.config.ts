import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
  stylesheets: [
    {
      href: '/katex/katex.min.css',
      type: 'text/css',
    },
  ],
  title: 'LogiCubic - Algorithm',
  tagline: 'World of Computing -- AppCubic',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://logicubic.appcubic.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'myappcubic', // Usually your GitHub org/user name.
  projectName: 'logicubic', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/myappcubic/logicubic/tree/main/packages/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/myappcubic/logicubic/tree/main/packages/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        // Will be passed to @docusaurus/plugin-sitemap (false to disable)
        sitemap: {},
        // Will be passed to @docusaurus/plugin-google-gtag (only enabled when explicitly specified)
        //gtag: {},
        // Will be passed to @docusaurus/plugin-google-tag-manager (only enabled when explicitly specified)
        //googleTagManager: {},
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: ' LogiCubic - AppCubic',
      logo: {
        alt: '',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'algoSidebar',
          position: 'left',
          label: 'Algorithm',
          hidable: true,
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/myappcubic/logicubic',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: 'Info',
          items: [
            {
              label: 'Get Started',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'links',
          items: [
            {
              label: 'AppCubic',
              href: 'https://www.appcubic.com/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'RenoCrypt',
              href: 'https://www.renocrypt.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/benjipeng',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AppCubic & RenoCrypt 🧊`,
    },
    prism: {
      theme: prismThemes.okaidia,
      darkTheme: prismThemes.dracula,
    },

  } satisfies Preset.ThemeConfig,
};

export default config;
