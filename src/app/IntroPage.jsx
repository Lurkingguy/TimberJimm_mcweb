import React, { useState } from 'react';


const IntroPage = () => {
    const [menuActive, setMenuActive] = useState(false);

    const handleToggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <section className={`showcase ${menuActive ? 'active' : ''}`}>
          <header>
            <h2 className="logo">Timber_Jimm</h2>
            <div
              className={`toggle ${menuActive ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${menuIcon})`
              }}
              onClick={handleToggle}
            />
          </header>

          <video src={videoBg} muted loop autoPlay />
          <div className="text">
            <h2>WWelcome To Our World</h2>
            <p>Dive into our building stuff and also survival content</p>
            <a href="/home">Explore</a>
          </div>

          <ul className="social">
            <li><a href="#"><img src={facebookIcon} alt="Facebook"></img></a></li>
            <li><a href="#"><img src={youtubeIcon} alt="Youtube"></img></a></li>
            <li><a href="#"><img src={pinterestIcon} alt="Pinterest"></img></a></li>
            <li><a href="#"><img src={githubIcon} alt="Github"></img></a></li>
          </ul>
        </section>
    );
}