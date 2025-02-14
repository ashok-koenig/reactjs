import React from 'react'
import { useParams } from 'react-router-dom'

function BlogPost() {
    const {blogId} = useParams()
  return (
    <div>
        <h3>Blog post id: {blogId}</h3>
    </div>
  )
}

export default BlogPost