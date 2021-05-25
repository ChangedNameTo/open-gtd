import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface CommsLayer {
  exportJSONModalOpen: boolean;
  importJSONModalOpen: boolean;
}

const initialState = {
  exportJSONModalOpen: false,
  importJSONModalOpen: false,
};

// TODO: Migrate SelectedTask stuff to here
export const uiCommunicationSlice = createSlice({
  name: "comms",
  initialState,
  reducers: {
    setExportJSONModal: (state: CommsLayer, action: PayloadAction<boolean>) => {
      state.exportJSONModalOpen = !state.exportJSONModalOpen;
    },
    setImportJSONModal: (state: CommsLayer, action: PayloadAction<boolean>) => {
      state.importJSONModalOpen = !state.importJSONModalOpen;
    },
  },
});

export const {
  setExportJSONModal,
  setImportJSONModal,
} = uiCommunicationSlice.actions;

export const getExportJSONModalOpen = (state: RootState) =>
  state.comms.exportJSONModalOpen;
export const getImportJSONModalOpen = (state: RootState) =>
  state.comms.importJSONModalOpen;

export default uiCommunicationSlice.reducer;
