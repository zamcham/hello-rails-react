import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetings } from '../greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greetingContent = useSelector((state) => state.greetings.text);
  console.log(greetingContent.text);

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <div>
      <h1>A new message will appear every time you refresh!</h1>
      <h3>{greetingContent.text}</h3>
    </div>
  );
};

export default Greeting