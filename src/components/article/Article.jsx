import React from 'react'
import "./article.css"

export const Article = (props) => {
  return (
    <div className='gpt3__article'>
      <div className="gpt3__article-thumbnail">
        <img src={props.thumbnail} alt="thumbnail" />
      </div>
      <div className='gpt3__article-info'>
        <div>
          <p>{props.date}</p>
          <h2>{props.headline}</h2>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article
