export interface GetSkuRequest {
  search: string;
  status?: string;
  simType?: string;
  skuType?: string;
  dataType?: string;
  purchaseType?: string;
  countryRegion?: string;
  vendorIds?: string;
  dayAmount?: string;
  dataAmount?: string;
  page: number;
  pageSize: number;
}
