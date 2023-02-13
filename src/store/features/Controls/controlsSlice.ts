/* eslint-disable no-case-declarations */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../..';
import { PopupValues } from '../../../type/Popup';

export interface ControlState {
  popup: {
    isShowDatePicker: boolean;
    isShowAddItem: boolean;
  },
  isShowDatePickerForm: boolean;
}

const initialState: ControlState = {
  popup: {
    isShowDatePicker: false,
    isShowAddItem: false,
  },
  isShowDatePickerForm: false,
};

const controlSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    switchPopupInForm: (
      state: ControlState,
    ) => {
      state.isShowDatePickerForm = !state.isShowDatePickerForm;
    },
    switchPopup: (
      state: ControlState,
      action: PayloadAction<PopupValues>,
    ) => {
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
  switchPopupInForm,
} = controlSlice.actions;

export const selectIsShowDatePicker
 = (state: RootState) => state.control.popup.isShowDatePicker;
export const selectIsShowAddItem
= (state: RootState) => state.control.popup.isShowAddItem;
export const selectIsShowDatePickerInForm
= (state: RootState) => state.control.isShowDatePickerForm;
