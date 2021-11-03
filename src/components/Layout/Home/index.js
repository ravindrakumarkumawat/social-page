import React from 'react'
import NormalRow from '../../common/NormalRow'
import NormalCol from '../../common/NormalCol'
import Navbar from '../../Navbar'

const HomeLayout = ({
  children
}) => {
  return (
    <NormalRow>
      <NormalCol span={24}>
        <Navbar />
        <NormalCol span={24}>
          {children}
        </NormalCol>
      </NormalCol>    
    </NormalRow>
  )
}

export default HomeLayout
