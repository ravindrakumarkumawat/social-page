import React from 'react'
import Bug from '../Bug'
import Ads from '../Ads'
import NormalCol from '../common/NormalCol'
import NormalRow from '../common/NormalRow'
import HomeLayout from '../Layout/Home'
import FriendRequest from '../FriendRequest'
import './Home.css'
import UpcomingEvents from '../UpcomingEvents'
import Profile from '../Profile'
import Interest from '../Interests'
import AlertBox from '../AlertBox'

const Home = () => {
  return (
    <HomeLayout>   
      <NormalRow classNames="justifyBetween">
        <NormalCol span={5}>
          <Profile />
          <div className="gap-2"></div>
          <Interest />
          <div className="gap-2"></div>
          <AlertBox />
        </NormalCol>
        <NormalCol span={14}><div style={{border: "1px solid green"}}>1</div></NormalCol>
        <NormalCol span={4}>
          <UpcomingEvents />
          <div className="gap-2"></div>
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
