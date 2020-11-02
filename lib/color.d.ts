declare const COLOR: {
    blue: string;
    font: string;
    line: string;
    green: string;
    red: string;
    lingthBlue: string;
    white: string;
};
export default COLOR;
export declare function hexToRGB(hex: string): RGB;
export declare function rgbToHEX(color: RGB): string;
export declare function lighter(color: string, alpha?: number): string;
interface RGB {
    r: number;
    g: number;
    b: number;
}
