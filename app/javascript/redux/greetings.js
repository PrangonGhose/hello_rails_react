import { createAsyncThunk } from "@reduxjs/toolkit";

export const getGreetings = createAsyncThunk('getGreetings', async() => {
  const url = '/api/messages/random';
  const response = await fetch(url);
  const data = await response.json();
  console.log('data', data.greeting)

  return [data.greeting];
})

const greetingsReducer = (state = [], action) => {
  switch(action.type) {
    case 'getGreetings/fulfilled':
      return action.payload;
    default:
      return state;
  }
}

export default greetingsReducer;