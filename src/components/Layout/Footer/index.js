import React from 'react'
import NormalCard from '../../common/NormalCard'

const Footer = () => {
  return (
    <>
  <NormalCard  background="bg-footer1" border={false} borderRadius={false}>
    <p>Footer</p>
  </NormalCard>
  <NormalCard background="bg-footer2"  border={false} borderRadius={false}>
    <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
  </NormalCard>
</>
  )
}

export default Footer
