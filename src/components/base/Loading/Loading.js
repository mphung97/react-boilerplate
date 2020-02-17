import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { animated, useTransition } from 'react-spring';
import styled, { keyframes } from 'styled-components';

/**
 * TODO: add animation for circle
 */

const Backdrop = styled.div`
  .load {
    position: fixed;
    background-color: white;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

const circle = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const CirleLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 80px;
  height: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  :after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #6979f8 #cdd2fd #cdd2fd;
    animation: ${circle} 1.2s linear infinite;
  }
`;

function Loading({ toggle }) {
  const transitions = useTransition(toggle, null, {
    from: { opacity: 0, transform: 'translate3d(0,-25%,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,50%,0)' },
  });

  useEffect(() => {
    if (toggle) {
      document.body.style.overflowY = 'hidden';
    }
    return () => {
      document.body.style.overflowY = null;
    };
  }, [toggle]);

  return (
    <Backdrop>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props} className="load">
              <CirleLoading />
            </animated.div>
          )
      )}
    </Backdrop>
  );
}

Loading.propTypes = {
  toggle: PropTypes.bool,
};

Loading.defaultProps = {
  toggle: false,
};

export default Loading;
