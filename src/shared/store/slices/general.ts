import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ISliceGeneral {
  selectedRunId: string | undefined
}

const initialState: ISliceGeneral = {
  selectedRunId: undefined,
}

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setSelectedRun: (
      state,
      action: PayloadAction<ISliceGeneral['selectedRunId']>
    ) => {
      state.selectedRunId = action.payload
    },
  },
})

export const { setSelectedRun } = generalSlice.actions

export const generalSliceReducer = generalSlice.reducer
