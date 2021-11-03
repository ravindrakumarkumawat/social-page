import React, { useState } from 'react'
import NormalCard from '../common/NormalCard'

const AlertBox = () => {
  const [show, setShow] = useState(true)
  return (
    <>
    {
      show && (
      <NormalCard background={"bg-tag-10"}>
        <div className="">
          <span onClick={() => setShow(false)} className="right bg-button-tag-9">
            <i className="fa fa-remove"></i>
          </span>
          <p><strong>Hey!</strong></p>
          <p>People are looking at your profile. Find out who.</p>
        </div>
      </NormalCard>
      )
    }
    </>
  )
}

export default AlertBox
