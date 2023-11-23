import React from 'react'
import "./about.css";
export const About = () => {
    return (
        <div className='a'>
            <div className='a-bg'></div>
            <div className='a-left'>
                <div className='a-card bg'></div>
                <div className='a-card'>
                    <img src='https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' className='a-img'></img>
                </div>
            </div>
            <div className='a-right'>
                <h1 className='a-title'>
                    About me
                </h1>
                <p className='a-sub'>
                    A dynamic professional, and a continuous learner, with over 1.10 years of experience in
                    technologies like Core Java with Java 8 features, J2EE, Spring REST, Spring Boot, Spring MVC,
                    hibernate, JPA, Maven, Gradle, React.JS, Liferay DXP
                </p>
                <p className='a-desc'>
                    A dynamic professional, and a continuous learner, with over 1.10 years of experience in
                    technologies like Core Java with Java 8 features, J2EE, Spring REST, Spring Boot, Spring MVC,
                    hibernate, JPA, Maven, Gradle, React.JS, Liferay DXP
                </p>
                <div className='a-award'>
                    <img className='a-award-img' src='https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXdhcmR8ZW58MHx8MHx8fDA%3D' alt=''></img>
                    <div className='a-award-texts'>
                        <h4 className='a-award-title'>Internation Web Dev</h4>
                        <p className='a-award-desc'>Are you searching for Developer png hd images or vector? Choose from 48000+ Developer graphic resources and download in the form of PNG, EPS, AI or PSD.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
