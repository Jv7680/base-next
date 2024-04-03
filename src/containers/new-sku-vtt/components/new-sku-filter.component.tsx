import { useNewSkuQueryParams } from '../context';
import { useDebounce } from '@/hooks';
import { FilterArea, FilterButton, FilterItem } from '@/lib';
import { newSkuActions, useAppDispatch, useAppSelector } from '@/redux';
import {
  DEFAULT_PAGE,
  DEFAULT_PAGE_SIZE,
  DataType,
  PurchaseType,
  SimType,
  SkuStatus,
  SkuType,
  dataAmountOptions,
  dayAmountOptions,
  renderSkuStatusTag,
} from '@/utils';
import { hasNonNullProperty } from '@/utils/object';
import { LoadingOutlined, SearchOutlined } from '@ant-design/icons';
import { Input, Select, Skeleton, Tag } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

const StyledOptionBar = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const SearchInput = styled(Input)`
  width: 40%;
  color: #00ccff;
  margin-right: 8px;
`;

const SearchIcon = styled(SearchOutlined)`
  padding: 0px 8px;
`;

const LoadingIcon = styled(LoadingOutlined)`
  font-size: 18px;
`;

interface FilterFormValue {
  status?: string;
  simType?: string;
  skuType?: string;
  dataType?: string;
  purchaseType?: string;
  countryRegion?: string[];
  vendorIds?: string[];
  dayAmount?: string;
  dataAmount?: string;
}

export const NewSkuFilterComponent = (): ReactNode => {
  const dispatch = useAppDispatch();
  const {
    isOnFiltering,
    isLoadingGetAllCategories,
    allCategories,
    isLoadingGetAllVendors,
    allVendors,
  } = useAppSelector((state) => state.newSkuPage);

  const [queryParams, setQueryParams] = useNewSkuQueryParams();
  const [isLoadingDebounce, debounce] = useDebounce(1000);
  const [filterForm] = useForm<FilterFormValue>();
  const [isFilterEnabled, setFilterEnabledStatus] = useState<boolean>(false);

  useEffect(() => {
    filterForm.setFieldsValue({
      status: queryParams.status,
      simType: queryParams.simType,
      skuType: queryParams.skuType,
      dataType: queryParams.dataType,
      purchaseType: queryParams.purchaseType,
      countryRegion: queryParams.countryRegion?.split(','),
      vendorIds: queryParams.vendorIds?.split(','),
      dayAmount: queryParams.dayAmount,
      dataAmount: queryParams.dataAmount,
    });

    if (hasNonNullProperty(filterForm.getFieldsValue())) {
      dispatch(newSkuActions.setIsOnFiltering(true));
      setFilterEnabledStatus(true);
    }
  }, [filterForm]);

  const handleSearchChange = (search: string) => {
    debounce(() => {
      setQueryParams({
        ...queryParams,
        search,
        page: DEFAULT_PAGE,
        pageSize: DEFAULT_PAGE_SIZE,
      });
    });
  };

  const handleFilterButtonClick = () => {
    dispatch(newSkuActions.setIsOnFiltering(!isOnFiltering));
  };

  const handleFilterFormChange = () => {
    const enable = hasNonNullProperty(filterForm.getFieldsValue());
    setFilterEnabledStatus(enable);
  };

  const handleResetFilter = () => {
    filterForm.setFieldsValue({
      vendorIds: undefined,
      dataAmount: undefined,
      dayAmount: undefined,
      simType: undefined,
      dataType: undefined,
      skuType: undefined,
      status: undefined,
      purchaseType: undefined,
      countryRegion: undefined,
    });

    setQueryParams({
      ...queryParams,
      vendorIds: undefined,
      dataAmount: undefined,
      dayAmount: undefined,
      simType: undefined,
      dataType: undefined,
      skuType: undefined,
      status: undefined,
      purchaseType: undefined,
      countryRegion: undefined,
      page: DEFAULT_PAGE,
      pageSize: DEFAULT_PAGE_SIZE,
    });

    handleFilterFormChange();
  };

  const handleApplyFilter = () => {
    const {
      status,
      simType,
      purchaseType,
      skuType,
      dataType,
      dataAmount,
      countryRegion,
      dayAmount,
      vendorIds,
    } = filterForm.getFieldsValue();

    setQueryParams({
      ...queryParams,
      page: DEFAULT_PAGE,
      status,
      dataType,
      simType,
      purchaseType,
      skuType,
      dataAmount,
      dayAmount,
      countryRegion: countryRegion?.join(','),
      vendorIds: vendorIds?.join(','),
    });
  };

  const filterItems: FilterItem[] = useMemo(() => {
    return [
      {
        name: 'status',
        label: 'Status',
        isShowingOnFilter: true,
        render: (
          <Select
            placeholder="Select status"
            options={Object.entries(SkuStatus).map(([key, value]) => {
              return {
                label: renderSkuStatusTag(value),
                value,
              };
            })}
          />
        ),
      },
      {
        name: 'simType',
        label: 'SIM Type',
        isShowingOnFilter: true,
        render: (
          <Select
            placeholder="Select sim type"
            options={Object.entries(SimType).map(([key, value]) => {
              return {
                label: value,
                value,
              };
            })}
          />
        ),
      },
      {
        name: 'countryRegion',
        label: 'Country/Region',
        isShowingOnFilter: true,
        render: isLoadingGetAllCategories ? (
          <Skeleton.Input active />
        ) : (
          <Select
            mode="multiple"
            placeholder="Select country regions"
            defaultValue={
              queryParams.countryRegion ? queryParams.countryRegion : []
            }
            // TODO: Specify model for this all category type.
            options={allCategories.map((category) => {
              return {
                key: category.id,
                label: <Tag color="blue">{category.categoryName}</Tag>,
                value: category.categoryName,
              };
            })}
          />
        ),
      },
      {
        name: 'vendorIds',
        label: 'Vendors',
        isShowingOnFilter: true,
        render: isLoadingGetAllVendors ? (
          <Skeleton.Input active />
        ) : (
          <Select
            placeholder="Select Vendors"
            mode="tags"
            defaultValue={
              queryParams.vendorIds ? queryParams.vendorIds.split(',') : []
            }
            options={allVendors.map((vendor) => {
              return {
                key: vendor.id,
                label: vendor.name,
                value: vendor.id,
              };
            })}
          />
        ),
      },
      {
        name: 'purchaseType',
        label: 'Purchase Type',
        isShowingOnFilter: true,
        render: (
          <Select
            placeholder="Select purchase type"
            options={Object.entries(PurchaseType).map(([key, value]) => {
              return {
                label: value,
                value,
              };
            })}
          />
        ),
      },
      {
        name: 'dataType',
        label: 'Data Type',
        isShowingOnFilter: true,
        render: (
          <Select
            placeholder="Select data type"
            options={Object.entries(DataType).map(([key, value]) => {
              return {
                label: value,
                value,
              };
            })}
          />
        ),
      },
      {
        name: 'dayAmount',
        label: 'Day Amount',
        isShowingOnFilter: true,
        render: (
          <Select placeholder="Select day amount" options={dayAmountOptions} />
        ),
      },
      {
        name: 'dataAmount',
        label: 'Data Amount',
        isShowingOnFilter: true,
        render: (
          <Select
            placeholder="Select data amount"
            options={dataAmountOptions}
          />
        ),
      },
      {
        name: 'skuType',
        label: 'SKU Type',
        isShowingOnFilter: true,
        render: (
          <Select
            placeholder="Select Sku type"
            options={Object.entries(SkuType).map(([key, value]) => {
              return {
                label: value,
                value,
              };
            })}
          />
        ),
      },
    ];
  }, [
    isLoadingGetAllCategories,
    allCategories,
    queryParams,
    isLoadingGetAllVendors,
    allVendors,
  ]);

  return (
    <>
      <StyledOptionBar>
        <SearchInput
          prefix={<SearchIcon />}
          suffix={isLoadingDebounce && <LoadingIcon />}
          placeholder="Search"
          defaultValue={queryParams.search ?? ''}
          onChange={(e) => handleSearchChange(e.target.value)}
        />

        <FilterButton onFilterClick={handleFilterButtonClick} />
      </StyledOptionBar>

      <FilterArea
        form={filterForm}
        items={filterItems}
        layout="horizontal"
        isOnFiltering={isOnFiltering}
        isFilterEnabled={isFilterEnabled}
        onApplyFilter={handleApplyFilter}
        onFormChange={handleFilterFormChange}
        onResetFilter={handleResetFilter}
      />
    </>
  );
};
