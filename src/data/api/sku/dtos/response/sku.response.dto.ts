import { VendorResponse } from '../../../vendor';
import { CurrencyResponse } from '../../../currency';

export interface BaseSku {
  id: string;
  updatedAt: string;
  createdAt: string;
  code: string;
  name: string;
  unit: string;
  status: string;
  recordedCost: string;
  costCurrencyId: string;
  minPrice: string;
  type: string;
  simType: string;
  purchaseType: string;
  dataType: string;
  dayAmountValue: string;
  dataAmountValue: string;
  operator: string;
  dataResetTime: string;
  throttle: string;
  networkType: string;
  countryRegion: string;
  apn: string;
  planType: string;
  hotspot: string;
  carrier: string;
  onsiteCarrier: string;
  note: string;
  vendorSku: string;
  vendorId: string;
  vendor: VendorResponse;
  currency: CurrencyResponse;
}

export interface SkuResponse extends BaseSku {}

export interface GetSkuResponse extends BaseSku {}
