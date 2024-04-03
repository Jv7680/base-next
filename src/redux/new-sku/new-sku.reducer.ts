import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { ActionReducer } from '../common';
import {
  buildCreateSku,
  buildGetAllCategories,
  buildGetAllVendors,
  buildGetListSku,
} from './new-sku.handler';
import { NewSkuManagementPageState } from './new-sku.state';

class NewSkuReducer {
  reducers;
  extraReducers;

  constructor() {
    this.reducers = {
      setIsOnFiltering: (state, action: PayloadAction<boolean>) => {
        state.isOnFiltering = action.payload;
      },
    } satisfies ActionReducer<NewSkuManagementPageState>;

    this.extraReducers = (
      builder: ActionReducerMapBuilder<NewSkuManagementPageState>
    ) => {
      buildGetListSku(builder);
      buildGetAllCategories(builder);
      buildGetAllVendors(builder);
      buildCreateSku(builder);
    };
  }
}

export const newSkuReducer = new NewSkuReducer();
