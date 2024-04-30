"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import Webcam from 'react-webcam'

function ReactWebCam() {
    const [image, set_image] = useState("")
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };
    const webcamRef = React.useRef<any>(null);
    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            set_image(imageSrc)
        },
        [webcamRef]
    );
    return (
        <div>
            react web cam
            {image && <Image height={300} width={300} src={image} alt='captured image' />}
            <Webcam
                height={200}
                ref={webcamRef}
                mirrored={true}
                imageSmoothing={true}
                screenshotFormat="image/jpeg"
                width={200}
                screenshotQuality={1}
                videoConstraints={videoConstraints}
            />
            <button onClick={capture}>Capture photo</button>
        </div>
    )
}

export default ReactWebCam
