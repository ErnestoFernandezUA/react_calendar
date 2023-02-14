import {
  FunctionComponent,
  // RefObject,
  useEffect,
  // useState,
} from 'react';
import styled from 'styled-components';
import {
  // IoRefresh,
  IoCaretDown, IoCaretUp,
} from 'react-icons/io5';

import {
} from '../../store/features/Interval/intervalSlice';
import { Button } from '../Button';
// import { handleClickOutside } from '../../helpers/handleClickOutside';

const Wrapper = styled.div`
  /* z-index: 50; */
  /* position: absolute; */
  right: 0;
  top: 45px;
  background-color: white;
  width: 400px;
  box-sizing: border-box;
  padding: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Hours = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Minutes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

type TimePickerBoxProps = {
  time: string;
  onChangeTime: (time: string) => void;
};

export const TimePicker: FunctionComponent<TimePickerBoxProps> = ({
  time,
  onChangeTime,
}) => {
  // eslint-disable-next-line no-console
  console.log('', new Date(+time).toDateString());

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('useEffect TK');

    onChangeTime(new Date().valueOf().toString());
  }, []);

  const onHourHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    value: number,
  ) => {
    e.stopPropagation();
    // eslint-disable-next-line no-console
    console.log('onHourHandler', new Date(+time).toDateString());

    onChangeTime((new Date(
      new Date(+time).getFullYear(),
      new Date(+time).getMonth(),
      new Date(+time).getDate(),
      (new Date(+time).getHours() + value) % 24,
      new Date(+time).getMinutes(),
    )).valueOf().toString());
  };

  const onMinutesHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    value: number,
  ) => {
    e.stopPropagation();
    // eslint-disable-next-line no-console
    console.log('onHourHandler', new Date(+time).toDateString());
    onChangeTime((new Date(
      new Date(+time).getFullYear(),
      new Date(+time).getMonth(),
      new Date(+time).getDate(),
      new Date(+time).getHours(),
      (new Date(+time).getMinutes() + value) % 60,
    )).valueOf().toString());
  };

  const hours = (`0${new Date(+time).getHours().toString()}`).slice(-2);
  const minutes = (`0${new Date(+time).getMinutes()}`).slice(-2);

  // eslint-disable-next-line no-console
  console.log('time', new Date(+time).toTimeString(), Boolean(time));

  return (
    <Wrapper>
      {!time ? (
        <Button onClick={(e) => onHourHandler(e, 0)}>
          Select time
        </Button>
      ) : (
        <>
          <Hours>
            <Button onClick={(e) => onHourHandler(e, 1)}>
              <IoCaretUp />
            </Button>
            {hours}
            <Button onClick={(e) => onHourHandler(e, -1)}>
              <IoCaretDown />
            </Button>
          </Hours>

          <Minutes>
            <Button onClick={(e) => onMinutesHandler(e, 1)}>
              <IoCaretUp />
            </Button>
            {minutes}

            <Button onClick={(e) => onMinutesHandler(e, -1)}>
              <IoCaretDown />
            </Button>
          </Minutes>
        </>
      )}
    </Wrapper>
  );
};
