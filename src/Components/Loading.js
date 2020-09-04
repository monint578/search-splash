import React from "react";
import Lottie from 'react-lottie';
import animationData from '../looties/890-loading-animation.json'

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
        <div>
          <Lottie options={defaultOptions}
                height={200}
                width={200}
          />
        </div>
      )
    }
  }

  export default UncontrolledLottie

// export default function Loader() {
//   return (
//     <div className="loading">
//       <div className="dot"></div>
//       <div className="dot"></div>
//       <div className="dot"></div>
//       <div className="dot"></div>
//       <div className="dot"></div>
//     </div>
//   );
// }
