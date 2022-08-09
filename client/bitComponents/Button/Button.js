import React, { useState } from 'react';
import useTheme from '../../pages/theme/useTheme';
import style from "./button.module.scss";
import PropTypes from 'prop-types';

function Button(props) {
    const [outlineColor,setOutlineColor]=useState({background:'',outline:''});
    const theme=useTheme();

    const handleHover=(e,t)=>{
        setOutlineColor({...outlineColor,[e]:t}) 
       }
    return (
        <div
        onClick={props.onClick}
         style={{backgroundColor:theme.colors.BUTTON_BACKGROUND,color:theme.colors.BUTTON_PRIMARY}}  className={`${style.confirmButton} && ${theme.type?style.hoverLightButton:style.hoverDarkButton}`}>
          {props.label}
        </div>
    );
}

Button.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.function 
  };

export default Button;