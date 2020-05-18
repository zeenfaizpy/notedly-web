import React, { useEffect } from 'react';

const MyNotes = () => {
  useEffect(() => {
    document.title = 'My Notes - Notedly';
  });
  return (
    <div>
      <h1>My Notes - Notedly</h1>
    </div>
  );
};

export default MyNotes;
