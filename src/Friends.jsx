import React, { use } from 'react'
import Friend from './Friend'

export const Friends = ({friendsPromise}) => {
    const friends = use(friendsPromise)
  return (
    <div className='card'>
        <h3>Friends number: {friends.length}</h3>
        {
            friends.map( friend => <Friend key={friend.id} friend={friend}></Friend>)
        } 
    </div>
  )
}
