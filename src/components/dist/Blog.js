"use strict";
exports.__esModule = true;
exports.Blogs = void 0;
var image_1 = require("next/image");
var React = require("react");
function Blogs(props) {
    var blogList = [
        {
            title: 'Demystifying Client-Side Scripting and Server-Side Scripting',
            img: "/demystifying.avif",
            link: "https://dev.to/tomiloba2/demystifying-client-side-scripting-and-server-side-scripting-49bi"
        }, {
            title: 'How to Optimise your website for optimal performance',
            img: "/optimize.jpg",
            link: "https://dev.to/tomiloba2/how-to-optimize-your-website-for-optimal-performance-466n"
        }, {
            title: 'understanding-the-difference-between-bugs-errors-defects-and-failures-in-software-testing',
            img: "/bugs.avif",
            link: "https://dev.to/tomiloba2/understanding-the-difference-between-bugs-errors-defects-and-failures-in-software-testing-eje"
        }, {
            title: 'understanding-cross-origin-resource-sharing-cors-for-web-developersUndder',
            img: "/cors.avif",
            link: "https://dev.to/tomiloba2/understanding-cross-origin-resource-sharing-cors-for-web-developers-31oa"
        },
    ];
    return (React.createElement("div", null,
        React.createElement("h2", { className: 'text-2xl font-bold py-4' }, "My Blogs"),
        React.createElement("section", { className: 'flex h-full flex-row justify-evenly flex-wrap gap-5 align-middle' }, blogList.map(function (item) {
            return (React.createElement("div", { key: item.title, className: 'shrink sm:basis-1/3 md:basis-2/5 lg:basis-1/5 p-4 bg-slate-900 shadow-sm shadow-cyan-950 rounded-md  flex flex-col gap-4' },
                React.createElement("div", { className: "grid place-items-center" },
                    React.createElement(image_1["default"], { src: item.img, alt: item.title, width: 500, height: 500, className: 'object-cover' })),
                React.createElement("a", { href: item.link, className: 'text-center text-sm hover:text-cyan-500' }, item.title)));
        }))));
}
exports.Blogs = Blogs;
