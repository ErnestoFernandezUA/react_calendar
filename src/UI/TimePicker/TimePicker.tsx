import {
  FunctionComponent,
  memo,
  // RefObject,
  useEffect,
  useMemo,
  // useState,
} from 'react';
import styled from 'styled-components';
import {
  // IoRefresh,
  IoCaretDown, IoCaretUp,
} from 'react-icons/io5';

import { Button } from '../Button';
// import { handleClickOutside } from '../../helpers/handleClickOutside';

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
  time: string;
  onChangeTime: (time: string) => void;
};

export const TimePicker: FunctionComponent<TimePickerBoxProps> = memo(({
  time,
  onChangeTime,
}) => {
  // eslint-disable-next-line no-console
  console.log('render Time Picker',
    new Date(+time).toTimeString(),
    new Date(+time).toDateString());

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('useEffect Time Picker');

    onChangeTime(new Date().valueOf().toString());
  }, []);

  const onHourHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    value: number,
  ) => {
    e.stopPropagation();
    // eslint-disable-next-line no-console
    // console.log('onHourHandler', e, new Date(+time).toDateString());

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
    // console.log('onHourHandler', new Date(+time).toDateString());
    onChangeTime((new Date(
      new Date(+time).getFullYear(),
      new Date(+time).getMonth(),
      new Date(+time).getDate(),
      new Date(+time).getHours(),
      (new Date(+time).getMinutes() + value) % 60,
    )).valueOf().toString());
  };

  const hours = useMemo(() => {
    return (`0${new Date(+time).getHours().toString()}`).slice(-2);
  }, [time]);
  const minutes = useMemo(() => {
    return ((`0${new Date(+time).getMinutes()}`).slice(-2));
  }, [time]);

  // eslint-disable-next-line no-console
  // console.log('time', new Date(+time).toTimeString(), Boolean(time));

  return (
    <Wrapper>
      {!time ? (
        <Button
          type="button"
          onClick={(e) => onHourHandler(e, 0)}
        >
          Select time
        </Button>
      ) : (
        <>
          <Hours>
            <Button
              type="button"
              onClick={(e) => onHourHandler(e, 1)}
            >
              <IoCaretUp />
            </Button>
            {hours}
            <Button type="button" onClick={(e) => onHourHandler(e, -1)}>
              <IoCaretDown />
            </Button>
          </Hours>

          <Minutes>
            <Button type="button" onClick={(e) => onMinutesHandler(e, 1)}>
              <IoCaretUp />
            </Button>
            {minutes}

            <Button type="button" onClick={(e) => onMinutesHandler(e, -1)}>
              <IoCaretDown />
            </Button>
          </Minutes>
        </>
      )}
    </Wrapper>
  );
});
