import { createAsyncThunk } from "@reduxjs/toolkit"

const addUserAction = createAsyncThunk(
  'user/addUser',
  async (user) => {
    const response = await userAPI.fetchById(userId)
    return response.data
  }
)



export const addUserAction = (payload) => (dispatch) => {
  dispatch(addUserPanding())
  addUserAction(payload).then((user => {
    dispatch(addUserSuccess(user))
  })).catch(() => {
    dispatch(addUserError(error))
  })
}