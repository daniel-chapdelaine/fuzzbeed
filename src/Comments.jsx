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
      commenter: "Benito",
      date: "September 23, 1993 at 3:06 am",
      text: "So cool."
    },
    { 
      commenter: "Big_Dipper",
      date: "September 23, 1993 at 7:16 am",
      text: "5 stars."
    },
    { 
      commenter: "littledipper",
      date: "September 23, 1993 at 11:01 am",
      text: "wow!! dad had said that a new poggers had told him to check out the latest article, and - well he didn’t really know what that meant, but, wow!! i didn’t really know that you could do all this with crystals, i guess, but it’s really pretty! good work Blog_Pogz2! i think fuzzbeed should really consider letting people see this one, and i think they should know that blogger poggers is really really sorry for what happened and apparently she’s ready to just leave the past in the past if they are."
    },
    { 
      commenter: "LLLLL",
      date: "September 23, 1993 at 7:06 am",
      text: "he said it could be anything and so Bishobi finally gave me the freaking crysyal so i can see it and its good and the drawingsare all really cool and the best part was the one about Obie but if i had one thing i did not like it was that some of the words were really long"
    },
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
