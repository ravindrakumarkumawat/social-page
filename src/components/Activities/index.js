import React, { useState } from "react";
import NormalCard from "../common/NormalCard";
import NormalImg from "../common/NormalImg";
import Lights from "../../assets/images/lights.jpg";
import Nature from "../../assets/images/nature.jpg";
import Mountains from "../../assets/images/mountains.jpg";
import Forest from "../../assets/images/forest.jpg";
import Snow from "../../assets/images/snow.jpg";
import NormalCol from "../common/NormalCol";
import NormalRow from "../common/NormalRow";
import './Activities.css'

const Activities = () => {
  const [isGroups, setIsGroups] = useState(false)
  const [isEvents, setIsEvents] = useState(false)
  const [isPhotos, setIsPhotos] = useState(false)

  const toggleGroups = () => {
    setIsGroups(!isGroups)
  }

  const toggleEvents = () => {
    setIsEvents(!isEvents)
  }
  const togglePhotos = () => {
    setIsPhotos(!isPhotos)    
  }
  return (
    <NormalCard padding={false}>
      <div className="card round">
        <div className="white">
          <div
            onClick={toggleGroups}
            className={`list-tag ${!isGroups ? '' : 'list-tag-active'} pointer`}
          >
            <i className="fa fa-circle-o-notch fa-fw margin-right"></i> My
            Groups
          </div>
          <div className={`${!isGroups ? 'hide': ''} container`}>
            <p>Some text..</p>
          </div>
          <div
            onClick={toggleEvents}
            className={`list-tag ${!isEvents ? '' : 'list-tag-active'} pointer`}
          >
            <i className="fa fa-calendar-check-o fa-fw margin-right"></i> My
            Events
          </div>
          <div className={`${!isEvents ? 'hide': ''} container`}>
            <p>Some other text..</p>
          </div>
          <div
            onClick={togglePhotos}
            className={`list-tag ${!isPhotos ? '' : 'list-tag-active'} pointer`}
          >
            <i className="fa fa-users fa-fw margin-right"></i> My Photos
          </div>
          <div className={`${!isPhotos ? 'hide': ''} container`}>
            <NormalRow classNames={"flexWrap-between"}>
              <NormalCol span={44}>
                <NormalImg src={Lights} />
              </NormalCol>
              <NormalCol span={44} className="half">
                <NormalImg src={Nature} />
              </NormalCol>
              <NormalCol span={44} className="half">
                <NormalImg src={Mountains} />
              </NormalCol>
              <NormalCol span={44} className="half">
                <NormalImg src={Forest} />
              </NormalCol>
              <NormalCol span={44} className="half">
                <NormalImg src={Nature} />
              </NormalCol>
              <NormalCol span={44} className="half">
                <NormalImg src={Snow} />
              </NormalCol>
            </NormalRow>
          </div>
        </div>
      </div>
    </NormalCard>
  );
};

export default Activities;
