import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import firestore from '@react-native-firebase/firestore'

const initialState = {
  value: 0,
  veri: [],
  status: 'idle',
  error: null
}

// Define the async thunk
export const VeriGetir2 = createAsyncThunk('counter/VeriGetir2', async () => {
  const veriler = await firestore().collection("haberler").get()
  //console.log("Veriler geldi")
  return veriler.docs.map((deniz) => ({ ...deniz.data() }))
})

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(VeriGetir2.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(VeriGetir2.fulfilled, (state, action) => {
        state.status = 'succeeded'
        //console.log(state.veri.length)
        state.veri = action.payload
        //console.log(state.veri.length)
        //console.log(state.veri.length)
      })
      .addCase(VeriGetir2.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

// Action creators are generated for each case reducer function
export const { increment } = counterSlice.actions

export default counterSlice.reducer
