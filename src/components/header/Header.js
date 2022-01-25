import React from 'react';
import coverImage from './public/cover-image.jpg';

function Header() {
    return (
        <section className="header">
            <h1 id="about">KumiYAM</h1>
            <img src={coverImage} className="cover" style={{ width: "100%" }} alt="cover" />
        </section>
    );
}

export default Header;