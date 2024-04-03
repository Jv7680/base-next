import { thunkActions } from './new-sku.handler';
import { createSlice } from '@reduxjs/toolkit';
import { newSkuReducer } from './new-sku.reducer';
import { initialNewSkuPageState, sliceName } from './new-sku.state';

const newSkuSlice = createSlice({
  name: sliceName,
  initialState: initialNewSkuPageState,
  reducers: newSkuReducer.reducers,
  extraReducers: newSkuReducer.extraReducers,
});

export const newSkuActions = {
  ...thunkActions,
  ...newSkuSlice.actions,
};
export default newSkuSlice.reducer;
