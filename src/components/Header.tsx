import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <header className="header">
        <div className="header__content">
          <div
            className="header__text"
            style={{ pointerEvents: show ? "none" : "auto" }}
            onClick={() => !show && setShow(true)}
          >
            <h3 className="hobo_noTwo headerText">Credits</h3>
          </div>
          <div className="headerUnderline" />
        </div>
      </header>
      <div className={`menu ${show ? `showMenu` : `hideMenu`}`}>
        <div className="menu__content">
          <div
            className="menu__close hobo_noTwo"
            style={{ pointerEvents: "auto" }}
            onClick={() => show && setShow(false)}
          >
            X
          </div>
          <div className="menu__item">
            <a
              href="https://dribbble.com/shots/22504516-Weekend-Vibes"
              target="_blank"
              rel="noreferrer noopener"
              className="menu__link hobo_noTwo"
            >
              Dribble Design Inspiration
            </a>
            <div className="menuItemUnderline" />
          </div>
          <div className="menu__item">
            <a
              href="https://skfb.ly/o6xoI"
              target="_blank"
              rel="noreferrer noopener"
              className="menu__link hobo_noTwo"
            >
              3D Model Can from Sketchfab
            </a>
            <div className="menuItemUnderline" />
          </div>
          <div className="menu__item">
            <a
              href="https://en.bestfonts.pro/font/hobo-no2"
              target="_blank"
              rel="noreferrer noopener"
              className="menu__link hobo_noTwo"
            >
              Hobo No2 Font
            </a>
            <div className="menuItemUnderline" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
