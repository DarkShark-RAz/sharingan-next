import React from 'react';
import Eye from './Eye';

type Props = {};

function Loader({}: Props) {
  return (
    <div className="h-screen w-screen">
      <div className="box flex flex-row justify-between h-full mx-auto my-auto overflow-hidden max-w-4xl scale-50">
        <div className="eye-box left-eye ">
          <Eye />
        </div>
        <div className="eye-box">
          <Eye />
        </div>
      </div>
    </div>
  );
}

export default Loader;
