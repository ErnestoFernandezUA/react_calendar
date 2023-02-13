import { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';

import { IoCaretBackOutline, IoCaretForwardOutline } from 'react-icons/io5';
import { FORMAT } from '../constants/FORMAT';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  navigateMonth,
  navigateYear,
  selectCurrentDate,
  selectFormat,
  setFormat,
  setIntervalCalendar,
} from '../store/features/Interval/intervalSlice';
import { MONTH_NAMES } from '../constants/MONTH';
import { MOVE } from '../constants/MOVE';

const Wrapper = styled.div`
  display: flex;`;

const Arrow = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  outline: none;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`;

const Value = styled.div<{ format: string }>`
  width: 160px;

  ${({ format }) => format === FORMAT.YEAR
    && css`
      width: 60px;
    `}
`;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ArrowNavigatorProps {}

export const ArrowNavigator: FunctionComponent<ArrowNavigatorProps> = () => {
  const dispatch = useAppDispatch();
  const currentDate = useAppSelector(selectCurrentDate);
  const format = useAppSelector(selectFormat);
  const fullNameMonth = MONTH_NAMES[new Date(currentDate).getMonth()];
  const fullYear = new Date(currentDate).getFullYear();

  const onNavigateHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (format !== FORMAT.YEAR) {
      dispatch(navigateMonth(e.currentTarget.value));
      dispatch(setFormat(FORMAT.MONTH));
    }

    if (format === FORMAT.YEAR) {
      dispatch(navigateYear(e.currentTarget.value));
    }

    dispatch(setIntervalCalendar());
  };

  return (
    <Wrapper>
      <Arrow
        type="button"
        value={MOVE.BACK}
        onClick={onNavigateHandler}
      >
        <IoCaretBackOutline />
      </Arrow>
      <Value format={format}>
        {format !== FORMAT.YEAR && (
          <>
            &nbsp;
            {fullNameMonth}
          </>
        )}
        &nbsp;
        {fullYear}
        &nbsp;
      </Value>
      <Arrow
        type="button"
        value={MOVE.FORWARD}
        onClick={onNavigateHandler}
      >
        <IoCaretForwardOutline />
      </Arrow>
    </Wrapper>
  );
};
