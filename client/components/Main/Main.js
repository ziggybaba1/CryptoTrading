
import { FiSettings } from 'react-icons/fi'
import { AiOutlineDown, AiOutlineArrowDown } from 'react-icons/ai'
import {GiGasPump} from "react-icons/gi"
import ethLogo from '../../assets/eth.png'
import { useContext, useState } from 'react'
import { TransactionContext } from '../../context/TransactionContext'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
import TransactionLoader from '../TransactionLoader';
import style from "./main.module.scss";
import useTheme from '../../pages/theme/useTheme';
import {PriceHolder,ExchangeInfo, Button} from "../../bitComponents"
import TokenList from '../TokenList/TokenList'
import ActiveAccount from '../ActiveAccount/ActiveAccount'

Modal.setAppElement('#__next')

// const style = {
//   wrapper: `w-screen flex items-center justify-center mt-14`,
//   content: `bg-[#191B1F] w-[40rem] rounded-2xl p-4`,
//   formHeader: `px-2 flex items-center justify-between font-semibold text-xl`,
//   transferPropContainer: `bg-[#20242A] my-3 rounded-2xl p-6 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between`,
//   transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl`,
//   currencySelector: `flex w-1/6`,
//   currencySelectorContent: `w-full h-min flex justify-between items-center bg-[#2D2F36] hover:bg-[#41444F] rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]`,
//   currencySelectorIcon: `flex items-center`,
//   currencySelectorTicker: `mx-2`,
//   currencySelectorArrow: `text-lg`,
//   confirmButton: `bg-[#2172E5] my-2 rounded-2xl py-6 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer border border-[#2172E5] hover:border-[#234169]`,
// }

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

const Main = () => {
  const { formData, handleChange, sendTransaction } =
    useContext(TransactionContext);
    const [isTokenModal,setTokenModal]=useState(false);
    const [isAccountModal,setAccountModal]=useState(false);
  const router = useRouter();
  const theme=useTheme();
  

  const handleSubmit = async (e) => {
    const { addressTo, amount } = formData
    e.preventDefault()

    if (!addressTo || !amount) return

    sendTransaction()
  }

  const retrieveToken=()=>{
    setTokenModal(true);
  }

  return (
    <div className={style.wrapper}>
      <div style={{backgroundColor:theme.colors.BACKGROUND}} className={style.content}>
        <div className={style.formHeader}>
          <div className={style.titleText}>Swap</div>
          <div>
            <FiSettings className={style.iconSetting} />
          </div>
        </div>
        <PriceHolder  
        name={'amount'}
        pattern={'^[0-9]*[.,]?[0-9]*$'}
        placeholder={'0.0'} 
        select={true}
        handleChange={handleChange} onClick={retrieveToken} />
        <div style={{backgroundColor:theme.colors.BACKGROUND}} className={style.changeLayout}>
            <AiOutlineArrowDown style={{backgroundColor:theme.colors.BACKGROUND_SEC, color:theme.colors.TEXT,borderColor:theme.colors.BACKGROUND}} className={style.iconLayoutChange} />
        </div>
        <PriceHolder
        placeholder={'0x....'} 
         name={'addressTo'} 
         handleChange={handleChange} onClick={retrieveToken}  />
        {/* <ExchangeInfo /> */}
       <Button
       onClick={e => handleSubmit(e)}
       label={'CONNECT WALLET'}
        />
      </div>
      <Modal isOpen={isTokenModal} style={customStyles}>
        <TokenList closeModal={()=>setTokenModal(false)} />
      </Modal>
      <Modal isOpen={isAccountModal} style={customStyles}>
        <ActiveAccount closeModal={()=>setAccountModal(false)} />
      </Modal>
      <TransactionLoader isModal={!!router.query.loading} />
    </div>
  )
}

export default Main