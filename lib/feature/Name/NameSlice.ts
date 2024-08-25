import { createSlice } from '@reduxjs/toolkit'

export interface NameState {
  value: string
}

const initialState: NameState = {
  value: '',
}

export const NameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    setName: (state,action) => {
      state.value = action.payload
    },
  },
})

export const { setName } = NameSlice.actions

export default NameSlice.reducer