import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const videoRef = useRef(null);
  return (
    <>
      <h1>Video seeking issue</h1>
      <video src="flower.webm" controls ref={videoRef} />
      <div className="card">
        <button
          onClick={() => {
            const video = videoRef.current;
            if (video && video.duration > 0) {
              video.currentTime = video.duration / 2;
            }
          }}
        >
          video.currentTime = video.duration / 2
        </button>
      </div>
      <p className="read-the-docs">
        Click on the video time bar or change video.currentTime to trigger the issue.
      </p>
    </>
  )
}

export default App
