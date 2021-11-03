import React from "react";
import NormalCard from "../common/NormalCard";
import NormalButton from "../common/NormalButton";
import './Status.css'

const Status = () => {
  return (
    <NormalCard>
      <div className="row-padding">
        <div className="col m12">
          <div className="card round white">
            <div className="container padding">
              <h6 className="opacity">Social Media template by w3.css</h6>
              <p contenteditable="true" className="status-border status-padding">
                Status: Feeling Blue
              </p>
              <NormalButton name={<><i className="fa fa-pencil"></i>  Post</>} btntype={'post'}/>
            </div>
          </div>
        </div>
      </div>
    </NormalCard>
  );
};

export default Status;
