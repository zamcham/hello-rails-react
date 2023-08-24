import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessages } from '../redux/messagesSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greetingsData = useSelector((state) => state.messages);
  console.log(greetingsData);

  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  return (
    <div>
      <h2>Refresh to get a new Greeting</h2>
      <p>{greetingsData.messages.content}</p>
    </div>
  );
};

export default Greeting