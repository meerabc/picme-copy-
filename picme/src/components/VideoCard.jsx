
import React from 'react';
import PlayIcon from '../assets/icons/PlayIcon'

const VideoPlayer = ({ videoURL }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoRef = React.useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="video-card">
      <video
        ref={videoRef}
        onClick={togglePlay}
        height="157px"
        width="166.7px"
      >
        <source src={videoURL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {!isPlaying && (
        <div className="custom-play-button" onClick={togglePlay}>
          <PlayIcon />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;