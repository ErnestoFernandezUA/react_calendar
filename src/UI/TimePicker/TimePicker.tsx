import {
  FunctionComponent,
  memo,
  useEffect,
} from 'react';
import styled from 'styled-components';
import {
  IoCaretDown, IoCaretUp,
} from 'react-icons/io5';

import { Button } from '../Button';

const Wrapper = styled.div`
  right: 0;
  top: 45px;
  background-color: white;
  width: 220px;
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
  time: number;
  onChangeTime: (time: number) => void;
};

export const TimePicker: FunctionComponent<TimePickerBoxProps> = memo(({
  time = 0,
  onChangeTime,
}) => {
  // eslint-disable-next-line no-console
  console.log('render Time Picker //',
    time,
    new Date(time).toTimeString(),
    new Date(time).toDateString());

  const onTimeHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    hour?: number,
    minute?: number,
  ) => {
    e.stopPropagation();

    const newHours = (new Date(time).getHours() + (hour || 0)) % 24;
    const newMinutes = (new Date(time).getMinutes() + (minute || 0)) % 60;

    // eslint-disable-next-line no-console
    console.log('newHours = ', newHours);
    // eslint-disable-next-line no-console
    console.log('newMinutes = ', newMinutes);

    // eslint-disable-next-line no-console
    console.log('new time', new Date(
      (new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate(),
        newHours,
        newMinutes,
      )).valueOf(),
    ).toDateString(),
    (new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      (new Date(time).getHours() + (hour || 0)) % 24,
      (new Date(time).getMinutes() + (minute || 0)) % 60,
    )).valueOf());

    onChangeTime((new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      (new Date(time).getHours() + (hour || 0)) % 24,
      (new Date(time).getMinutes() + (minute || 0)) % 60,
    )).valueOf());
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('useEffect Time Picker');

    onChangeTime(new Date().valueOf());
    // onTimeHandler(undefined, 0, 0);
  }, []);

  const hours = (`0${new Date(time).getHours().toString()}`).slice(-2);
  const minutes = (`0${new Date(time).getMinutes()}`).slice(-2);

  // eslint-disable-next-line no-console
  // console.log('time', new Date(+time).toTimeString(), Boolean(time));

  return (
    <Wrapper>
      <Hours>
        <Button
          type="button"
          onClick={(e) => onTimeHandler(e, 1, 0)}
        >
          <IoCaretUp />
        </Button>

        {hours}

        <Button type="button" onClick={(e) => onTimeHandler(e, -1, 0)}>
          <IoCaretDown />
        </Button>
      </Hours>

      <Minutes>
        <Button type="button" onClick={(e) => onTimeHandler(e, 0, 1)}>
          <IoCaretUp />
        </Button>

        {minutes}

        <Button type="button" onClick={(e) => onTimeHandler(e, 0, -1)}>
          <IoCaretDown />
        </Button>
      </Minutes>
    </Wrapper>
  );
});
