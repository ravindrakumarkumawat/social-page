import React from 'react'
import NormalCol from '../common/NormalCol'
import NormalRow from '../common/NormalRow'
import HomeLayout from '../Layout/Home'
import './Home.css'

const Home = () => {
  return (
    <HomeLayout>   
      <NormalRow classNames="justifyBetween">
        <NormalCol span={5}><div style={{border: "1px solid green"}}>1</div></NormalCol>
        <NormalCol span={14}><div style={{border: "1px solid green"}}>1</div></NormalCol>
        <NormalCol span={4}><div style={{border: "1px solid green"}}>1</div></NormalCol>
      </NormalRow>
    </HomeLayout>
  )
}

export default Home
