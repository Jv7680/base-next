import { GetSkuRequest, categoryApi, skuApi, vendorApi } from '@/data';
import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkArg } from '../common';
import { NewSkuManagementPageState, sliceName } from './new-sku.state';
import { message } from 'antd';
import { Headers } from '@/lib';
import { RequestType } from '@/utils';

const getListSku = createAsyncThunk(
  `${sliceName}/getListSku`,
  async (arg: ThunkArg<GetSkuRequest>) => {
    return await skuApi.getMany(arg);
  }
);

export const buildGetListSku = (
  builder: ActionReducerMapBuilder<NewSkuManagementPageState>
) => {
  return builder
    .addCase(getListSku.pending, (state) => {
      state.isLoadingGetListSku = true;
    })
    .addCase(getListSku.fulfilled, (state, action) => {
      state.isLoadingGetListSku = false;
      state.listSku = action.payload;
    })
    .addCase(getListSku.rejected, (state, action) => {
      message.error(
        `Cause an error when get list SKU: ${action.error.message}`
      );
      state.isLoadingGetListSku = false;
    });
};

const getAllCategories = createAsyncThunk(
  `${sliceName}/getAllCategories`,
  async (headers: Headers) => {
    return await categoryApi.getMany({ type: RequestType.GetAll, headers });
  }
);

export const buildGetAllCategories = (
  builder: ActionReducerMapBuilder<NewSkuManagementPageState>
) => {
  return builder
    .addCase(getAllCategories.pending, (state) => {
      state.isLoadingGetAllCategories = true;
    })
    .addCase(getAllCategories.fulfilled, (state, action) => {
      state.isLoadingGetAllCategories = false;
      state.allCategories = action.payload.data;
    })
    .addCase(getAllCategories.rejected, (state, action) => {
      message.error(
        `Cause an error when get all categories: ${action.error.message}`
      );
      state.isLoadingGetAllCategories = false;
    });
};

const getAllVendors = createAsyncThunk(
  `${sliceName}/getAllVendors`,
  async (headers: Headers) => {
    return await vendorApi.getMany({ type: RequestType.GetAll, headers });
  }
);

export const buildGetAllVendors = (
  builder: ActionReducerMapBuilder<NewSkuManagementPageState>
) => {
  return builder
    .addCase(getAllVendors.pending, (state) => {
      state.isLoadingGetAllVendors = true;
    })
    .addCase(getAllVendors.fulfilled, (state, action) => {
      state.isLoadingGetAllVendors = false;
      state.allVendors = action.payload.data;
    })
    .addCase(getAllVendors.rejected, (state, action) => {
      message.error(
        `Cause an error when get all vendors: ${action.error.message}`
      );
      state.isLoadingGetAllVendors = false;
    });
};

const createSku = createAsyncThunk(
  `${sliceName}/createSku`,
  async (arg: ThunkArg) => {
    return await skuApi.create(arg);
  }
);

export const buildCreateSku = (
  builder: ActionReducerMapBuilder<NewSkuManagementPageState>
) => {
  return builder
    .addCase(createSku.pending, (state) => {
      message.success('Create SKU successfully');
      state.isLoadingCreateSku = true;
    })
    .addCase(createSku.fulfilled, (state) => {
      state.isLoadingCreateSku = false;
    })
    .addCase(createSku.rejected, (state, action) => {
      message.error(`Cause an error when create SKU: ${action.error.message}`);
      state.isLoadingCreateSku = false;
    });
};

export const thunkActions = {
  getListSku,
  getAllCategories,
  getAllVendors,
  createSku,
} as const;
