"use strict";
var Components;
(function (Components) {
    var SubComponents;
    (function (SubComponents) {
        var test = (function () {
            function test() {
            }
            return test;
        }());
        SubComponents.test = test;
    })(SubComponents = Components.SubComponents || (Components.SubComponents = {}));
    var Header = (function () {
        function Header() {
            var elem = document.createElement('div');
            elem.innerText = 'This is a Header.';
            document.body.appendChild(elem);
        }
        return Header;
    }());
    Components.Header = Header;
    var Content = (function () {
        function Content() {
            var elem = document.createElement('div');
            elem.innerText = 'This is a Content.';
            document.body.appendChild(elem);
        }
        return Content;
    }());
    Components.Content = Content;
    var Footer = (function () {
        function Footer() {
            var elem = document.createElement('div');
            elem.innerText = 'This is a Footer.';
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    Components.Footer = Footer;
})(Components || (Components = {}));
var Home;
(function (Home) {
    var Ml;
    (function (Ml) {
        Ml.gml = {
            name: '9ml'
        };
    })(Ml = Home.Ml || (Home.Ml = {}));
    var Page = (function () {
        function Page() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
