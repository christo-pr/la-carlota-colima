// Media query device mapping
export const device = {
  mobile: `(min-width: 320px)`,
  tablet: `(min-width: 768px)`,
  laptop: `(min-width: 1024px)`,
  desktop: `(min-width: 1440px)`,
}

export const mobile = mediaQuery => {
  return `
    @media ${device.mobile} {
      ${mediaQuery}
    }
  `
}

export const tablet = mediaQuery => {
  return `
    @media ${device.tablet} {
      ${mediaQuery}
    }
  `
}

export const laptop = mediaQuery => {
  return `
    @media ${device.laptop} {
      ${mediaQuery}
    }
  `
}

export const desktop = mediaQuery => {
  return `
    @media ${device.desktop} {
      ${mediaQuery}
    }
  `
}
