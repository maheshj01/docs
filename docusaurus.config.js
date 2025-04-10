// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mahesh\'s Docs',
  // tagline: 'Under Construction',
  favicon: 'img/favicon.ico',
  customFields: {
    allPosts: [
      {
        slug: "google-hiring-challenge-2",
        title: "Demystifying Google's Secret Hiring Challenge-II",
        authors: "Mahesh",
        featured: false,
        created_at: "2023-11-01",
        tags: ['programming', 'hiring', 'medium']
      },
    ]
  },
  // Set the production url of your site here
  url: 'https://docs.maheshjamdade.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'maheshj01', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
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
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',// skips /docs from the url
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/maheshj01/docs/tree/main/'
        },
        blog: {
          blogSidebarCount: 0,
          routeBasePath: 'docs',
          include: ['**/*.{md,mdx}'],
          editUrl:
            'https://github.com/maheshj01/docs/tree/main/',
          feedOptions: {
            type: 'json',
          }
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
  {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    // announcementBar:
    // {
    //   content:
    //     'The Git & Github Guide is still in work, Please check back later.',
    //   backgroundColor: '#20232a',
    //   textColor: '#fff',
    //   isCloseable: false,
    // },
    navbar: {
      title: 'Mahesh\'s Docs',
      logo: {
        // alt: 'My Site Logo',
        src: 'https://maheshjamdade.com/img/profile_pic.jpg',
        href: '/',
      },
      // items: [
      //   {
      //     type: 'docSidebar',  // docSidebar
      //     position: 'left',
      //     sidebarId: 'navbar', // foldername
      //     label: '',     // navbar title
      //   },
      //   {
      //     type: 'docSidebar',  // docSidebar
      //     position: 'left',
      //     sidebarId: 'git', // foldername
      //     label: '',     // navbar title
      //   },
      // ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Social',
          items: [
            {
              label: 'About',
              href: 'https://maheshjamdade.com/',
            },
            {
              label: 'Medium',
              href: 'https://maheshj01.medium.com/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/maheshj01',
            },
            {
              label: 'Threads',
              href: 'https://threads.net/@maheshj01',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/users/8253662/mahesh-jamdade',
            },
            {
              label: 'Blog',
              href: 'https://blog.maheshjamdade.com/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/maheshj01',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mahesh Jamdade. Built with Docusaurus 💛`,
    },
    colorMode: {
      defaultMode: 'dark',
    },
    lightTheme: {
      primaryColor: '#007BFF', // Light theme primary color
    },
    darkTheme: {
      primaryColor: '#6C757D', // Dark theme primary color
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['dart'],
    },
  },
};

module.exports = config;
