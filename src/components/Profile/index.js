import React from 'react'
import NormalCard from '../common/NormalCard'
import NormalImg from '../common/NormalImg'
import Avatar3 from '../../assets/images/avatar3.png'
import './Profile.css'

const Profile = () => {
  return (
    <NormalCard>
    <div className="card round white">
    <div className="container">
      <div className="center">
     <h4 className="center">My Profile</h4>
     <NormalImg src={Avatar3} alt="Avatar" classNames="profile-img"/>
  {/*<p className="center"><img src="/w3images/avatar3.png" className="circle" style="height:106px;width:106px" alt="Avatar"></p>*/}
     </div>
     <hr />
     <p><i className="fa fa-pencil fa-fw margin-right text-theme"></i> Designer, UI</p>
     <p><i className="fa fa-home fa-fw margin-right text-theme"></i> London, UK</p>
     <p><i className="fa fa-birthday-cake fa-fw margin-right text-theme"></i> April 1, 1988</p>
    </div>
  </div>
    </NormalCard>
  )
}

export default Profile
