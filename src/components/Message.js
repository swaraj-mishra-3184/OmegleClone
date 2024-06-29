import React from 'react';

const Message = ({ from, text }) => (
  <div>
    <strong>{from}: </strong>{text}
  </div>
);

export default Message;
