export type FormDataKeys
= 'TITLE' | 'DESCRIPTION' | 'DATE' | 'TIME' | 'COLOR';
export type FormDataValues
= 'title' | 'description' | 'date' | 'time' | 'color';

export type FormDataType = { [key in FormDataValues]: string };
