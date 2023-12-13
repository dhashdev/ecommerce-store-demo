import React, { useState } from 'react';

const useDebounce = () => {
  //state to store the timeout ID

  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout>();

  //debounce function

  const debounce = (func: () => void, wait: number) => {
    //if there is an exisitn timer clear it

    typingTimeout && clearTimeout(typingTimeout);

    // else set a new timer for specfied duraction

    const timeout = setTimeout(() => {
      func();
    }, wait);

    setTypingTimeout(timeout);
  };

  return debounce;
};
