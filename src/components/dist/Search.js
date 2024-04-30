"use client";
"use strict";
exports.__esModule = true;
exports.SearchBar = void 0;
var React = require("react");
function SearchBar(props) {
    var _a = React.useState(''), inputVal = _a[0], setInputVal = _a[1];
    var handleSubmit = function (e) {
        e.preventDefault(); /*
        const array = Array.from(document.getElementsByTagName('body')).find(item => {
            return item.innerText.includes(inputVal)
        })
        if(!array){
            console.log('not found');
            
        }
        return array?.ELEMENT_NODE */
    };
    return (React.createElement("div", null,
        React.createElement("form", { action: "", className: 'p-2', onSubmit: handleSubmit },
            React.createElement("input", { value: inputVal, onChange: function (e) { return setInputVal(e.target.value); }, type: "search", name: "search", id: "search", placeholder: 'search', className: 'p-2 bg-slate-700 border-1 rounded-md border-1 outline-none placeholder:text-white placeholder:italic' }))));
}
exports.SearchBar = SearchBar;
