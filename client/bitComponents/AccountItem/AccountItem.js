import React from 'react';
import Image from "next/image";
import style from "./accountitem.module.scss";
import useTheme from '../../pages/theme/useTheme';

function AccountItem(props) {
    const theme=useTheme();
    return (
        <div onClick={props.onClick} style={{backgroundColor:theme.colors.BACKGROUND_SEC}} className={`${style.itemContainer} && ${theme.type?style.lightHover:style.darkHover}`}>
            <span style={{color:theme.colors.TEXT}}>{props.label}</span>
            <Image src={props.image}  width={20} height={20} layout="fixed" />
        </div>
    );
}

export default AccountItem;