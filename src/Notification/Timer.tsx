import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

function useTimer(seconds: number, timeoutCallback: () => void, timerInterval = 10) {
  const milliSeconds = seconds * 1000;
  const [timer, setTimer] = useState(100);
  const intervalAmount = (100 / milliSeconds) * timerInterval;

  const savedInterval = useRef(() => setTimer(timer => Math.trunc(timer - intervalAmount)));
  const savedTimeout = useRef(timeoutCallback);

  useEffect(() => {
    const intervalId = setInterval(() => savedInterval.current(), timerInterval);
    const timeoutId = setTimeout(() => savedTimeout.current(), milliSeconds);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [milliSeconds, timerInterval]);

  return timer;
}

interface BarProps {
  width: number;
}

const Bar = styled.div<BarProps>`
  width: ${props => props.width}%;
  height: 2px;
  background-color: black;
  opacity: 0.4;
  position: absolute;
  bottom: 0;
`;

interface Props {
  seconds: number;
  onTimeout(): void;
}

export function Timer({ seconds, onTimeout }: Props) {
  const timer = useTimer(seconds, onTimeout);

  return <Bar data-testid="timer-bar" width={timer} />;
}
