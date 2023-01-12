import React from 'react';

const Info = () => {
    return (
        <div className="about_info grid">
            <div className="about_box">
                <i className='bx bx-award about_icon'></i>
                <h3 className="about_title">Experience</h3>
                <apan className="about_subtitle">8 Years Working</apan>
            </div>

            <div className="about_box">
                <i className='bx bx-briefcase-alt about_icon'></i>
                <h3 className="about_title">Completed</h3>
                <apan className="about_subtitle">48 + Projects</apan>
            </div>

            <div className="about_box">
                <i className='bx bx-support about_icon'></i>
                <h3 className="about_title">Support</h3>
                <apan className="about_subtitle">Online 24/7</apan>
            </div>
        </div>
    );
}

export default Info;
