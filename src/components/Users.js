
import React from 'react'

function Users(props) {

  const userItems = props.users.map(user => {
    return <li key = {user.id}>{user.first_name}</li>
  })

  return (
    <ul>{userItems}</ul>
  )
}

export default Users