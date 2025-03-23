/**
 * Valid icon styles are: outlined, round, sharp, two-tone.  The default style is filled
 */
function NavButton({ iconStyle, icon, children, hideOnMobile, className, ...props }) {
  const classes = (className || '') + (hideOnMobile ? ' hidden-mobile' : '');

  return (
    <button className={classes} {...props}>
      {icon && <span className={iconStyle ? `material-icons-${iconStyle}` : `material-icons`}>{icon}</span>}
      {children}
    </button>
  );
}

export { NavButton };
