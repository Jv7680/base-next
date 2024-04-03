export interface BaseCurrency {
  id: string;
  updatedAt: string;
  createdAt: string;
  code: string;
  name: any;
  currencyRates: any[];
}

export interface CurrencyResponse extends BaseCurrency {}

export interface GetCurrencyResponse extends BaseCurrency {}
