import React from 'react';
import style from './topnav.module.scss';
import { FiArrowUpRight } from "react-icons/fi"
import useTheme from '../../pages/theme/useTheme';

function TopNav(props) {
    const theme=useTheme();
    return (
        <div className={style.nav}>
        <div style={{backgroundColor:theme.colors.BACKGROUND,borderColor:theme.colors.BACKGROUND_SEC}} className={style.navItemsContainer}>
            <div
            style={{backgroundColor:props.selectedNav === 'swap'?theme.colors.BACKGROUND_SEC:null,color:theme.colors.TEXT}}
                onClick={()=> props.setSelectedNav('swap')}
                className={`${style.navItem}`}
            >Swap</div>
            <div
            style={{backgroundColor:props.selectedNav === 'pool'?theme.colors.BACKGROUND_SEC:null,color:theme.colors.TEXT}}
                onClick={()=> props.setSelectedNav('pool')}
                className={`${style.navItem} `}
            >Pool</div>
            <div
            style={{backgroundColor:props.selectedNav === 'vote'?theme.colors.BACKGROUND_SEC:null,color:theme.colors.TEXT}}
                onClick={()=> props.setSelectedNav('vote')}
                className={`${style.navItem}`}
            >Vote</div>
            <a
            style={{color:theme.colors.TEXT}}
            href='https://info.uniswap.org/#/'
            target='_blank'
            rel='noreferrer'
            >
            <div className={style.navItem}>
            Charts <FiArrowUpRight />
            </div>
            </a>
        </div>  
    </div>
    );
}

export default TopNav;