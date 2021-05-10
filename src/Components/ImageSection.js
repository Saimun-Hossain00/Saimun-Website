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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptatum necessitatibus perferendis numquam dolorem cumque facilis.
                    Desir per po la ta doso vi slone ve?
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
