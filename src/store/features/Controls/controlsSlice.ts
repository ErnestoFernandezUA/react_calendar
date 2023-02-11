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
}

const initialState: ControlState = {
  popup: {
    isShowDatePicker: false,
    isShowAddItem: false,
  },
};

const controlSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    switchPopup: (
      state: ControlState,
      action: PayloadAction<PopupValues>,
    ) => {
      // eslint-disable-next-line no-console
      console.log('switchPopup');

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
} = controlSlice.actions;

export const selectIsShowDatePicker
 = (state: RootState) => state.control.popup.isShowDatePicker;
export const selectIsShowAddItem
= (state: RootState) => state.control.popup.isShowAddItem;
