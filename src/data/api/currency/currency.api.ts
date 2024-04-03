import { Currency } from '@/models';
import { BaseCrud } from '../base-crud.api';
import { Request } from '../common.dto';

class CurrencyApi extends BaseCrud<Currency> {
  async getMany(data: Request<any>) {
    return {} as any;
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
export const currencyApi = new CurrencyApi();
