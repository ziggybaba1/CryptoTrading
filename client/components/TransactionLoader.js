import { css } from '@emotion/react'
import { MoonLoader } from 'react-spinners'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#0a0b0d',
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(10, 11, 13, 0.75)',
  },
}

const style = {
  wrapper: `text-white h-96 w-72 flex flex-col justify-center items-center`,
  title: `font-semibold text-xl mb-12`,
}

const cssOverride = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`

const TransactionLoader = (props) => {
  return (
    <Modal isOpen={props.isModal} style={customStyles}>
    <div className={style.wrapper}>
      <div className={style.title}>Transaction in progress...</div>
      <MoonLoader color={'#fff'} loading={true} css={cssOverride} size={50} />
    </div>
    </Modal>
  )
}

export default TransactionLoader