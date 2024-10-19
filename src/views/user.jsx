import React, {useContext} from 'react'
import { appContext } from './useContext'


function User({}) {
    const {userName} = useContext(appContext)

  return (
    <div>User: {userName}</div>
  )
}

export default User

