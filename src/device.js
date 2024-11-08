const sizes = {
    mobile: '480px',
    tablet: '1023px',
    desktop: '1024px'
}

export const device = {
    // mobile: `(max-width: ${sizes.mobile})`,
    mobile: `(min-width: 320px) and (max-width: ${sizes.mobile})`,
    tablet: `(min-width: 768px) and (max-width: ${sizes.tablet})`,
    desktop: `(min-width: ${sizes.desktop})`
  };