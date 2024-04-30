"use client";
"use strict";
exports.__esModule = true;
exports.Navbar = void 0;
var React = require("react");
var Search_1 = require("./Search");
var icons_material_1 = require("@mui/icons-material");
var link_1 = require("next/link");
var md_1 = require("react-icons/md");
function Navbar(props) {
    var _a = React.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var handleIsOpen = function () {
        setIsOpen(!isOpen);
    };
    console.log(isOpen);
    return (React.createElement(React.Fragment, null,
        React.createElement("nav", { className: 'hidden md:flex justify-between align-middle gap-4 container mx-auto px-4 py-2' },
            React.createElement("div", { id: 'logo', className: 'text-yellow-500 text-2xl' },
                React.createElement(md_1.MdCodeOff, null)),
            React.createElement("div", { id: 'links', className: 'px-2 ' },
                React.createElement(link_1["default"], { href: "#about", className: 'px-2 hover:text-slate-500', onClick: function () { return setIsOpen(false); } }, "About"),
                React.createElement(link_1["default"], { href: "#skill", className: 'px-2 hover:text-slate-500', onClick: function () { return setIsOpen(false); } }, "Skill"),
                React.createElement(link_1["default"], { href: "#portfolio", className: 'px-2 hover:text-slate-500', onClick: function () { return setIsOpen(false); } }, "Portfolio"),
                React.createElement(link_1["default"], { href: "#blog", className: 'px-2 hover:text-slate-500', onClick: function () { return setIsOpen(false); } }, "Blogs"),
                React.createElement(link_1["default"], { href: "#contact", className: 'px-2 hover:text-slate-500', onClick: function () { return setIsOpen(false); } }, "Contact")),
            React.createElement("div", null,
                React.createElement(Search_1.SearchBar, null))),
        React.createElement("nav", { className: 'md:hidden container mx-auto px-4 py-2' },
            React.createElement("section", { className: 'flex justify-between' },
                React.createElement("div", { id: 'logo', className: 'text-yellow-500 text-2xl' },
                    React.createElement(md_1.MdCodeOff, null)),
                React.createElement("div", { id: 'menu', onClick: handleIsOpen, className: 'cursor-pointer' },
                    React.createElement(icons_material_1.Menu, null))),
            React.createElement("div", { id: 'links', className: (!isOpen ? "hidden" : "") + " bg-slate-800 h-screen flex flex-col text align-middle justify-center text-center" },
                React.createElement(link_1["default"], { href: "#about", onClick: function () { return setIsOpen(false); }, className: "hover:text-slate-500 p-2" }, "About"),
                React.createElement(link_1["default"], { href: "#skill", onClick: function () { return setIsOpen(false); }, className: "hover:text-slate-500 p-2" }, "Skill"),
                React.createElement(link_1["default"], { href: "#portfolio", onClick: function () { return setIsOpen(false); }, className: "hover:text-slate-500 p-2" }, "Portfolio"),
                React.createElement(link_1["default"], { href: "#blog", onClick: function () { return setIsOpen(false); }, className: "hover:text-slate-500 p-2" }, "Blogs"),
                React.createElement(link_1["default"], { href: "#contact", onClick: function () { return setIsOpen(false); }, className: "hover:text-slate-500 p-2" }, "Contact"),
                React.createElement("div", null,
                    React.createElement(Search_1.SearchBar, null))))));
}
exports.Navbar = Navbar;
