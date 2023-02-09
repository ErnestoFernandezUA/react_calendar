type Color = 'red' | 'green' | 'blue';

export type Todo = {
  todoId: string;
  title: string;
  description?: string;
  color?: Color;
  createdAt: Date;
};
