import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
const axios = require('axios');

export const fetchRegistration = createAsyncThunk('auth/fetchRegistrationLoading', 
  (data) =>
  axios
    .post('https://wu89z93mp4.execute-api.us-west-2.amazonaws.com/dev/authentication/signup', data, false)
    .then(response => data = {
      "formData": data,
      "data": response.data
    })
    .catch(error => error),
);

const registrationInitialState = {
   registrationList: {
     status: 'idle',
     data: {},
     error: {}
   }    
};

const registrationSlice = createSlice({
  name: 'registrationData',
  initialState: registrationInitialState,
  reducers: {
  },
  extraReducers: {
    [fetchRegistration.pending.type]: (state, action) => {
        state.registrationList = {
        status: 'loading',
        data: action.payload,
        error: {}
      };
    },
    [fetchRegistration.fulfilled.type]: (state, action) => {
        state.registrationList = {
        status: 'idle',
        data: action.payload,
        error: {}
     };
    },
    [fetchRegistration.rejected.type]: (state, action) => {
        state.registrationList = {
        status: 'idle',
        data: action.payload,
        error: action.payload,
      };
    },
  }
});

export default registrationSlice.reducer;
