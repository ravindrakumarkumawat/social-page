import React from 'react'
import NormalCard from '../common/NormalCard'
import Avatar2 from "../../assets/images/avatar2.png"
import Lights from "../../assets/images/lights.jpg"
import Nature from "../../assets/images/nature.jpg"
import NormalImg from '../common/NormalImg'
import NormalButton
 from '../common/NormalButton'
import NormalRow from '../common/NormalRow'
import './Posts.css'
const Posts = () => {
  return (
    <NormalCard>        
        <div className="container card white round margin"><br/>
        <NormalImg src={Avatar2} alt="Avatar" className="left circle margin-right" style={{width:"60px"}} />
        <span className="right opacity">1 min</span>
        <h4>John Doe</h4><br/>
        <hr className="clear" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="row-padding" style={{margin:"0 -16px"}}>
            <div className="half">
              <NormalImg src={Lights} alt="Northern Lights" className="margin-bottom" />
            </div>
            <div className="half">
              <NormalImg src={Nature} alt="Nature" className="margin-bottom" />
          </div>
        </div>
        <NormalRow>
          <NormalButton name={<><i className="fa fa-thumbs-up"></i>  Like</>} btntype="like" className="button theme-d1 margin-bottom" /> 
          <div className="gap-r-2"></div>
          <NormalButton name={<><i className="fa fa-comment"></i>  Comment</>} btntype="comment" className="button theme-d2 margin-bottom" /> 
        </NormalRow>
      </div>
    </NormalCard>
  )
}

export default Posts
