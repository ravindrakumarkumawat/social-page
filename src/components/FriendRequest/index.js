import React from "react";
import NormalCard from "../common/NormalCard";
import NormalImg from "../common/NormalImg";
import Avatar6 from "../../assets/images/avatar6.png";

const FriendRequest = () => {
  return (
    <NormalCard>
      <div className="white center">
        <div>
          <p>Friend Request</p>
          <NormalImg src={Avatar6} alt={"Avatar"} width={50} />
          <span>Jane Doe</span>
          <div className="row opacity">
            <div className="half">
              <button className="button block green section" title="Accept">
                <i className="fa fa-check"></i>
              </button>
            </div>
            <div className="half">
              <button className="button block red section" title="Decline">
                <i className="fa fa-remove"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </NormalCard>
  );
};

export default FriendRequest;
