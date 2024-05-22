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
            <li onClick={closeSubMenu}>
              <ScrollLink to="sectionContact" smooth={true} duration={700}>
                Contact
              </ScrollLink>
            </li>
            <li
              onMouseEnter={() => setIsSubMenuOpen(true)}
              onMouseLeave={() => setIsSubMenuOpen(false)}
              onClick={closeSubMenu}
            >
              <ScrollLink smooth={true} duration={700}>
                Services
                {isSubMenuOpen && (
                  <div className="container-lunch">
                    <ScrollLink to="BoitesALunch" smooth={true} duration={700}>
                      <div className="Title-menu">Boîtes à lunch</div>
                    </ScrollLink>
                    <ScrollLink to="Receptions" smooth={true} duration={700}>
                      <div className="Title-menu">Réceptions</div>
                    </ScrollLink>
                    <ScrollLink to="Menus-Végés" smooth={true} duration={700}>
                      <div className="Title-menu">Menus Végés</div>
                    </ScrollLink>
                    <ScrollLink to="Desserts" smooth={true} duration={700}>
                      <div className="Title-menu">Desserts</div>
                    </ScrollLink>
                  </div>
                )}
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
