import {
  FunctionComponent, useEffect, useRef, useState,
} from 'react';
import styled from 'styled-components';
import {
  IoCalendarOutline,
} from 'react-icons/io5';
import {
  selectCurrentDate,
} from '../store/features/Interval/intervalSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  selectIsShowDatePicker,
  switchPopup,
} from '../store/features/Controls/controlsSlice';
import { POPUP } from '../constants/POPUP';
import { Button } from '../UI/Button';
import { buildArrOfMonths } from '../helpers/buildArrOfMonths';
import { buildArrOfDays } from '../helpers/buildArrOfDays';
import { buildArrayOfYears } from '../helpers/buildArrayOfYears';

const Wrapper = styled.div`
  position: relative;
`;

const DatePickerTitle = styled.div`
  display: flex;
`;

const DatePickerButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin-left: 40px;
`;

const DatePickerContainer = styled.div`
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

interface DatePickerProps {
  // eslint-disable-next-line react/require-default-props
  onChangeDate?: (value: number) => void;
}

export const DatePicker: FunctionComponent<DatePickerProps> = ({
  onChangeDate = () => {
    // eslint-disable-next-line no-console
    console.log('no function OnChange');
  },
}) => {
  const dispatch = useAppDispatch();
  const currentDate = useAppSelector(selectCurrentDate);
  const isShowContainer = useAppSelector(selectIsShowDatePicker);

  const [arrOfYears, setArrOfYears] = useState<string[]>([]);
  const [arrOfMonths, setArrOfMonths]
  = useState<{ label: string, value: string }[]>([]);
  const [arrOfDays, setArrOfDays]
  = useState<{ id: string, value: string, label: string }[]>([]);

  const controlRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside
    = (event: MouseEvent) => {
      if (formRef.current
        && !formRef.current.contains(event.target as Node)
        && controlRef.current
        && !controlRef.current.contains(event.target as Node)
      ) {
        dispatch(switchPopup(POPUP.IS_SHOW_DATE_PICKER));
        setArrOfMonths([]);
        setArrOfDays([]);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setArrOfYears(buildArrayOfYears(currentDate));
  }, [currentDate]);

  const onShowHandler = () => {
    dispatch(switchPopup(POPUP.IS_SHOW_DATE_PICKER));
  };

  const onYearHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const currentYear = +(e.target as HTMLButtonElement).value;

    setArrOfMonths(buildArrOfMonths(currentYear));
  };

  const onMonthHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
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
    e.stopPropagation();
    const day = +(e.target as HTMLButtonElement).value;

    onChangeDate(day);
    setArrOfMonths([]);
    setArrOfDays([]);
  };

  return (
    <Wrapper>
      <DatePickerTitle
        ref={controlRef}
      >
        <DatePickerButton
          onClick={onShowHandler}
        >
          <IoCalendarOutline size={30} />
        </DatePickerButton>
      </DatePickerTitle>

      {isShowContainer && (
        <DatePickerContainer ref={formRef}>
          <Years>
            {arrOfYears.length > 0
            && arrOfMonths.length === 0
            && arrOfDays.length === 0
            && (arrOfYears.map((y:string) => (
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

          <Months>
            {arrOfYears.length > 0
            && arrOfMonths.length > 0
            && arrOfDays.length === 0
            && (arrOfMonths.map((m) => (
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

          <Days>
            {arrOfYears.length > 0
            && arrOfMonths.length > 0
            && arrOfDays.length > 0
            && arrOfDays.map(
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
        </DatePickerContainer>
      )}
    </Wrapper>
  );
};
