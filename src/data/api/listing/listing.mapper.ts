import { Listing, ListingProps } from '@/models';
import { GetListingResponse } from './dtos';
import { CategoryMapper } from '../category/category.mapper';
import { SpecificationMapper } from '../specification/specification.mapper';

export class ListingMapper {
  public static toModel(dto: GetListingResponse): Listing {
    const props: ListingProps = {
      listingCode: dto.listingCode,
      listingName: dto.listingName,
      status: dto.status,
      categories: dto.categories.map((item) => CategoryMapper.toModel(item)),
      specifications: dto.specifications.map((item) =>
        SpecificationMapper.toModel(item)
      ),
    };

    const listing = Listing.create(props, dto.id);
    listing.updatedAt = dto.updatedAt;
    listing.createdAt = dto.createdAt;

    return listing;
  }
}
