import React, { useContext } from 'react'
import "./contact.css"
import { ThemeContext } from '../../context';
export const Contact = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='c'>
            <div className='c-bg'></div>
            <div className='c-wrapper'>
                <div className='c-left'>
                    <h1 className='c-title'>
                        Let's discuss your project
                    </h1>
                    <div className='c-info'>
                        <div className='c-info-item'>
                            <img className='c-icon' src='https://assets.stickpng.com/images/5a452570546ddca7e1fcbc7d.png' alt=''></img>
                            +1 123 232 23
                        </div>
                        <div className='c-info-item'>
                            <img className='c-icon' src='https://upload.wikimedia.org/wikipedia/commons/4/48/You%27ve_got_mail.png' alt=''></img>
                            contact@gamil.com
                        </div>
                        <div className='c-info-item'>
                            <img className='c-icon' src='https://cdn-icons-png.flaticon.com/512/3595/3595587.png' alt=''></img>
                            Crossing republik Ghaziabad.
                        </div>
                    </div>
                </div>
                <div className='c-right'>
                    <p className='c-desc'>
                        <b>What's your Story</b> Get in touch.
                        Always available for freelancing if the right project comes along me.
                    </p>
                    <form>
                        <input type='text' style={{ backgroundColor: darkMode && "#333", color: darkMode && 'white' }} placeholder='Name' name='user_name'></input>
                        <input type='text' style={{ backgroundColor: darkMode && "#333", color: darkMode && 'white' }} placeholder='Subject' name='subject'></input>
                        <input type='text' style={{ backgroundColor: darkMode && "#333", color: darkMode && 'white' }} placeholder='Email' name='user_email'></input>
                        <textarea rows={5} style={{ backgroundColor: darkMode && "#333", color: darkMode && 'white' }} placeholder='Message' name='message'></textarea>
                        <button >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
