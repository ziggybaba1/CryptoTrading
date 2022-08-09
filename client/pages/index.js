import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import style from "../styles/home.module.scss";
import _JSXStyle from 'styled-jsx/style'
import TokenList from "../components/TokenList/TokenList"

import TransactionHistory from '../components/TransactionHistory'

// const style = {
//   wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`,
// }

export default function Home() {
  return (
    <div  className={style.wrapper}>
      <Header />
      <Main />
      <TransactionHistory />
    </div>
  )
}


