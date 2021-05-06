import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface CommsLayer {
  exportJSONModalOpen: boolean;
}

const initialState = {
  exportJSONModalOpen: false,
};

// TODO: Migrate SelectedTask stuff to here
export const uiCommunicationSlice = createSlice({
  name: "comms",
  initialState,
  reducers: {
    setExportJSONModal: (state: CommsLayer, action: PayloadAction<boolean>) => {
      state.exportJSONModalOpen = !state.exportJSONModalOpen;
    },
  },
});

export const { setExportJSONModal } = uiCommunicationSlice.actions;

export const getExportJSONModalOpen = (state: RootState) =>
  state.comms.exportJSONModalOpen;

export default uiCommunicationSlice.reducer;
