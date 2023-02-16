import { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import {
  IoEllipsisHorizontal,
  IoClose,
} from 'react-icons/io5';

import { FORMAT } from '../constants/FORMAT';
import { selectFormat } from '../store/features/Interval/intervalSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Todo } from '../type/Todo';
import { Button } from '../UI/Button';
import { deleteTodo } from '../store/features/Todo/todoSlice';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TodoContainer = styled.div<{ format?: string }>`
  width: 100%;
  line-height: 14px;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: stretch;


  & div {
    margin-bottom: 4px;
    /* max-width: 100px; */
  }

  ${({ format }) => (format === FORMAT.YEAR)
  && css`
    display: none;
  `}
`;

const TodoTitle = styled.div<{ color: string, format?: string }>`
  background-color: ${props => props.color};

  padding: 7px 10px;
  border-radius: 8px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  width: 100%;
  display: flex;
  align-items: center;

  & span {
    ${({ format }) => (format === FORMAT.MONTH || format === FORMAT.WEEK) && css`
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100px;
      white-space: nowrap;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-direction: normal;
      -webkit-box-orient: vertical;
      overflow-wrap: break-word;
    `}
  }
`;

interface TodosProps {
  todos: Todo[];
}

export const Todos: FunctionComponent<TodosProps> = ({ todos }) => {
  // eslint-disable-next-line no-console
  console.log(todos);

  const dispatch = useAppDispatch();
  const format = useAppSelector(selectFormat);

  const preparedTodos = todos.filter(
    (_, i) => ((format === FORMAT.MONTH) ? i < 4 : true),
  );

  const isShowDots = (format === FORMAT.MONTH) && todos.length > 4;

  return (
    <Wrapper>
      {preparedTodos.map(todo => (
        <TodoContainer
          key={todo.todoId}
          format={format}
        >
          {(format === FORMAT.MONTH || format === FORMAT.WEEK) && (
            <>
              <TodoTitle color={todo.color} format={format}>
                <span>{todo.title}</span>

                <Button
                  type="button"
                  onClick={() => dispatch(deleteTodo(todo.todoId))}
                >
                  <IoClose />
                </Button>
              </TodoTitle>
            </>
          )}

          {(format === FORMAT.DAY) && (
            <TodoTitle color={todo.color}>
              {todo.title}
            </TodoTitle>
          )}

        </TodoContainer>
      ))}

      {isShowDots && <IoEllipsisHorizontal />}
    </Wrapper>
  );
};
