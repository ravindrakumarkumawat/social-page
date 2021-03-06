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
import Activities from '../Activities'
import Status from '../Status'
import Posts from '../Posts'

const Home = () => {
  return (
    <HomeLayout>   
      <NormalRow classNames="justifyBetween">
        <NormalCol span={5}>
          <Profile />
          <div className="gap-2"></div>
          <Activities />
          <div className="gap-2"></div>
          <Interest />
          <div className="gap-2"></div>
          <AlertBox />
          <div className="gap-2"></div>
        </NormalCol>
        <NormalCol span={14}>
          <Status />
          <div className="gap-2"></div>
          <Posts />
          <div className="gap-2"></div>
        </NormalCol>
        <NormalCol span={4}>
          <UpcomingEvents />
          <div className="gap-2"></div>
          <FriendRequest />
          <div className="gap-2"></div>
          <Ads />
          <div className="gap-2"></div>
          <Bug />
          <div className="gap-2"></div>
        </NormalCol>
      </NormalRow>
    </HomeLayout>
  )
}

export default Home
