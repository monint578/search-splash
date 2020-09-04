import React from "react";
import Lottie from 'react-lottie';
import animationData from '../looties/6638-not-found.json'
 
class UncontrolledLottie extends React.Component {
    render(){
      const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  
      return(
        <div className="sadsearch">
          <h2>Sorry, there are no images with this search &#128542;</h2>
          <Lottie options={defaultOptions}
                height={200}
                width={200}
          />
        </div>
      )
    }
  }
  
  export default UncontrolledLottie