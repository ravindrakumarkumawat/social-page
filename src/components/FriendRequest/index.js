import React from "react";
import NormalCard from "../common/NormalCard";
import NormalImg from "../common/NormalImg";
import Avatar6 from "../../assets/images/avatar6.png";
import NormalButton from "../common/NormalButton";
import NormalRow from "../common/NormalRow"
import NormalCol from "../common/NormalCol"

const FriendRequest = () => {
  return (
    <NormalCard>
      <div className="white center">
        <div>
          <p>Friend Request</p>
          <NormalImg src={Avatar6} alt={"Avatar"} width={50} />
          <span>Jane Doe</span>
          <NormalRow className="row opacity">
          <NormalCol span={12}>
              <NormalButton name={<i className="fa fa-check"></i>} btntype={"accept"}/>
            </NormalCol>
            <NormalCol span={12}>
              <NormalButton name={<i className="fa fa-remove"></i>} btntype={"decline"}/>
            </NormalCol>
          </NormalRow>
        </div>
      </div>
    </NormalCard>
  );
};

export default FriendRequest;
