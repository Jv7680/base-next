import { Response } from '@/data';
import { Category, Sku, Vendor } from '@/models';
import {
  CommonState,
  initialCommonState,
  initialPaginationData,
} from '../common';

export type FilterState = {
  isOnFiltering: boolean;
};

export type GetListSkuState = {
  listSku: Response<Sku[]>;
  isLoadingGetListSku: boolean;
};

export type GetAllCategoryState = {
  allCategories: Category[];
  isLoadingGetAllCategories: boolean;
};

export type GetAllVendorState = {
  allVendors: Vendor[];
  isLoadingGetAllVendors: boolean;
};

export type CreateSkuState = {
  isLoadingCreateSku: boolean;
};

export type NewSkuManagementPageState = CommonState &
  FilterState &
  GetListSkuState &
  GetAllCategoryState &
  GetAllVendorState &
  CreateSkuState;

export const initialNewSkuPageState: NewSkuManagementPageState = {
  ...initialCommonState,
  isOnFiltering: false,
  listSku: initialPaginationData,
  isLoadingGetListSku: false,
  allCategories: [],
  isLoadingGetAllCategories: false,
  allVendors: [],
  isLoadingGetAllVendors: false,
  isLoadingCreateSku: false,
};

export const sliceName = 'newSkuManagementPage';
