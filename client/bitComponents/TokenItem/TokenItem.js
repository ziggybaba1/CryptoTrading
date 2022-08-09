import React, { useState } from 'react';
import useTheme from '../../pages/theme/useTheme';
import style from "./tokenitem.module.scss"
import ethLogo from '../../assets/eth.png'
import Image from 'next/image'

function TokenItem(props) {
    const [outlineColor,setOutlineColor]=useState({});
    const theme=useTheme();
    const handleHover=(e,t)=>{
        setOutlineColor({...outlineColor,[e]:t}) 
       }
    return (
        <button
        className={style.button}
             onMouseEnter={(e) => {
          handleHover('background',theme.colors.BACKGROUND_SEC);
                }}
        onMouseLeave={(e) => {
          handleHover('background',theme.colors.BACKGROUND);
                }}
                style={{backgroundColor:outlineColor.background?outlineColor.background:theme.colors.BACKGROUND}}
            >
            <div className={style.imageContainer}>
            <img layout='fixed' src={props.item?.logoURI} alt='eth logo' height={20} width={20} />
            </div>
            <div className={style.labelColumn}>
                <span style={{color:theme.colors.TEXT}}>{props.item?.name}</span>
                <small style={{color:theme.colors.TEXT_SECONDARY}}>{props.item?.symbol}</small>
            </div>
            </button>
    );
}

export default TokenItem;