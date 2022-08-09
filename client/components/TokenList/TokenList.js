import React, { useState } from 'react';
import style from './token.module.scss';
import { AiOutlineClose } from "react-icons/ai"

import useTheme from '../../pages/theme/useTheme';
import { TokenItem } from '../../bitComponents';
import Token from "../../data/token.json";


function TokenList(props) {
    const theme=useTheme();
    const tokenData=[
        {
            title:'ETH',
            label:'Ether',
            image:''

        }
    ]
    return (
        <div className={style.tokenContainer}>
            <div style={{backgroundColor:theme.colors.BACKGROUND}} className={style.tokenColumn}>
            <div className={style.headerContainer}>
                <span style={{color:theme.colors.TEXT}}>Select a token</span>
                <AiOutlineClose onClick={props.closeModal} style={{color:theme.colors.TEXT,cursor:'pointer'}} />
            </div>
            <div className={style.inputContainer}>
                <input placeholder="Search name or paste address" />
            </div>
            <hr />
            <div className={style.itemList}>
            {Token.tokens.map((item,index)=>(
                <TokenItem item={item} />
            ))}
            </div>
           
            </div>
        </div>
    );
}

export default TokenList;