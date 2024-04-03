import { BaseModel } from './base-model';

export interface CurrencyRateProps {
  currencyId: string;
  value: number;
  fromDate: string;
}

export class CurrencyRate extends BaseModel<CurrencyRateProps> {
  public get currencyId() {
    return this.props.currencyId as string;
  }

  public get value() {
    return this.props.value as number;
  }

  public get fromDate() {
    return this.props.fromDate as string;
  }
}
