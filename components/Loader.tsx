import React from 'react';
import Eye from './Eye';

type Props = {};

function Loader({}: Props) {
  return (
    <div className="h-screen w-screen flex justify-center overflow-hidden">
      <div className="grid grid-flow-row grid-cols-2 place-items-center">
        <div className="eye-box -scale-x-[0.4] scale-y-[0.4] md:-scale-x-[0.6] md:scale-y-[0.6] col-span-1">
          <Eye />
        </div>
        <div className="eye-box scale-[0.4] md:scale-[0.6] col-span-1">
          <Eye />
        </div>
      </div>
    </div>
  );
}

export default Loader;
