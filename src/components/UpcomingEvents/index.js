import React from 'react'
import NormalImg from '../common/NormalImg'
import Forest from '../../assets/images/forest.jpg'
import NormalCard from '../common/NormalCard'
import NormalButton from '../common/NormalButton'


const UpcomingEvents = () => {
  return (
    <NormalCard>    
      <div className="center">
          <p>Upcoming Events:</p>
          <NormalImg src={Forest} alt={"Forest"} />
          <p><strong>Holiday</strong></p>
          <p>Friday 15:00</p>
          <NormalButton name={"Info"} btntype={"info"}/>
      </div>
  </NormalCard>
  )
}

export default UpcomingEvents
