import React from "react";

function MediaPlayer() {
  return (
    <div className="media-player">
      <audio className="audio-player" controls>
        <source src="https://podcast-api.netlify.app/placeholder-audio.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default MediaPlayer;