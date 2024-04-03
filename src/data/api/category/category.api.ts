import { ApiService, Headers } from '@/lib';
import { Category } from '@/models';
import { BaseCrud } from '../base-crud.api';
import { Request, Response } from '../common.dto';
import { CategoryMapper } from './category.mapper';
import { GetCategoryResponse } from './dtos';
import { RequestType } from '@/utils';

class CategoryApi extends BaseCrud<Category> {
  async getMany(data: Request<any>) {
    let url = '';
    let body;

    switch (data.type) {
      case RequestType.GetAll:
        url = `/internal-categories/all`;
        body = undefined;
        break;
      default:
        url = `/internal-categories`;
        body = data.body;
        break;
    }

    const res: Response<GetCategoryResponse[]> = await ApiService.get(
      url,
      body,
      data.headers
    );

    const result: Response<Category[]> = {
      data: res.data.map((item) => CategoryMapper.toModel(item)),
      pagination: res.pagination,
    };

    return result;
  }

  async create(body: any) {
    return {} as any;
  }

  async update(body: any) {
    return {} as any;
  }

  async delete(body: any) {
    return {} as any;
  }
}

export const categoryApi = new CategoryApi();
