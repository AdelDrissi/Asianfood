import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        <a className="food-asian" href="Accueil">
          <p className="name">Food Asian</p>
        </a>
        <div
          className={`anchorLinks ${isSubMenuOpen ? 'anchorLinks--open' : ''}`}
        >
          <ul className="anchorLinks__list">
            <li onClick={closeSubMenu}>
              <ScrollLink to="homeSection" smooth={true} duration={700}>
                Accueil
              </ScrollLink>
            </li>
            <li onClick={closeSubMenu}>
              <ScrollLink to="aboutSection" smooth={true} duration={700}>
                Infos
              </ScrollLink>
            </li>
            <li
              onMouseEnter={() => setIsSubMenuOpen(true)}
              onMouseLeave={() => setIsSubMenuOpen(false)}
              onClick={closeSubMenu}
            >
              <ScrollLink to="Services" smooth={true} duration={700}>
                Services
                {isSubMenuOpen && (
                  <div className="container-lunch">
                    <div className="Title-menu">Boîtes à lunch</div>
                    <div className="Title-menu">Pour les réceptions</div>
                    <div className="Title-menu">Menus Végés</div>
                    <div className="Title-menu">Les Desserts</div>
                    <div className="Title-menu">Les Evenements</div>
                  </div>
                )}
              </ScrollLink>
            </li>
            <li onClick={closeSubMenu}>
              <ScrollLink to="sectionContact" smooth={true} duration={700}>
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
        <div className="IconResponsive">
          <FontAwesomeIcon
            icon={faBars}
            className="NavbarIcons"
            onClick={toggleSubMenu}
            aria-label="menu de navigation"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
