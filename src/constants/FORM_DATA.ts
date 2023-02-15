import { FormDataKeys, FormDataValues } from '../type/Form';

export const FORM_DATA: { [key in FormDataKeys]: FormDataValues } = {
  TITLE: 'title',
  DESCRIPTION: 'description',
  DATE: 'date',
  TIME: 'time',
};
