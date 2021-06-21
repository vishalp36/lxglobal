import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import animationJsonHD from './lottiefiles/768 x 646.json';
import animationJson from './lottiefiles/700x788.json';

export default () => {
  return (
    <div>
      <Player
        autoplay={true}
        loop={true}
        src={animationJson}
      />
    </div>
  );
};
