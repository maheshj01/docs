---
sidebar_position: 2
---

## Installation

### Add the package

```bash
flutter pub add navbar_router
```

### Import the package

```dart

import 'package:flutter/material.dart';
import 'package:navbar_router/navbar_router.dart';
```

### Using navbar_router

1. Declare your routes

```dart
  final Map<int, Map<String, Widget>> _routes = const {
    0: {
      '/': HomeFeeds(),
      FeedDetail.route: FeedDetail(),
    },
    1: {
      '/': ProductList(),
      ProductDetail.route: ProductDetail(),
      ProductComments.route: ProductComments(),
    },
    2: {
      '/': UserProfile(),
      ProfileEdit.route: ProfileEdit(),
    },
    3: {
      '/': Settings(),
    },
  };
```

2. Declare `NavbarItem`s

```dart
  List<NavbarItem> items = [
    NavbarItem(Icons.home, 'Home', backgroundColor: colors[0]),
    NavbarItem(Icons.shopping_bag, 'Products', backgroundColor: colors[1]),
    NavbarItem(Icons.person, 'Me', backgroundColor: colors[2]),
    NavbarItem(Icons.settings, 'Settings', backgroundColor: colors[0]),
  ];
```

3. Add NavbarRouter Widget to your app

Which requires `List<DestinationRouter> destination` and `List<NavbarItem> destinations` and `Widget Function(BuildContext) errorBuilder` as required parameters. And since we are aiming for large number of routes and destinations, the possibility of error is high. So we need to also specify an `errorBuilder` to gracefully handle an invalid route.

```dart
NavbarRouter(
  ...
  ...
  errorBuilder: (context) {
    return const Center(child: Text('Error 404 Page Not Found'));
  },
)
```

And that is all with this setup your NavbarRouter should be up and running.

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'NavbarRouter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: NavbarRouter(
        errorBuilder: (context) {
          return const Center(child: Text('Error 404 Page Not Found'));
        },
        destinations: [
          for (int i = 0; i < items.length; i++)
            DestinationRouter(
              navbarItem: items[i],
              destinations: [
                for (int j = 0; j < _routes[i]!.keys.length; j++)
                  Destination(
                    route: _routes[i]!.keys.elementAt(j),
                    widget: _routes[i]!.values.elementAt(j),
                  ),
              ],
              initialRoute: _routes[i]!.keys.first,
            ),
        ],
      ),
    );
  }
}
```
Heres how the output of the above code sample will look.

![demo](https://user-images.githubusercontent.com/31410839/228031434-0e35737d-83cf-4b33-afe2-4b0f77f0cc5c.gif)


