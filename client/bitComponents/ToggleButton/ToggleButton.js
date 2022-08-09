import React, { useContext, useState } from 'react';
import style from "./togglebutton.module.scss"
import Image from 'next/image';
import { AiOutlineDown,AiOutlineCoffee } from "react-icons/ai"
import { HiOutlineDotsVertical,HiOutlineDocumentText } from "react-icons/hi";
import { FiInfo,FiHelpCircle,FiBookOpen,FiSun } from "react-icons/fi";
import { BsFillMoonFill } from "react-icons/bs"
import { TbWorld } from "react-icons/tb"
import { FaComment, FaEthereum } from "react-icons/fa"
import ethLogo from "../../assets/eth.png"
import useTheme from '../../pages/theme/useTheme';
import Modal from 'react-modal'
import {Ethereum,Arbitrum,Celo,Optimism,Polygon,logoDark,EthereumCurrency} from "../../assets"
import AccountList from "../../components/AccountList/AccountList";
import ActiveAccount from '../../components/ActiveAccount/ActiveAccount';
import { TransactionContext } from '../../context/TransactionContext';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'transparent',
      padding: 0,
      border: 'none',
    },
    overlay: {
      backgroundColor: 'rgba(10, 11, 13, 0.75)',
    },
  }
function ToggleButton(props) {
    const [menuList,setMenuList]=useState(false);
    const [menuList_2,setMenuList_2]=useState(false);
    const [isTokenModal,setTokenModal]=useState(false);
    const [isAccountModal,setAccountModal]=useState(false);
    const { connectWallet, currentAccount,removeAccount } = useContext(TransactionContext);
    const theme=useTheme();
    return (
        <div className={style.buttonsContainer}>
        <div
          onMouseEnter={()=>setMenuList_2(true)}
          onMouseLeave={()=>setMenuList_2(false)}
        style={{backgroundColor:theme.colors.BACKGROUND_SEC}} className={`${style.button} ${style.buttonPadding}`}>
            <div
             className={style.buttonImageContainer}>
                <Image layout='fixed'  src={ethLogo} alt='eth logo' height={20} width={20} />
                <p style={{color:theme.colors.TEXT}}>Ethereum</p>
                <AiOutlineDown style={{color:theme.colors.TEXT,marginLeft:2}} />
            </div>
                <div style={{backgroundColor:theme.colors.BACKGROUND_SEC,borderColor:theme.colors.BACKGROUND,right:'10%',width:250,padding:10}} className={menuList_2?style.categoryData:style.nocategoryData}>
                <span style={{color:theme.colors.TEXT_LIGHT,margin:10}}>Select a Network</span>
                    <ul className={style.listCategory}>
                        <li onClick={()=>props.selectNetwork('ethereum',theme.colors.MAIN.MAIN)} style={{color:theme.colors.TEXT_LIGHT,justifyContent:'flex-start'}}>
                        <Image layout='fixed' src={Ethereum} width={22} height={22} />
                        <a style={{marginLeft:10}}>Ethereum</a>
                        </li>
                        <li onClick={()=>props.selectNetwork('polygon',theme.colors.MAIN.POLY)} style={{color:theme.colors.TEXT_LIGHT,justifyContent:'flex-start'}}>
                        <Image layout='fixed' src={Polygon} width={22} height={22} />
                        <a style={{marginLeft:10}} >Polygon</a>
                        </li>
                        <li onClick={()=>props.selectNetwork('optimism',theme.colors.MAIN.OPT)} style={{color:theme.colors.TEXT_LIGHT,justifyContent:'flex-start'}}>
                        <Image layout='fixed' src={Optimism} width={22} height={22} />
                        <a style={{marginLeft:10}} >Optimism</a>
                        </li>
                        <li onClick={()=>props.selectNetwork('arbitrum',theme.colors.MAIN.ARB)} style={{color:theme.colors.TEXT_LIGHT,justifyContent:'flex-start'}}>
                        <Image layout='fixed' src={Arbitrum} width={22} height={22} />
                        <a style={{marginLeft:10}}>Arbitrum</a>
                        </li>
                        <li onClick={()=>props.selectNetwork('celo',theme.colors.MAIN.CELO)} style={{color:theme.colors.TEXT_LIGHT,justifyContent:'flex-start'}}>
                        <Image layout='fixed' src={Celo} width={22} height={22} />
                        <a style={{marginLeft:10}} >Celo</a>
                        </li>
                    </ul>
                </div>
      </div>
      {currentAccount ? (
        <div className={`${style.button}`}>
          <div 
           style={{backgroundColor:theme.colors.BUTTON_BACKGROUND,color:theme.colors.BUTTON_PRIMARY,borderColor:theme.colors.BACKGROUND}}
          className={style.buttonAccent}>
          {/* <div className={style.priceContainer}>
            <span>0 ETH</span>
          </div> */}
          <div
           onClick={() =>{setAccountModal(true);setTokenModal(false);}} style={{backgroundColor:theme.colors.BACKGROUND_SEC,color:theme.colors.BACKGROUND_SEC,color:theme.colors.TEXT}} className={style.imageContainer}>
          {`${currentAccount?.slice(0,6)}...${currentAccount?.slice(38)}`}
          <div className={style.svgRound} >
          <svg x="0" y="0" width="16" height="16"><rect x="0" y="0" width="16" height="16" transform="translate(1.4941203568475665 0.3998559191631952) rotate(48.8 8 8)" fill="#FB1860"></rect><rect x="0" y="0" width="16" height="16" transform="translate(-1.9894439518238485 7.773619299234488) rotate(126.7 8 8)" fill="#189AF2"></rect><rect x="0" y="0" width="16" height="16" transform="translate(-11.284012228647567 -7.529401791354431) rotate(287.4 8 8)" fill="#F29E02"></rect></svg>
          </div>
          </div>
          </div>
        </div>
      ) : (
        <div
          onClick={() => {setTokenModal(true);setAccountModal(false)}}
          className={`${style.button} `}
        >
          <div
           style={{backgroundColor:theme.colors.BUTTON_BACKGROUND,color:theme.colors.BUTTON_PRIMARY,borderColor:theme.colors.BACKGROUND}}
           className={`${style.buttonAccent} `}>
            <p>Connect Wallet</p>
          </div>
        </div>
      )}
      <div
      onClick={()=>setMenuList(!menuList)}
       style={{backgroundColor:theme.colors.BACKGROUND_SEC}}
       className={`${style.button} ${style.buttonPadding}`}>
          <div className={`${style.buttonIconContainer} mx-2`}>
            <HiOutlineDotsVertical style={{color:theme.colors.TEXT}} />
          </div>
          <div style={{backgroundColor:theme.colors.BACKGROUND_SEC,borderColor:theme.colors.BACKGROUND}} className={menuList?style.categoryData:style.nocategoryData}>
            <ul className={style.listCategory}>
            <li style={{color:theme.colors.TEXT_LIGHT}}>
            <a>About</a>
            <FiInfo style={{marginRight:5}} />
            </li>
            <li style={{color:theme.colors.TEXT_LIGHT}}>
            <a>Help Center</a>
            <FiHelpCircle style={{marginRight:5}} />
            </li>
            <li style={{color:theme.colors.TEXT_LIGHT}}>
            <a>Request Features</a>
            <AiOutlineCoffee style={{marginRight:5}} />
            </li>
            <li style={{color:theme.colors.TEXT_LIGHT}}>
            <a>Discord</a>
            <FaComment style={{marginRight:5}} />
            </li>
            <li style={{color:theme.colors.TEXT_LIGHT}}>
            <a>Language</a>
            <TbWorld style={{marginRight:5}} />
            </li>
            {!theme.type&&<li onClick={()=>props.updateTheme(true)} style={{color:theme.colors.TEXT_LIGHT}}>
            <a  >{'Light Theme'}</a>
            <BsFillMoonFill style={{marginRight:5}} />
            </li>}
            {theme.type&&<li onClick={()=>props.updateTheme(false)} style={{color:theme.colors.TEXT_LIGHT}}>
            <a  >{'Dark Theme'}</a>
            <FiSun style={{marginRight:5}} />
            </li>}
            <li style={{color:theme.colors.TEXT_LIGHT}}>
            <a >Docs</a>
            <FiBookOpen style={{marginRight:5}} />
            </li>
            <li style={{color:theme.colors.TEXT_LIGHT}}>
            <a >Legal & Privacy</a>
            <HiOutlineDocumentText style={{marginRight:5}} />
            </li>
            </ul>
          </div>  
        </div>
        <Modal isOpen={isTokenModal} style={customStyles}>
        <AccountList connectWallet={props.connectWallet} closeModal={()=>setTokenModal(false)} />
      </Modal>
      {currentAccount&&
      <Modal isOpen={isAccountModal} style={customStyles}>
        <ActiveAccount destroyAccount={()=>{setAccountModal(false);removeAccount()}} switchAccount={()=>{setTokenModal(true);setAccountModal(false)}} userName={props.userName} currentAccount={currentAccount}  closeModal={()=>setAccountModal(false)} />
      </Modal>}
      </div>
    );
}

export default ToggleButton;