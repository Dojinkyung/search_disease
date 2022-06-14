import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  searchString: '',
}

type State = typeof initialState
const reducers = {
  setSearchString: (state: State, action: PayloadAction<string>) => {
    const searchString = action.payload
    return { ...state, searchString }
  },
}

const { actions, reducer } = createSlice({
  name: 'searchSlice',
  initialState,
  reducers,
})

const searchReducer = reducer

export const { setSearchString } = actions

export default searchReducer
