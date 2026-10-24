import React from 'react'

export const Comment = ({comment}) => {
  return (
    <div className='card'>
        <p>Post id: {comment.postId} </p>
        <p>Name: {comment.name} </p>
        <p>Email: {comment.email} </p>
        <p>Body: {comment.body} </p>
    </div>
  )
}
