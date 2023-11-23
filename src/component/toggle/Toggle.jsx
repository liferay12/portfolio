import React, { useContext } from 'react'
import "./toggle.css"
import pics from "../../images/processed-d15cb20b-bbee-4c7f-ab06-83c1dc307d01_1SrC6zNF.jpeg"
import sun from "../../images/light.png"
import moon from "../../images/black-crescent-moon-png-1.png"
import { ThemeContext } from '../../context';
export const Toggle = () => {
    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" })
    }
    return (
        <div className='t'>
            {/* sun  */}
            <img src={sun} alt='' className='t-icon'></img>
            {/* moon  */}
            <img src={moon} alt='' className='t-icon'></img>
            <div className='t-button' onClick={handleClick} style={{ left: theme.state.darkMode ? 0 : 25 }}></div>
        </div>
    )
}
