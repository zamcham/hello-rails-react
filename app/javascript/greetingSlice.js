import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const initialState = {
  greetings: [],
  loading: false,
  error: '',
};
const url = 'http://localhost:3000/api/greetings';

export const getGreetings = createAsyncThunk('greetings/fetchMessages', async () => {
  const response = await fetch(`${url}`);
  const data = await response.json();
  return data;
});

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGreetings.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getGreetings.fulfilled, (state, action) => {
      state.loading = false;
      state.greetings = { text: action.payload.text };
      state.error = '';
    });    
    builder.addCase(getGreetings.rejected, (state, action) => {
      state.loading = false;
      state.greetings = [];
      state.error = action.error.message;
    });
  },
});

export default greetingsSlice.reducer;