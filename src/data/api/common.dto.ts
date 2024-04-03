import { Headers } from '@/lib';
import { RequestType } from '@/utils';

export interface PaginationData {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  count: number;
}

export interface Response<T> {
  data: T;
  pagination?: PaginationData;
}

export interface Request<T> {
  body?: T;
  headers?: Headers;
  type?: RequestType;
}
