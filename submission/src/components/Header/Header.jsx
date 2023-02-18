import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as OpenMenu } from '../../images/icon-menu.svg';
import { ReactComponent as CloseMenu } from '../../images/icon-menu-close.svg';
import { useState } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div id="header-container">
            <Logo />
            <nav id="header-nav">
                <div
                    id="menu"
                    className={`${
                        mobileMenuOpen ? 'menu-visible' : 'menu-invisible'
                    }`}
                >
                    <div id="menu-items-container">
                        <a className="menu-item" href="/">
                            Home
                        </a>
                        <a className="menu-item" href="/">
                            New
                        </a>
                        <a className="menu-item" href="/">
                            Popular
                        </a>
                        <a className="menu-item" href="/">
                            Trending
                        </a>
                        <a className="menu-item" href="/">
                            Categories
                        </a>
                    </div>
                </div>
                <button
                    id="nav-menu-button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <CloseMenu /> : <OpenMenu />}
                </button>
            </nav>
        </div>
    );
}
