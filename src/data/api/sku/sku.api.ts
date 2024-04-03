import { ApiService, Headers } from '@/lib';
import { BaseCrud } from '../base-crud.api';
import { Request, Response } from '../common.dto';
import { GetSkuRequest, GetSkuResponse } from './dtos';
import { SkuMapper } from './sku.mapper';
import { Sku } from '@/models';

class SkuApi extends BaseCrud<Sku> {
  async getMany(data: Request<GetSkuRequest>) {
    const res: Response<GetSkuResponse[]> = await ApiService.get(
      `/skus`,
      data.body,
      data.headers
    );

    const result: Response<Sku[]> = {
      data: res.data.map((item) => SkuMapper.toModel(item)),
      pagination: res.pagination,
    };

    return result;
  }

  async create(data: Request<any>) {
    const result = await ApiService.post(`/skus`, data.body, data.headers);

    // do something else like using mapper

    return result;
  }

  async update(data: Request<any>) {
    return {} as any;
  }

  async delete(data: Request<any>) {
    return {} as any;
  }
}
export const skuApi = new SkuApi();
