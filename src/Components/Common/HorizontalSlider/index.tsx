import React, { FC, useEffect, useRef, useState } from 'react';
import * as CSS from './css';
import * as F from './function';

const padding = 5;

const Slider: FC = (props) => {
  const ref = useRef(null);
  const [state, setState] = useState({
    moving: false,
    maxWidth: 0,
    transform: 0,
  });

  const start = (event: React.MouseEvent<HTMLDivElement>) => {
    F.stopProp(event);

    setState({
      ...state,
      moving: true,
    });
  };

  const move = (event: React.MouseEvent) => {
    F.stopProp(event);

    if (state.moving) {
      const move = state.transform + event.movementX;
      const maxWidth = state.maxWidth;
      if (move > padding || move < -maxWidth) return;
      setState({
        ...state,
        transform: move,
      });
    }
  };

  const stop = (event: React.MouseEvent) => {
    F.stopProp(event);

    if (state.moving) setState({ ...state, moving: false });
  };

  const select = () => {
    return false;
  };

  useEffect(() => {
    const element: HTMLDivElement =
      ref.current || document.createElement('div');

    setState({
      ...state,
      maxWidth: element.scrollWidth - element.offsetWidth + padding,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return (
    <CSS.SliderS
      onSelectCapture={select}
      onMouseDown={start}
      onMouseLeave={stop}
      onMouseMove={move}
      onSelect={select}
      onMouseUp={stop}
      style={{
        transform: 'translateX(' + state.transform + 'px)',
      }}
    >
      <CSS.ContentS ref={ref}>{props.children}</CSS.ContentS>
    </CSS.SliderS>
  );
};

export default Slider;
