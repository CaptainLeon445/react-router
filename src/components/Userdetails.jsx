import React from 'react'
import { useParams } from 'react-router-dom'
function Userdetails() {
  const params=useParams()
  const userid= params.userid
  return (
    <div>Details about user {userid}</div>
  )
}

export default Userdetails