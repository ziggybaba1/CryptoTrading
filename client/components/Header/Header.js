import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import style from "./header.module.scss"
import uniswapLogo from '../../assets/uniswap.png'
import { useContext } from 'react'
import { TransactionContext } from '../../context/TransactionContext'
import { client } from '../../lib/sanityClient';
import useTheme from '../../pages/theme/useTheme.js';
import { ToggleButton, TopNav } from '../../bitComponents';
import { HiOutlineDotsVertical } from "react-icons/hi"
import { Earth } from '../../assets';

// const style = {
//     wrapper: `p-4 w-screen flex justify-between items-center`,
//     headerLogo: `flex w-1/4 items-center justify-start`,
//     buttonsContainer: `flex w-1/4 justify-end items-center`,
//     button: `flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer`,
//     buttonPadding: `p-2`,
//     buttonTextContainer: `h-8 flex items-center`,
//     buttonIconContainer: `flex items-center justify-center w-8 h-8`,
//     buttonAccent: `bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]`,
//   }

const Header = () => {
    const [selectedNav, setSelectedNav] = useState('swap');
    const [userName, setUserName] = useState('')
  const { connectWallet, currentAccount } = useContext(TransactionContext);
  const theme=useTheme();
  const [type, setType] = useState({});

  useEffect(() => {
    if (currentAccount) {
      ;(async () => {
        const query = `
        *[_type=="users" && _id == "${currentAccount}"] {
          userName,
        }
        `
        const clientRes = await client.fetch(query)

        if (!(clientRes[0].userName == 'Unnamed')) {
          setUserName(clientRes[0].userName)
        } else {
          setUserName(
            `${currentAccount.slice(0, 7)}...${currentAccount.slice(35)}`,
          )
        }
      })()
      setUserName(
        `${currentAccount.slice(0, 7)}...${currentAccount.slice(35)}`,
      )
    }
  }, [currentAccount]);

  useEffect(()=>{
    setType(type);
  },[theme.type]);

  const selectNetwork=(type,background)=>{
    setType({...type,['background']:background,['type']:type});
  }

  const updateTheme=(ref)=>{
    theme.updateTheme(ref);
    selectNetwork(type);
  }

    return (
      <>
        <div className={style.wrapper}>
            <div className={style.headerContainer}>
            <Image src={uniswapLogo} alt="uniswap" height={40} width={40} />
            </div>
            <TopNav selectedNav={selectedNav}  setSelectedNav={setSelectedNav} />
          <ToggleButton updateTheme={updateTheme} selectNetwork={selectNetwork} connectWallet={connectWallet} currentAccount={currentAccount} userName={userName} /> 
        </div>
        {/* <div style={{position:'absolute',top:30,zIndex:0, width: '100vw',height: '100vh',transform: 'unset', backgroundImage:`url(${Earth})`}}></div> */}
        <div style={{position:'absolute',top:0,zIndex:-1, width: '100vw',height: '100vh',transform: 'unset', background:type.background?type.background:theme.colors.MAIN.MAIN}}></div>
        </>
    );
};

export default Header;