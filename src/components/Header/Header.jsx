import React from 'react';
import './Header.css';

const Header = ({ headTitle, headerExpanded }) => {
    return (
        <div className="head-container">
            <img
                src="https://e1.pxfuel.com/desktop-wallpaper/490/584/desktop-wallpaper-anonymous-red-mask-neon-neon-anonymous.jpg"
                className={`head-image ${
                    headerExpanded
                        ? 'head-image-expanded'
                        : 'head-image-contracted'
                }`}
                alt="headerImage"
            />
            <h1
                className={`head-text ${
                    headerExpanded
                        ? 'head-text-expanded'
                        : 'head-text-contracted'
                }`}
            >
                {headTitle}
            </h1>
        </div>
    );
};

export default Header;