import React from 'react'
import NormalCard from '../common/NormalCard'
import NormalRow from '../common/NormalRow'

const Interest = () => {
  return (
    <NormalCard>
      <p>Interests</p>
      <NormalRow classNames={"flexWrap"}>
        <div className="tag-1 small">News</div>
        <div className="tag-2 small">W3Schools</div>
        <div className="tag-3 small">Labels</div>
        <div className="tag-4 small">Games</div>
        <div className="tag-5 small">Friends</div>
        <div className="tag-6 small">Games</div> 
        <div className="tag-7 small">Friends</div>
        <div className="tag-8 small">Food</div>
        <div className="tag-9 small">Design</div> 
        <div className="tag-10 small">Art</div>
        <div className="tag-11 small">Photos</div>
      </NormalRow>
    </NormalCard>
  )
}

export default Interest
