import React from 'react'
import NormalCard from '../common/NormalCard'
import NormalRow from '../common/NormalRow'

const Interest = () => {
  return (
    <NormalCard>
      <p>Interests</p>
      <NormalRow classNames={"flexWrap"}>
        <div className="tag-1 tag">News</div>
        <div className="tag-2 tag">W3Schools</div>
        <div className="tag-3 tag">Labels</div>
        <div className="tag-4 tag">Games</div>
        <div className="tag-5 tag">Friends</div>
        <div className="tag-6 tag">Games</div> 
        <div className="tag-7 tag">Friends</div>
        <div className="tag-8 tag">Food</div>
        <div className="tag-9 tag">Design</div> 
        <div className="tag-10 tag">Art</div>
        <div className="tag-11 tag">Photos</div>
      </NormalRow>
    </NormalCard>
  )
}

export default Interest
