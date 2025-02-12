import React, { useRef } from 'react'
import SampleImage from "../assets/SampleImage.jpg"
import SampleAudio from "../assets/SampleAudio.mp3"
import SampleVideo from "../assets/SampleVideo.mp4"

function MediaDemo() {
    const audioRef = useRef()
    const videoRef = useRef()
  return (
    <div>
        <h2>Working with Media content and playback using useRef</h2>
        <img src={SampleImage} alt='Sample image' height={200}/>
        {/* <audio controls>
            <source src={SampleAudio} type='audio/mpeg'></source>
        </audio> */}
        <audio ref={audioRef}>
            <source src={SampleAudio} type='audio/mpeg'></source>
        </audio>
        <button onClick={()=>audioRef.current.play()}>Play audio</button>
        <button onClick={()=>audioRef.current.pause()}>Pause audio</button>
        <button onClick={()=>videoRef.current.play()}>Play Video</button>
        <button onClick={()=>videoRef.current.pause()}>Pause Video</button>
        {/* <video controls ref={videoRef}>
            <source src={SampleVideo} type='video/mp4'></source>
        </video> */}
         <video ref={videoRef}>
            <source src={SampleVideo} type='video/mp4'></source>
        </video>
    </div>
  )
}

export default MediaDemo