import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../public/Loading.json'; 

const LoadingAnimation = () => {
    const defaultOptions = {
        loop: true, // Set whether the animation should loop
        autoplay: true, // Set whether the animation should start automatically
        animationData: animationData, // Pass the animation JSON data
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice' // Set how the animation should fit within its container
        }
    };
    return ( 
        <div>
            <Lottie options={defaultOptions} />
        </div>
     );
};
 
export default LoadingAnimation;