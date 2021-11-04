import React from "react";
import NormalCard from "../common/NormalCard";
import Avatar2 from "../../assets/images/avatar2.png";
import Lights from "../../assets/images/lights.jpg";
import Nature from "../../assets/images/nature.jpg";
import NormalImg from "../common/NormalImg";
import NormalButton from "../common/NormalButton";
import NormalRow from "../common/NormalRow";
import NormalCol from "../common/NormalCol";
import "./Posts.css";
const Posts = () => {
  return (
    <NormalCard>
      <div className="container card white round margin">
        <br />
        <NormalImg
          src={Avatar2}
          alt="Avatar"
          classNames="width-60px"
          style={{ width: "60px" }}
        >        
          <span className="right opacity">1 min</span>
        </NormalImg>
        <h4>John Doe</h4>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="gap-t-2"></div>
        <NormalRow classNames={"justifyEvenly"}>
          <NormalCol span={49} className="half">
            <NormalImg
              src={Lights}
              alt="Northern Lights"
              className="margin-bottom"
            />
          </NormalCol>
          <NormalCol span={49} className="half">
            <NormalImg src={Nature} alt="Nature" className="margin-bottom" />
          </NormalCol>
        </NormalRow>
        <div className="gap-b-2"></div>
        <NormalRow>
          <NormalButton
            name={
              <>
                <i className="fa fa-thumbs-up"></i>  Like
              </>
            }
            btntype="like"
            className="button theme-d1 margin-bottom"
          />
          <div className="gap-r-2"></div>
          <NormalButton
            name={
              <>
                <i className="fa fa-comment"></i>  Comment
              </>
            }
            btntype="comment"
            className="button theme-d2 margin-bottom"
          />
        </NormalRow>
      </div>
    </NormalCard>
  );
};

export default Posts;
