import React from 'react'
import NormalRow from '../../common/NormalRow'
import NormalCol from '../../common/NormalCol'
import Navbar from '../../Navbar'
import './Home.css'
import Footer from '../Footer'

const Home = ({
  children
}) => {
  return (
    <>
      <NormalRow>
        <NormalCol span={24}>
          <Navbar />
          <NormalCol span={24}>
            <div className="hl-container">
            {children}
            </div>
          </NormalCol>
        </NormalCol>    
      </NormalRow>
      <Footer />
    </>
  )
}

export default Home
