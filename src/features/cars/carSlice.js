import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [
    "Model s",
    "Model 3",
    "Model x",
    "Model y",
    "Solar Roof",
    "Solar Panels",
  ],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.car.cars;

export default carSlice.reducer;
