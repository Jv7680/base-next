import { Sku, SkuProps } from '@/models';
import { CurrencyMapper } from '../currency/currency.mapper';
import { VendorMapper } from '../vendor/vendor.mapper';
import { GetSkuResponse } from './dtos';

export class SkuMapper {
  public static toModel(dto: GetSkuResponse): Sku {
    const props: SkuProps = {
      code: dto.code,
      name: dto.name,
      unit: dto.unit,
      status: dto.status,
      recordedCost: dto.recordedCost,
      costCurrencyId: dto.costCurrencyId,
      minPrice: dto.minPrice,
      type: dto.type,
      simType: dto.simType,
      purchaseType: dto.purchaseType,
      dataType: dto.dataType,
      dayAmountValue: dto.dayAmountValue,
      dataAmountValue: dto.dataAmountValue,
      operator: dto.operator,
      dataResetTime: dto.dataResetTime,
      throttle: dto.throttle,
      networkType: dto.networkType,
      countryRegion: dto.countryRegion,
      apn: dto.apn,
      planType: dto.planType,
      hotspot: dto.hotspot,
      carrier: dto.carrier,
      onsiteCarrier: dto.onsiteCarrier,
      note: dto.note,
      vendorSku: dto.vendorSku,
      vendorId: dto.vendorId,
      vendor: VendorMapper.toModel(dto.vendor),
      currency: CurrencyMapper.toModel(dto.currency),
    };

    const sku = Sku.create(props, dto.id);
    sku.updatedAt = dto.updatedAt;
    sku.createdAt = dto.createdAt;

    // handle in future
    if (!sku) {
      throw new Error('Error when creating SKU model');
    }

    return sku;
  }
}
