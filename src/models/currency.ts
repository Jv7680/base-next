import { BaseModel } from './base-model';
import { CurrencyRate } from './currency-rate';

export interface CurrencyProps {
  code: string;
  name: string;
  currencyRates: CurrencyRate[];
}

export class Currency extends BaseModel<CurrencyProps> {
  public static create(props: CurrencyProps, id: string): Currency {
    return new Currency(props, id);
  }

  public get code() {
    return this.props.code as string;
  }

  public get name() {
    return this.props.name as string;
  }

  public get currencyRates() {
    return this.props.currencyRates as CurrencyRate[];
  }
}
