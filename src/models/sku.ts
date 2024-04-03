import { BaseModel } from './base-model';
import { Currency } from './currency';
import { Vendor } from './vendor';

export interface SkuProps {
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
  vendor: Vendor;
  currency: Currency;
}

export class Sku extends BaseModel<SkuProps> {
  public static create(props: SkuProps, id: string): Sku {
    // validation
    // const { status } = props;

    // if (!status) {
    //   return null;
    // }

    return new Sku(props, id);
  }

  public get code() {
    return this.props.code as string;
  }

  public get name() {
    return this.props.name as string;
  }

  public get unit() {
    return this.props.unit as string;
  }

  public get status() {
    return this.props.status as string;
  }

  public get recordedCost() {
    return this.props.recordedCost as string;
  }

  public get costCurrencyId() {
    return this.props.costCurrencyId as string;
  }

  public get minPrice() {
    return this.props.minPrice as string;
  }

  public get type() {
    return this.props.type as string;
  }

  public get simType() {
    return this.props.simType as string;
  }

  public get purchaseType() {
    return this.props.purchaseType as string;
  }

  public get dataType() {
    return this.props.dataType as string;
  }

  public get dayAmountValue() {
    return this.props.dayAmountValue as string;
  }

  public get dataAmountValue() {
    return this.props.dataAmountValue as string;
  }

  public get operator() {
    return this.props.operator as string;
  }

  public get dataResetTime() {
    return this.props.dataResetTime as string;
  }

  public get throttle() {
    return this.props.throttle as string;
  }

  public get networkType() {
    return this.props.networkType as string;
  }

  public get countryRegion() {
    return this.props.countryRegion as string;
  }

  public get apn() {
    return this.props.apn as string;
  }

  public get planType() {
    return this.props.planType as string;
  }

  public get hotspot() {
    return this.props.hotspot as string;
  }

  public get carrier() {
    return this.props.carrier as string;
  }

  public get onsiteCarrier() {
    return this.props.onsiteCarrier as string;
  }

  public get note() {
    return this.props.note as string;
  }

  public get vendorSku() {
    return this.props.vendorSku as string;
  }

  public get vendorId() {
    return this.props.vendorId as string;
  }

  public get vendor() {
    return this.props.vendor as Vendor;
  }

  public get currency() {
    return this.props.currency as Currency;
  }
}
