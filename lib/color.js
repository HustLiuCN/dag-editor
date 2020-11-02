"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lighter = exports.rgbToHEX = exports.hexToRGB = void 0;
const COLOR = {
    blue: '#b3e5fc',
    font: '#333333',
    line: '#c1c1c1',
    green: '#c5e1a5',
    red: '#ffcdd2',
    lingthBlue: '#e3f2fd',
    white: '#ffffff',
};
exports.default = COLOR;
function hexToRGB(hex) {
    if (!/^#[A-Fa-f0-9]{6}$/.test(hex)) {
        return null;
    }
    let c;
    c = '0x' + hex.substring(1);
    return {
        r: (c >> 16) & 255,
        g: (c >> 8) & 255,
        b: c & 255,
    };
}
exports.hexToRGB = hexToRGB;
function rgbToHEX(color) {
    const r = color.r.toString(16);
    const g = color.g.toString(16);
    const b = color.b.toString(16);
    return `#${r}${g}${b}`;
}
exports.rgbToHEX = rgbToHEX;
function lighter(color, alpha = 5) {
    const c = hexToRGB(color);
    const r = Math.floor((c.r * alpha + 255 * (10 - alpha)) / 10);
    const g = Math.floor((c.g * alpha + 255 * (10 - alpha)) / 10);
    const b = Math.floor((c.b * alpha + 255 * (10 - alpha)) / 10);
    return rgbToHEX({ r, g, b });
}
exports.lighter = lighter;
