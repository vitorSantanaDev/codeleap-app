import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface DeletePostAlert {
  visible: boolean
  postID: number | null
}

const initialState: DeletePostAlert = {
  visible: false,
  postID: null
}

export const deletePostAlertSlice = createSlice({
  name: 'deletePostAlert',
  initialState,
  reducers: {
    toggleDeletePostAlert: (state, action: PayloadAction<number | null>) => {
      state.visible = !state.visible
      state.postID = action.payload
    }
  }
})

export const { toggleDeletePostAlert } = deletePostAlertSlice.actions
export const deletePostAlertReducer = deletePostAlertSlice.reducer
