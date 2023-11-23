import React from 'react'
import "./intro.css"
import profile from "../../images/Marvel-Transparent.png";
export const Intro = () => {
    return (
        <div className='i'>
            <div className='i-left'>
                <div className='i-left-wrapper'>
                    <h2 className='i-intro'>Hello, My name is</h2>
                    <h2 className='i-name'>Ashwani rao</h2>
                    <div className='i-title'>
                        <div className='i-title-wrapper'>
                            <div className='i-title-item'>Web Developer </div>
                            <div className='i-title-item'>Java Developer </div>
                            <div className='i-title-item'>React Developer</div>
                            <div className='i-title-item'>Angular Developer</div>
                            <div className='i-title-item'>UI/UX</div>
                        </div>
                    </div>
                    <p className='i-desc'>
                        I am Java Developer, I have extensive experience in designing, developing, and maintaining web applications using Core Java, Spring Boot, Spring JPA, Hibernate, React, Angular. I possess excellent communication and analytical skills, which enable me to work collaboratively with cross- functional teams and deliver high-quality work.
                    </p>
                </div>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="40px"
                height="40px"
                fill="#000000"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className='i-scroll'
            >
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <circle cx="12 " cy="12" r="10" fill="none" />
                        <line x1="12" y1="2" x2="12" y2="6" />
                        <line x1="12" y1="18" x2="12" y2="22" />
                        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                        <line x1="2" y1="12" x2="6" y2="12" />
                        <line x1="18" y1="12" x2="22" y2="12" />
                        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
                    </g>
                </g>
            </svg>
            <div className='i-right'>
                <div className='i-bg'></div>
                <img src={profile} alt='Profile' className='i-img'></img>
            </div>
        </div>
    )
}
