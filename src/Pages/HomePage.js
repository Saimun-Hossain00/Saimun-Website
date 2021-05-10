import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faMedium} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Saimun Hossain.</span>
                </h1>
                <p className="h-sub-text">
                I am Saimun Hossain Emon. I am working on web-development now. Web developer This is a dream of mine. By the grace of God, I have been able to come a long way with web development. There are thoughts of doing something good with this
                </p>
                <div className="icons">
                    <a href="https://www.facebook.com/saimun.sannyat" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </a>
                    <a href="https://github.com/Saimun-Hossain00" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                        
                    </a>
                    <a href="https://www.linkedin.com/in/saimun-hossain-a55188211" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon yt"/>
                    </a>

                    <a href="https://medium.com/@saimunhossaiemon" className="icon-holder">
                        <FontAwesomeIcon icon={faMedium} className="icon yt"/>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
