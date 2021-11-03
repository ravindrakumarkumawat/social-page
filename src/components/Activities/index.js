import React from "react";
import NormalCard from "../common/NormalCard";
import NormalImg from "../common/NormalImg";
import Lights from "../../assets/images/lights.jpg";
import Nature from "../../assets/images/nature.jpg";
import Mountains from "../../assets/images/mountains.jpg";
import Forest from "../../assets/images/forest.jpg";
import Snow from "../../assets/images/snow.jpg";
import NormalCol from "../common/NormalCol";
import NormalRow from "../common/NormalRow";

const Activities = () => {
  return (
    <NormalCard padding={false}>
      <div className="card round">
        <div className="white">
          <button
            onClick="myFunction('Demo1')"
            className="button block theme-l1 left-align"
          >
            <i className="fa fa-circle-o-notch fa-fw margin-right"></i> My
            Groups
          </button>
          <div id="Demo1" className="hide container">
            <p>Some text..</p>
          </div>
          <button
            onClick="myFunction('Demo2')"
            className="button block theme-l1 left-align"
          >
            <i className="fa fa-calendar-check-o fa-fw margin-right"></i> My
            Events
          </button>
          <div id="Demo2" className="hide container">
            <p>Some other text..</p>
          </div>
          <button
            onClick="myFunction('Demo3')"
            className="button block theme-l1 left-align"
          >
            <i className="fa fa-users fa-fw margin-right"></i> My Photos
          </button>
          <div id="Demo3" className="hide container">
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
