import React, { useRef, useState, useContext} from 'react';
import { FormDataContext } from '../Signup/Signup';
import './WebCamera.css'
const Webcameras = () => {
  const videoRef = useRef();
  const canvasRef = useRef();
  const [capturedImage, setCapturedImage] = useState('');
  const [webcamOpen, setWebcamOpen] = useState(false);
  const {handleClickTab, handleChange, formData} = useContext(FormDataContext)

  const startWebcam = () => {
    setCapturedImage("")
    setWebcamOpen(true)
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setWebcamOpen(true);
      })
      .catch((error) => {
        console.log('Error accessing webcam:', error);
      });
  };

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageDataURL = canvas.toDataURL();
    setCapturedImage(imageDataURL);

    // Stop the webcam stream
    video.srcObject.getTracks().forEach((track) => track.stop());
    setWebcamOpen(false);
    handleChange({target : {name : "userCapture", value : imageDataURL}});
    console.log("Saved:", formData.userCapture)
  };

  return (
    <div>
      {!webcamOpen && (
        <button onClick={startWebcam} className='glow-on-hover'>Start Webcam</button>
      )}

      {webcamOpen && (
        <div>
          <video ref={videoRef} className='captureCame'></video>
          <br />
          <button onClick={captureImage} className='glow-on-hover'>Capture Image</button>
          
        </div>
      )}

      {capturedImage && (
        <div>
          <p>Captured Image:</p>
          <img src={capturedImage} alt="Captured" className='captureImage'/>
        </div>
      )}

      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
      <button onClick={handleClickTab} className='glow-on-hover'>Next</button>
    </div>
  );
};

export default Webcameras;