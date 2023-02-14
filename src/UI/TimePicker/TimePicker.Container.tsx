import {
  FunctionComponent,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import {
  IoRefresh,
} from 'react-icons/io5';

import {
} from '../../store/features/Interval/intervalSlice';
import { Button } from '../Button';
import { buildArrOfMonths } from '../../helpers/buildArrOfMonths';
import { buildArrOfDays } from '../../helpers/buildArrOfDays';
import { buildArrayOfYears } from '../../helpers/buildArrayOfYears';
import { handleClickOutside } from '../../helpers/handleClickOutside';

const Wrapper = styled.div`
  z-index: 50;
  position: absolute;
  right: 0;
  top: 45px;
  background-color: white;
  width: 400px;
  box-sizing: border-box;
  padding: 20px;

  display: flex;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Years = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
  & > :hover{
    background-color: #e6e6e6;
  }
`;

const Months = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
  & > :hover{
    background-color: #e6e6e6;
  }
`;

const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 20px;
  & > :hover{
    background-color: #e6e6e6;
  }
`;

const Hours = styled.div`
`;

const Minutes = styled.div`
`;

const RefreshButton = styled.button`

`;

type TimePickerBoxProps = {
  currentTime: number;
  onChangeTime: (day: number) => void;
  TimePickerControlRef: RefObject<HTMLDivElement>;
  onShowTimePickerHandler: () => void;
};

export const TimePickerContainer: FunctionComponent<TimePickerBoxProps> = ({
  currentTime,
  onChangeTime,
  TimePickerControlRef,
  onShowTimePickerHandler,
}) => {
  const [hours, setHours] = useState<string>('');
  const [minutes, setMinutes] = useState<string>('');

  const [arrOfYears, setArrOfYears] = useState<string[]>([]);
  const [arrOfMonths, setArrOfMonths]
  = useState<{ label: string, value: string }[]>([]);
  const [arrOfDays, setArrOfDays]
  = useState<{ id: string, value: string, label: string }[]>([]);

  const TimePickerContainerRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line no-console
  // console.log(controlRef, onShowTimePickerHandler);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('useEffect mount clicker TP');

    document.addEventListener('click', (event) => handleClickOutside(
      event,
      TimePickerControlRef,
      TimePickerContainerRef,
      onShowTimePickerHandler,
    ));

    return () => {
      document.removeEventListener('click', (event) => handleClickOutside(
        event,
        TimePickerControlRef,
        TimePickerContainerRef,
        onShowTimePickerHandler,
      ));
    };
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('useEffect TK');
    setArrOfYears(buildArrayOfYears(new Date().valueOf()));

    setHours((new Date()).getHours().toString());
    setMinutes((new Date()).getMinutes().toString());
  }, []);

  const onYearHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    // eslint-disable-next-line no-console
    console.log('TimePicker// onYearHandler');

    e.stopPropagation();
    const currentYear = +(e.target as HTMLButtonElement).value;

    setArrOfMonths(buildArrOfMonths(currentYear));
  };

  const onMonthHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    // eslint-disable-next-line no-console
    console.log('TimePicker// onMonthHandler');

    e.stopPropagation();
    const month = +(e.target as HTMLButtonElement).value;

    const currentMonth = new Date(
      new Date(month).getFullYear(),
      new Date(month).getMonth(),
      1,
    ).valueOf();

    setArrOfDays(buildArrOfDays(currentMonth));
  };

  const onDayHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    // eslint-disable-next-line no-console
    console.log('TimePicker// onDayHandler');

    e.stopPropagation();
    const day = +(e.target as HTMLButtonElement).value;

    onChangeTime(day);
    setArrOfMonths([]);
    setArrOfDays([]);
  };

  const onTimeHandler = () => {
    const time = new Date(
      new Date(currentTime).getFullYear(),
      new Date(currentTime).getMonth(),
      new Date(currentTime).getDate(),
      +hours,
      +minutes,
    ).valueOf();

    onChangeTime(time);
  };

  return (
    <Wrapper ref={TimePickerContainerRef}>
      {false && arrOfYears.length > 0
      && arrOfMonths.length === 0
      && arrOfDays.length === 0
      && (
        <Years>
          {(arrOfYears.map((y:string) => (
            <Button
              key={y}
              type="button"
              value={y}
              onClick={e => onYearHandler(e)}
            >
              {new Date(+y).getFullYear()}
            </Button>
          )))}
        </Years>
      )}

      {false && arrOfYears.length > 0
      && arrOfMonths.length > 0
      && arrOfDays.length === 0
      && (
        <Months>
          {(arrOfMonths.map((m) => (
            <Button
              key={m.label}
              type="button"
              value={m.value}
              onClick={e => onMonthHandler(e)}
            >
              {m.label}
            </Button>
          )))}
        </Months>
      )}

      {false && arrOfYears.length > 0
      && arrOfMonths.length > 0
      && arrOfDays.length > 0
      && (
        <Days>
          {arrOfDays.map(
            (d: { id: string, value: string, label: string }) => (
              <Button
                key={d.id}
                type="button"
                value={d.value}
                onClick={e => onDayHandler(e)}
              >
                {d.label}
              </Button>
            ),
          )}
        </Days>
      )}

      <Hours>
        {hours}
      </Hours>
      :
      <Minutes>
        {minutes}
      </Minutes>

      <RefreshButton onClick={onShowTimePickerHandler}>
        <IoRefresh size={30} />
      </RefreshButton>

      <Button onClick={onTimeHandler}>SetTime</Button>
    </Wrapper>
  );
};
