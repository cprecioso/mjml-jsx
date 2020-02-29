"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_flatten_1 = __importDefault(require("lodash.flatten"));
function jsx(tagName, attributes, ...children) {
    const normalizedChildren = lodash_flatten_1.default(children).filter(n => n != null);
    if (normalizedChildren.every(v => typeof v === "string")) {
        return { tagName, attributes, content: normalizedChildren.join(" ") };
    }
    else {
        return {
            tagName,
            attributes,
            children: normalizedChildren
        };
    }
}
exports.jsx = jsx;
