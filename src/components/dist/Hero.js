"use strict";
exports.__esModule = true;
exports.Hero = void 0;
var image_1 = require("next/image");
var link_1 = require("next/link");
var React = require("react");
var fa_1 = require("react-icons/fa");
function Hero(props) {
    return (React.createElement("article", { className: 'relative' },
        React.createElement("div", { className: 'grid sm:grid-cols-2 place-items-center ' },
            React.createElement("section", { className: 'flex flex-col gap-10 text-center sm:text-justify' },
                React.createElement("div", null,
                    React.createElement("h4", { className: '' },
                        " I'M \u00A0",
                        React.createElement("span", { className: ' text-2xl font-extrabold text-yellow-500 ' }, "TOMILOBA DAVID")),
                    React.createElement("h4", { className: 'py-2' }, "Frontend Developer & Backend Developer")),
                React.createElement("div", null,
                    React.createElement("div", { className: 'border-2 border-yellow-500 inline p-2 rounded-md' },
                        React.createElement(link_1["default"], { href: "#contact" }, "Contact Me")))),
            React.createElement("section", { className: '' },
                React.createElement(image_1["default"], { src: "/img.png", alt: 'tomiloba developer photo', width: 500, height: 500, layout: 'responsive', className: 'sepia rounded-full object-cover' }))),
        React.createElement("div", { className: 'absolute bottom-2 right-2' },
            React.createElement("div", { className: ' text-md font-bold ' },
                React.createElement("div", { className: "flex flex-col gap-2" },
                    React.createElement("a", { href: "", title: 'github', className: 'hover:text-yellow-500 cursor-pointer' },
                        React.createElement(fa_1.FaGithub, null)),
                    React.createElement("a", { href: "", title: 'linkedin', className: 'text-cyan-500 hover:text-yellow-500 cursor-pointer' },
                        React.createElement(fa_1.FaLinkedin, null)),
                    React.createElement("a", { href: "", title: 'instagram', className: 'text-red-500 hover:text-yellow-500 cursor-pointer' },
                        React.createElement(fa_1.FaInstagram, null)),
                    React.createElement("a", { href: "", title: 'whatsapp', className: 'text-green-500 hover:text-yellow-500 cursor-pointer' },
                        React.createElement(fa_1.FaWhatsapp, null)))))));
}
exports.Hero = Hero;
