import React from 'react';

const TestVideo = () => {
  return (
    <div>
      <video autoPlay muted loop width="600">
        <source src="http://localhost:4000/uploads/resortvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default TestVideo;
