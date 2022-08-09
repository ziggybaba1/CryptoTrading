import React, { useContext } from 'react';
import style from "./activeaccount.module.scss"
import useTheme from "../../pages/theme/useTheme";
import { AiOutlineClose,AiOutlineCoffee } from "react-icons/ai"
import { FiCopy } from "react-icons/fi";
import { HiExternalLink } from "react-icons/hi"
import { metamask,coinbase,walletconnect,fortmatic } from "../../assets"
import Image from 'next/image';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { TransactionContext } from '../../context/TransactionContext';

function ActiveAccount(props) {
    const theme=useTheme();
    const [copiedText,setCopiedText]=React.useState("Copy Address");
    const { currentAccount,removeAccount}=useContext(TransactionContext);
    return (
        <div className={style.accountContainer}>
        <div style={{backgroundColor:theme.colors.BACKGROUND}} className={style.accountColumn}>
        <div className={style.headerContainer}>
            <span style={{color:theme.colors.TEXT}}>Account</span>
            <AiOutlineClose onClick={props.closeModal} style={{color:theme.colors.TEXT,cursor:'pointer'}} />
        </div>
        <div style={{backgroundColor:theme.colors.BACKGROUND,borderColor:theme.colors.TEXT_SECONDARY}} className={style.itemList}>
            <div className={style.topContainer}>
                <small style={{color:theme.colors.TEXT_SECONDARY}}>Connected with MetaMask</small>
                <a onClick={props.destroyAccount} className={style.buttonStyle}>Disconnect</a>
                <a onClick={props.switchAccount} className={style.buttonStyle}>Change</a>
            </div>  
            <div style={{justifyContent:'flex-start'}} className={style.topContainer}>
                <Image src={metamask} layout="fixed" height={20} width={20} />
                <span style={{color:theme.colors.TEXT,marginLeft:10}}>{`${currentAccount.slice(0,7)}...${currentAccount.slice(37)}`}</span>
            </div>  
            <div className={style.topContainer}>
            <CopyToClipboard text={currentAccount}
                onCopy={() => {setCopiedText('Copied');setTimeout(()=>{setCopiedText('Copy Address')},1000)}}>
               <div className={style.extContainer}>
                <FiCopy onClick={props.closeModal} style={{color:theme.colors.TEXT,cursor:'pointer'}} />
                <small style={{color:theme.colors.TEXT_SECONDARY,marginLeft:5}}>{copiedText}</small>
               </div>
            </CopyToClipboard>
               <a target="_blank" href={'https://etherscan.io/address/'+currentAccount} className={style.extContainer}>
                <HiExternalLink onClick={props.closeModal} style={{color:theme.colors.TEXT,cursor:'pointer'}} />
                <small style={{color:theme.colors.TEXT_SECONDARY,marginLeft:5}}>View on Explorer</small>
               </a>
            </div>  
        </div>
       
        </div>
        <div style={{backgroundColor:theme.colors.BACKGROUND_SEC,color:theme.colors.TEXT}} className={style.learnMoreContainer}>
        Your transactions will appear here...
        </div>
    </div>
    );
}

export default ActiveAccount;