import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface EditPostModalState {
  visible: boolean
  postID: number | null
}

const initialState: EditPostModalState = {
  visible: false,
  postID: null
}

export const editPostModalSlice = createSlice({
  name: 'editPostModal',
  initialState,
  reducers: {
    toggleEditPostModal: (state, action: PayloadAction<number | null>) => {
      state.visible = !state.visible
      state.postID = action.payload
    }
  }
})

export const { toggleEditPostModal } = editPostModalSlice.actions
export const editPostModalReducer = editPostModalSlice.reducer
