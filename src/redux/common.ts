import { Request, Response } from '@/data';
import { Draft, PayloadAction } from '@reduxjs/toolkit';

export type CommonState = {
  isPageLoading: boolean;
};

export type ActionReducer<T> = Record<
  string,
  (state: Draft<T>, action: PayloadAction<any>) => any
>;

export type ThunkArg<T = any> = Request<T>;

export const initialPaginationData: Response<any[]> = {
  data: [],
  pagination: {
    count: 0,
    page: 0,
    perPage: 0,
    total: 0,
    totalPages: 0,
  },
};

export const initialCommonState: CommonState = {
  isPageLoading: false,
};
