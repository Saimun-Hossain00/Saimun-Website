import React from 'react';
import a from '../img/a.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={a} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Saimun Hossain </span></h4>
                <p className="about-text">
                I am Saimun Hossain Emon. I am working on web-development now. Web developer This is a dream of mine. By the grace of God, I have been able to come a long way with web development. There are thoughts of doing something good with this
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Saimun Hossain</p>
                        <p>: 23</p>
                        <p>: Bangladesh</p>
                        <p>: Bangla English</p>
                        <p>: Dhaka Bangladesh</p>
                        <p>: Bangladesh</p>
                    </div>
                </div>

                <a href="https://drive.google.com/file/d/19l5J-wuh7nL4w-m3N_QDbPVtCiWYITx4/view?usp=drivesdk"
                            className="resume-button"> Download
                                CV</a>
            </div>
        </div>
    )
}

export default ImageSection;
