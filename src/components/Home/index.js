import React from 'react'
import Bug from '../Bug'
import Ads from '../Ads'
import NormalCol from '../common/NormalCol'
import NormalRow from '../common/NormalRow'
import HomeLayout from '../Layout/Home'
import FriendRequest from '../FriendRequest'
import './Home.css'

const Home = () => {
  return (
    <HomeLayout>   
      <NormalRow classNames="justifyBetween">
        <NormalCol span={5}><div style={{border: "1px solid green"}}>1</div></NormalCol>
        <NormalCol span={14}><div style={{border: "1px solid green"}}>1</div></NormalCol>
        <NormalCol span={4}>
          <FriendRequest />
          <div className="gap-2"></div>
          <Ads />
          <div className="gap-2"></div>
          <Bug />
        </NormalCol>
      </NormalRow>
    </HomeLayout>
  )
}

export default Home
