import {
  FunctionComponent,
  // RefObject,
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';
import {
  // IoRefresh,
  IoCaretDown, IoCaretUp, IoCheckmark,
} from 'react-icons/io5';

import {
} from '../../store/features/Interval/intervalSlice';
import { Button } from '../Button';
// import { handleClickOutside } from '../../helpers/handleClickOutside';

const Wrapper = styled.div`
  z-index: 50;
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
  currentDate: number;
  onChangeTime: (day: number) => void;
  // TimePickerControlRef: RefObject<HTMLDivElement>;
  // onShowTimePickerHandler: () => void;
};

export const TimePicker: FunctionComponent<TimePickerBoxProps> = ({
  currentDate,
  onChangeTime,
  // TimePickerControlRef,
  // onShowTimePickerHandler,
}) => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('useEffect TK');

    // setTime(new Date().valueOf().toString());
  }, []);

  const onHourHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    value: number,
  ) => {
    e.stopPropagation();
    // eslint-disable-next-line no-console
    console.log('onHourHandler', new Date(+time).toDateString());
    setTime((new Date(
      new Date(currentDate).getFullYear(),
      new Date(currentDate).getMonth(),
      new Date(currentDate).getDate(),
      new Date(+time).getHours() + value,
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
    setTime((new Date(
      new Date(currentDate).getFullYear(),
      new Date(currentDate).getMonth(),
      new Date(currentDate).getDate(),
      new Date(+time).getHours(),
      new Date(+time).getMinutes() + value,
    )).valueOf().toString());
  };

  const onTimeHandler = () => {
    const newTime = new Date(
      new Date(currentDate).getFullYear(),
      new Date(currentDate).getMonth(),
      new Date(currentDate).getDate(),
      new Date(time).getHours(),
      new Date(time).getMinutes(),
    ).valueOf();

    onChangeTime(newTime);
  };

  const hours = new Date(+time).getHours();
  const minutes = new Date(+time).getMinutes();

  // eslint-disable-next-line no-console
  console.log('time', time, Boolean(time));

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
              <IoCaretUp size={30} />
            </Button>
            {hours}
            <Button onClick={(e) => onHourHandler(e, -1)}>
              <IoCaretDown size={30} />
            </Button>
          </Hours>

          <Minutes>
            <Button onClick={(e) => onMinutesHandler(e, 1)}>
              <IoCaretUp size={30} />
            </Button>
            {minutes}

            <Button onClick={(e) => onMinutesHandler(e, -1)}>
              <IoCaretDown size={30} />
            </Button>
          </Minutes>

          <Button onClick={onTimeHandler}>
            <IoCheckmark size={30} />
          </Button>
          {/* <Button onClick={onShowTimePickerHandler}>
            <IoRefresh size={30} />
          </Button> */}

        </>
      )}
    </Wrapper>
  );
};
