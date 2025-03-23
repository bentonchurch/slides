import { NavButton } from './NavButton.js';
import { GithubNavButton } from './GithubButton.js';
import './styles.css';

function Navbar() {
  return (
    <nav>
      <div className="nav-left">
        <NavButton icon="arrow_back_ios_new" iconStyle="round" />
        <NavButton icon="save" iconStyle="round" />
        <NavButton icon="undo" iconStyle="round" />
        <NavButton icon="redo" iconStyle="round" />
      </div>
      <div className="nav-right">
        <NavButton icon="help_outline" iconStyle="round" hideOnMobile />
        <GithubNavButton />
        <NavButton icon="settings" iconStyle="round" />
        <NavButton icon="account_circle" iconStyle="round" />
      </div>
    </nav>
  );
}

export { Navbar };
