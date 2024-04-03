import { ApiService } from '@/lib';
import { Vendor } from '@/models';
import { BaseCrud } from '../base-crud.api';
import { Request, Response } from '../common.dto';
import { GetVendorResponse } from './dtos';
import { VendorMapper } from './vendor.mapper';
import { RequestType } from '@/utils';

class VendorApi extends BaseCrud<Vendor> {
  async getMany(data: Request<any>) {
    const url = '/vendors';
    let body;

    switch (data.type) {
      case RequestType.GetAll:
        body = undefined;
        break;
      default:
        body = data.body;
        break;
    }

    const res: Response<GetVendorResponse[]> = await ApiService.get(
      url,
      body,
      data.headers
    );

    const result: Response<Vendor[]> = {
      data: res.data.map((item) => VendorMapper.toModel(item)),
      pagination: res.pagination,
    };

    return result;
  }

  async create(data: Request<any>) {
    return {} as any;
  }

  async update(data: Request<any>) {
    return {} as any;
  }

  async delete(data: Request<any>) {
    return {} as any;
  }
}
export const vendorApi = new VendorApi();
