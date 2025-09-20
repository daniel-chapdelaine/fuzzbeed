import { useState, useRef } from 'react'
import './Comments.css'
import { getFormattedDate } from './utils';

function Comment({ commenter, date, text }) {
  return (
    <div className='comment-container'>
      <div className='commenter-container'>
        <div>
          <img className='commenter-img' src={'/fuzzbeed/anonymous.jpg'} />
        </div>
        <div>
          <div className='comment-commenter'>{commenter}</div>
          <div className='comment-date'>{date}</div>
        </div>
      </div>
      <p>{text}</p>
    </div>
  )
}

function Comments({ articleTitle }) {
  const defaultComments = [
    { 
      commenter: "Danny",
      date: "June 19, 2023 at 7:06 am",
      text: "What about Aid? It just seems like a better Healing Word, works on 3 creatures, and happens at a (relatively small) distance. Someone correct me if I’m wrong, not sure if it can actually bring someone back to a fighting state."
    },
    { 
      commenter: "Benito",
      date: "June 19, 2024 at 3:06 am",
      text: "So cool."
    }
  ];
  const [comments, setComments] = useState(defaultComments);
  const textRef = useRef();
  const commenterRef = useRef();
  const handleOnClick = () => {
    if (!textRef.current.value) {
      return;
    }
    const newComment = {
      commenter: commenterRef.current.value || 'Anonymous',
      date: getFormattedDate(),
      text: textRef.current.value
    }    
    const updateComments = [...comments, newComment];
    setComments(updateComments);
  }
  return (
    <div className='comments-container'>
      <h3>{comments.length} thoughts on "{articleTitle}"</h3>
      <div>
        {comments.map((comment, i) => <Comment key={i} {...comment} />)}
      </div>
      <h3>Leave a Comment</h3>
      <div className='create-commment-container'>
        <input className='field' id="name" ref={commenterRef} placeholder='Name' />
        <textarea className='field' id="comment" ref={textRef} />
        <div>
         <button className='button' onClick={handleOnClick}>Post Comment</button>
        </div>
      </div>
    </div>
  )
}

export default Comments
