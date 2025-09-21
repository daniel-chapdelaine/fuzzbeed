import React, { useState, useEffect } from 'react';

function useSubscribeDialogLauncher({ action }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 1800 && action) {
      action();
    } 
  }, [scrollPosition, action]);
}

export default useSubscribeDialogLauncher;