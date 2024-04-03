import { Currency, CurrencyProps, Vendor, VendorProps } from '@/models';
import { GetCurrencyResponse } from './dtos';

export class CurrencyMapper {
  public static toModel(dto: GetCurrencyResponse): Currency {
    const props: CurrencyProps = {
      code: dto.code,
      name: dto.name,
      currencyRates: dto.currencyRates,
    };

    const currency = Currency.create(props, dto.id);
    currency.updatedAt = dto.updatedAt;
    currency.createdAt = dto.createdAt;

    return currency;
  }
}
