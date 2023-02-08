import {
  FunctionComponent,
} from 'react';
import styled from 'styled-components';
import { FORMAT } from '../constants/FORMAT';
import {
  selectCurrentDate,
  selectFormat,
  setFormat,
  setIntervalCalendar,
} from '../store/features/Interval/intervalSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { FormatKeys, FormatValue } from '../type/FormatType';

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

  const onChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    const formatValue = e.target.value as FormatValue;

    dispatch(setFormat(formatValue));
    dispatch(setIntervalCalendar());
  };

  const onGoToPrevFormat = () => {
    // eslint-disable-next-line no-console
    console.log('onGoToPrevFormat');
  };

  // eslint-disable-next-line no-console
  console.log('Control/ format ---------------', format);

  return (
    <Wrapper>
      <Back
        format={format}
        onClick={onGoToPrevFormat}
      >
        {new Date(currentDate).toDateString()}
      </Back>

      <select
        value={format}
        defaultValue={format}
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
      </select>
    </Wrapper>
  );
};
