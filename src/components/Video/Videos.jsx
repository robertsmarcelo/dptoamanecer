//'https://youtube.com/shorts/hKEZjA_2SDA?feature=share'

import React from "react";
import YouTube from "react-youtube";

export default class YoutubeVideo extends React.Component {
    render() {
        const opts = {
            height: "480",
            width: "250",
            playerVars: {
                autoplay: 1,
            },
        };

        return (
            <div>
                <h3>GeeksforGeeks - Youtube</h3>
                <YouTube videoId="hKEZj_2SDA" 
                    opts={opts} onReady={this._onReady} />
            </div>
        );
    }

    _onReady(event) {
        event.target.pauseVideo();
    }
}