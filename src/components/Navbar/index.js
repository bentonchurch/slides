import { NavButton } from './NavButton.js';
import { GithubNavButton } from './GithubButton.js';
import { useImperativeHandle, useState } from 'react';
import './styles.css';

function Navbar() {
  const [leftButtons, setLeftButtons] = useState([]);
  const [rightButtons, setRightButtons] = useState([]);

  // useImperativeHandle(ref, () => {
  //   return {
  //     setLeftButtons,
  //     setRightButtons
  //   };
  // }, []);
  
  return (
    <nav>
      <div className="nav-left">
        <NavButton icon="arrow_back_ios_new" iconStyle="round" />
      </div>
      <div className="nav-right">
        <NavButton icon="info" iconStyle="outlined" />
        <GithubNavButton />
        <NavButton icon="settings" iconStyle="round" />
        <NavButton icon="account_circle" iconStyle="round" />
      </div>
    </nav>
  );
}

export { Navbar };
