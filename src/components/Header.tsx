import { FunctionComponent } from 'react';
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
`;

export const Header: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const currentDate = useAppSelector(selectCurrentDate);
  const format = useAppSelector(selectFormat);

  const onChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    const formatValue = e.target.value as FormatValue;

    dispatch(setFormat(formatValue));
    dispatch(setIntervalCalendar());
  };

  return (
    <Wrapper>
      <p>{new Date(currentDate).toDateString()}</p>

      <select
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
