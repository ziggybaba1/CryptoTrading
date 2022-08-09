import React from 'react';
import style from "./accountlist.module.scss"
import useTheme from "../../pages/theme/useTheme";
import { AiOutlineClose,AiOutlineCoffee } from "react-icons/ai"
import { AccountItem } from '../../bitComponents';
import { metamask,coinbase,walletconnect,fortmatic } from "../../assets"
import { ClipLoader, RotateLoader } from 'react-spinners';

function AccountList(props) {
    const theme=useTheme();
    return (
        <div className={style.accountContainer}>
            <div style={{backgroundColor:theme.colors.BACKGROUND}} className={style.accountColumn}>
            <div className={style.headerContainer}>
                <span style={{color:theme.colors.TEXT}}>Connect a wallet</span>
                <AiOutlineClose onClick={props.closeModal} style={{color:theme.colors.TEXT,cursor:'pointer'}} />
            </div>
            {!props.isLoading ? (
            <div className={style.itemList}>
            <AccountItem onClick={props.connectWallet} image={metamask} label="MetaMask" />
            <AccountItem image={coinbase} label="Coinbase Wallet" />
            <AccountItem image={walletconnect} label="WalletConnect" />
            <AccountItem  image={fortmatic} label="Fortmatic" />
            </div>
            ):(
                <div className={style.itemLoader}>
                    <ClipLoader color={theme.colors.TEXT}  />
                </div>  
            )}
            <div style={{backgroundColor:theme.colors.BACKGROUND_SEC,color:theme.colors.TEXT}} className={style.learnMoreContainer}>
                By connecting a wallet, you agree to Uniswap Labs’ <a href='#'>Terms of Service</a> and acknowledge that you have read and understand the Uniswap <a href='#'>Protocol Disclaimer.</a>
            </div>
            </div>
        </div>
    );
}

export default AccountList;