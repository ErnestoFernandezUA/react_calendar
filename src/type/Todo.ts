export type Todo = {
  todoId: string;
  versions: {
    createdAt: Date;
    title: string;
    description?: string;
  }[];
};
