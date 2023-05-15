import Spinner from 'react-bootstrap/Spinner';
import React from 'react';

function Loading() {
  return (
    <Spinner animation="border" role="status" style={{display:"block"}}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Loading;