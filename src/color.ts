const COLOR = {
    blue: '#b3e5fc',
    font: '#333333',
    line: '#c1c1c1',
    green: '#c5e1a5',
    red: '#ffcdd2',
    lingthBlue: '#e3f2fd',
    white: '#ffffff',
}

export default COLOR

export function hexToRGB(hex: string): RGB {
    if (!/^#[A-Fa-f0-9]{6}$/.test(hex)) {
        return null
    }
    let c
    c = '0x' + hex.substring(1)
    return {
        r: (c>>16)&255,
        g: (c>>8)&255,
        b: c&255,
    }
}

export function rgbToHEX(color: RGB): string {
    const r = color.r.toString(16)
    const g = color.g.toString(16)
    const b = color.b.toString(16)
    return `#${r}${g}${b}`
}

export function lighter(color: string, alpha = 5): string {
    const c = hexToRGB(color)
    const r = Math.floor((c.r * alpha + 255 * (10 - alpha)) / 10)
    const g = Math.floor((c.g * alpha + 255 * (10 - alpha)) / 10)
    const b = Math.floor((c.b * alpha + 255 * (10 - alpha)) / 10)
    return rgbToHEX({ r, g, b })
}

interface RGB {
    r: number,
    g: number,
    b: number,
}
