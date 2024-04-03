import { CategoryResponse } from '../../category';
import { SpecificationResponse } from '../../specification';

export interface BaseListing {
  id: string;
  createdAt: string;
  updatedAt: string;
  listingCode: string;
  listingName: string;
  categories: CategoryResponse[];
  specifications: SpecificationResponse[];
  status: string;
}

export interface ListingResponse extends BaseListing {}

export interface GetListingResponse extends BaseListing {}
