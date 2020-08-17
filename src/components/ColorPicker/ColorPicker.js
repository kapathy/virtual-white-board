import React, { useState } from 'react';
import './ColorPicker.css';
import SettingsIcon from '../../svgs/settings.svg';


function ColorPicker(props) {

    const [color, setColor] = useState("#a3b2a5");

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
