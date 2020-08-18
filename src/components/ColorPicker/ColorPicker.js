import React, { useState } from 'react';
import './ColorPicker.css';
import SettingsIcon from '../../svgs/settings.svg';

/**
* Component that allows users to switch the color of a post to be posted.
* @param props 
*/

function ColorPicker(props) {

    const [color, setColor] = useState("#a3b2a5");

    /**
    * When users has choosen a color this method will set the state in this component, 
    * and return the same to the parent component.
    * @param {string} color - The color that the user has selected.
    */

    const changeColor = (color) => {
        setColor(color);
        props.setPostColor(color);
    }

    return (
        <div className="dropdown">
            <button className="dropbtn" style={{ backgroundColor: color }}>
                <img className="settingsIcon" src={SettingsIcon} alt="Settings Icon" style={{ color: color }} />
            </button>
            <div className="dropdown-content">
                <div onClick={() => { changeColor("#c3ccd6") }}></div>
                <div onClick={() => { changeColor("#a3b2a5") }}></div>
                <div onClick={() => { changeColor("#d9c8d5") }}></div>
            </div>
        </div>
    );
}


export default ColorPicker;
