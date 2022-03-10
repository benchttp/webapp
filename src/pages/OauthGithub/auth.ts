import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { client } from 'shared/helpers/client'

import { RootState } from '../../shared/store'

export interface IAuthState {
  token: null | string
  isAuth: boolean
  isLoading: boolean
  user?: {
    fullname: string
  }
}

const initialState: IAuthState = {
  token: null,
  isLoading: false,
  isAuth: false,
  user: undefined,
}

export const fetchGithubToken = createAsyncThunk(
  'auth/fetchGithubToken',
  async (code: string) => {
    const response = await client(
      'https://github.com/login/oauth/access_token',
      {
        data: {
          code,
          client_id: process.env.REACT_APP_CLIENT_ID_GITHUB,
          client_secret: process.env.REACT_APP_SECRET_ID_GITHUB,
          accept: 'json',
        },
        method: 'POST',
      }
    )
    return response.data
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGithubToken.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchGithubToken.fulfilled, (state, action) => {
      state.isLoading = false
      console.log(action)
      // localStorage.setItem('githubToken', action.token)
    })
  },
})

export const selectAuth = (state: RootState) => state.auth

// eslint-disable-next-line
export default authSlice.reducer
