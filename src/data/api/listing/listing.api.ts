import { ApiService } from '@/lib';
import { BaseCrud } from '../base-crud.api';
import { Response, Request } from '../common.dto';
import { GetListingResponse } from './dtos';
import { Listing } from '@/models';
import { ListingMapper } from './listing.mapper';

class ListingApi extends BaseCrud<Listing> {
  async getMany(data: Request<any>) {
    const res: Response<GetListingResponse[]> = await ApiService.get(
      `/internal-listings`,
      data.body,
      data.headers
    );

    const result: Response<Listing[]> = {
      data: res.data.map((item) => ListingMapper.toModel(item)),
      pagination: res.pagination,
    };

    return result;
  }

  async create(data: Request<any>) {
    const result: Response<GetListingResponse[]> = await ApiService.post(
      `/internal-listings`,
      data.body,
      data.headers
    );

    return {} as any;
  }

  async update(data: Request<any>) {
    return {} as any;
  }

  async delete(data: Request<any>) {
    return {} as any;
  }
}
export const listingApi = new ListingApi();
