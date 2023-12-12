// module.exports = {
//   "docs": [
//     {
//       type: 'category',
//       label: 'Navbar Routes',
//       collapsed: false,
//       items: [
//         "navbar_router/introduction",
//         "navbar_router/installation",
//         "navbar_router/features",
//         "navbar_router/types",
//         "navbar_router/navbarnotifier",
//         "navbar_router/routes-and-navigation",
//         "navbar_router/snackbars",
//         "navbar_router/showcase",
//         "navbar_router/background",
//         "navbar_router/properties",
//         "navbar_router/contributing",
//         "navbar_router/release-notes",
//       ],
//     },
//     {
//       "gitSidebar": [
//         {
//           type: 'category',
//           label: 'Git tutorial',
//           collapsed: false,
//           items: [
//             "git-tutorial/git-intro",
//           ],
//         },
//       ]
//     }
//   ]
// }

export default {
  navbarSidebar:
    [
      "navbar_router/introduction",
      "navbar_router/installation",
      "navbar_router/features",
      "navbar_router/types",
      "navbar_router/navbarnotifier",
      "navbar_router/routes-and-navigation",
      "navbar_router/snackbars",
      "navbar_router/showcase",
      "navbar_router/background",
      "navbar_router/properties",
      "navbar_router/contributing",
      "navbar_router/release-notes",
    ],
  gitSidebar: [
    'git-tutorial/git-intro',
    'git-tutorial/installation',
    'git-tutorial/terminology',
  ],
};

// /** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

// const sidebars = {

//   // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
//   git: [{ type: 'autogenerated', dirName: 'git-tutorial' }],  // foldername
//   navbar: [{ type: 'autogenerated', dirName: 'navbar_router' }],  // foldername

// };

// module.exports = sidebars;