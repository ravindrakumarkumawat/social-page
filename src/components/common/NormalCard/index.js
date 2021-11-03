import React from 'react'
import NormalRow from '../NormalRow'
import NormalCol from '../NormalCol'
import './NormalCard.css'

const NormalCard = ({
  borderRadius= true,
  background="bg-white",
  border=true,
  shadow=true,
  children,
}) => {
  return (
    <NormalRow>
      <NormalCol span={24}>
        <div className={`${background} ${border ? 'border': ''} ${shadow ? 'shadow': ''} ${borderRadius ? 'border-radius' : ''} padding-2`}>
          {children}
        </div>
      </NormalCol>      
    </NormalRow>
  )
}

export default NormalCard
