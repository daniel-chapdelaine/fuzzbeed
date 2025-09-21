import React, { useRef, useEffect } from 'react';
import './SubscribeDialog.css'
import Fuzzbeed from './Fuzzbeed';

export function SubscribeDialog({ isOpen, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (dialogRef.current) {
      if (isOpen) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [isOpen]);

  return (
    <dialog ref={dialogRef}>
      <div className='subscribe-container'>
        <Fuzzbeed fontSize='32px' />
        <h1 style={{ fontSize: '28px' }}>5 Protien-Packed Bez Dogs You'll Love</h1>
        <div className='subscribe-message'>Discover the receipes Poggertons are making on repeat!</div>
        <input className='field' name="email" placeholder='Email Address' />
        <button className='button' onClick={onClose}>Send me the recipes!</button>
        <em>I'd like to recieve notifications from Fuzzbeed</em>
      </div>
      <button className='subscribe-close' onClick={onClose}>✕</button>
    </dialog>
  );
}