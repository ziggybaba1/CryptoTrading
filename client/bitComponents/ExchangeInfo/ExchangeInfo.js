import React, { useState } from 'react';
import useTheme from '../../pages/theme/useTheme';
import style from "./exchangeinfo.module.scss";
import { AiOutlineDown, AiOutlineArrowDown } from 'react-icons/ai'
import {GiGasPump} from "react-icons/gi"

function ExchangeInfo(props) {
    const [outlineColor,setOutlineColor]=useState({});
    const theme=useTheme();

    const handleHover=(e,t)=>{
        setOutlineColor({...outlineColor,[e]:t}) 
       }
    return (
        <div 
        className={`${style.extraContainer} && ${theme.type?style.lightExtra:style.darkExtra}`}>
          <span style={{color:theme.colors.TEXT}}>1 FORTH = 11.76 0xBTC</span>
          <div className={style.gasContainer}>
            <div style={{backgroundColor:theme.colors.BACKGROUND}} className={style.gasTextContainer}>
              <GiGasPump style={{color:theme.colors.TEXT_SECONDARY}} className={style.iconGas} />
              <small style={{color:theme.colors.TEXT_SECONDARY}}>$4.46</small>
            </div>
            <AiOutlineDown style={{color:theme.colors.TEXT}} className={style.gasSelectorArrow} />
          </div>
        </div>
    );
}

export default ExchangeInfo;