import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

function Loader() {
  let [first, setFirst] = useState('level1');
  let [second, setSecond] = useState(true);
  const ref = useRef<HTMLInputElement>(null);
  const loopRef = useRef<number>(0);
  const [spring, api] = useSpring(() => ({
    from: { x: 0 },
    to: { x: 1 },
    loop: () => {
      loopRef.current++;
      if (1 === loopRef.current) {
        setFirst('level2');
      } else if (2 === loopRef.current) {
        setFirst('level3');
      } else if (3 === loopRef.current) {
        setFirst('itachi-eye');
      } else if (4 === loopRef.current) {
        setFirst('sasuke-eye');
      } else if (5 === loopRef.current) {
        setFirst('sasuke-eye s-ems');
      } else if (6 === loopRef.current) {
        setSecond(false);
        setFirst('hagoromo-eye s-rgn');
      } else if (7 === loopRef.current) {
        return false;
      }
      return true;
    },
  }));

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="sharingan-container">
        <div className="eye-and-reflection-container">
          <div className="eye-container">
            <div ref={ref} className={`eye circle ${first}`}>
              <div className="glare circle"></div>
              {second ? (
                <animated.div
                  className="inner-eye circle"
                  style={{
                    transform: spring.x
                      .to([0, 1], [0, 360])
                      .to((value) => `rotateZ(${value}deg)`),
                  }}
                >
                  <div className="tag-container">
                    <div className="tag circle"></div>
                  </div>
                  <div className="tag-container">
                    <div className="tag circle"></div>
                  </div>
                  <div className="tag-container">
                    <div className="tag circle"></div>
                  </div>
                  <div className="ems-tags">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </animated.div>
              ) : (
                <animated.div
                  className="inner-eye circle"
                  style={{
                    transform: spring.x
                      .to([0, 1], [0, 360])
                      .to((value) => `rotateZ(${value}deg)`),
                  }}
                >
                  <div className="circle tag-circle">
                    <div className="tag-container">
                      <div className="tag circle"></div>
                    </div>
                    <div className="tag-container">
                      <div className="tag circle"></div>
                    </div>
                    <div className="tag-container">
                      <div className="tag circle"></div>
                    </div>
                  </div>
                  <div>
                    <div className="tag-container">
                      <div className="tag circle"></div>
                    </div>
                    <div className="tag-container">
                      <div className="tag circle"></div>
                    </div>
                    <div className="tag-container">
                      <div className="tag circle"></div>
                    </div>
                  </div>
                  <div></div>
                </animated.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
