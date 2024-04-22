// constants.js
export const flutterClass = {
    'Color': "https://api.flutter.dev/flutter/material/Colors-class.html",
    'bool': "https://api.flutter.dev/flutter/dart-core/bool-class.html",
    'double': "https://api.flutter.dev/flutter/dart-core/double-class.html",
    "EdgeInsetsGeometry": "https://api.flutter.dev/flutter/painting/EdgeInsetsGeometry-class.html",
    "TextStyle": "https://api.flutter.dev/flutter/painting/TextStyle-class.html",
    "IconThemeData": "https://api.flutter.dev/flutter/widgets/IconThemeData-class.html",
    "ShapeBorder": "https://api.flutter.dev/flutter/painting/ShapeBorder-class.html",
    "NavigationDestinationLabelBehavior": "https://api.flutter.dev/flutter/material/NavigationDestinationLabelBehavior.html",
    "BorderRadius": "https://api.flutter.dev/flutter/painting/BorderRadius-class.html",
};


export const decorationProperties = {
    'backgroundColor': {
        'type': 'Color?',
        'typeKey': 'Color',
        'description': 'The backgroundColor of the Navbar',
    },
    'isExtended': {
        'type': 'bool',
        'typeKey': 'bool',
        'description': 'Defines whether the Navbar is extended in Desktop mode defaults to false',
    },
    'unselectedItemColor': {
        'type': 'Color?',
        'typeKey': 'Color',
        'description': 'The unselectedItemColor of the Navbar',
    },
    'elevation': {
        'type': 'double?',
        'typeKey': 'double',
        'description': 'The elevation shadown on the edges of bottomnavigationbar',
    },
    'minWidth': {
        'type': 'double?',
        'typeKey': 'double',
        'description': 'The smallest possible width for the navbar when `NavbarRouter.isDesktop` is true, this width is regardless of the navbar\'s icon or label size.The default is 72.',
    },
    'minExtendedWidth': {
        'type': 'double?',
        'typeKey': 'double',
        'description': 'Width when `isExtended` is True, The default value is 256.',
    },
    'unselectedIconColor': {
        'type': 'Color?',
        'typeKey': 'Color',
        'description': 'The color of the unselected item icon',
    },
    'selectedIconColor': {
        'type': 'Color?',
        'typeKey': 'Color',
        'description': 'The icon color of the selected NavbarItem if NavbarItem.selectedIcon is specified then this is ignored',
    },
    'showUnselectedLabels': {
        'type': 'bool',
        'typeKey': 'bool',
        'description': 'Whether or not to show the unselected label text',
    },
    'unselectedLabelColor': {
        'type': 'Color?',
        'typeKey': 'Color',
        'description': 'The color of the unselected label text',
    },
    'showSelectedLabels': {
        'type': 'bool?',
        'typeKey': 'bool',
        'description': 'whether or not to show the selected label text',
    },
    'enableFeedback': {
        'type': 'bool?',
        'typeKey': 'bool',
        'description': 'haptic feedback when the item is selected',
    },
    'margin': {
        'type': 'EdgeInsetsGeometry',
        'typeKey': 'EdgeInsetsGeometry',
        'description': 'margin for floating navbar defaults to EdgeInsets.symmetric(horizontal: 48.0, vertical: 20),',
    },
    'selectedLabelTextStyle': {
        'type': 'TextStyle?',
        'typeKey': 'TextStyle',
        'description': 'the text style of the selected label',
    },
    'unselectedLabelTextStyle': {
        'type': 'TextStyle?',
        'typeKey': 'TextStyle',
        'description': 'the text style of the unselected labels',
    },
    'selectedIconTheme': {
        'type': 'IconThemeData?',
        'typeKey': 'IconThemeData',
        'description': 'iconTheme for the selected icon',
    },
    'unselectedIconTheme': {
        'type': 'IconThemeData?',
        'typeKey': 'IconThemeData',
        'description': 'iconTheme for the unselected icon',
    },
    'indicatorColor': {
        'type': 'Color?',
        'typeKey': 'Color',
        'description': 'The value of NavbarRoute\'s selection indicator color for the selected item',
    },
    'borderRadius': {
        'type': 'BorderRadius?',
        'typeKey': 'BorderRadius',
        'description': 'BorderRadius for floating navbar',
    },
    'labelBehavior': {
        'type': 'NavigationDestinationLabelBehavior?',
        'typeKey': 'NavigationDestinationLabelBehavior',
        'description': 'Specifies when each [NavigationDestination]\'s label should appearThis is used to determine the behavior of [NavigationBar]\'s destinations',
    },
    'height': {
        'type': 'double?',
        'typeKey': 'double',
        'description': 'The default height of the NavbarRouter when not in Desktop mode. The height of each Navbar can be accessed through the constants [kM3NavbarHeight]            [kStandardNavbarHeight], [kNotchedNavbarHeight] and [kFloatingNavbarHeight] respectively.',
    },
    'indicatorShape': {
        'type': 'ShapeBorder?',
        'typeKey': 'ShapeBorder',
        'description': '',
    },
}