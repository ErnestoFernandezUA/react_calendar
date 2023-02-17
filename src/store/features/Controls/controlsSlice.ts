/* eslint-disable no-case-declarations */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../..';
import { PopupValues } from '../../../type/Popup';
import { Todo } from '../../../type/Todo';

export interface ControlState {
  popup: {
    isShowDatePicker: boolean;
    isShowForm: boolean;
  },
  todo: Todo | null;
}

const initialState: ControlState = {
  popup: {
    isShowDatePicker: false,
    isShowForm: false,
  },
  todo: null,
};

const controlSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    // switchPopupInForm: (
    //   state: ControlState,
    // ) => {
    //   // eslint-disable-next-line no-console
    //   console.log('switchPopupInForm');
    //   state.isShowDatePickerForm = !state.isShowDatePickerForm;
    // },
    switchPopup: (
      state: ControlState,
      action: PayloadAction<PopupValues>,
    ) => {
      // eslint-disable-next-line no-console
      console.log('switchPopup', action.payload);
      state.popup = {
        ...initialState.popup,
        [action.payload]: !state.popup[action.payload],
      };
    },
    closeAllPopup: (
      state: ControlState,
    ) => {
      state.popup = {
        ...initialState.popup,
      };
    },
    sentTodoToForm: (
      state: ControlState,
      action: PayloadAction<Todo>,
    ) => {
      state.todo = action.payload;
    },
    resetTodo: (state: ControlState) => {
      state.todo = initialState.todo;
    },
    resetState: (state: ControlState) => {
      return { ...state, ...initialState };
    },
  },
});

export default controlSlice.reducer;
export const {
  switchPopup,
  closeAllPopup,
  resetState,
  resetTodo,
  sentTodoToForm,
} = controlSlice.actions;

export const selectIsShowDatePicker
 = (state: RootState) => state.control.popup.isShowDatePicker;
export const selectIsShowAddItem
= (state: RootState) => state.control.popup.isShowForm;
// export const selectIsShowDatePickerInForm
// = (state: RootState) => state.control.isShowDatePickerForm;
export const selectTodoToForm
= (state: RootState) => state.control.todo;
