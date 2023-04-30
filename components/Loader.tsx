import React from 'react';
import Eye from './Eye';
import { useSpring } from '@react-spring/web';

type Props = {};

function Loader({}: Props) {
  const [spring, api] = useSpring(() => ({
    from: { x: 0 },
    to: { x: 1 },
    config: { duration: 1000 },
    loop: true,
  }));
  return (
    <div className="flex flex-row justify-between h-screen mx-auto my-auto w-full scale-50">
      {/* <div className="box"> */}
      <div className="eye-box left-eye">
        <Eye />
      </div>
      <div className="eye-box ">
        <Eye />
      </div>
      {/* </div> */}
    </div>
  );
}

export default Loader;
