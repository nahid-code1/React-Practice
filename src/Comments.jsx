import React, { use } from 'react'
import { Comment } from './Comment'

export const Comments = ({commentPromise}) => {
const comments = use(commentPromise)
console.log(comments)
  return (
    <div>Total number of comments: {comments.length} 
    {
        comments.map(comment => <Comment comment={comment} ></Comment>)
    }
    </div>
    
  )
}
