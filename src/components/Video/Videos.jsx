import React from "react";
import ReactPlayer from 'react-player';

function Videos(){
    <>
      <ReactPlayer
        url={'https://youtube.com/shorts/hKEZjA_2SDA?feature=share'}
        playing={true}
        muted={true}
        loop={true}
        controls={true}
        width={250}
        height={480}
        />
    </>
}