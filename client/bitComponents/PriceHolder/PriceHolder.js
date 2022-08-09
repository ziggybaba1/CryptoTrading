import React, { useState } from 'react';
import useTheme from '../../pages/theme/useTheme';
import style from "./priceholder.module.scss"
import ethLogo from '../../assets/eth.png'
import Image from 'next/image'
import { AiOutlineDown, AiOutlineArrowDown } from 'react-icons/ai'

function PriceHolder(props) {
    const [outlineColor,setOutlineColor]=useState({background:'',outline:''});
    const theme=useTheme();

    const handleHover=(e,t)=>{
        setOutlineColor({...outlineColor,[e]:t}) 
       }

    return (
        <div
         style={{backgroundColor:theme.colors.BACKGROUND_SEC}} className={`${style.transferPropColContainer} && ${theme.type?style.outlineLightContainer:style.outlineDarkContainer}`}>
        <div className={style.transferPropContainer}>
          <input
            type='text'
            style={{colorPlaceholder:theme.colors.TEXT_SECONDARY,color:theme.colors.TEXT}}
            className={style.transferPropInput}
            placeholder={props.placeholder}
            pattern={props.pattern}
            onChange={e=>props.handleChange(e,props.name)}
          />
          {props.select&&
          <div className={style.currencySelector}>
            <div
            onClick={props.onClick}
             style={{backgroundColor:theme.colors.BACKGROUND_PRIMARY,borderColor:theme.colors.BACKGROUND_PRIMARY}} className={`${style.currencySelectorContent} && ${theme.type?style.backLightContainer:style.backDarkContainer}`}>
              <div className={style.currencySelectorIcon}>
                <Image layout='fixed' src={ethLogo} alt='eth logo' height={20} width={20} />
              </div>
              <div style={{color:theme.colors.TEXT}} className={style.currencySelectorTicker}>ETH</div>
              <AiOutlineDown style={{color:theme.colors.TEXT}} className={style.currencySelectorArrow} />
            </div>
          </div>}
        </div>
        {/* <span style={{color:theme.colors.TEXT_SECONDARY}}>$13.00</span> */}
        </div>
    );
}

export default PriceHolder;