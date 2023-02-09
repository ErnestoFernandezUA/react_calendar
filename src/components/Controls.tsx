import {
  FunctionComponent,
} from 'react';
import styled from 'styled-components';
import { FORMAT } from '../constants/FORMAT';
import { MONTH_NAMES } from '../constants/MONTH';
import {
  selectCurrentDate,
  selectFormat,
  setFormat,
  setIntervalCalendar,
} from '../store/features/Interval/intervalSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
// import { FormatKeys, FormatValue } from '../type/FormatType';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Back = styled.div<{ format: string }>`
  cursor: pointer;
`;

export const Controls: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const currentDate = useAppSelector(selectCurrentDate);
  const format = useAppSelector(selectFormat);
  const fullNameMonth = MONTH_NAMES[new Date(currentDate).getMonth()];
  const fullYear = new Date(currentDate).getFullYear();

  // const onChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
  //   const formatValue = e.target.value as FormatValue;

  //   dispatch(setFormat(formatValue));
  //   dispatch(setIntervalCalendar());
  // };

  const onGoToPrevFormat = () => {
    // eslint-disable-next-line no-console
    console.log('onGoToPrevFormat');

    switch (format) {
      case FORMAT.DAY:
      case FORMAT.WEEK:
        dispatch(setFormat(FORMAT.MONTH));
        break;

      case FORMAT.MONTH:
        dispatch(setFormat(FORMAT.YEAR));
        break;

      default:
    }

    dispatch(setIntervalCalendar());
  };

  return (
    <Wrapper>
      <Back
        format={format}
        onClick={onGoToPrevFormat}
      >
        {/* {new Date(currentDate).toDateString()} */}
        {(format === FORMAT.DAY || format === FORMAT.WEEK) && fullNameMonth}
        {format === FORMAT.MONTH && fullYear}
      </Back>

      {/* <select
        value={format}
        onChange={onChange}
      >
        {Object.keys(FORMAT).map((item) => {
          const formatKey = item as FormatKeys;

          return (
            <option
              value={FORMAT[formatKey]}
              key={item}
            >
              {FORMAT[formatKey]}
            </option>
          );
        })}
      </select> */}
    </Wrapper>
  );
};
