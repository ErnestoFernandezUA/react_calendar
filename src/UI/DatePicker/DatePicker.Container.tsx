import {
  FunctionComponent,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
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

type DatePickerBoxProps = {
  currentDate: number;
  onChangeDate: (day: number) => void;
  datePickerControlRef: RefObject<HTMLDivElement>;
  onShowDatePickerHandler: () => void;
};

export const DatePickerContainer: FunctionComponent<DatePickerBoxProps> = ({
  currentDate,
  onChangeDate,
  datePickerControlRef,
  onShowDatePickerHandler,
}) => {
  const [arrOfYears, setArrOfYears] = useState<string[]>([]);
  const [arrOfMonths, setArrOfMonths]
  = useState<{ label: string, value: string }[]>([]);
  const [arrOfDays, setArrOfDays]
  = useState<{ id: string, value: string, label: string }[]>([]);

  const datePickerContainerRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line no-console
  // console.log(controlRef, onShowDatePickerHandler);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('useEffect mount clicker DP');

    document.addEventListener('click', (event) => handleClickOutside(
      event,
      datePickerControlRef,
      datePickerContainerRef,
      onShowDatePickerHandler,
    ));

    return () => {
      document.removeEventListener('click', (event) => handleClickOutside(
        event,
        datePickerControlRef,
        datePickerContainerRef,
        onShowDatePickerHandler,
      ));
    };
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('useEffect DK');

    setArrOfYears(buildArrayOfYears(currentDate));
  }, []);

  const onYearHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    // eslint-disable-next-line no-console
    console.log('DatePicker// onYearHandler');

    e.stopPropagation();
    const currentYear = +(e.target as HTMLButtonElement).value;

    setArrOfMonths(buildArrOfMonths(currentYear));
  };

  const onMonthHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    // eslint-disable-next-line no-console
    console.log('DatePicker// onMonthHandler');

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
    console.log('DatePicker// onDayHandler');

    e.stopPropagation();
    const day = +(e.target as HTMLButtonElement).value;

    onChangeDate(day);
    setArrOfMonths([]);
    setArrOfDays([]);
  };

  return (
    <Wrapper ref={datePickerContainerRef}>
      {arrOfYears.length > 0
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

      {arrOfYears.length > 0
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

      {arrOfYears.length > 0
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
    </Wrapper>
  );
};
