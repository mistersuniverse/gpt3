import React from 'react'
import "./blog.css"
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

export const Blog = () => {
  return (
    <div className='gpt3__blog section__margin'>

      <h1 className='gradient__text'>A lot is happening, <br></br>We are blogging about it.</h1>
      <div className='gpt3__blog-grid'>
        <div className='gpt3__blog-hightlight'>
          <Article thumbnail={blog01} date="Sep 26, 2021"  headline="GPT-3 and Open AI is the future. Let us exlore how it is?"/>
        </div>
        <div className='gpt3__blog-others'>
          <Article thumbnail={blog02} date="Sep 26, 2021"  headline="GPT-3 and Open AI is the future. Let us exlore how it is?"/>
          <Article thumbnail={blog03} date="Sep 26, 2021"  headline="GPT-3 and Open AI is the future. Let us exlore how it is?"/>
          <Article thumbnail={blog04} date="Sep 26, 2021"  headline="GPT-3 and Open AI is the future. Let us exlore how it is?"/>
          <Article thumbnail={blog05} date="Sep 26, 2021"  headline="GPT-3 and Open AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog
