export type FormDataKeys = 'TITLE' | 'DESCRIPTION' | 'DATE' | 'TIME';
export type FormDataValues = 'title' | 'description' | 'date' | 'time';

export type FormDataType = { [key in FormDataValues]: string };
