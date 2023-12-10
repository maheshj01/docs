---
sidebar_position: 3
id: types
title: Navbar Types
displayed_sidebar: navbarSidebar
---

### Choose between Navbars

NavbarRouter supports three types of Navbar as of today `standard` which is basically material design 2 BottomNavigationBar (default for this package) and `notched` a customized NavigationBar with a notch and a material3 Navbar. User can choose to use either of them by setting the `type` property of the `NavbarRouter` widget to either `NavbarType.standard`, `NavbarType.notched` or `NavbarType.material3`.

#### Standard Navbar

![Standard Navbar](./assets/navbar-type1.gif)

#### Notched Navbar

![Notched Navbar](./assets/navbar-type2.gif)

#### Material 3 Navbar

![Material3 Navbar](./assets/navbar-type3.gif)

The height of each Navbar can be accessed through the constants `kM3NavbarHeight`
`kStandardNavbarHeight` and `kNotchedNavbarHeight` respectively.

#### Floating Navbar

![Floating Navbar](./assets/navbar-type4.gif)

### Decorating the Navbar

- `NavbarDecoration` for Standard Navbar
- `NotchedDecoration` for Notched Navbar
- `M3NavbarDecoration` for Material3 Navbar
- `FloatingNavbarDecoration` for Floating Navbar
