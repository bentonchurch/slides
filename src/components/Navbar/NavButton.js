/**
 * Valid icon styles are: outlined, round, sharp, two-tone.  The default style is filled
 */
function NavButton({ iconStyle, icon, children, ...props }) {
  return (
    <button {...props}>
      {icon && <span className={iconStyle ? `material-icons-${iconStyle}` : `material-icons`}>{icon}</span>}
      {children}
    </button>
  );
}

export { NavButton };
