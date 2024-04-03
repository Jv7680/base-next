import newSkuReducer from './new-sku/new-sku.slice';
import listingManagementReducer from './listing-management/listing-management.slice';

const rootReducer = {
  newSkuPage: newSkuReducer,
  listingManagementPage: listingManagementReducer,
};

export default rootReducer;
