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
        'description': 'Whether or not to show the unselected label text, When in DesktopMode, either isExtended is False or showUnselectedLabels is True',
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

export const navbarProperties = {
    "backButtonBehavior": {
        "type": "BackButtonBehavior",
        "typeKey": "BackButtonBehavior",
        "description": "An enum which decides, How the back button is handled, defaults to`BackButtonBehavior.rememberHistory`."
    },
    "destinations": {
        "type": "List<NavbarItem>",
        "typeKey": "NavbarItem",
        "description": "A List of `DestinationRouter` to show when the user taps the[NavbarItem]. Each DestinationRouter specifies a List of Destinations, initialRoute, and the navbarItem corresponding to that destination."
    },

    "type": {
        "type": "NavbarType",
        "typeKey": "NavbarType",
        "description": "The type of NavigationBar to be passed to NavbarRouter defaults to`NavbarType.standard`.This allows you to choose between the default `NavbarType.standard` and`NavbarType.notched`."
    },
    "decoration": {
        "type": "NavbarDecoration",
        "typeKey": "NavbarDecoration",
        "description": "The decoraton for Navbar has all the properties you would expect in a[BottomNavigationBar] to adjust the style of the Navbar.See[NavbarDecoration](./ types / #decorating - the - navbar) for more details."
    },
    "destinationAnimationCurve": {
        "type": "Curve",
        "typeKey": "Curve",
        "description": "Curve for the destination animation when the user taps a navbar item.Defaults to`Curves.fastOutSlowIn`."
    },
    "destinationAnimationDuration": {
        "type": "Duration",
        "typeKey": "Duration",
        "description": " The duration in milliseconds of the animation of the destination.Defaults to 700ms."
    },
    "errorBuilder": {
        "type": "Widget Function(BuildContext context, Object error)",
        "typeKey": "Widget",
        "description": "A WidgetBuilder to show the user when the user tried to navigate to a route that does not exist in the[destinations]."
    },
    "initialIndex": {
        "type": "int",
        "typeKey": "int",
        "description": " Navbar item that is initially selected, defaults to the first item in the list of[NavbarItems]"
    },
    "isDesktop": {
        "type": "bool",
        "typeKey": "bool",
        "description": "if true, navbar will be shown on the left, this property can be used along with `NavbarDecoration.isExtended` to make the navbar adaptable for large screen sizes."
    },
    "onBackButtonPressed": {
        "type": "void Function()",
        "typeKey": "void",
        "description": "A function which defines whether it is the root Navigator or not.if the method returns true then the Navigator is at the base of the navigator stack"
    },
    "onChanged": {
        "type": "void Function(int index)",
        "typeKey": "void",
        "description": "A callback that is called when the currentIndex of the navbarchanges."
    },
    "shouldPopToBaseRoute": {
        "type": "bool Function()",
        "typeKey": "bool",
        "description": "A boolean which decides, whether the navbar should pop to the base route(pop all except first) when the current navbar is tapped while the route is deeply nested.This feature is similar to Instagram's navigation bar defaults to true."
    },
    "onCurrentTabClicked": {
        "type": "void Function()",
        "typeKey": "void",
        "description": "A callback that is called when the selected navbar is tapped again. (This allows you to handle useCases like scroll to top when the navbar is tapped again or Pop to the base route similar to Instagram.)"
    }
}