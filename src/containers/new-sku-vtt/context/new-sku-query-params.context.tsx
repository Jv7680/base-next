import { GetSkuRequest } from '@/data';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/utils';
import { Context, createContext, useContext } from 'react';
import {
  NumberParam,
  StringParam,
  useQueryParams,
  withDefault,
} from 'use-query-params';

interface NewSkuQueryParams extends GetSkuRequest {}

type ContextValue = [NewSkuQueryParams, (query: NewSkuQueryParams) => void];

let QueryParamsContext: Context<ContextValue>;
export let useNewSkuQueryParams: () => ContextValue;

interface Props {
  children: React.ReactNode;
}

export const NewSkuQueryParamsProvider = ({ children }: Props) => {
  const [queryParams, setQueryParams] = useQueryParams({
    search: withDefault(StringParam, ''),
    status: withDefault(StringParam, undefined),
    simType: withDefault(StringParam, undefined),
    skuType: withDefault(StringParam, undefined),
    dataType: withDefault(StringParam, undefined),
    purchaseType: withDefault(StringParam, undefined),
    countryRegion: withDefault(StringParam, undefined),
    vendorIds: withDefault(StringParam, undefined),
    dayAmount: withDefault(StringParam, undefined),
    dataAmount: withDefault(StringParam, undefined),
    page: withDefault(NumberParam, DEFAULT_PAGE),
    pageSize: withDefault(NumberParam, DEFAULT_PAGE_SIZE),
  });

  if (!QueryParamsContext) {
    QueryParamsContext = createContext<ContextValue>([
      queryParams,
      setQueryParams,
    ]);
    useNewSkuQueryParams = () => useContext(QueryParamsContext);
  }

  return (
    <QueryParamsContext.Provider value={[queryParams, setQueryParams]}>
      {children}
    </QueryParamsContext.Provider>
  );
};
