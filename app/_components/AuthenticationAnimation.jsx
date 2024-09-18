import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../public/Signup.json'; 

const AuthenticationAnimation = () => {
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
            <h1>Empty Pantry or Weak Internet Connection please Wait </h1>
        </div>
     );
};
 
export default AuthenticationAnimation;