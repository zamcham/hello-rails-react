import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetings } from '../greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greetingContent = useSelector((state) => state.greetings.greetings.text);

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <div>
      <h1>Get a greeting in a different language!</h1>
      <h1>All you have to do, is refresh the page</h1>
      <h4>{greetingContent}</h4>
    </div>
  );
};

export default Greeting;
