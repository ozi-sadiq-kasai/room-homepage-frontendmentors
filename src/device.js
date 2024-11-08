const sizes = {
    mobile: '767px',
    tablet: '1023px',
    desktop: '1024px'
}

export const device = {
    mobile: `(max-width: ${sizes.mobile})`,
    tablet: `(min-width: 768px) and (max-width: ${sizes.tablet})`,
    desktop: `(min-width: ${sizes.desktop})`
  };