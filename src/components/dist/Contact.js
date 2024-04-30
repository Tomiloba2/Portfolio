"use strict";
exports.__esModule = true;
exports.Contact = void 0;
var React = require("react");
var md_1 = require("react-icons/md");
var fa_1 = require("react-icons/fa");
function Contact(props) {
    return (React.createElement("div", null,
        React.createElement("div", { className: 'relative  border-yellow-500 border-t-2' },
            React.createElement("h4", { className: 'absolute -top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-2xl font-bold z-10 bg-slate-950 inline' }, "Contact Me")),
        React.createElement("div", { className: '  flex flex-row justify-evenly flex-wrap align-middle my-4 ' },
            React.createElement("div", { className: 'bg-slate-900 flex flex-row gap-2 p-3 my-3' },
                React.createElement(md_1.MdEmail, null),
                " ",
                React.createElement("a", { href: 'mailto:oluwatomiloba@gmail.com' }, "oluwatomiloba@gmail.com")),
            React.createElement("div", { className: 'bg-slate-900  border-b-1 border-b-yellow-500 flex flex-row gap-2 p-3 my-3' },
                React.createElement(md_1.MdCall, null),
                " ",
                React.createElement("a", { href: "tel:+2349114722090" }, "+2349114722090")),
            React.createElement("div", { className: 'bg-slate-900  border-b-1 border-b-yellow-500 flex flex-row gap-2 p-3 my-3' },
                React.createElement(md_1.MdCall, null),
                " ",
                React.createElement("a", { href: "#" }, "Ibadan Nigeria")),
            React.createElement("div", null)),
        React.createElement("div", { className: 'relative  border-yellow-500 border-t-2' },
            React.createElement("div", { className: 'absolute -top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-2xl font-bold z-10 bg-slate-950 inline' },
                React.createElement("div", { className: "flex flex-row gap-2" },
                    React.createElement("a", { href: "", title: 'github', className: 'hover:text-yellow-500 cursor-pointer' },
                        React.createElement(fa_1.FaGithub, null)),
                    React.createElement("a", { href: "", title: 'linkedin', className: 'text-cyan-500 hover:text-yellow-500 cursor-pointer' },
                        React.createElement(fa_1.FaLinkedin, null)),
                    React.createElement("a", { href: "", title: 'instagram', className: 'text-red-500 hover:text-yellow-500 cursor-pointer' },
                        React.createElement(fa_1.FaInstagram, null)),
                    React.createElement("a", { href: "", title: 'whatsapp', className: 'text-green-500 hover:text-yellow-500 cursor-pointer' },
                        React.createElement(fa_1.FaWhatsapp, null)))))));
}
exports.Contact = Contact;
